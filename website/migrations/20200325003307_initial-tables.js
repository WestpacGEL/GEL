const path = require('path');
const migrationName = path.basename(__filename);

const upSql = `
SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;
SET default_tablespace = '';

CREATE TABLE public."Category" (
    id integer NOT NULL,
    name text
);

CREATE SEQUENCE public."Category_id_seq" AS integer START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;
ALTER SEQUENCE public."Category_id_seq" OWNED BY public."Category".id;

CREATE TABLE public."Image" (
    id integer NOT NULL,
    image jsonb,
    caption text
);

CREATE SEQUENCE public."Image_id_seq" AS integer START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;
ALTER SEQUENCE public."Image_id_seq" OWNED BY public."Image".id;

CREATE TABLE public."Page" (
    id integer NOT NULL,
    "pageTitle" text,
    "packageName" text,
    design integer,
    "hideAccessibilityTab" boolean,
    accessibility integer,
    "hideCodeTab" boolean,
    code integer,
    "relatedInfo" integer,
    CONSTRAINT "Page_packageName_check" CHECK (("packageName" = ANY (ARRAY['a11y'::text, 'alert'::text, 'badge'::text, 'body'::text, 'breadcrumb'::text, 'button'::text, 'button_dropdown'::text, 'button_group'::text, 'core'::text, 'form'::text, 'form_check'::text, 'form_pod'::text, 'grid'::text, 'heading'::text, 'hooks'::text, 'icon'::text, 'input_group'::text, 'label'::text, 'list'::text, 'list_group'::text, 'modal'::text, 'pagination'::text, 'panel'::text, 'popover'::text, 'progress_bar'::text, 'progress_rope'::text, 'switch'::text, 'symbol'::text, 'tabcordion'::text, 'table'::text, 'text_input'::text, 'well'::text])))
);

CREATE TABLE public."Page_categories" (
    "Page_id" integer NOT NULL,
    "Category_id" integer NOT NULL
);

CREATE SEQUENCE public."Page_id_seq" AS integer START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;
ALTER SEQUENCE public."Page_id_seq" OWNED BY public."Page".id;

CREATE TABLE public."Setting" (
    id integer NOT NULL,
    name text,
    value text
);

CREATE SEQUENCE public."Setting_id_seq" AS integer START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;
ALTER SEQUENCE public."Setting_id_seq" OWNED BY public."Setting".id;

CREATE TABLE public."User" (
    id integer NOT NULL,
    email text,
    password character varying(60)
);

CREATE SEQUENCE public."User_id_seq" AS integer START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;
ALTER SEQUENCE public."User_id_seq" OWNED BY public."User".id;

CREATE TABLE public."_ContentType_Page_accessibility" (
    id integer NOT NULL,
    document text,
    "from" integer
);

CREATE SEQUENCE public."_ContentType_Page_accessibility_id_seq" AS integer START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;
ALTER SEQUENCE public."_ContentType_Page_accessibility_id_seq" OWNED BY public."_ContentType_Page_accessibility".id;

CREATE TABLE public."_ContentType_Page_code" (
    id integer NOT NULL,
    document text,
    "from" integer
);

CREATE SEQUENCE public."_ContentType_Page_code_id_seq" AS integer START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;
ALTER SEQUENCE public."_ContentType_Page_code_id_seq" OWNED BY public."_ContentType_Page_code".id;

CREATE TABLE public."_ContentType_Page_design" (
    id integer NOT NULL,
    document text,
    "from" integer
);

CREATE SEQUENCE public."_ContentType_Page_design_id_seq" AS integer START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;
ALTER SEQUENCE public."_ContentType_Page_design_id_seq" OWNED BY public."_ContentType_Page_design".id;

CREATE TABLE public."_ContentType_Page_relatedInfo" (
    id integer NOT NULL,
    document text,
    "from" integer
);

CREATE SEQUENCE public."_ContentType_Page_relatedInfo_id_seq" AS integer START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;
ALTER SEQUENCE public."_ContentType_Page_relatedInfo_id_seq" OWNED BY public."_ContentType_Page_relatedInfo".id;

ALTER TABLE ONLY public."Category" ALTER COLUMN id SET DEFAULT nextval('public."Category_id_seq"'::regclass);
ALTER TABLE ONLY public."Image" ALTER COLUMN id SET DEFAULT nextval('public."Image_id_seq"'::regclass);
ALTER TABLE ONLY public."Page" ALTER COLUMN id SET DEFAULT nextval('public."Page_id_seq"'::regclass);
ALTER TABLE ONLY public."Setting" ALTER COLUMN id SET DEFAULT nextval('public."Setting_id_seq"'::regclass);
ALTER TABLE ONLY public."User" ALTER COLUMN id SET DEFAULT nextval('public."User_id_seq"'::regclass);
ALTER TABLE ONLY public."_ContentType_Page_accessibility" ALTER COLUMN id SET DEFAULT nextval('public."_ContentType_Page_accessibility_id_seq"'::regclass);
ALTER TABLE ONLY public."_ContentType_Page_code" ALTER COLUMN id SET DEFAULT nextval('public."_ContentType_Page_code_id_seq"'::regclass);
ALTER TABLE ONLY public."_ContentType_Page_design" ALTER COLUMN id SET DEFAULT nextval('public."_ContentType_Page_design_id_seq"'::regclass);
ALTER TABLE ONLY public."_ContentType_Page_relatedInfo" ALTER COLUMN id SET DEFAULT nextval('public."_ContentType_Page_relatedInfo_id_seq"'::regclass);

ALTER TABLE ONLY public."Category" ADD CONSTRAINT "Category_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."Image" ADD CONSTRAINT "Image_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."Page" ADD CONSTRAINT "Page_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."Setting" ADD CONSTRAINT "Setting_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."User" ADD CONSTRAINT "User_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."_ContentType_Page_accessibility" ADD CONSTRAINT "_ContentType_Page_accessibility_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."_ContentType_Page_code" ADD CONSTRAINT "_ContentType_Page_code_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."_ContentType_Page_design" ADD CONSTRAINT "_ContentType_Page_design_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."_ContentType_Page_relatedInfo" ADD CONSTRAINT "_ContentType_Page_relatedInfo_pkey" PRIMARY KEY (id);

CREATE INDEX _contenttype_page_accessibility_from_index ON public."_ContentType_Page_accessibility" USING btree ("from");
CREATE INDEX _contenttype_page_code_from_index ON public."_ContentType_Page_code" USING btree ("from");
CREATE INDEX _contenttype_page_design_from_index ON public."_ContentType_Page_design" USING btree ("from");
CREATE INDEX _contenttype_page_relatedinfo_from_index ON public."_ContentType_Page_relatedInfo" USING btree ("from");
CREATE INDEX page_accessibility_index ON public."Page" USING btree (accessibility);
CREATE INDEX page_categories_category_id_index ON public."Page_categories" USING btree ("Category_id");
CREATE INDEX page_categories_page_id_index ON public."Page_categories" USING btree ("Page_id");
CREATE INDEX page_code_index ON public."Page" USING btree (code);
CREATE INDEX page_design_index ON public."Page" USING btree (design);
CREATE INDEX page_relatedinfo_index ON public."Page" USING btree ("relatedInfo");

ALTER TABLE ONLY public."_ContentType_Page_accessibility" ADD CONSTRAINT _contenttype_page_accessibility_from_foreign FOREIGN KEY ("from") REFERENCES public."Page"(id);
ALTER TABLE ONLY public."_ContentType_Page_code" ADD CONSTRAINT _contenttype_page_code_from_foreign FOREIGN KEY ("from") REFERENCES public."Page"(id);
ALTER TABLE ONLY public."_ContentType_Page_design" ADD CONSTRAINT _contenttype_page_design_from_foreign FOREIGN KEY ("from") REFERENCES public."Page"(id);
ALTER TABLE ONLY public."_ContentType_Page_relatedInfo" ADD CONSTRAINT _contenttype_page_relatedinfo_from_foreign FOREIGN KEY ("from") REFERENCES public."Page"(id);
ALTER TABLE ONLY public."Page" ADD CONSTRAINT page_accessibility_foreign FOREIGN KEY (accessibility) REFERENCES public."_ContentType_Page_accessibility"(id);
ALTER TABLE ONLY public."Page_categories" ADD CONSTRAINT page_categories_category_id_foreign FOREIGN KEY ("Category_id") REFERENCES public."Category"(id) ON DELETE CASCADE;
ALTER TABLE ONLY public."Page_categories" ADD CONSTRAINT page_categories_page_id_foreign FOREIGN KEY ("Page_id") REFERENCES public."Page"(id) ON DELETE CASCADE;
ALTER TABLE ONLY public."Page" ADD CONSTRAINT page_code_foreign FOREIGN KEY (code) REFERENCES public."_ContentType_Page_code"(id);
ALTER TABLE ONLY public."Page" ADD CONSTRAINT page_design_foreign FOREIGN KEY (design) REFERENCES public."_ContentType_Page_design"(id);
ALTER TABLE ONLY public."Page" ADD CONSTRAINT page_relatedinfo_foreign FOREIGN KEY ("relatedInfo") REFERENCES public."_ContentType_Page_relatedInfo"(id);
`;

const downSql = `
DROP TABLE if exists public."_ContentType_Page_accessibility" cascade;
DROP TABLE if exists public."_ContentType_Page_code" cascade;
DROP TABLE if exists public."_ContentType_Page_design" cascade;
DROP TABLE if exists public."_ContentType_Page_relatedInfo" cascade;

DROP TABLE if exists public."Page_categories" cascade;

DROP TABLE if exists public."Category" cascade;
DROP TABLE if exists public."Image" cascade;
DROP TABLE if exists public."Page" cascade;
DROP TABLE if exists public."Setting" cascade;
DROP TABLE if exists public."User" cascade;
`;

exports.up = async (knex) => {
	console.log('Applying migration', migrationName);
	return knex.transaction(async function (tx) {
		await tx.raw(upSql);
	});
};

exports.down = async (knex) => {
	console.log('Reverting migration', migrationName);
	return knex.transaction(async function (tx) {
		await tx.raw(downSql);
	});
};
