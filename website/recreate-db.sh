#!/usr/bin/env bash

# Example usage:
# 	./website/recreate-db.sh \
#		"postgres://localhost" \
#		gel3_website \
#		gel3_website \
#		$(pw)

# Notes:
# * Assumes ~/.pgpass (or equivalent) is configured for the server specified


# Exit on error, empty vars error
set -eu
print_status () {
	printf "\n\x1b[32m ➔  \x1b[37m${1}\e[0m\n";
}

CONNECTION_URL=$1
DB_NAME=$2
USER_NAME=$3
USER_PASS=$4

print_status "Connecting to '${CONNECTION_URL}'"
print_status "Creating/recreating DB '${DB_NAME}' for user '${USER_NAME}', pass '${USER_PASS}'..\n"

# ERROR:  DROP DATABASE cannot run inside a transaction block
psql "${CONNECTION_URL}" -c "drop database if exists \"${DB_NAME}\";"

psql "${CONNECTION_URL}" << EOF
-- Recreate the DB
create database "${DB_NAME}";

-- reate the role
drop role if exists "${USER_NAME}";
create role "${USER_NAME}" with NOSUPERUSER NOCREATEDB NOCREATEROLE NOINHERIT LOGIN ENCRYPTED PASSWORD '${USER_PASS}';

-- Grant permission
grant all on database "${DB_NAME}" to "${USER_NAME}";
EOF


print_status "Done\n"
