/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';

const Td = ({ state, ...rest }) => <td {...rest} />;

const tdStyles = (_, { highlighted, highlightStart, bordered }) => {
	const { COLORS, TYPE } = useBrand();

	return {
		padding: '0.75rem',
		verticalAlign: 'top',
		borderLeft: highlightStart ? `6px solid ${COLORS.primary}` : 0,
		borderBottom: highlighted ? `2px solid ${COLORS.primary}` : 0, //a11y: must be thicker than default border (cannot use colour alone)
		border: bordered && `1px solid ${COLORS.border}`,
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
