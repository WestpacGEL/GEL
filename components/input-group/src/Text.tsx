/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { defaultText } from './overrides/text';

import { useInputGroupContext } from './InputGroup';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const Text = ({
	instanceId,
	position,
	size,
	data,
	overrides,
	...rest
}: typeof Text.propTypes & typeof Text.defaultProps) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const context = useInputGroupContext();

	const defaultOverrides = {
		Text: defaultText,
	};

	const componentOverrides = overrides || context.state.overrides;

	const state = {
		position,
		size,
		data,
		context: context.state,
		overrides: componentOverrides,
		...rest,
	};

	const {
		Text: { component: Text, styles: textStyles, attributes: textAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<Text {...rest} state={state} {...textAttributes(state)} css={textStyles(state)}>
			{data}
		</Text>
	);
};

// ==============================
// Types
// ==============================

Text.propTypes = {
	/**
	 * What position this component is at
	 * note: 'none' is only for blender use
	 */
	position: PropTypes.oneOf(['before', 'after', 'none']).isRequired,

	/**
	 * What size the button-group is
	 */
	size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']).isRequired,

	/**
	 * The content of the component
	 */
	data: PropTypes.string.isRequired,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Text: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};

export const defaultProps = {
	size: 'medium',
};

Text.defaultProps = defaultProps;
