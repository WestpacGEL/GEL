/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { Wrapper, wrapperStyles } from './overrides/wrapper';
import { Content } from './Content';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const Button = ({
	look,
	size,
	soft,
	block,
	iconAfter,
	iconBefore,
	justify,
	disabled,
	assistiveText,
	tag,
	onClick,
	children,
	overrides: componentOverrides,
	...rest
}) => {
	const {
		COLORS,
		TYPE,
		BRAND,
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	// We don't support soft links, so don't want them to cause styling issues
	if (soft && look === 'link') soft = false;

	if (rest.href) {
		tag = 'a';
	}

	const defaultOverrides = {
		styles: wrapperStyles,
		component: Wrapper,
		attributes: state => state,
	};

	const state = {
		look,
		size,
		soft,
		block,
		iconAfter,
		iconBefore,
		justify,
		disabled,
		assistiveText,
		tag,
		onClick,
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

	return (
		<overrides.component
			css={overrides.styles}
			{...overrides.attributes(state)}
			type={tag === 'button' ? 'button' : undefined}
			disabled={disabled}
			aria-label={assistiveText}
			onClick={onClick}
		>
			{/* `<input>` elements cannot have children; they would use a `value` prop) */}
			{tag !== 'input' ? (
				<Content size={size} block={block} iconAfter={iconAfter} iconBefore={iconBefore}>
					{children}
				</Content>
			) : null}
		</overrides.component>
	);
};

// ==============================
// Types
// ==============================

Button.propTypes = {
	/**
	 * Button look
	 */
	look: PropTypes.oneOf(['primary', 'hero', 'faint', 'link']),

	/**
	 * Button size
	 */
	size: PropTypes.oneOfType([
		PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']),
		PropTypes.arrayOf(PropTypes.oneOf(['small', 'medium', 'large', 'xlarge'])),
	]),

	/**
	 * Button tag
	 */
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),

	/**
	 * Soft mode.
	 *
	 * Removes background colour and adjusts text colour.
	 */
	soft: PropTypes.bool,

	/**
	 * Button disabled
	 */
	disabled: PropTypes.bool.isRequired,

	/**
	 * Block mode.
	 *
	 * Fit button width to its parent width.
	 */
	block: PropTypes.oneOfType([PropTypes.bool, PropTypes.arrayOf(PropTypes.bool)]),

	/**
	 * Places an icon within the button, after the button’s text
	 */
	iconAfter: PropTypes.func,

	/**
	 * Places an icon within the button, before the button’s text
	 */
	iconBefore: PropTypes.func,

	/**
	 * Justify align button children
	 */
	justify: PropTypes.bool,

	/**
	 * Text to use as the `aria-label` for the button
	 */
	assistiveText: PropTypes.string,

	/**
	 * Handler to be called on click
	 */
	onClick: PropTypes.func,

	/**
	 * Button text
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
			Content: PropTypes.shape({
				styles: PropTypes.func,
				component: PropTypes.elementType,
				attributes: PropTypes.object,
			}),
			TextWrapper: PropTypes.shape({
				styles: PropTypes.func,
				component: PropTypes.elementType,
				attributes: PropTypes.object,
			}),
			ButtonGroup: PropTypes.shape({
				styles: PropTypes.func,
				component: PropTypes.elementType,
				attributes: PropTypes.object,
			}),
		}),
	}),
};

Button.defaultProps = {
	look: 'primary',
	size: 'medium',
	tag: 'button',
	soft: false,
	block: false,
	justify: false,
	disabled: false,
};
