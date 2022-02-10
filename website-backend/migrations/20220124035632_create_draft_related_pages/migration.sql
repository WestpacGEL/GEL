insert into "_DraftPage_relatedPages" ("A", "B")
select a.id as "A", b.id as "B"
from "_Page_relatedPages" j
	inner join "DraftPage" a on (j."A" = a.published)
	inner join "DraftPage" b on (j."B" = b.published);