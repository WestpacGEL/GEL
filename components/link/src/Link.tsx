/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';
import { ArrowRightIcon } from '@westpac/icon';

import { defaultWrapper } from './overrides/wrapper';
import { defaultLink } from './overrides/link';
import { defaultIcon } from './overrides/icon';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const Link = ({
	href,
	type,
	iconBefore: IconBefore,
	iconAfter: IconAfter,
	iconSize,
	underline,
	children,
	overrides: componentOverrides,
	...rest
}: typeof Link.propTypes & typeof Link.defaultProps) => {
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

// ==============================
// Types
// ==============================

Link.propTypes = {
	/**
	 * Link href value
	 */
	href: PropTypes.string.isRequired,

	/**
	 * Link type
	 */
	type: PropTypes.oneOf(['inline', 'standalone']),

	/**
	 * Places an icon within the link, before the link’s text
	 */
	iconBefore: PropTypes.func,

	/**
	 * Places an icon within the link, after the link’s text
	 */
	iconAfter: PropTypes.func,

	/**
	 * Visually style the (inline) link with an underline
	 */
	underline: PropTypes.bool,

	/**
	 * Icon size
	 */
	iconSize: PropTypes.oneOfType([
		PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']),
		PropTypes.arrayOf(PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge'])).isRequired,
	]),

	/**
	 * Link text
	 */
	children: PropTypes.node,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Link: PropTypes.shape({
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

Link.defaultProps = {
	type: 'standalone',
	iconSize: 'small',
	underline: true,
};
