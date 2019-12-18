import gql from 'graphql-tag';

export const ALL_COMPONENTS = {
	query: gql`
		{
			allGELComponents {
				name
				packageName
				version
				description
				author
			}
		}
	`,
	fetchPolicy: 'network-only',
};
