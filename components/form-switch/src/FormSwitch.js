/** @jsx jsx */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme, paint } from '@westpac/core';

import { FormSwitchText, FormSwitchToggle } from './styled';

// ==============================
// Utils
// ==============================

// ==============================
// Component
// ==============================

export const FormSwitch = ({
	name,
	id,
	toggleText,
	size,
	block,
	flip,
	srOnlyText,
	defaultChecked,
	disabled,
	children,
	...props
}) => {
	const { formSwitch } = useTheme();

	const [checked, setChecked] = useState(defaultChecked);
	const toggle = () => setChecked(!checked);

	// Common styling
	const common = {
		position: 'relative',
		display: block ? 'flex' : 'inline-flex',
		flexWrap: 'wrap',
		verticalAlign: 'middle',
		marginRight: block ? null : formSwitch.marginRight,
		marginBottom: formSwitch.marginBottom,
		alignItems: 'center',
		width: block ? '100%' : null,
		flexDirection: flip ? 'row-reverse' : null,

		':hover': {
			cursor: 'pointer',
		},
	};

	return (
		<label htmlFor={id} css={common} onChange={toggle} {...props}>
			<input
				type="checkbox"
				css={{
					position: 'absolute',
					zIndex: -1,
					opacity: 0,
				}}
				name={name}
				id={id}
				defaultChecked={defaultChecked}
				disabled={disabled}
			/>
			{children && (
				<FormSwitchText block={block} flip={flip} size={size} srOnlyText={srOnlyText}>
					{children}
				</FormSwitchText>
			)}
			<FormSwitchToggle toggleText={toggleText} size={size} />
		</label>
	);
};

// ==============================
// Types
// ==============================

const options = {
	size: ['small', 'medium', 'large', 'xlarge'],
};

FormSwitch.propTypes = {
	/**
	 * The form switch input element’s name.
	 *
	 * This prop is required.
	 */
	name: PropTypes.string,

	/**
	 * The form switch input element’s id.
	 *
	 * This prop is required.
	 */
	id: PropTypes.string.isRequired,

	/**
	 * The form switch on/off text.
	 */
	toggleText: PropTypes.arrayOf(PropTypes.string),

	/**
	 * The form switch size.
	 *
	 * Defaults to "medium"
	 */
	size: PropTypes.oneOfType([
		PropTypes.oneOf(options.size),
		PropTypes.arrayOf(PropTypes.oneOf(options.size)),
	]),

	/**
	 * Block mode.
	 *
	 * Defaults to "false".
	 */
	block: PropTypes.bool,

	/**
	 * Flipped mode.
	 *
	 * Defaults to "false".
	 */
	flip: PropTypes.bool,

	/**
	 * Screen reader only text mode.
	 *
	 * Defaults to "false".
	 */
	srOnlyText: PropTypes.bool,

	/**
	 * Enable the form switch by default.
	 *
	 * Defaults to "false".
	 */
	defaultChecked: PropTypes.bool,

	/**
	 * The form switch is disaled.
	 *
	 * Defaults to "false".
	 */
	disabled: PropTypes.bool,

	/**
	 * Form check label text.
	 *
	 * This prop is required, but can be visually hidden by enabling "srOnlyText" mode.
	 */
	children: PropTypes.string.isRequired,
};

FormSwitch.defaultProps = {
	size: 'medium',
	toggleText: ['On', 'Off'],
	block: false,
	flip: false,
	srOnlyText: false,
	defaultChecked: false,
	disabled: false,
};
