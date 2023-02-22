import { jsx, getLabel, classNames } from '@westpac/core';
import { Select as SelectInput } from '@westpac/text-input';

// ==============================
// Component
// ==============================

const Select = ({ state: { size, data }, ...rest }) => (
	<SelectInput size={size} data={data} {...rest} />
);

const BlenderSelect = (props) => {
	const {
		state: { position },
	} = props;
	return (
		<Select
			overrides={{
				Select: {
					attributes: (attributes) => {
						if (attributes) {
							attributes.className = attributes.className.concat(
								' ',
								classNames({
									[`__convert__inputGroup-select-before`]: position === 'before',
									[`__convert__inputGroup-select-after`]: position === 'after',
								})
							); // unable to use attributes below since there is already a className being passed as part of the blender select
						}
						return attributes;
					},
				},
			}}
			{...props}
		/>
	);
};
// ==============================
// Styles
// ==============================

const selectStyles = (_, { position }) => {
	return {
		label: getLabel(`inputGroup-select-${position}`),
		boxSizing: 'border-box',
		position: 'relative',
		zIndex: 1,
		width: 'auto',

		...(position === 'after' && {
			borderTopLeftRadius: 0,
			borderBottomLeftRadius: 0,
			marginLeft: -1,
		}),
		...(position === 'before' && {
			borderTopRightRadius: 0,
			borderBottomRightRadius: 0,
			marginRight: -1,
		}),
	};
};

// ==============================
// Blender Styles
// ==============================

const blenderStyles = (_, { position }) => {
	const { label, ...styles } = selectStyles(_, { position });
	return { label, 'select&': styles }; // need to increase specificity
};

// ==============================
// Attributes
// ==============================

const selectAttributes = (_, { instanceId }) => ({ id: instanceId });

// ==============================
// Exports
// ==============================

export const defaultSelect = {
	component: Select,
	styles: selectStyles,
	attributes: selectAttributes,
};

export const blenderSelect = {
	component: BlenderSelect,
	styles: blenderStyles,
	attributes: selectAttributes,
};
