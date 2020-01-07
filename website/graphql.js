import gql from 'graphql-tag';

export const ALL_COMPONENTS = gql`
	query AllComponents {
		allComponents {
			id
			name
			packageName
			version
			description
			author
		}
	}
`;
