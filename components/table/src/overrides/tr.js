/** @jsx jsx */

import { jsx, useBrand, getLabel } from '@westpac/core';

export const Tr = ({ state, ...rest }) => <tr {...rest} />;

export const trStyles = (_, { striped, highlighted }) => {
	const { COLORS } = useBrand();

	return {
		label: getLabel('tr', { striped, highlighted }),
		transition: !striped && 'background 0.2s ease',
		borderLeft: typeof highlighted === 'boolean' && highlighted ? `6px solid ${COLORS.primary}` : 0,
		borderBottom:
			typeof highlighted === 'boolean' && highlighted
				? `3px solid ${COLORS.primary}`
				: `1px solid ${COLORS.border}`, //a11y: highlighted border must be noticeably thicker than non-highlighted

		// Hovered row
		'tbody > &:hover': {
			backgroundColor: !striped && COLORS.background,
		},
	};
};

const trAttributes = () => null;

export const defaultTr = {
	component: Tr,
	styles: trStyles,
	attributes: trAttributes,
};
