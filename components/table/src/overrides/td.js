/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';

const Td = ({ state, ...rest }) => <td {...rest} />;

const tdStyles = (_, { highlighted, highlightStart, bordered }) => {
	const { COLORS, TYPE } = useBrand();

	return {
		padding: '0.75rem',
		verticalAlign: 'top',
		border: bordered && `1px solid ${COLORS.border}`,
		borderLeft: highlightStart && `6px solid ${COLORS.primary}`,
		borderBottom: highlighted && `2px solid ${COLORS.primary}`,

		// a11y: high contrast mode (thicken highlight border to make it more noticeable)
		...(highlighted && {
			position: 'relative',

			'::after': {
				content: '""',
				borderBottom: '4px solid transparent',
				position: 'absolute',
				left: 0,
				right: 0,
				bottom: 0,
			},
		}),

		// bold scope
		'&[scope=row]': {
			...TYPE.bodyFont[700],
		},
	};
};

const tdAttributes = () => null;

export const defaultTd = {
	component: Td,
	styles: tdStyles,
	attributes: tdAttributes,
};
