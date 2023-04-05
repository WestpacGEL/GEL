import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import { ArrowRightIcon } from '@westpac/icon';

import { defaultWrapper } from './overrides/wrapper';
import { defaultLink } from './overrides/link';
import { defaultIcon } from './overrides/icon';
import pkg from '../package.json';

export interface LinkProps {
	/**
	 * Link href value
	 */
	href: string;
	/**
	 * Link type
	 */
	type?: 'inline' | 'standalone';
	/**
	 * Places an icon within the link, before the link’s text
	 */
	iconBefore?: (...args: unknown[]) => unknown;
	/**
	 * Places an icon within the link, after the link’s text
	 */
	iconAfter?: (...args: unknown[]) => unknown;
	/**
	 * Visually style the (inline) link with an underline
	 */
	underline?: boolean;
	/**
	 * Icon size
	 */
	iconSize?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | unknown;
	/**
	 * Link text
	 */
	children?: React.ReactNode;
	/**
	 * The override API
	 */
	overrides?: {
		Link?: {
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

export const Link = ({
	href,
	type = 'standalone',
	iconBefore: IconBefore,
	iconAfter: IconAfter,
	iconSize = 'small',
	underline = true,
	children,
	overrides: componentOverrides,
	...rest
}: LinkProps) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		Wrapper: defaultWrapper,
		Link: defaultLink,
		Icon: defaultIcon,
	};

	// Automatically set '>' icon if standalone
	if (type === 'standalone' && !IconBefore && !IconAfter) {
		IconBefore = ArrowRightIcon;
	}

	const state = {
		href,
		type,
		iconBefore: IconBefore,
		iconAfter: IconAfter,
		iconSize,
		underline,
		overrides: componentOverrides,
		...rest,
	};

	const {
		Wrapper: { component: Wrapper, styles: wrapperStyles, attributes: wrapperAttributes },
		Link: { component: Link, styles: linkStyles, attributes: linkAttributes },
		Icon: { component: Icon, styles: iconStyles, attributes: iconAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<Wrapper {...rest} state={state} {...wrapperAttributes(state)} css={wrapperStyles(state)}>
			<Link {...rest} state={state} {...linkAttributes(state)} css={linkStyles(state)}>
				{IconBefore && (
					<Icon
						size={iconSize}
						icon={IconBefore}
						state={state}
						{...iconAttributes(state)}
						css={iconStyles({ ...state, before: true })}
					/>
				)}
				{children}
				{IconAfter && (
					<Icon
						size={iconSize}
						icon={IconAfter}
						state={state}
						{...iconAttributes(state)}
						css={iconStyles({ ...state, after: true })}
					/>
				)}
			</Link>
		</Wrapper>
	);
};

Link.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn prop-types"  |
	// ----------------------------------------------------------------------
	/**
	 * Link text
	 */
	children: PropTypes.node,
	/**
	 * Link href value
	 */
	href: PropTypes.string.isRequired,
	/**
	 * Places an icon within the link, after the link’s text
	 */
	iconAfter: PropTypes.func,
	/**
	 * Places an icon within the link, before the link’s text
	 */
	iconBefore: PropTypes.func,
	/**
	 * Icon size
	 */
	iconSize: PropTypes.any,
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Icon: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		Link: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
	}),
	/**
	 * Link type
	 */
	type: PropTypes.oneOf(['inline', 'standalone']),
	/**
	 * Visually style the (inline) link with an underline
	 */
	underline: PropTypes.bool,
};
