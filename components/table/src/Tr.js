/** @jsx jsx */

import PropTypes from 'prop-types';
import { jsx, useBrand } from '@westpac/core';

// ==============================
// Component
// ==============================

export const Tr = ({ striped, highlighted, ...props }) => {
	const { COLORS, TYPE } = useBrand();

	return (
		<tr
			css={{
				transition: !striped && 'background 0.2s ease',
				borderLeft: highlighted ? `6px solid ${COLORS.primary}` : 0,
				borderBottom: highlighted ? `1px solid ${COLORS.primary}` : `1px solid ${COLORS.border}`,
				// Hovered row
				':hover': {
					backgroundColor: !striped && COLORS.background,
				},
			}}
			{...props}
		/>
	);
};

// ==============================
// Types
// ==============================

Tr.propTypes = {
	/**
	 * Highlighted mode
	 */
	highlighted: PropTypes.bool,
};

Tr.defaultProps = {
	highlighted: false,
};
