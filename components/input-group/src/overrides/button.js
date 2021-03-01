/** @jsx jsx */

import { jsx, getLabel, classNames } from '@westpac/core';
import { Button as ButtonInput } from '@westpac/button';

// ==============================
// Component
// ==============================

const Button = ({ state: { size }, ...rest }) => <ButtonInput size={size} {...rest} />;

const BlenderButton = (props) => {
	const {
		state: { position },
	} = props;

	return (
		<Button
			overrides={{
				Button: {
					attributes: (attributes) => {
						if (attributes) {
							attributes.className = attributes.className.concat(
								' ',
								classNames({
									[`__convert__inputGroup-button-before`]: position === 'before',
									[`__convert__inputGroup-button-after`]: position === 'after',
								})
							); // unable to use attributes below since there is already a className being passed as part of the blender button
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

const buttonStyles = (_, { position }) => ({
	label: getLabel(`inputGroup-button-${position}`),
	boxSizing: 'border-box',
	position: 'relative',
	zIndex: 1,

	...(!(position === 'before') && {
		borderTopLeftRadius: 0,
		borderBottomLeftRadius: 0,
		marginLeft: -1,
	}),
	...(!(position === 'after') && {
		borderTopRightRadius: 0,
		borderBottomRightRadius: 0,
		marginRight: -1,
	}),
});

// ==============================
// Blender Styles
// ==============================

const blenderStyles = (_, { position }) => {
	const { label, ...styles } = buttonStyles(_, { position });
	return { label, 'button&': styles }; // need to increase specificity
};

// ==============================
// Attributes
// ==============================

const buttonAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultButton = {
	component: Button,
	styles: buttonStyles,
	attributes: buttonAttributes,
};

export const blenderButton = {
	component: BlenderButton,
	styles: blenderStyles,
	attributes: buttonAttributes,
};
