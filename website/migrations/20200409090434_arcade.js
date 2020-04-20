const path = require('path');
const migrationName = path.basename(__filename);

exports.up = async knex => {
	console.log('Applying migration', migrationName);
	return knex.transaction(async function(tx) {
		await tx.raw(`
DROP TABLE public."Page_categories";
DROP TABLE public."Category";

CREATE table public."Page_relatedPages_many"
(
	"Page_left_id" integer not null
		constraint page_relatedpages_many_page_left_id_foreign
			references public."Page"
				on delete cascade,
	"Page_right_id" integer not null
		constraint page_relatedpages_many_page_right_id_foreign
			references public."Page"
				on delete cascade
);

CREATE index page_relatedpages_many_page_left_id_index
	on public."Page_relatedPages_many" ("Page_left_id");

CREATE index page_relatedpages_many_page_right_id_index
	on public."Page_relatedPages_many" ("Page_right_id");


ALTER TABLE public."Page" DROP COLUMN "design";
ALTER TABLE public."Page" DROP COLUMN "accessibility";
ALTER TABLE public."Page" DROP COLUMN "code";
ALTER TABLE public."Page" DROP COLUMN "relatedInfo";
`);
	});
};

exports.down = async knex => {
	console.log('Reverting migration', migrationName);
	return knex.transaction(async function(tx) {
		console.log('Cannot revert Arcade migration.');
	});
};
