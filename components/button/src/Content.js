/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import { DropDownIcon } from '@westpac/icon';
import PropTypes from 'prop-types';
import React from 'react';

import { Content as ContentWrapper, contentStyles } from './overrides/content';
import { TextWrapper } from './TextWrapper';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const Content = ({
	size,
	block,
	iconAfter: IconAfter,
	iconBefore: IconBefore,
	dropdown,
	children,
	className,
	overrides: componentOverrides,
	...rest
}) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		Content: {
			styles: contentStyles,
			component: ContentWrapper,
			attributes: (_, a) => a,
		},
	};

	const state = {
		size,
		block,
		iconAfter: IconAfter,
		iconBefore: IconBefore,
		children,
		overrides: componentOverrides,
		...rest,
	};

	const overrides = overrideReconciler(
		defaultOverrides,
		tokenOverrides,
		brandOverrides,
		componentOverrides
	);

	// Map button size to icon size
	const iconSizeMap = {
		small: 'small', //18px
		medium: 'small', //18px
		large: 'medium', //24px
		xlarge: 'medium', //24px
	};

	// Compose a button text + icon fragment, if these are provided
	return (
		<overrides.Content.component
			className={className}
			{...overrides.Content.attributes(state)}
			css={overrides.Content.styles(state)}
		>
			{IconBefore && (
				<IconBefore
					css={{ marginRight: children && '0.4em' }}
					size={iconSizeMap[size]}
					color="inherit"
				/>
			)}
			{children && (
				<TextWrapper block={block} overrides={componentOverrides}>
					{children}
				</TextWrapper>
			)}
			{IconAfter && (
				<IconAfter
					css={{ marginLeft: children && '0.4em' }}
					size={iconSizeMap[size]}
					color="inherit"
					aria-hidden="true"
					assistiveText={null}
				/>
			)}
			{dropdown && (
				<DropDownIcon
					css={{ marginLeft: block ? 'auto' : '0.4em' }}
					size={iconSizeMap[size]}
					color="inherit"
					aria-hidden="true"
					assistiveText={null}
				/>
			)}
		</overrides.Content.component>
	);
};

Content.propTypes = {
	/**
	 * Button size
	 */
	size: PropTypes.oneOfType([
		PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']),
		PropTypes.arrayOf(PropTypes.oneOf(['small', 'medium', 'large', 'xlarge'])),
	]).isRequired,

	/**
	 * Places an icon within the button, after the button’s text
	 */
	iconAfter: PropTypes.func,

	/**
	 * Places an icon within the button, before the button’s text
	 */
	iconBefore: PropTypes.func,

	/**
	 * Block mode.
	 *
	 * Fit button width to its parent width.
	 */
	block: PropTypes.oneOfType([PropTypes.bool, PropTypes.arrayOf(PropTypes.bool)]).isRequired,

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
	}),
};

Content.defaultProps = {
	size: 'medium',
	block: false,
};
