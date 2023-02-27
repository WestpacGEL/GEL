import { jsx, useBrand } from '@westpac/core';

export const ArticleMain = (props) => {
	const {
		GEL: { COLORS },
	} = useBrand();

	return (
		<main css={{ backgroundColor: COLORS.background, paddingBottom: '3.0625rem' }} {...props} />
	);
};
