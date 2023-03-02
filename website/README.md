# GEL Website and Keystone CMS

The GEL Website runs [Keystone](https://www.keystonejs.com/) as CMS.

## Contents

- [Development](#development) -- How to setup your local development environment
- [Production](#production) -- A high-level overview of the production environments (`staging` and `live`)
- [Deployment](#deployment) -- How to deploy changes to the app

## Development

To setup a development environment you'll need:

- [PostgreSQL](https://www.postgresql.org/) (tested on v12)
- [Node.js](https://nodejs.org/), with [`yarn`](https://yarnpkg.com/) (tested on v16 and v1.12, respectively)

First thing, double check you install the dependencies for the monorepo.
Do this by running `yarn` at the root of the repo or, from the website dir:

```sh
yarn --cwd ..
```

_(💡 All commands below are given relative to the `website-backend` directory (not the root))_

### Environment Variables

The app loads variables from a `.env` file in the `website-backend` directory.
An example file has been provided so you can probably just run:

```sh
cp example.env .env
```

### DB Setup

You'll either need to create a new, empty DB locally or download a copy from the live or staging environments.

To install postgres please use [Homebrew](https://brew.sh/):

```sh
brew install postgres
```

If you don't have a DB for this project and want to start fresh, create a blank:

```sh
createdb gel3_website_dev
```

or

```sh
psql -h localhost -c 'create database "gel3_website_dev";'
```

A single users will be created with the login: `admin@localhost`, password: `development`.
No other content will be created.

### Sync data live -> local

You may prefer to restore a copy of the DB from the live environment.

If you have SSH access to the live server these commands will download a copy directly from there (~12 MB):

```sh
# If you have an existing DB you may need to drop it first
# psql -h localhost -c 'drop database "gel3_website_dev";'

# Create an new, empty DB
psql -h localhost -c 'create database "gel3_website_dev";'

# Configure our source and target DB URI
SOURCE_DB_URL='postgres://gel3_website_live@westpacgel3-do-user-1058923-0.a.db.ondigitalocean.com:25060/gel3_website_live?ssl=true'
LOCAL_DUMP_FILE="data/$(date -u +%y%m%dT%H%Mz)-gel3_website_live.sql"

# Connect to the server over ssh and dump the DB to a file on your local machine
ssh deploy@gel.live.do.westpac.thinkmill.cloud pg_dump --no-owner "${SOURCE_DB_URL}" > "${LOCAL_DUMP_FILE}"
```

_(💡 Note that sometimes you get errors like "Database [username] does not exist" which you can solve with `createdb [username]`)_

_(💡 This will require ssh access to the live server, if you do not have access reach out to the GEL team who will be able to give you a copy and substitute it's path for `LOCAL_DUMP_FILE` in the next step.)_

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

### Start App

The app can then be started with:

```sh
yarn start
```

If you get an "access denied" error, check the `DATABASE_URL` in your `.env`.
It you many need to specify your OS username as the database role, like this: `postgres://${USER}@localhost/gel3_website_dev`.
You can get your current username by running `whoami` on the terminal.

## Maintenance

### Sync data between environments

What you will need is three passwords for three different database accounts:

- `doadmin` (Log into the DO dashboard for database and copy it from there)
- `gel3_website_staging` (ssh into the staging server and run `DB_PASS=$(egrep gel3_website_staging ~/.pgpass | cut -f5 -d':') && echo ${DB_PASS}`)
- `gel3_website_live` (ssh into the staging server and run `DB_PASS=$(egrep gel3_website_live ~/.pgpass | cut -f5 -d':') && echo ${DB_PASS}`)

### staging -> live

You may want to move the contents of the staging database to the live database.

_(❗️ All data in **live** will be deleted)_

```sh
# First login to your live server via ssh
ssh deploy@gel.westpacgroup.com.au
# Store the live DB password
DB_PASS="[INSERT PASSWORD HERE]"
# Recreate a blank 'live' db
sudo /srv/pm2-apps/gel3-website/current/website/recreate-db.sh \
  "postgresql://doadmin@westpacgel3-do-user-1058923-0.a.db.ondigitalocean.com:25060/defaultdb?sslmode=require" \
  gel3_website_live \
  gel3_website_live \
  ${DB_PASS}
# You will be asked for the password of doadmin several times
# Copy data from staging to live
SOURCE_DB_URL='postgres://gel3_website_staging@westpacgel3-do-user-1058923-0.a.db.ondigitalocean.com:25060/gel3_website_staging?ssl=true'
TARGET_DB_URL='postgres://gel3_website_live@westpacgel3-do-user-1058923-0.a.db.ondigitalocean.com:25060/gel3_website_live?ssl=true'
pg_dump --no-owner ${SOURCE_DB_URL} | psql ${TARGET_DB_URL}
# You will be asked for the staging password
```

### live -> staging

You may want to move the contents of the live database to the staging database.

_(❗️ All data in **staging** will be deleted)_

```sh
# First login to your staging server via ssh
ssh deploy@gel.test.do.westpac.thinkmill.cloud
# Store the staging DB password
DB_PASS="[INSERT PASSWORD HERE]"
# Recreate a blank 'staging' db
sudo /srv/pm2-apps/gel3-website/current/website/recreate-db.sh \
  "postgresql://doadmin@westpacgel3-do-user-1058923-0.a.db.ondigitalocean.com:25060/defaultdb?sslmode=require" \
  gel3_website_staging \
  gel3_website_staging \
  ${DB_PASS}
# You will be asked for the password of doadmin several times
# Copy data from live to staging
SOURCE_DB_URL='postgres://gel3_website_live@westpacgel3-do-user-1058923-0.a.db.ondigitalocean.com:25060/gel3_website_live?ssl=true'
TARGET_DB_URL='postgres://gel3_website_staging@westpacgel3-do-user-1058923-0.a.db.ondigitalocean.com:25060/gel3_website_staging?ssl=true'
pg_dump --no-owner ${SOURCE_DB_URL} | psql ${TARGET_DB_URL}
# You will be asked for the live password
```

### Migrations

As touched on above, the website uses the [`knex` migration framework](http://knexjs.org/#Migrations).
It's functionality is available via `yarn knex` (or just `knex` if you have it installed globally).

If you've pulled code from git and have migrations to apply, you can run them using:

```sh
yarn knex migrate:latest
```

To create a new migration of your own, run the `yarn knex migrate:make` command with a short description of the change:

```sh
yarn knex migrate:make 'adding something'
```

This will create a new migration file in the `/website/migrations` director (`20200430191814_adding something.js` in this case)
with code blocks for the `up` and `down` steps.
You can run/test these using `yarn knex migrate:up` and `yarn knex migrate:down`.

See the [`knex` migration docs](http://knexjs.org/#Migrations) for more info.

## Production

The websites production environments (live and staging) are hosted at [Digital Ocean](https://www.digitalocean.com/).

### App Tier

The environments are deployed to unmanaged `Ubuntu 18.04.4 LTS` servers (droplets):

| Purpose | IP                | url                                         |
| ------- | ----------------- | ------------------------------------------- |
| Live    | `128.199.200.220` | https://gel.westpacgroup.com.au             |
| Staging | `165.22.110.244`  | https://gel.test.do.westpac.thinkmill.cloud |

### DB Tier

Both environments share a single managed Postgres DB instance:

- `westpacgel3-do-user-1058923-0.a.db.ondigitalocean.com` (not accessible externally)

This instance hosts the `gel3_website_live` and `gel3_website_staging` databases.

### Neighbours

In both environments, the app servers host several resources:

- The GEL Keystone instance (port 3000)
- The primary GEL website (static html)
- Blender - old version (port 1337)
- A server status page (port 1338)
- Blender - new version (port 1339)

Routed between these resources is performed by nginx.
nginx is also performs TLS termination, sets many response headers and provides fail over error pages, request logging and other responsibilities.

## Deployment

Deployment of the GEL website is (mostly) handled by [PM2](https://pm2.keymetrics.io).
The environments above and the processes started are described by [`pm2-ecosystem.json`](../pm2-ecosystem.json) in the repo root.
To run a deployment you'll need the `pm2` package installed and ssh access to the relevant server.

### git flow

Try to stay uni-direction with your git-merges.

1. Develop new features or even bug fixes inside `develop`.
1. The `develop` branch allows you to deploy the docs pages to netlify and browser-test etc.
1. Once you're happy with features in `develop` merge the branch into `staging` and deploy.
1. Test things in the staging environment and make sure everything works.
1. If there are bugs or missing things continue to develop inside the `develop` branch and merge into `staging`
1. Once you're happy with staging, merge the `staging` branch into `master` and deploy

Please avoid merging the other direction!

You should never PR directly against (or commit into) `master` or `staging`.
Because of that:

- You should never need to merge `master` into anything.
- You should never need to merge `staging` into anything but `master`
- You should never need to merge `develop` into anything but `staging`

```
┌───────────┐
│  Master   │
└───────────┘
      │      ┌───────────┐
      │      │  Staging  │
      │      └───────────┘
      │            │      ┌───────────┐
      │            │      │  Develop  │
      │            │      └───────────┘
      │            │            │
      │            │            │   ┌──── New Feature
      │            │   Staging  │   │
      │            │   Release  │◀──┘
      │            │      ┌─────┤   ┌──── Bug fixes
      │            │◀─────┘     │   │
      │            │            │◀──┘
      │            │            │
      │            │   Staging  │   ┌──── New Feature
      │            │   Release  │◀──┘
      │    Live    │      ┌─────┤
      │   Release  │◀─────┘     │
      │      ┌─────┤            │
      │◀─────┘     │            │   ┌──── Bug fixes
      │            │            │◀──┘
      │            │            │   ┌──── Bug fixes
      │            │            │◀──┘
      │            │   Staging  │   ┌──── New Feature
      │    Live    │   Release  │◀──┘
      │   Release  │      ┌─────┤
      │      ┌─────┤◀─────┘     │
      │◀─────┘     │            │
      ▼            ▼            ▼
```

### Running a Deploy

#### Deploy to staging

Create a PR and merge it to the `staging` branch.
Only files inside the `staging` branch are deployed for the staging command below.

```sh
# From the repo root
yarn deploy:staging
```

#### Deploy to live

Create a PR and merge it into the `master` branch.
Only files inside the `master` branch are deployed for the deploy command below.

```sh
# From the repo root
yarn deploy:live
```

### Process Overview

Regardless of the environment being update, the deployment process runs though several steps:

- A deployment is explicitly triggered in a development environment (eg. `yarn deploy:staging` is run)
- `pm2` looks up the environment details in [`pm2-ecosystem.json`](../pm2-ecosystem.json) file _in the current branch_.
  This tells it:
  - Which server (and user) to connect to
  - Which branch to deploy (either `staging` or `master` for live)
- `pm2` connects to the relevant server using your local ssh config.
  (Your `~/.ssh/config` file may need an entry to configure the correct key.)
- `pm2` pulls the latest code from the relevant branch onto the server
- It then executes the post deploy hook -- [`pm2-post-deploy.sh`](../pm2-post-deploy.sh).
  This script is responsible for.. - Installing any recently added or updated packages (according to `yarn.lock`) - Running the websites build process (ie. `yarn build`) - Restarting the websites processes (according to the `pm2-ecosystem.json` file now deployed on the server): + The website itself (ie. `yarn start:prod`) + The migration process (ie. `yarn knex migrate:latest`)
- When the migration process has applied any outstanding migrations it exits

When you run a deployment, output from these steps will be logged to your console.
Once completed you should receive a `successfully deployed` message.

#### Gotchas

`pm2` can be finicky.
Some issues to be aware of:

- Make sure you only ever make changes in the `develop` branch. When ready to deploy to staging merge `develop` into `staging`. When ready to deploy live merge `staging` into `master`. The `develop` branch should be where things happen while `master` and `staging` are branches you merge into.
- Multiple steps in the process reference the [`pm2-ecosystem.json`](../pm2-ecosystem.json) config but, potentially, different version of it.
  This can cause unexpected behaviour if overlooked.
- Code is pulled from the `staging` or `master` branch on GitHub; local changes to these branches are not considered.
- Likewise, these branches are used regardless of which branch is active on the development machine when the deploy is triggered.
- Changes to the nginx config found in this repo (`/nginx/*.conf`) **are not** automatically deployed.
  If changes have been made to these files, follow the steps below to roll the changes out.

### `nginx` Config

Find the main nginx config here: https://github.com/WestpacGEL/server-config

Changes to the `nginx` config have the potential to break, not only Keystone and the GEL Website, but the other services running in the environment.
Deploying such changes also requires `root` access to the relevant server.

Steps:

1. Make your changes as usual, PR and merge them into the relevant branch, eg. `staging`
1. Deploy to the relevant environment as usual, eg. `yarn deploy:staging` or `yarn deploy:live`
1. When the app deploy has completed, ssh to the relevant server, eg. `ssh deploy@128.199.200.220` or `ssh deploy@165.22.110.244`
1. The new config will be in the app repo at `/srv/pm2-apps/gel3-website/current/nginx/..`
1. Copy it into the `/etc/nginx/snippets` dir via:
   `sudo cp /srv/pm2-apps/gel3-website/source/nginx/gel3-keystone-routes.conf /etc/nginx/snippets/gel3-keystone-routes.conf`
1. Verify the new config is valid with `sudo nginx -t`
1. If successful, reload the nginx config for the server with `sudo nginx -s reload`
