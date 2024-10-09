## Workers

### Fields

Name                      | Type                 | Description                                                                                                                                                             
--------------------------|----------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Name                      | formula              | 
Tickets                   | multipleRecordLinks  | 
First name                | singleLineText       | The person's first or given name.<br/><br/>{{personName:first}}                                                                                                         
Last name                 | singleLineText       | The person's last or familial name.<br/><br/>{{personName:last}}                                                                                                        
Middle name               | singleLineText       | The person's middle name.<br/><br/>{{personName:middle}}                                                                                                                
Nickname                  | singleLineText       | How a person would like to be addressed, but cannot be used for legal paperwork like payroll.<br/><br/>{{personName:nickname}}                                          
Full name                 | formula              | The formatted name of the person. This includes a quoted nickname, if available.<br/><br/>{{personName:formattedFull}}                                                  
Sort name                 | formula              | Name format used for sorting. This is helpful when sorting a view, so you can sort by this single field, instead of multiple ones.<br/><br/>{{personName:formattedSort}}
Suffix                    | singleLineText       | The name suffix. For example, Jr. or III.<br/><br/>{{personName:suffix}}                                                                                                
Cell phone number         | phoneNumber          | 
Email address             | email                | 
Created on                | createdTime          | 
Last modified on          | lastModifiedTime     | 
Polling locations         | multipleRecordLinks  | 
Precincts                 | multipleRecordLinks  | 
Precinct name             | multipleLookupValues | 
Roles                     | multipleRecordLinks  | 
Role name                 | multipleLookupValues | 
Create ticket link        | formula              | 
Precinct status form link | formula              | 
Precinct status history   | multipleRecordLinks  | 
Precinct record ID        | multipleLookupValues | 

### Views

Name      | Type | Description
----------|------|------------
Grid view | grid | 

## Locations

### Fields

Name                             | Type                | Description                                                                                                                            
---------------------------------|---------------------|----------------------------------------------------------------------------------------------------------------------------------------
Name                             | singleLineText      | 
Workers                          | multipleRecordLinks | 
Address                          | singleLineText      | The street address.<br/><br/>{{address:street}}                                                                                        
Address line two                 | singleLineText      | The second line of street address. Used for things like building or apartment number.<br/><br/>{{address:lineTwo}}                     
City                             | singleLineText      | The city of the address.<br/><br/>{{address:city}}                                                                                     
State                            | singleSelect        | A list of state abbreviations for addresses for the address. Includes Washington DC.<br/><br/>{{address:state}}                        
Zip code                         | singleLineText      | The postal code for the address.<br/><br/>{{address:zip}}                                                                              
Formatted address: Multiple-line | formula             | The fully-formatted mailing address in multiple lines. Useful for printing labels or envelopes.<br/><br/>{{address:formattedMultiLine}}
Formatted address: Single-line   | formula             | The fully-formatted address on a single line.<br/><br/>{{address:formattedSingleLine}}                                                 
Precincts                        | multipleRecordLinks | 

### Views

Name      | Type | Description
----------|------|------------
Grid view | grid | 

## Precincts

### Fields

Name                      | Type                 | Description                                                   
--------------------------|----------------------|---------------------------------------------------------------
Name                      | singleLineText       | 
Workers                   | multipleRecordLinks  | 
Locations                 | multipleRecordLinks  | 
Precinct status history   | multipleRecordLinks  | 
Last status color         | multipleLookupValues | 
Color                     | singleSelect         | The color used for this record.<br/><br/>{{colorSelect:color}}
Last status name          | multipleLookupValues | 
Last status update time   | multipleLookupValues | 
Minutes since last update | formula              | 
Last status update        | multipleLookupValues | 
Total ballots             | multipleLookupValues | 
Notes                     | richText             | 
Electronic Poll Books     | number               | 
Ballot Marking Devices    | number               | 
Scanners                  | number               | 
Registered voters         | number               | 
Update status             | button               | 
Update status link        | formula              | 
Status is current         | multipleLookupValues | 
Tickets                   | multipleLookupValues | 
Record ID                 | formula              | 

### Views

Name      | Type | Description
----------|------|------------
Grid view | grid | 

## Precinct status history

### Fields

Name                            | Type                 | Description
--------------------------------|----------------------|------------
ID                              | formula              | 
Precinct                        | multipleRecordLinks  | 
Status                          | multipleRecordLinks  | 
Last status color               | multipleLookupValues | 
Last status ticket creation     | multipleLookupValues | 
Create ticket (for automations) | formula              | 
Status name                     | multipleLookupValues | 
Notes                           | multilineText        | 
Submitted by                    | singleLineText       | 
Created on                      | createdTime          | 
Created by                      | createdBy            | 
Total number of ballots         | number               | 
Status lifetime                 | multipleLookupValues | 
Status is current               | formula              | 
Reporting worker                | multipleRecordLinks  | 

### Views

Name      | Type | Description
----------|------|------------
Grid view | grid | 

## Precinct status

### Fields

