/** @jsx jsx */

import { jsx, useBrand, useMediaQuery, merge } from '@westpac/core';
import PropTypes from 'prop-types';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const Well = props => {
	const { COLORS, [pkg.name]: brandOverwrites } = useBrand();
	const mq = useMediaQuery();

	const overwrites = {
		css: {},
	};
	merge(overwrites, brandOverwrites);

	return (
		<div
			css={mq({
				padding: ['0.75rem', '1.5rem'],
				marginBottom: '1.125rem',
				backgroundColor: COLORS.light,
				border: `1px solid ${COLORS.border}`,
				borderRadius: '0.1875rem',

				// Nested Well styling
				'& &': {
					backgroundColor: '#fff',
					margin: '0.75rem 0',
				},
				...overwrites.css,
			})}
			{...props}
		/>
	);
};

// ==============================
// Types
// ==============================

Well.propTypes = {
	/**
	 * Well content
	 */
	children: PropTypes.node,
};

Well.defaultProps = {};
