import { jsx, useMediaQuery, useBrand } from '@westpac/core';
import PropTypes from 'prop-types';

// ==============================
// Component
// ==============================

export const Section = ({
	tag: Tag = 'section',
	paddingTop = 'medium',
	paddingBottom = 'medium',
	light,
	...rest
}) => {
	const mq = useMediaQuery();
	const { SPACING, COLORS } = useBrand();

	const paddingMap = {
		medium: [SPACING(7), null, SPACING(10)],
		large: [SPACING(7), null, SPACING(15)],
	};

	return (
		<Tag
			css={mq({
				paddingTop: paddingMap[paddingTop],
				paddingBottom: paddingMap[paddingBottom],
				backgroundColor: light && '#fff',
				borderBottom: `1px solid ${COLORS.border}`,

				':last-child': {
					borderBottom: 0,
				},
				'.slate-container &:first-of-type': {
					paddingTop: paddingMap.large,
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
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]).isRequired,
	paddingTop: PropTypes.oneOf(['medium', 'large']).isRequired,
	paddingBottom: PropTypes.oneOf(['medium', 'large']).isRequired,
	light: PropTypes.bool.isRequired,
};
