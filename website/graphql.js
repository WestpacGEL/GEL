import gql from 'graphql-tag';

export const ALL_COMPONENTS = gql`
	query AllComponents {
		allComponents {
			id
			packageName
			isOrphaned
			name
			version
			description
			author
			doc {
				id
				document
			}
		}
	}
`;
