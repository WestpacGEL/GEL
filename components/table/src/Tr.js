/** @jsx jsx */

import { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { jsx, useBrand } from '@westpac/core';

// ==============================
// Utils
// ==============================
const generateHighlightMap = (highlighted, tdCount) => {
	const map = Array(tdCount).fill(false);

	highlighted.forEach(highlight => {
		if (typeof highlight === 'number') {
			map[highlight] = true;
		} else if (Array.isArray(highlight)) {
			map.fill(true, highlight[0], highlight[1] + 1);
		}
	});

	return map;
};

// ==============================
// Component
// ==============================

export const Tr = ({ striped, highlighted, children, ...props }) => {
	const { COLORS } = useBrand();

	let highlightedChildren;

	if (Array.isArray(highlighted)) {
		const highlightMap = generateHighlightMap(highlighted, Children.count(children));

		highlightedChildren = Children.map(children, (child, index) => {
			if (highlightMap[index] === true) {
				if (index === 0 || highlightMap[index - 1] === false) {
					return cloneElement(child, { highlightStart: true, highlighted: true });
				} else {
					return cloneElement(child, { highlighted: true });
				}
			} else {
				return child;
			}
		});
	}

	return (
		<tr
			css={{
				transition: !striped && 'background 0.2s ease',
				borderLeft:
					typeof highlighted === 'boolean' && highlighted ? `6px solid ${COLORS.primary}` : 0,
				borderBottom:
					typeof highlighted === 'boolean' && highlighted
						? `1px solid ${COLORS.primary}`
						: `1px solid ${COLORS.border}`,
				// Hovered row
				':hover': {
					backgroundColor: !striped && COLORS.background,
				},
			}}
			{...props}
		>
			{highlightedChildren || children}
		</tr>
	);
};

// ==============================
// Types
// ==============================

Tr.propTypes = {
	/**
	 * Highlighted mode
	 */
	// highlighted: PropTypes.bool,
};

Tr.defaultProps = {
	// highlighted: false,
};
