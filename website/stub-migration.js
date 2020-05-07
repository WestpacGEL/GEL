const path = require('path');
const migrationName = path.basename(__filename);

exports.up = async (knex) => {
	console.log('Applying migration', migrationName);
	return knex.transaction(async function (tx) {
		await tx.raw('select 1;');
	});
};

exports.down = async (knex) => {
	console.log('Reverting migration', migrationName);
	return knex.transaction(async function (tx) {});
};
