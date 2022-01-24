#!/usr/bin/env bash

# Exit on error, empty vars error
set -eu

# Set some env vars
export NODE_ENV=production
export APOLLO_CLIENT_GRAPHQL_URI="https://gel.test.do.westpac.thinkmill.cloud/api/graphql"

# Install any missing npm packages
# The `--frozen-lockfile` option is important here; it prevents "optimisations" of the lock file that break future deploys
# See.. https://github.com/yarnpkg/yarn/issues/4379
yarn install --frozen-lockfile

# Building design system components for blender digestion
yarn build

# Build the Next frontend
yarn --cwd website build

# Build the Keystone 6 backend
yarn --cwd website-backend build

# Reload the app (gracefully to minimise downtime)
pm2 startOrGracefulReload pm2-ecosystem.json

# Update the saved pm2 processes ($PM2_HOME/.pm2/dump.pm2) with those currently running
pm2 save
