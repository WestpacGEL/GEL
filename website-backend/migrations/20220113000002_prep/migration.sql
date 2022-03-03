-- Copy data from all existing (Keystone 5) tables into the "ks5" schema and drop the old tables
-- We copy the data rather than moving the tables because the size of the data is small
-- and doing so effectively removes all constraints, indexes, etc. too
create schema if not exists ks5;

-- Page content fields
select * into ks5."_ContentType_Page_accessibility" from "_ContentType_Page_accessibility";
select * into ks5."_ContentType_Page_code" from "_ContentType_Page_code";
select * into ks5."_ContentType_Page_design" from "_ContentType_Page_design";
select * into ks5."_ContentType_Page_relatedInfo" from "_ContentType_Page_relatedInfo";

-- The lists
-- also generate cuids to use in the new schema
select cuid() as "cuid", * into ks5."Image" from "Image";
select cuid() as "cuid", * into ks5."Page" from "Page";
select cuid() as "cuid", * into ks5."Setting" from "Setting";
select cuid() as "cuid", * into ks5."User" from "User";

-- Many to many relationship
select * into ks5."Page_relatedPages_many" from "Page_relatedPages_many";

-- Old migration tracking
-- We really don't need this..
-- select * into ks5."knex_migrations" from "knex_migrations";
-- select * into ks5."knex_migrations_lock" from "knex_migrations_lock";


-- Drop all the original tables
-- This also drops all related constraints, indexes, etc.
-- For the final purge of ks5 data we can just drop the whole "ks5" schema
drop table if exists "_ContentType_Page_accessibility" cascade;
drop table if exists "_ContentType_Page_code" cascade;
drop table if exists "_ContentType_Page_design" cascade;
drop table if exists "_ContentType_Page_relatedInfo" cascade;
drop table if exists "Image" cascade;
drop table if exists "Page" cascade;
drop table if exists "Setting" cascade;
drop table if exists "User" cascade;
drop table if exists "Page_relatedPages_many" cascade;
drop table if exists "knex_migrations" cascade;
drop table if exists "knex_migrations_lock" cascade;
