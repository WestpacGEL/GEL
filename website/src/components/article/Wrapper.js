/** @jsx jsx */

import { GEL, jsx, Global, useMediaQuery } from '@westpac/core';
import wbc from '@westpac/wbc';

const COLORS = {
	primary: '#C80038',
	background: '#F3F5F6',
	border: '#CFD8DC',
	icon: '#1976D2',
	text: '#122935',
	link: '#1871C9',
	muted: '#575F65',
	hover: '#F9FAFB',
};

const GlobalStyles = () => {
	const mq = useMediaQuery();
	return (
		<Global
			styles={mq({
				'body div': { color: COLORS.text },
				'.body-text + .body-text': { marginTop: ['-1.625rem', '-2.625rem'] }, // hack fix for adjacent body-text spacing
			})}
		/>
	);
};

export const Wrapper = ({ children, ...props }) => {
	return (
		<GEL brand={{ ...wbc, GEL: { COLORS } }} {...props}>
			<GlobalStyles />
			{children}
		</GEL>
	);
};
