# Configure Master list for Activities and Publications
Master list is maintained at `./config/activities.json` file and `./config/publications.json`
Edit the `Activities` JSON to add / update news section.
Edit the `Publications` JSON to add / update publications section.
use the following code snippets to embed these sections.

## To embed the recent activities section add the following code 
`<div id="recent-activities"></div>`

## To embed all activities section, add the following code snippet
`<div id="all-activities"></div>`

## To embed a reference to a particular publication, use the following code snippet
Mind the index number in publications.json
index should be unique. Have an incremental number.
If you want to embed publication at index 8 user `publication_8`
`<div class="publication_8"></div>`

