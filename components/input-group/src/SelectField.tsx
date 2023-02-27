import PropTypes from 'prop-types';
import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import React, { Fragment } from 'react';

import { VisuallyHidden } from '@westpac/a11y';

import { defaultSelect } from './overrides/select';

import { useInputGroupContext } from './InputGroup';
import pkg from '../package.json';

export interface SelectFieldProps {
	/**
	 * Size
	 */
	size?: string[] | 'small' | 'medium' | 'large' | 'xlarge';
	/**
	 * The instance ID for the label and select
	 */
	instanceId: string;
	/**
	 * What position this component is at
	 */
	position: 'before' | 'after';
	/**
	 * The visually hidden label text for the select
	 */
	label: string;
	/**
	 * The content of the component
	 */
	data: unknown[];
	/**
	 * The override API
	 */
	overrides?: {
		SelectField?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
	};
}

// ==============================
// Component
// ==============================

export const SelectField = ({
	instanceId,
	position,
	label,
	data,
	overrides,
	size = 'medium',
	...rest
}: SelectFieldProps) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const context = useInputGroupContext();

	const defaultOverrides = {
		Select: defaultSelect,
	};

	const componentOverrides = overrides || context.state.overrides;

	const state = {
		instanceId,
		position,
		label,
		data,
		context: context.state,
		overrides: componentOverrides,
		size,
		...rest,
	};

	const {
		Select: { component: Select, styles: selectStyles, attributes: selectAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<Fragment>
			{label && (
				<VisuallyHidden tag="label" htmlFor={instanceId}>
					{label}
				</VisuallyHidden>
			)}
			<Select {...rest} state={state} {...selectAttributes(state)} css={selectStyles(state)} />
		</Fragment>
	);
};

SelectField.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn prop-types"  |
	// ----------------------------------------------------------------------
	/**
	 * The content of the component
	 */
	data: PropTypes.array.isRequired,
	/**
	 * The instance ID for the label and select
	 */
	instanceId: PropTypes.string.isRequired,
	/**
	 * The visually hidden label text for the select
	 */
	label: PropTypes.string.isRequired,
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		SelectField: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
	}),
	/**
	 * What position this component is at
	 */
	position: PropTypes.oneOf(['after', 'before']).isRequired,
	/**
	 * Size
	 */
	size: PropTypes.oneOfType([
		PropTypes.oneOf(['large', 'medium', 'small', 'xlarge']),
		PropTypes.arrayOf(PropTypes.string),
	]),
};

SelectField.defaultProps = { size: 'medium' };
