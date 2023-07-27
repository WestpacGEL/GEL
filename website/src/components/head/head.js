import { jsx } from '@westpac/core';
import NextHead from 'next/head';
import { BASE_URL } from '../../config';

export const Head = ({ title = '', ...rest }) => {
	return (
		<NextHead {...rest}>
			<title>{`${title && `${title} · `}GEL Design System`}</title>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="icon" href={`${BASE_URL}/icons/favicon.ico`} sizes="any" />
		</NextHead>
	);
};
