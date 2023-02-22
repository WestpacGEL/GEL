import { jsx, getLabel, classNames } from '@westpac/core';
import { TextInput as Input } from '@westpac/text-input';

// ==============================
// Component
// ==============================

const TextInput = ({ state: { size }, ...rest }) => <Input size={size} {...rest} />;

const BlenderTextInput = (props) => {
	const {
		state: { before, after },
	} = props;
	return (
		<TextInput
			overrides={{
				TextInput: {
					attributes: (attributes) => {
						if (attributes) {
							attributes.className = attributes.className.concat(
								' ',
								classNames({
									[`__convert__inputGroup-textInput-before`]: before && !after,
									[`__convert__inputGroup-textInput-middle`]: before && after,
									[`__convert__inputGroup-textInput-after`]: after && !before,
								})
							); // unable to use attributes below since there is already a className being passed as part of the blender text input
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

const textInputStyles = (_, { before, after }) => {
	const modifier = before && after ? 'middle' : before ? 'before' : 'after'; // for blender

	return {
		label: getLabel(`inputGroup-textInput-${modifier}`),
		boxSizing: 'border-box',
		position: 'relative',
		zIndex: 0,

		...(before && {
			borderTopLeftRadius: 0,
			borderBottomLeftRadius: 0,
		}),
		...(after && {
			borderTopRightRadius: 0,
			borderBottomRightRadius: 0,
		}),
	};
};

// ==============================
// Blender Styles
// ==============================

const blenderStyles = (_, { before, after }) => {
	const { label, ...styles } = textInputStyles(_, { before, after });
	return { label, 'input&': styles }; // need to increase specificity
};

// ==============================
// Attributes
// ==============================

const textInputAttributes = (_, { instanceId }) => ({
	id: instanceId,
});

// ==============================
// Exports
// ==============================

export const defaultTextInput = {
	component: TextInput,
	styles: textInputStyles,
	attributes: textInputAttributes,
};

export const blenderTextInput = {
	component: BlenderTextInput,
	styles: blenderStyles,
	attributes: textInputAttributes,
};
