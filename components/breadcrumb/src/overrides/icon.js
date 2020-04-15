/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';
import { ArrowRightIcon } from '@westpac/icon';

const Icon = ({ state, ...rest }) => {
	const { COLORS } = useBrand();

	return <ArrowRightIcon size="small" color={COLORS.primary} assistiveText={null} {...rest} />;
};

const iconStyles = () => ({
	marginLeft: '0.1875rem',
	marginRight: '0.1875rem',
	verticalAlign: 'middle',
});

const iconAttributes = () => ({
	'aria-hidden': 'true',
});

export const defaultIcon = {
	component: Icon,
	styles: iconStyles,
	attributes: iconAttributes,
};
