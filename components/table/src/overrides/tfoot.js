/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';

const TFoot = ({ state, ...rest }) => <tfoot {...rest} />;

const tfootStyles = (_, { bordered }) => {
	const { COLORS } = useBrand();

	return { color: COLORS.muted, 'th, tr, td': { borderBottom: !bordered && 0 } };
};

const tfootAttributes = () => null;

export const defaultTfoot = {
	component: TFoot,
	styles: tfootStyles,
	attributes: tfootAttributes,
};
