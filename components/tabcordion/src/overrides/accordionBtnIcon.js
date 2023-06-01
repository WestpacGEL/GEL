import { ExpandLessIcon, ExpandMoreIcon } from '@westpac/icon';
import { jsx, useBrand, getLabel } from '@westpac/core';
import { Fragment } from 'react';

// ==============================
// Component
// ==============================

const AccordionBtnIcon = ({ state: { hidden }, ...rest }) => {
	const { COLORS } = useBrand();
	const Icon = hidden ? ExpandMoreIcon : ExpandLessIcon;

	return (
		<Icon copyrightYear="2020" color={COLORS.muted} size="small" assistiveText={null} {...rest} />
	);
};

const BlenderAccordionBtnIcon = (props) => {
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
							blenderStyles.label = `tabcordion-accordionBtn-icon`;
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

const accordionBtnIconStyles = () => ({});

// ==============================
// Attributes
// ==============================

const accordionBtnIconAttributes = () => ({ 'aria-hidden': 'true' });

// ==============================
// Exports
// ==============================

export const defaultAccordionBtnIcon = {
	component: AccordionBtnIcon,
	styles: accordionBtnIconStyles,
	attributes: accordionBtnIconAttributes,
};

export const blenderAccordionBtnIcon = {
	component: BlenderAccordionBtnIcon,
	styles: accordionBtnIconStyles,
	attributes: accordionBtnIconAttributes,
};
