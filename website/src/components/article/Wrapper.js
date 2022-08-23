/** @jsx jsx */

import { GEL, jsx, Global } from '@westpac/core';
import wbc from '@westpac/wbc';

const COLORS = {
	primary: '#C80038',
	background: '#F3F5F6',
	border: '#CFD8DC',
	icon: '#1976D2',
	text: '#122935',
	muted: '#575F65',
};

export const Wrapper = ({ children, ...props }) => {
	return (
		<GEL brand={{ ...wbc, GEL: { COLORS } }} {...props}>
			<Global styles={{ 'body div': { color: COLORS.text } }} />
			{children}
		</GEL>
	);
};
