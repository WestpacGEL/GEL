import { jsx, getLabel, useMediaQuery } from '@westpac/core';

// ==============================
// Component
// ==============================

const TitleTertiary = ({ state: _, ...rest }) => <span {...rest} />;

// ==============================
// Styles
// ==============================

const titleTertiaryStyles = () => {
	const mq = useMediaQuery();
	return mq({
		label: getLabel('compacta-titleTertiary'),
		flex: ['1 100%', null, '1'],
		marginTop: '0.125rem',
		marginRight: '0.75rem',
		overflow: 'hidden',
		whiteSpace: 'nowrap',
		textOverflow: 'ellipsis',
	})[0];
};

// ==============================
// Attributes
// ==============================

const titleTertiaryAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultTitleTertiary = {
	component: TitleTertiary,
	styles: titleTertiaryStyles,
	attributes: titleTertiaryAttributes,
};
