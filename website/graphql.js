import gql from 'graphql-tag';

export const ALL_PAGES = gql`
	query AllPages {
		allPages {
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
		}
	}
`;
