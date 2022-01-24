import gql from 'graphql-tag';

const selection = `id
pageTitle
url
design {
	document
}
hideAccessibilityTab
accessibility {
	document
}
hideCodeTab
code {
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
	document
}
`;

export const ALL_PAGES = gql`
	query AllPages {
		pages {
			${selection}
		}
	}
`;

export const ALL_DRAFT_PAGES = gql`
	query AllDraftPages {
		pages: draftPages {
			${selection}
		}
	}
`;
