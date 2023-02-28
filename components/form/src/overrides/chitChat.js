import { jsx, useBrand, useMediaQuery, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const ChitChat = ({ state: { tag: Tag }, ...rest }) => <Tag {...rest} />;

// ==============================
// Styles
// ==============================

const chitChatStyles = () => {
	const mq = useMediaQuery();
	const { COLORS, TYPE } = useBrand();

	return mq({
		label: getLabel('form-chit-chat'),
		fontSize: '1.125rem',
		color: COLORS.heading,
		lineHeight: 1.4,
		textAlign: 'center',
		margin: [0, '0 0 1.875rem'],
		...TYPE.bodyFont[700],
	})[0];
};

// ==============================
// Attributes
// ==============================

const chitChatAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultChitChat = {
	component: ChitChat,
	styles: chitChatStyles,
	attributes: chitChatAttributes,
};
