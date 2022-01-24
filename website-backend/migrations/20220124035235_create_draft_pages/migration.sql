SET plpgsql.cuid_hostid = "1058923";



insert into "DraftPage" (
    "id",
    "pageTitle",
    "url",
    "packageName",
    "designOld",
    "design",
    "hideAccessibilityTab",
    "accessibilityOld",
    "accessibility",
    "hideCodeTab",
    "codeOld",
    "code",
    "relatedInfoOld",
    "relatedInfo",
    "published"
)
select
    cuid() as "id",
    "pageTitle",
    "url",
    "packageName",
    "designOld",
    "design",
    "hideAccessibilityTab",
    "accessibilityOld",
    "accessibility",
    "hideCodeTab",
    "codeOld",
    "code",
    "relatedInfoOld",
    "relatedInfo",
    "id" as "published"
from
	"Page" s
where
	not exists (select 1 from "DraftPage" where "published" = s.id);
