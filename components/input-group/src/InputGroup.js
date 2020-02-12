/** @jsx jsx */

import { jsx, useBrand, overrideReconciler, devWarning } from '@westpac/core';
import { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';

import { InputGroup as InputGroupWrapper, inputGroupStyles } from './overrides/inputGroup';
import { Text as TextWrapper, textStyles } from './overrides/text';
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
	look,
	children,
	overrides: componentOverrides,
	...rest
}) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		InputGroup: {
			styles: inputGroupStyles,
			component: InputGroupWrapper,
			attributes: () => null,
		},
		Text: {
			styles: textStyles,
			component: TextWrapper,
			attributes: () => null,
		},
	};

	const state = {
		name,
		size,
		data,
		invalid,
		disabled,
		readOnly,
		look,
		overrides: componentOverrides,
		...rest,
	};

	const overrides = overrideReconciler(
		defaultOverrides,
		tokenOverrides,
		brandOverrides,
		componentOverrides
	);

	let textFieldAdded = false;
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
			<overrides.Text.component
				key="textinput1"
				name={name}
				size={size}
				data={data}
				invalid={invalid}
				disabled={disabled}
				readOnly={readOnly}
				look={look}
				left={!!left}
				right={!!right}
				{...rest}
				css={overrides.Text.styles({ ...state, left: !!left, right: !!right })}
				{...overrides.Text.attributes({ ...state, left: !!left, right: !!right })}
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
			if (child.type.name === 'Left' && !textFieldAdded) {
				childrenWithProps.push(
					cloneElement(child, { look, size, disabled, overrides: componentOverrides, key: 'left' })
				);
				childrenWithProps.push(
					<overrides.Text.component
						key="textinput1"
						name={name}
						size={size}
						data={data}
						invalid={invalid}
						disabled={disabled}
						readOnly={readOnly}
						look={look}
						left={true}
						right={length > 1}
						{...rest}
						css={overrides.Text.styles({ ...state, left: true, right: length > 1 })}
						{...overrides.Text.attributes({ ...state, left: true, right: length > 1 })}
					/>
				);
				textFieldAdded = true;
			} else if (child.type.name === 'Right' && !textFieldAdded) {
				childrenWithProps.push(
					<overrides.Text.component
						key="textinput2"
						name={name}
						size={size}
						data={data}
						invalid={invalid}
						disabled={disabled}
						readOnly={readOnly}
						look={look}
						left={false}
						right={true}
						{...rest}
						css={overrides.Text.styles({ ...state, left: false, right: true })}
						{...overrides.Text.attributes({ ...state, left: false, right: true })}
					/>
				);
				childrenWithProps.push(
					cloneElement(child, { look, size, disabled, overrides: componentOverrides, key: 'right' })
				);
				textFieldAdded = true;
			} else if (child.type.name === 'Right' || child.type.name === 'Left') {
				childrenWithProps.push(
					cloneElement(child, { look, size, disabled, overrides: componentOverrides, key: 'other' })
				);
			} else {
				devWarning(
					true,
					`The input-group only accepts a Left or Right component as children. But found "<${child
						.type.name || child.type}/>"`
				);
			}
		});
	}

	return (
		<overrides.InputGroup.component
			name={name}
			size={size}
			data={data}
			invalid={invalid}
			disabled={disabled}
			readOnly={readOnly}
			look={look}
			{...overrides.InputGroup.attributes(state)}
			css={overrides.InputGroup.styles(state)}
		>
			{childrenWithProps}
		</overrides.InputGroup.component>
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
	 * Read only mode
	 */
	readOnly: PropTypes.bool,

	/**
	 * The look of the component
	 */
	look: PropTypes.oneOf(['primary', 'hero', 'faint']),

	/**
	 * InputGroup children
	 */
	children: PropTypes.node,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		InputGroup: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Text: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Button: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Label: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Select: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};

InputGroup.defaultProps = {
	size: 'medium',
	invalid: false,
	disabled: false,
};
