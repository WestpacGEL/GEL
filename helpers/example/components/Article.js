import { jsx } from '@westpac/core';

export function Article(props) {
	return (
		<article
			css={{
				flex: 1,
				overflowY: 'auto',
				paddingBottom: '4rem',
				paddingLeft: 240,
				paddingTop: '1rem',
			}}
			{...props}
		/>
	);
}
