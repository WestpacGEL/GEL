/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';

export const Tr = ({ state, ...rest }) => <tr {...rest} />;

export const trStyles = (_, { striped, highlighted }) => {
	const { COLORS } = useBrand();

	return {
		transition: !striped && 'background 0.2s ease',
		borderLeft: typeof highlighted === 'boolean' && highlighted ? `6px solid ${COLORS.primary}` : 0,
		borderBottom:
			typeof highlighted === 'boolean' && highlighted
				? `2px solid ${COLORS.primary}`
				: `1px solid ${COLORS.border}`,

		// a11y: high contrast mode (thicken highlight border to make it more noticeable)
		...(typeof highlighted === 'boolean' &&
			highlighted && {
				'> td, > th': {
					position: 'relative',
				},
				'> td::after, > th::after': {
					content: '""',
					borderBottom: '4px solid transparent',
					position: 'absolute',
					left: 0,
					right: 0,
					bottom: 0,
				},
			}),

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
