import gql from 'graphql-tag';

export const ALL_COMPONENTS = {
	query: gql`
		{
			allComponents {
				packageName
				name
			}
		}
	`,
	fetchPolicy: 'network-only',
};
