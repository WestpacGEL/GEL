import { jsx } from '@westpac/core';
import NextHead from 'next/head';

export const Head = ({ title = '', ...rest }) => {
	return (
		<NextHead {...rest}>
			<title>{`${title && `${title} · `}GEL Design System`}</title>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="icon" href="/favicon.ico" sizes="any" />
		</NextHead>
	);
};
