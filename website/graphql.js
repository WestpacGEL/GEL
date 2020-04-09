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
version
description
author
requires
relatedPages {
	id
	pageTitle
	url
	packageName
	version
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
