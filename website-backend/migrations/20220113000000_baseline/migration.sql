-- Recreate the KS5 DB structure without data
-- Run `yarn prisma migrate resolve --applied "20220113000000_baseline"` to set this migration as the baseline
-- See KS6_UPGRADE_NOTES.md for details

CREATE TABLE public."Image" (
    id integer NOT NULL,
    image jsonb,
    caption text
);
CREATE TABLE public."Page" (
    id integer NOT NULL,
    "pageTitle" text,
    "packageName" text,
    "hideAccessibilityTab" boolean,
    "hideCodeTab" boolean,
    url text
);
CREATE TABLE public."Page_relatedPages_many" (
    "Page_left_id" integer NOT NULL,
    "Page_right_id" integer NOT NULL
);
CREATE TABLE public."Setting" (
    id integer NOT NULL,
    name text,
    value text
);
CREATE TABLE public."User" (
    id integer NOT NULL,
    email text,
    password character varying(60)
);
CREATE TABLE public."_ContentType_Page_accessibility" (
    id integer NOT NULL,
    document text,
    "from" integer
);
CREATE TABLE public."_ContentType_Page_code" (
    id integer NOT NULL,
    document text,
    "from" integer
);
CREATE TABLE public."_ContentType_Page_design" (
    id integer NOT NULL,
    document text,
    "from" integer
);
CREATE TABLE public."_ContentType_Page_relatedInfo" (
    id integer NOT NULL,
    document text,
    "from" integer
);
CREATE TABLE public.knex_migrations (
    id integer NOT NULL,
    name character varying(255),
    batch integer,
    migration_time timestamp with time zone
);
CREATE TABLE public.knex_migrations_lock (
    index integer NOT NULL,
    is_locked integer
);

CREATE SEQUENCE public."Image_id_seq" AS integer;
CREATE SEQUENCE public."Page_id_seq" AS integer;
CREATE SEQUENCE public."Setting_id_seq" AS integer;
CREATE SEQUENCE public."User_id_seq" AS integer;
CREATE SEQUENCE public."_ContentType_Page_accessibility_id_seq" AS integer;
CREATE SEQUENCE public."_ContentType_Page_code_id_seq" AS integer;
CREATE SEQUENCE public."_ContentType_Page_design_id_seq" AS integer;
CREATE SEQUENCE public."_ContentType_Page_relatedInfo_id_seq" AS integer;
CREATE SEQUENCE public.knex_migrations_id_seq AS integer;
CREATE SEQUENCE public.knex_migrations_lock_index_seq AS integer;

ALTER TABLE ONLY public."Image" ALTER COLUMN id SET DEFAULT nextval('public."Image_id_seq"'::regclass);
ALTER TABLE ONLY public."Page" ALTER COLUMN id SET DEFAULT nextval('public."Page_id_seq"'::regclass);
ALTER TABLE ONLY public."Setting" ALTER COLUMN id SET DEFAULT nextval('public."Setting_id_seq"'::regclass);
ALTER TABLE ONLY public."User" ALTER COLUMN id SET DEFAULT nextval('public."User_id_seq"'::regclass);
ALTER TABLE ONLY public."_ContentType_Page_accessibility" ALTER COLUMN id SET DEFAULT nextval('public."_ContentType_Page_accessibility_id_seq"'::regclass);
ALTER TABLE ONLY public."_ContentType_Page_code" ALTER COLUMN id SET DEFAULT nextval('public."_ContentType_Page_code_id_seq"'::regclass);
ALTER TABLE ONLY public."_ContentType_Page_design" ALTER COLUMN id SET DEFAULT nextval('public."_ContentType_Page_design_id_seq"'::regclass);
ALTER TABLE ONLY public."_ContentType_Page_relatedInfo" ALTER COLUMN id SET DEFAULT nextval('public."_ContentType_Page_relatedInfo_id_seq"'::regclass);
ALTER TABLE ONLY public.knex_migrations ALTER COLUMN id SET DEFAULT nextval('public.knex_migrations_id_seq'::regclass);
ALTER TABLE ONLY public.knex_migrations_lock ALTER COLUMN index SET DEFAULT nextval('public.knex_migrations_lock_index_seq'::regclass);

ALTER TABLE ONLY public."Image" ADD CONSTRAINT "Image_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."Page" ADD CONSTRAINT "Page_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."Setting" ADD CONSTRAINT "Setting_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."User" ADD CONSTRAINT "User_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."_ContentType_Page_accessibility" ADD CONSTRAINT "_ContentType_Page_accessibility_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."_ContentType_Page_code" ADD CONSTRAINT "_ContentType_Page_code_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."_ContentType_Page_design" ADD CONSTRAINT "_ContentType_Page_design_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."_ContentType_Page_relatedInfo" ADD CONSTRAINT "_ContentType_Page_relatedInfo_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public.knex_migrations_lock ADD CONSTRAINT knex_migrations_lock_pkey PRIMARY KEY (index);
ALTER TABLE ONLY public.knex_migrations ADD CONSTRAINT knex_migrations_pkey PRIMARY KEY (id);

CREATE INDEX _contenttype_page_accessibility_from_index ON public."_ContentType_Page_accessibility" ("from");
CREATE INDEX _contenttype_page_code_from_index ON public."_ContentType_Page_code" ("from");
CREATE INDEX _contenttype_page_design_from_index ON public."_ContentType_Page_design" ("from");
CREATE INDEX _contenttype_page_relatedinfo_from_index ON public."_ContentType_Page_relatedInfo" ("from");
CREATE INDEX page_relatedpages_many_page_left_id_index ON public."Page_relatedPages_many" ("Page_left_id");
CREATE INDEX page_relatedpages_many_page_right_id_index ON public."Page_relatedPages_many" ("Page_right_id");

ALTER TABLE ONLY public."_ContentType_Page_accessibility" ADD CONSTRAINT _contenttype_page_accessibility_from_foreign FOREIGN KEY ("from") REFERENCES public."Page"(id);
ALTER TABLE ONLY public."_ContentType_Page_code" ADD CONSTRAINT _contenttype_page_code_from_foreign FOREIGN KEY ("from") REFERENCES public."Page"(id);
ALTER TABLE ONLY public."_ContentType_Page_design" ADD CONSTRAINT _contenttype_page_design_from_foreign FOREIGN KEY ("from") REFERENCES public."Page"(id);
ALTER TABLE ONLY public."_ContentType_Page_relatedInfo" ADD CONSTRAINT _contenttype_page_relatedinfo_from_foreign FOREIGN KEY ("from") REFERENCES public."Page"(id);
ALTER TABLE ONLY public."Page_relatedPages_many" ADD CONSTRAINT page_relatedpages_many_page_left_id_foreign FOREIGN KEY ("Page_left_id") REFERENCES public."Page"(id) ON DELETE CASCADE;
ALTER TABLE ONLY public."Page_relatedPages_many" ADD CONSTRAINT page_relatedpages_many_page_right_id_foreign FOREIGN KEY ("Page_right_id") REFERENCES public."Page"(id) ON DELETE CASCADE;
