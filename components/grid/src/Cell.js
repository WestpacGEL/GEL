/** @jsx jsx */

import PropTypes from 'prop-types';
import { jsx } from '@westpac/core';
import { mqValues } from '@westpac/media-queries';

const span = n => `span ${n}`;
const getColEnd = c => (Array.isArray(c) ? c.map(span) : span(c));

export const Cell = ({ area, center, height, left, middle, top, width, ...props }) => (
	<div
		css={mqValues({
			height: '100%',
			minWidth: 0,
			gridColumnEnd: getColEnd(width),
			gridRowEnd: `span ${height}`,
			gridColumnStart: left,
			gridRowStart: top,
			gridArea: area,
		})}
		{...props}
	/>
);

Cell.propTypes = {
	/**
	 * The `grid-area` that this cell belongs to (if any).
	 */
	area: PropTypes.string,
	/**
	 * The cell height in units. When using an array the units are applied to the applicable breakpoints.
	 */
	height: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),
	/**
	 * The `grid-column-start` CSS property.
	 */
	left: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	/**
	 * The `grid-row-start` CSS property.
	 */
	top: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	/**
	 * The cell width in units. When using an array the units are applied to the applicable breakpoints.
	 */
	width: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),
};
Cell.defaultProps = {
	height: 1,
	width: 1,
};