Name                        | Type                | Description                                                                                                                                                      
----------------------------|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------
Name                        | singleLineText      | 
Color - old                 | singleSelect        | 
Create Issues Automatically | checkbox            | When checked, if a status update is sent, we automatically create a new issue.<br/>- Precinct -> Precinct<br/>- Submitted by -> Requested by<br/>- Notes -> Notes
Precinct status history     | multipleRecordLinks | 
Color                       | singleSelect        | The color used for this record.<br/><br/>{{colorSelect:color}}                                                                                                   
Status lifetime (minutes)   | number              | Number of minutes a status is considered good. Once a status is over this number of minutes old, the precinct’s status is considered stale.                      

### Views

Name      | Type | Description
----------|------|------------
Grid view | grid | 

## Roles

### Fields

Name    | Type                | Description
--------|---------------------|------------
Name    | singleLineText      | 
Workers | multipleRecordLinks | 

### Views

Name      | Type | Description
----------|------|------------
Grid view | grid | 

## Tickets

### Fields

Name                        | Type                 | Description
----------------------------|----------------------|------------
ID                          | autoNumber           | 
Created on                  | createdTime          | 
Created by                  | createdBy            | 
Requested by                | multipleRecordLinks  | 
Assigned to                 | multipleRecordLinks  | 
Assigned to user            | multipleLookupValues | 
Precinct                    | multipleLookupValues | 
Location                    | multipleLookupValues | 
Requester cell phone        | multipleLookupValues | 
Alternate cell phone number | phoneNumber          | 
Issue type                  | multipleRecordLinks  | 
Issue Severity              | multipleLookupValues | 
Description                 | multilineText        | 
Requester email             | multipleLookupValues | 
Last modified on            | lastModifiedTime     | 
Last modified by            | lastModifiedTime     | 
Status                      | singleSelect         | 

### Views

Name                | Type | Description
--------------------|------|------------
Grid view           | grid | 
Grouped by Severity | grid | 

## Issue types

### Fields

Name                         | Type                | Description                                                                                                     
-----------------------------|---------------------|-----------------------------------------------------------------------------------------------------------------
Name                         | singleLineText      | 
Staff                        | multipleRecordLinks | 
Severity                     | singleSelect        | 
Tickets                      | multipleRecordLinks | 
Default for precinct updates | checkbox            | When checked, this type is used by default when a ticket is automatically generated by a precinct status update.

### Views

Name      | Type | Description
----------|------|------------
Grid view | grid | 

## Staff

### Fields

Name        | Type                | Description
------------|---------------------|------------
Name        | singleLineText      | 
Issue types | multipleRecordLinks | 
Email       | email               | 
Phone       | phoneNumber         | 
Staff Type  | singleSelect        | 
Tickets     | multipleRecordLinks | 
Assigned to | singleCollaborator  | 

### Views

Name      | Type | Description
----------|------|------------
Grid view | grid | 

## Messaging templates

### Fields

Name               | Type                | Description      
-------------------|---------------------|------------------
Name               | singleLineText      | The template name
Type               | singleSelect        | 
Draft              | checkbox            | 
Table              | singleLineText      | 
Default view       | singleLineText      | 
Phone number field | singleLineText      | 
Email field        | singleLineText      | 
CC field           | singleLineText      | 
BCC field          | singleLineText      | 
Subject            | singleLineText      | 
Body               | multilineText       | 
Footer             | multilineText       | 
Notes              | multilineText       | 
Reply-to email     | singleLineText      | 
Attachments        | multipleAttachments | 
Category           | singleLineText      | 

### Views

Name      | Type | Description
----------|------|------------
Grid view | grid | 

## Messaging log

### Fields

Name                  | Type               | Description
----------------------|--------------------|------------
ID                    | singleLineText     | Event ID   
Type                  | singleSelect       | 
Table                 | singleLineText     | 
Record ID             | singleLineText     | 
Sent by               | singleCollaborator | 
Created               | dateTime           | 
Last update           | dateTime           | 
Sent to provider      | checkbox           | 
Status                | singleSelect       | 
Attempt               | number             | 
Delivery message      | multilineText      | 
Bounce classification | singleLineText     | 
To                    | singleLineText     | 
CC                    | singleLineText     | 
BCC                   | singleLineText     | 
Subject               | singleLineText     | 
Body                  | multilineText      | 
Text message          | multilineText      | 

### Views

Name      | Type | Description
----------|------|------------
Grid view | grid | 

## USDR: Metadata

### Fields

Name  | Type           | Description
------|----------------|------------
Name  | singleLineText | 
Value | richText       | 
Type  | singleSelect   | 
Notes | richText       | 

### Views

Name      | Type | Description
----------|------|------------
Grid view | grid | 

## USDR: Job queue

### Fields

Name          | Type           | Description
--------------|----------------|------------
Job           | singleLineText | 
Status        | singleSelect   | 
Messages      | richText       | 
Arguments     | multilineText  | 
Argument type | singleSelect   | 
Created       | dateTime       | 
Updated       | dateTime       | 
Data          | multilineText  | 
Priority      | number         | 

### Views

Name      | Type | Description
----------|------|------------
Grid view | grid | 
