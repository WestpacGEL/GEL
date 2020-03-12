/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import { useBreadcrumbContext } from './Breadcrumb';
import PropTypes from 'prop-types';

import { defaultCrumb } from './overrides/crumb';
import { defaultLink } from './overrides/link';
import { defaultIcon } from './overrides/icon';
import pkg from '../package.json';

// ==============================
// Component
// ==============================
export const Crumb = ({ current, href, text, onClick, overrides, ...rest }) => {
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
		onClick,
		context: { ...context.state },
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
			<Link onClick={onClick} state={state} {...linkAttributes(state)} css={linkStyles(state)}>
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
	 * The text of the crumb
	 */
	current: PropTypes.bool,

	/**
	 * An href for a link
	 */
	href: PropTypes.string,

	/**
	 * The text of the crumb
	 */
	text: PropTypes.string.isRequired,

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

Crumb.defaultProps = {};
