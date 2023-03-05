import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import { DropDownIcon } from '@westpac/icon';

import { defaultContent } from './overrides/content';
import { defaultIcon } from './overrides/icon';

import { useButtonContext } from './Button';
import { Text } from './Text';
import pkg from '../package.json';

interface ContentProps {
	/**
	 * Button size
	 */
	size: 'small' | 'medium' | 'large' | 'xlarge' | ('small' | 'medium' | 'large' | 'xlarge')[];
	/**
	 * Block mode.
	 *
	 * Fit button width to its parent width.
	 */
	block: boolean | boolean[];
	/**
	 * Places an icon within the button, after the button’s text
	 */
	iconAfter?: (...args: unknown[]) => unknown;
	/**
	 * Places an icon within the button, before the button’s text
	 */
	iconBefore?: (...args: unknown[]) => unknown;
	/**
	 * The color for the icon.
	 *
	 * Defaults to the current text color.
	 */
	iconColor?: string;
	/**
	 * Enable dropdown mode
	 */
	dropdown?: boolean;
	/**
	 * Button text
	 */
	children?: React.ReactNode;
	/**
	 * The override API
	 */
	overrides?: {
		Content?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		Icon?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
	};
}

// ==============================
// Component
// ==============================

export const Content = ({
	size = 'medium',
	block = false,
	iconAfter: IconAfter,
	iconBefore: IconBefore,
	iconColor,
	dropdown,
	children,
	...rest
}: ContentProps) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const context = useButtonContext();

	const defaultOverrides = {
		Content: defaultContent,
		Icon: defaultIcon,
	};

	const componentOverrides = context.state.overrides;

	const state = {
		size,
		block,
		iconBefore: IconBefore,
		iconAfter: IconAfter,
		iconColor,
		dropdown,
		hasChildren: !!children,
		context: context.state,
		overrides: componentOverrides,
		...rest,
	};

	const {
		Content: { component: Content, styles: contentStyles, attributes: contentAttributes },
		Icon: { component: Icon, styles: iconStyles, attributes: iconAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	// Map button size to icon size
	const iconSizeMap = {
		small: 'small', //18px
		medium: 'small', //18px
		large: 'medium', //24px
		xlarge: 'medium', //24px
	};

	// Compose a button text + icon fragment, if these are provided
	return (
		<Content {...rest} state={state} {...contentAttributes(state)} css={contentStyles(state)}>
			{IconBefore && (
				<Icon
					size={!Array.isArray(size) && iconSizeMap[size]}
					icon={IconBefore}
					state={state}
					{...iconAttributes(state)}
					css={iconStyles({ ...state, before: true })}
				/>
			)}
			{children && <Text block={block}>{children}</Text>}
			{IconAfter && (
				<Icon
					size={!Array.isArray(size) && iconSizeMap[size]}
					icon={IconAfter}
					state={state}
					{...iconAttributes(state)}
					css={iconStyles({ ...state, after: true })}
				/>
			)}
			{dropdown && (
				<Icon
					size={!Array.isArray(size) && iconSizeMap[size]}
					icon={DropDownIcon}
					state={state}
					{...iconAttributes(state)}
					css={iconStyles({ ...state, dropdown: true })}
				/>
			)}
		</Content>
	);
};

Content.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn prop-types"  |
	// ----------------------------------------------------------------------
	/**
	 * Block mode.
	 *
	 * Fit button width to its parent width.
	 */
	block: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.bool), PropTypes.bool]).isRequired,
	/**
	 * Button text
	 */
	children: PropTypes.node,
	/**
	 * Enable dropdown mode
	 */
	dropdown: PropTypes.bool,
	/**
	 * Places an icon within the button, after the button’s text
	 */
	iconAfter: PropTypes.func,
	/**
	 * Places an icon within the button, before the button’s text
	 */
	iconBefore: PropTypes.func,
	/**
	 * The color for the icon.
	 *
	 * Defaults to the current text color.
	 */
	iconColor: PropTypes.string,
	/**
	 * Button size
	 */
	size: PropTypes.oneOfType([
		PropTypes.oneOf(['large', 'medium', 'small', 'xlarge']),
		PropTypes.arrayOf(PropTypes.oneOf(['large', 'medium', 'small', 'xlarge'])),
	]).isRequired,
};

Content.defaultProps = { block: false, size: 'medium' };
