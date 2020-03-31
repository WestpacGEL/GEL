import gql from 'graphql-tag';

const pageFragment = `
id
pageTitle
url
design {
	id
	document
}
hideAccessibilityTab
accessibility {
	id
	document
}
hideCodeTab
code {
	id
	document
}
packageName
isOrphaned
name
version
description
author
requires
categories {
	id
}
relatedInfo {
	id
	document
}
`;

export const ALL_PAGES = gql`
	query AllPages {
		allPages {
			${pageFragment}
		}
	}
`;

// { categories_some: { id_in: ["..."] } }
export const RELATED_INFORMATION = where => gql`
	query AllPages {
		allPages(where: ${where}) {
			${pageFragment}
		}
	}
`;
