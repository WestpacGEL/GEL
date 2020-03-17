import gql from 'graphql-tag';

const pageFragment = `
id
pageTitle
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
`;

export const ALL_PAGES = gql`
	query AllPages {
		allPages {
			${pageFragment}
		}
	}
`;

// { categories_some: { id_in: ["..."] } }
export const PAGES_WHERE = where => gql`
	query AllPages {
		allPages({where}) {
			${pageFragment}
		}
	}
`;
