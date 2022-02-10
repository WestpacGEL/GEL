# Keystone 6 Upgrade

## TODOs and notes

- Look into the dynamic block importer; see if we can simplify this (Mitchell says no)

## Dev Env Setup

### Application

**JM: these steps need review**

1. The Keystone 5 app uses NodeJS v12 so install this and switch to it **before running `yarn install`**
2. There is a `example.env` file - copy it to a `.env` file
3. We've separated the frontend from keystone. To run both now, run
   - `yarn start`
   - in a separate terminal run `yarn start:frontend`

### Database

These instructions will download a copy of the live DB for the Keystone 5 app, restore it to the local dev environment and apply the Prisma migrations necessary for it to run the Keystone 6 app.

#### Get a Backup

Get a dump of the live DB.

If you have SSH access to the live server these commands will download a copy directly from there (\~12 MB):

```sh
# Configure our source and target DB URI
SOURCE_DB_URL='postgres://gel3_website_live@westpacgel3-do-user-1058923-0.a.db.ondigitalocean.com:25060/gel3_website_live?ssl=true'
LOCAL_DUMP_FILE="data/$(date -u +%y%m%dT%H%Mz)-gel3_website_live.sql"

# Connect to the server over ssh and dump the DB to a file on your local machine
ssh deploy@gel.live.do.westpac.thinkmill.cloud pg_dump --no-owner "${SOURCE_DB_URL}" > "${LOCAL_DUMP_FILE}"
```

Otherwise, get a copy off another team member and substitute it's path for `LOCAL_DUMP_FILE` in the next step.

#### Restore the Backup

Once you have the DB dump, restore it to your local DB.
These steps can be repeated to reset your local DB to previously dumped version.

```sh
# Set to whatever your dev database is called
LOCAL_DB_NAME='gel3_website_dev'

# Drop and recreate a clean DB to restore into
dropdb --if-exists "${LOCAL_DB_NAME}"
createdb "${LOCAL_DB_NAME}"

# Restore the local dump to your local DB
psql -d "${LOCAL_DB_NAME}" -f "${LOCAL_DUMP_FILE}"
```

#### Set The Baseline

In development, Prisma maintains a "shadow DB" that allows it to detect structural changes, generate migrations and reset your local DB if needed.
For this to work, we need a migration that mirrors the structure of the legacy DB so our shadow DB can be initialised correctly.
Of course, we don't want to apply this migration to the backup we've just restored; it already has the legacy schema.

This command instructs Prisma that the "baseline" migration has already been applied to the _main_ DB.
when we start the app, the script will still be applied to the shadow DB, bringing it into line with our backup.

```sh
# Tell prisma not to apply the baseline migration on our main dev db
yarn prisma migrate resolve --applied "20220113000000_baseline"
```

If you get an "access denied" error, check the `DATABASE_URL` in your `.env`.
It you many need to specify your OS username as the database role, like this: `postgres://${USER}@localhost/gel3_website_dev`.
You can get your current username by running `whoami` on the terminal.

#### Start the App

Then, start the app as normal:

```sh
yarn dev
```

You should see the app successfully apply the subsequent migrations before the app comes online:

```
✨ The following migration(s) have been applied:

migrations/
  └─ 20220113000001_cuid_function/
    └─ migration.sql
  └─ 20220113000002_prep/
    └─ migration.sql
  └─ 20220113000003_create_ks6_schema/
    └─ migration.sql
  └─ 20220113000004_copy_data
    └─ migration.sql
```
