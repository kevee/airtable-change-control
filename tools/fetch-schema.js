const axios = require('axios')
const { prompt } = require('enquirer')
const url = require('url')
const fs = require('fs')
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

const markdownTable = (rows) => {
  const columnLengths = rows.reduce(
    (lengths, row) =>
      row.map((column, i) =>
        Math.max(lengths[i] || 0, column ? column.length : 0)
      ),
    []
  )

  const header = rows[0]
    .map((column, i) => column.padEnd(columnLengths[i]))
    .join(' | ')
  const divider = rows[0]
    .map((column, i) => '-'.repeat(columnLengths[i]))
    .join('-|-')

  const body = rows
    .slice(1)
    .map((row) =>
      row
        .map((column, i) => (column ? column.padEnd(columnLengths[i]) : ''))
        .join(' | ')
    )
    .join('\n')

  return [header, divider, body].join('\n')
}

const airtableToken = process.env.AIRTABLE_CHANGE_CONTROL_TOKEN

const client = axios.create({
  baseURL: 'https://api.airtable.com/v0/',
  timeout: 5000,
  headers: { Authorization: `Bearer ${airtableToken}` },
})

;(async () => {
  let baseId = argv.baseId
  let location = argv.location
  if (!baseId) {
    const response = await prompt({
      type: 'input',
      name: 'airtableBase',
      message: 'Paste the URL to the base',
    })

    const parsedUrl = url.parse(response.airtableBase)
    baseId = parsedUrl.pathname.split('/')[1]
  }

  if (!location) {
    const response = await prompt({
      type: 'input',
      name: 'location',
      message: 'Where should the schema be saved?',
    })
    location = response.location
  }

  console.log(`Fetching schema for base ID ${baseId} and saving to ${location}`)

  const schema = await client
    .get(`meta/bases/${baseId}/tables`)
    .then((response) => response.data)
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })

  const file = []

  for (const table of schema.tables) {
    file.push(`## ${table.name}`)
    file.push('')
    file.push('### Fields')
    file.push('')
    file.push(
      markdownTable([
        ['Name', 'Type', 'Description'],
        ...table.fields.map((field) => [
          field.name,
          field.type,
          field.description ? field.description.replace(/\n/g, '<br/>') : '',
        ]),
      ])
    )
    file.push('')
    file.push('### Views')
    file.push('')
    file.push(
      markdownTable([
        ['Name', 'Type', 'Description'],
        ...table.views.map((view) => [
          view.name,
          view.type,
          view.description ? view.description.replace(/\n/g, '<br/>') : '',
        ]),
      ])
    )
    file.push('')
  }

  fs.writeFileSync(location + '/schema.md', file.join('\n'))
})()
