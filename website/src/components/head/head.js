/** @jsx jsx */

import { jsx } from '@westpac/core';
import NextHead from 'next/head';

export const Head = ({ title, ...rest }) => (
	<NextHead {...rest}>
		<title>{title}</title>
		<meta name="viewport" content="width=device-width, initial-scale=1" />
	</NextHead>
);
