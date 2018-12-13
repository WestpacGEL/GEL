import PropTypes from 'prop-types';
import { styled } from '@westpac/core';

export const Cell = styled.div(({ area, center, height, left, middle, top, width }) => ({
	height: '100%',
	minWidth: 0,
	gridColumnEnd: `span ${width}`,
	gridRowEnd: `span ${height}`,
	gridColumnStart: left,
	gridRowStart: top,
	gridArea: area,
}));

Cell.propTypes = {
	area: PropTypes.string,
	height: PropTypes.number,
	left: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	top: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	width: PropTypes.number,
};
Cell.defaultProps = {
	height: 1,
	width: 1,
};
