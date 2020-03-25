const path = require('path');
const migrationName = path.basename(__filename);

const users = [
	{ email: 'john@thinkmill.com.au', hash: '$2y$10$YU4x2JB04tDN2HED9XKm6OIljAlKoZjaEx7Ip2z/mYiXjR5sT8k.e' },
	{ email: 'dominik@thinkmill.com.au', hash: '$2y$10$4HRe4RVVJP8NcPxFh/8sWu7z/AaqW4CaYgPA3SN.tPHscQS1uNpCy' },
	{ email: 'mike.r@thinkmill.com.au', hash: '$2y$10$UVFHfDjIcNEl5pFMKHcsQehwt5yeQrNkvQxHVN5kOqsz1JhKZ0l3G' },
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
