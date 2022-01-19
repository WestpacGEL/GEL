/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import { DropDownIcon } from '@westpac/icon';
import PropTypes from 'prop-types';

import { defaultContent } from './overrides/content';
import { defaultIcon } from './overrides/icon';

import { useButtonContext } from './Button';
import { Text } from './Text';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const Content = ({
	size,
	block,
	iconAfter: IconAfter,
	iconBefore: IconBefore,
	iconColor,
	dropdown,
	children,
	...rest
}) => {
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
					size={iconSizeMap[size]}
					icon={IconBefore}
					state={state}
					{...iconAttributes(state)}
					css={iconStyles({ ...state, before: true })}
				/>
			)}
			{children && <Text block={block}>{children}</Text>}
			{IconAfter && (
				<Icon
					size={iconSizeMap[size]}
					icon={IconAfter}
					state={state}
					{...iconAttributes(state)}
					css={iconStyles({ ...state, after: true })}
				/>
			)}
			{dropdown && (
				<Icon
					size={iconSizeMap[size]}
					icon={DropDownIcon}
					state={state}
					{...iconAttributes(state)}
					css={iconStyles({ ...state, dropdown: true })}
				/>
			)}
		</Content>
	);
};

// ==============================
// Types
// ==============================

Content.propTypes = {
	/**
	 * Button size
	 */
	size: PropTypes.oneOfType([
		PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']),
		PropTypes.arrayOf(PropTypes.oneOf(['small', 'medium', 'large', 'xlarge'])),
	]).isRequired,

	/**
	 * Block mode.
	 *
	 * Fit button width to its parent width.
	 */
	block: PropTypes.oneOfType([PropTypes.bool, PropTypes.arrayOf(PropTypes.bool)]).isRequired,

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
	 * Enable dropdown mode
	 */
	dropdown: PropTypes.bool,

	/**
	 * Button text
	 */
	children: PropTypes.node,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Content: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Icon: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};

Content.defaultProps = {
	size: 'medium',
	block: false,
};
