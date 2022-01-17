import gql from 'graphql-tag';

export const ALL_PAGES = gql`
	query AllPages {
		pages {
			id
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
		}
	}
`;
