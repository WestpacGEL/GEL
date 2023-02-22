import { jsx, getLabel } from '@westpac/core';
import { Heading } from '@westpac/heading';
// ==============================
// Component
// ==============================

const SidebarHeading = ({ state: _, ...rest }) => <Heading tag="h4" size={10} {...rest} />;

// ==============================
// Styles
// ==============================

const sidebarHeadingStyles = () => ({ label: getLabel('sidebar-heading'), fontWeight: 'normal' });

// ==============================
// Attributes
// ==============================

const sidebarHeadingAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultSidebarHeading = {
	component: SidebarHeading,
	styles: sidebarHeadingStyles,
	attributes: sidebarHeadingAttributes,
};
