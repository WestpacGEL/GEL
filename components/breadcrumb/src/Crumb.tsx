/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { defaultCrumb } from './overrides/crumb';
import { defaultLink } from './overrides/link';
import { defaultIcon } from './overrides/icon';

import { useBreadcrumbContext } from './Breadcrumb';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const Crumb = ({
	current,
	href,
	text,
	tag,
	onClick,
	overrides,
	...rest
}: typeof Crumb.propTypes & typeof Crumb.defaultProps) => {
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

// ==============================
// Types
// ==============================

Crumb.propTypes = {
	/**
	 * Set as the final crumb, linking to the current page
	 */
	current: PropTypes.bool,

	/**
	 * The crumb link href value
	 */
	href: PropTypes.string.isRequired,

	/**
	 * The text of the crumb
	 */
	text: PropTypes.string.isRequired,

	/**
	 * Component tag, may receive a react-router Link.
	 *
	 * Defaults to <a>.
	 */
	tag: PropTypes.elementType,

	/**
	 * A function for the onClick event
	 */
	onClick: PropTypes.func,

	/**
	 * Visually hidden text to use for the current page crumb
	 */
	assistiveText: PropTypes.string,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Crumb: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
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

Crumb.defaultProps = {
	href: '#0',
};
