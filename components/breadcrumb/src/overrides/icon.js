import { jsx, useBrand, getLabel } from '@westpac/core';
import { ArrowRightIcon } from '@westpac/icon';

// ==============================
// Component
// ==============================

const Icon = ({ state: _, ...rest }) => {
	const { COLORS } = useBrand();

	return <ArrowRightIcon size="small" color={COLORS.link} assistiveText={null} {...rest} />;
};

const BlenderIcon = (props) => (
	<Icon
		overrides={{
			Icon: {
				styles: (styles) => {
					const blenderStyles = { ...styles };
					delete blenderStyles.label;
					return blenderStyles;
				},
			},
		}}
		{...props}
	/>
);

// ==============================
// Styles
// ==============================

const iconStyles = () => ({
	label: getLabel('breadcrumb-icon'),
	marginLeft: '0.1875rem',
	marginRight: '0.1875rem',
	verticalAlign: 'middle',
});

// ==============================
// Attributes
// ==============================

const iconAttributes = () => ({
	'aria-hidden': 'true',
});

// ==============================
// Exports
// ==============================

export const defaultIcon = {
	component: Icon,
	styles: iconStyles,
	attributes: iconAttributes,
};

export const blenderIcon = {
	component: BlenderIcon,
	styles: iconStyles,
	attributes: iconAttributes,
};
