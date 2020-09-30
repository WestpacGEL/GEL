/** @jsx jsx */
import { jsx, useMediaQuery, useBrand } from '@westpac/core';
import PropTypes from 'prop-types';

// ==============================
// Component
// ==============================

export const Section = ({ size = 'medium', light, ...rest }) => {
	const mq = useMediaQuery();
	const { SPACING, COLORS } = useBrand();

	const paddingMap = {
		medium: [SPACING(7), null, SPACING(10)],
		large: [SPACING(7), null, SPACING(15)],
	};

	return (
		<section
			css={mq({
				paddingTop: paddingMap[size],
				paddingBottom: paddingMap[size],
				backgroundColor: light && '#fff',
				'& + &': {
					borderTop: `1px solid ${COLORS.border}`,
				},
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
