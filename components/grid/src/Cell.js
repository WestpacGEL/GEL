import PropTypes from 'prop-types';
import { styled } from '@westpac/core';
import { mqValues } from '@westpac/media-queries';

const span = n => `span ${n}`;
const getColEnd = c => (Array.isArray(c) ? c.map(span) : span(c));

export const Cell = styled.div(({ area, center, height, left, middle, top, width }) =>
	mqValues({
		height: '100%',
		minWidth: 0,
		gridColumnEnd: getColEnd(width),
		gridRowEnd: `span ${height}`,
		gridColumnStart: left,
		gridRowStart: top,
		gridArea: area,
	})
);

Cell.propTypes = {
	area: PropTypes.string,
	height: PropTypes.number,
	left: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	top: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	width: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),
};
Cell.defaultProps = {
	height: 1,
	width: 1,
};
