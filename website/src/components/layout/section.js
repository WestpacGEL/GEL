/** @jsx jsx */
import { jsx, useMediaQuery, useBrand } from '@westpac/core';
import PropTypes from 'prop-types';

// ==============================
// Component
// ==============================

export const Section = ({ bgFill, ...rest }) => {
	const mq = useMediaQuery();
	const { SPACING, COLORS } = useBrand();

	return (
		<section
			css={mq({
				paddingTop: [SPACING(7), '5.625rem'],
				paddingBottom: [SPACING(7), '5.625rem'],
				backgroundColor: bgFill && COLORS.background,
			})}
			{...rest}
		/>
	);
};

// ==============================
// Types
// ==============================

Section.propTypes = {
	bgFill: PropTypes.bool.isRequired,
};

Section.defaultProps = {
	bgFill: false,
};
