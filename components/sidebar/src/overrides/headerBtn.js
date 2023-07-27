import { jsx, useBrand, getLabel } from '@westpac/core';
import { Button } from '@westpac/button';
import { MoreVertIcon } from '@westpac/icon';

// ==============================
// Component
// ==============================

const VerticalIcon = (props) => {
	const { COLORS } = useBrand();
	return <MoreVertIcon {...props} color={COLORS.primary} />;
};

const HeaderBtn = ({ state: _, ...rest }) => (
	<Button look="link" size="small" iconAfter={VerticalIcon} {...rest} />
);

// ==============================
// Styles
// ==============================

const headerBtnStyles = () => {
	const { COLORS } = useBrand();
	return { label: getLabel('sidebar-header-btn'), color: COLORS.text, textDecoration: 'none' };
};

// ==============================
// Attributes
// ==============================

const headerBtnAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultHeaderBtn = {
	component: HeaderBtn,
	styles: headerBtnStyles,
	attributes: headerBtnAttributes,
};
