# Keystone 6 Upgrade

## TODOs and notes

* Look into the dynamic block importer; see if we can simplify this (Mitchell says no)

## Dev Env Setup

1. The Keystone 5 app uses NodeJS v12 so install this and switch to it **before running `yarn install`**
2. There is a `example.env` file - copy it to a `.env` file
3. We've separated the frontend from keystone. To run both now, run
   - `yarn start`
   - in a separate terminal run `yarn start:frontend`

### Database Setup

These instructions will download a copy of the live DB and restore on the local dev environment.

First, dump the live DB to a file on your machine.
This process connects to the webserver over ssh and dumps to your local machine from there, using the creds stored on that machine.
**For this to work the relevant server needs to have your public ssh key.**
To get this access speak to DanC or Molomby.

```sh
# Configure our source and target DB URI
SOURCE_DB_URL='postgres://gel3_website_live@westpacgel3-do-user-1058923-0.a.db.ondigitalocean.com:25060/gel3_website_live?ssl=true'
LOCAL_DUMP_FILE="data/$(date -u +%y%m%dT%H%Mz)-gel3_website_live.sql"

# Connect to the server over ssh and dump the DB to a file on your local machine
ssh deploy@gel.live.do.westpac.thinkmill.cloud pg_dump --no-owner "${SOURCE_DB_URL}" > "${LOCAL_DUMP_FILE}"
```

Once you have the DB dump, restore it to your local DB.
These steps can be repeated to reset your local DB to previously dumped version.

```sh
LOCAL_DB_NAME='gel3_website_dev'

# If you have an existing DB you may need to drop it first
dropdb "${LOCAL_DB_NAME}"

# Create an new, empty DB
createdb "${LOCAL_DB_NAME}"

# Restore the local dump to your local DB
psql -d "${LOCAL_DB_NAME}" -f "${LOCAL_DUMP_FILE}"
```
