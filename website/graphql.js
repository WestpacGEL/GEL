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
			documentAccessibility
			accessibility {
				id
				document
			}
			documentPackage
			packageName
			isOrphaned
			name
			version
			description
			author
			code {
				id
				document
			}
		}
	}
`;
