import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useBrand, overrideReconciler } from '@westpac/core';

import { defaultCrumb } from './overrides/crumb';
import { defaultLink } from './overrides/link';
import { defaultIcon } from './overrides/icon';

import { useBreadcrumbContext } from './Breadcrumb';
import pkg from '../package.json';

export interface CrumbProps {
	/**
	 * Set as the final crumb, linking to the current page
	 */
	current?: boolean;
	/**
	 * The crumb link href value
	 */
	href: string;
	/**
	 * The text of the crumb
	 */
	text: string;
	/**
	 * Component tag, may receive a react-router Link.
	 *
	 * Defaults to <a>.
	 */
	tag?: React.ElementType;
	/**
	 * A function for the onClick event
	 */
	onClick?: (...args: unknown[]) => unknown;
	/**
	 * Visually hidden text to use for the current page crumb
	 */
	assistiveText?: string;
	/**
	 * The override API
	 */
	overrides?: {
		Crumb?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
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

export const Crumb = ({ current, href, text, tag, onClick, overrides, ...rest }: CrumbProps) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const context = useBreadcrumbContext();

	const defaultOverrides = {
		Crumb: defaultCrumb,
		Link: defaultLink,
		Icon: defaultIcon,
	};

	const componentOverrides = overrides || context.state.overrides;

	const state = {
		current,
		href,
		text,
		tag,
		onClick,
		context: context.state,
		overrides,
		...rest,
	};

	const {
		Crumb: { component: Crumb, styles: crumbStyles, attributes: crumbAttributes },
		Link: { component: Link, styles: linkStyles, attributes: linkAttributes },
		Icon: { component: Icon, styles: iconStyles, attributes: iconAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<Crumb {...rest} state={state} {...crumbAttributes(state)} css={crumbStyles(state)}>
			<Link
				href={href}
				onClick={onClick}
				state={state}
				{...linkAttributes(state)}
				css={linkStyles(state)}
			>
				{text}
			</Link>
			{!current && <Icon state={state} {...iconAttributes(state)} css={iconStyles(state)} />}
		</Crumb>
	);
};

Crumb.defaultProps = {
	href: '#0',
};

Crumb.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn proptypes"  |
	// ----------------------------------------------------------------------
	/**
	 * Set as the final crumb, linking to the current page
	 */
	current: PropTypes.bool,
	/**
	 * The crumb link href value
	 */
	href: PropTypes.string.isRequired,
	/**
	 * A function for the onClick event
	 */
	onClick: PropTypes.func,
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Crumb: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
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
	 * Component tag, may receive a react-router Link.
	 *
	 * Defaults to <a>.
	 */
	tag: PropTypes.elementType,
	/**
	 * The text of the crumb
	 */
	text: PropTypes.string.isRequired,
};
