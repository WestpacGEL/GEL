/** @jsx jsx */

import { jsx, useBrand, overrideReconciler2 as overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { Button as ButtonWrapper, buttonStyles } from './overrides/button';
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
	className,
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
		Button: {
			styles: buttonStyles,
			component: ButtonWrapper,
			attributes: (_, a) => a,
		},
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
		componentOverrides
	);

	return (
		<overrides.Button.component
			type={tag === 'button' ? 'button' : undefined}
			disabled={disabled}
			aria-label={assistiveText}
			onClick={onClick}
			className={className}
			{...overrides.Button.attributes(state)}
			css={overrides.Button.styles(state)}
		>
			{/* `<input>` elements cannot have children; they would use a `value` prop) */}
			{tag !== 'input' ? (
				<Content
					size={size}
					block={block}
					iconAfter={iconAfter}
					iconBefore={iconBefore}
					overrides={componentOverrides}
				>
					{children}
				</Content>
			) : null}
		</overrides.Button.component>
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
		Button: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Content: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		TextWrapper: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		ButtonGroup: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
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
