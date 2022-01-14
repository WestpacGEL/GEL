-- Copy data across from the ks5 tables to the new schema
-- Then clean up

-- Images
insert into "Image" (id, image, caption)
select cuid as id, image, coalesce(caption, '')
from ks5."Image" s
where
	image is not null
	and not exists (select 1 from "Image" where id = s.cuid);

-- Pages
insert into "Page" (
	id,
	"pageTitle",
	"url",
	"packageName",
	"hideAccessibilityTab",
	"hideCodeTab",
	"designOld",
	"accessibilityOld",
	"codeOld",
	"relatedInfoOld"
)
select
	cuid as id,
	"pageTitle",
	"url",
	"packageName",
	coalesce("hideAccessibilityTab", false) as "hideAccessibilityTab",
	coalesce("hideCodeTab", false) as "hideCodeTab",
	d."document"::jsonb as "designOld",
	a."document"::jsonb as "accessibilityOld",
	c."document"::jsonb as "codeOld",
	r."document"::jsonb as "relatedInfoOld"
from
	ks5."Page" s
	left outer join ks5."_ContentType_Page_design" as d on (s.id = d.id)
	left outer join ks5."_ContentType_Page_accessibility" as a on (s.id = a.id)
	left outer join ks5."_ContentType_Page_code" as c on (s.id = c.id)
	left outer join ks5."_ContentType_Page_relatedInfo" as r on (s.id = r.id)
where
	not exists (select 1 from "Page" where id = s.cuid);

-- Settings
insert into "Setting" (id, "name", "value")
select cuid as id, "name", "value"::jsonb as "value"
from ks5."Setting" s
where not exists (select 1 from "Setting" where id = s.cuid);

-- Users
insert into "User" (id, email, "password")
select cuid as id, email, "password"
from ks5."User" s
where not exists (select 1 from "User" where id = s.cuid);

-- Related pages
insert into "_Page_relatedPages" ("A", "B")
select l.cuid as "A", r.cuid as "R"
from ks5."Page_relatedPages_many" j
	inner join ks5."Page" l on (j."Page_left_id" = l.id)
	inner join ks5."Page" r on (j."Page_right_id" = r.id)
where not exists (
	select 1
	from "_Page_relatedPages"
	where "A" = l.cuid and "B" = r.cuid
);


-- Purge the ks5 data from the DB
drop schema ks5 cascade;
