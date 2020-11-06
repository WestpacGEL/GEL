/** @jsx jsx */

import { Fragment } from 'react';
import { jsx, useBrand, getLabel } from '@westpac/core';
import { ExpandLessIcon, ExpandMoreIcon } from '@westpac/icon';

// ==============================
// Component
// ==============================

const AccordionButtonIcon = ({ state: { hidden }, ...rest }) => {
	const { COLORS } = useBrand();
	const Icon = hidden ? ExpandMoreIcon : ExpandLessIcon;

	return <Icon color={COLORS.muted} size="small" assistiveText={null} {...rest} />;
};

const BlenderAccordionButtonIcon = (props) => {
	const { COLORS } = useBrand();

	return (
		<Fragment>
			<ExpandMoreIcon
				color={COLORS.muted}
				size="small"
				assistiveText={null}
				overrides={{
					Icon: {
						styles: (styles) => {
							const blenderStyles = { ...styles };
							blenderStyles.label = `tabcordion-accordion-btn-icon`;
							return blenderStyles;
						},
					},
				}}
				{...props}
			/>
		</Fragment>
	);
};

// ==============================
// Styles
// ==============================

const accordionButtonIconStyles = () => ({});

// ==============================
// Attributes
// ==============================

const accordionButtonIconAttributes = () => ({ 'aria-hidden': 'true' });

// ==============================
// Exports
// ==============================

export const defaultAccordionButtonIcon = {
	component: AccordionButtonIcon,
	styles: accordionButtonIconStyles,
	attributes: accordionButtonIconAttributes,
};

export const blenderAccordionButtonIcon = {
	component: BlenderAccordionButtonIcon,
	styles: accordionButtonIconStyles,
	attributes: accordionButtonIconAttributes,
};
