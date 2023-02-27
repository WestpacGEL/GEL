import { jsx } from '@westpac/core';

export function Code({ children }) {
	return (
		<pre
			css={{
				background: '#f9f9f9',
				padding: '1rem',
				border: '1px solid #ccc',
			}}
		>
			<code>{children}</code>
		</pre>
	);
}
