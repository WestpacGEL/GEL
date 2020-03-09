/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';
import { ArrowRightIcon } from '@westpac/icon';

const Icon = ({ state, ...rest }) => {
	return <ArrowRightIcon {...rest} />;
};

const iconStyles = () => ({
	marginLeft: '0.1875rem',
	marginRight: '0.1875rem',
	verticalAlign: 'middle',
});

const iconAttributes = () => {
	const { COLORS } = useBrand();

	return {
		'aria-hidden': 'true',
		assistiveText: null, //remove icon's `aria-label`
		size: 'small',
		color: COLORS.primary,
	};
};

export const defaultIcon = {
	component: Icon,
	styles: iconStyles,
	attributes: iconAttributes,
};
