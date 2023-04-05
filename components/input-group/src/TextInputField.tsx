import PropTypes from 'prop-types';
import { useBrand, overrideReconciler } from '@westpac/core';
import React, { forwardRef, Fragment, HTMLProps, ReactNode } from 'react';

import { defaultTextInput } from './overrides/textInput';

import { VisuallyHidden } from '@westpac/a11y';

import pkg from '../package.json';

interface TextInputFieldProps extends Omit<HTMLProps<HTMLInputElement>, 'label' | 'size'> {
	/**
	 * label
	 */
	label?: ReactNode;
	/**
	 * before
	 */
	before?: boolean;
	/**
	 * after
	 */
	after?: boolean;
	/**
	 * Invalid
	 */
	invalid?: boolean;
	/**
	 * Aria Invalid
	 */
	'aria-invalid'?: boolean;
	/**
	 * Size
	 */
	instanceId?: string;
	/**
	 * Size
	 */
	size?: string;
	/**
	 * The override API
	 */
	overrides?: {
		TextInputField?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
	};
}

// ==============================
// Component
// ==============================

export const TextInputField = forwardRef<HTMLInputElement, TextInputFieldProps>(
	({ instanceId, label, before, after, overrides, size = 'medium', ...rest }, ref) => {
		const {
			OVERRIDES: { [pkg.name]: tokenOverrides },
			[pkg.name]: brandOverrides,
		} = useBrand();

		const defaultOverrides = {
			TextInput: defaultTextInput,
		};

		const componentOverrides = overrides;

		const state = {
			instanceId,
			label,
			before,
			after,
			overrides: componentOverrides,
			size,
			...rest,
		};

		const {
			TextInput: { component: TextInput, styles: textInputStyles, attributes: textInputAttributes },
		} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

		return (
			<Fragment>
				{label && (
					<VisuallyHidden tag="label" htmlFor={instanceId}>
						{label}
					</VisuallyHidden>
				)}
				<TextInput
					{...rest}
					size={size}
					state={state}
					{...textInputAttributes(state)}
					css={textInputStyles(state)}
					ref={ref}
				/>
			</Fragment>
		);
	}
);
TextInputField.displayName = 'TextInputField';

TextInputField.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn prop-types"  |
	// ----------------------------------------------------------------------
	/**
	 * after
	 */
	after: PropTypes.bool,
	/**
	 * before
	 */
	before: PropTypes.bool,
	/**
	 * Size
	 */
	instanceId: PropTypes.string,
	/**
	 * label
	 */
	label: PropTypes.node,
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		TextInputField: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
	}),
	/**
	 * Size
	 */
	size: PropTypes.string,
};
