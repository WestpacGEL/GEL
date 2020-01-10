/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';

import { Text as TextWrapper, textStyles } from './overrides/text';
import { Wrapper, wrapperStyles } from './overrides/wrapper';
import pkg from '../package.json';
import { Right } from './Right';
import { Left } from './Left';

// ==============================
// Component
// ==============================

/**
 * Input Group
 */
export const InputGroup = ({
	name,
	size,
	data,
	invalid,
	disabled,
	readOnly,
	children,
	value,
	defaultValue,
	look,
	overrides: componentOverrides,
	...rest
}) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		styles: wrapperStyles,
		component: Wrapper,
		attributes: state => state,

		subComponent: {
			Text: {
				styles: textStyles,
				component: TextWrapper,
				attributes: state => state,
			},
		},
	};

	const state = {
		name,
		size,
		data,
		invalid,
		disabled,
		readOnly,
		value,
		defaultValue,
		look,
		overrides: componentOverrides,
		...rest,
	};

	const overrides = overrideReconciler(
		defaultOverrides,
		tokenOverrides,
		brandOverrides,
		componentOverrides,
		state
	);

	let added = false;
	const childrenWithProps = [];
	const length = Children.count(children);

	if (data) {
		const { left, right } = data;

		if (left) {
			childrenWithProps.push(
				<Left
					key="left"
					look={look}
					disabled={disabled}
					size={size}
					overrides={componentOverrides}
					{...left}
				/>
			);
		}
		childrenWithProps.push(
			<overrides.subComponent.Text.component
				key="textinput1"
				left={!!left}
				right={!!right}
				overrides={componentOverrides}
				css={overrides.subComponent.Text.styles}
				{...overrides.subComponent.Text.attributes(state)}
			/>
		);
		if (right) {
			childrenWithProps.push(
				<Right
					key="right"
					look={look}
					disabled={disabled}
					size={size}
					overrides={componentOverrides}
					{...right}
				/>
			);
		}
	} else {
		Children.map(children, child => {
			if (child.type.name === 'Left' && !added) {
				childrenWithProps.push(
					cloneElement(child, { look, size, disabled, overrides: componentOverrides, key: 'left' })
				);
				childrenWithProps.push(
					<overrides.subComponent.Text.component
						key="textinput1"
						left={true}
						right={length > 1}
						overrides={componentOverrides}
						css={overrides.subComponent.Text.styles}
						{...overrides.subComponent.Text.attributes(state)}
					/>
				);
				added = true;
			} else if (child.type.name === 'Right' && !added) {
				childrenWithProps.push(
					<overrides.subComponent.Text.component
						key="textinput2"
						left={false}
						right={true}
						overrides={componentOverrides}
						css={overrides.subComponent.Text.styles}
						{...overrides.subComponent.Text.attributes(state)}
					/>
				);
				childrenWithProps.push(
					cloneElement(child, { look, size, disabled, overrides: componentOverrides, key: 'right' })
				);
				added = true;
			} else {
				childrenWithProps.push(
					cloneElement(child, { look, size, disabled, overrides: componentOverrides, key: 'other' })
				);
			}
		});
	}

	return (
		<overrides.component css={overrides.styles} {...overrides.attributes(state)}>
			{childrenWithProps}
		</overrides.component>
	);
};

// ==============================
// Types
// ==============================

InputGroup.propTypes = {
	/**
	 * The name of the input field
	 */
	name: PropTypes.string,

	/**
	 * InputGroup size
	 */
	size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']).isRequired,

	/**
	 * Data driven
	 */
	data: PropTypes.shape({
		left: PropTypes.shape({
			type: PropTypes.oneOf(['label', 'button', 'select']).isRequired,
			data: PropTypes.oneOfType([PropTypes.array, PropTypes.string]).isRequired,
			onClick: PropTypes.func,
		}),
		right: PropTypes.shape({
			type: PropTypes.oneOf(['label', 'button', 'select']).isRequired,
			data: PropTypes.oneOfType([PropTypes.array, PropTypes.string]).isRequired,
			onClick: PropTypes.func,
		}),
	}),

	/**
	 * Invalid input mode
	 */
	invalid: PropTypes.bool.isRequired,

	/**
	 * Disabled input mode
	 */
	disabled: PropTypes.bool.isRequired,

	/**
	 * InputGroup children
	 */
	children: PropTypes.node,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		styles: PropTypes.func,
		component: PropTypes.elementType,
		attributes: PropTypes.object,
		subComponent: PropTypes.shape({
			Text: PropTypes.shape({
				styles: PropTypes.func,
				component: PropTypes.elementType,
				attributes: PropTypes.object,
			}),
			Button: PropTypes.shape({
				styles: PropTypes.func,
				component: PropTypes.elementType,
				attributes: PropTypes.object,
			}),
			Label: PropTypes.shape({
				styles: PropTypes.func,
				component: PropTypes.elementType,
				attributes: PropTypes.object,
			}),
			Select: PropTypes.shape({
				styles: PropTypes.func,
				component: PropTypes.elementType,
				attributes: PropTypes.object,
			}),
		}),
	}),
};

InputGroup.defaultProps = {
	size: 'medium',
	invalid: false,
	disabled: false,
};
