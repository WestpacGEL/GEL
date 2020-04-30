const path = require('path');
const migrationName = path.basename(__filename);

/*
	This is not a true copy of the migrations run on the live DB.
	It has been retroactively edited to allow for easier project onboarding.
*/

const users = [
	{
		email: 'admin@localhost',
		hash: '$2y$10$ALL0pZXXxmaoPOMlE4AufuEaSy1HhKWYHu9U5NpjuUv8tiKgK3r3u', // development
	},
];

exports.up = async knex => {
	console.log('Applying migration', migrationName);
	return knex.transaction(async function(tx) {
		for (let u of users) {
			await tx.raw(
				`insert into public."User" (email, password) values ('${u.email}', '${u.hash}');`
			);
		}
	});
};

exports.down = async knex => {
	console.log('Reverting migration', migrationName);
	return knex.transaction(async function(tx) {
		for (let u of users) {
			await tx.raw(
				`delete from public."User" where email = '${u.email}' and password = '${u.hash}';`
			);
		}
	});
};
