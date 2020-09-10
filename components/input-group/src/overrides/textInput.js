/** @jsx jsx */

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
// button and select only take a position prop which so we only need button/select-before/after
// textInput is similar but takes before and after as props directly but still only needs to generate textInput-before/after
// for these components we have to pass className of before/after only we dont need the base one since there is no base one

// text takes size and position prop is most like other components
// classes should be .text, text-before, text-after, text-size
// I can't generate .text
// actually I can, Im just going to pass position: null to override the one already there
// problem here is generating before/after classes? on the component nah I can just use regular attributes here

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
