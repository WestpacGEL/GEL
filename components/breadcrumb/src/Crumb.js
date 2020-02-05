/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';
import React from 'react';

import { Crumb as CrumbWrapper, crumbStyles } from './overrides/crumb';
import { Link, linkStyles } from './overrides/link';
import { Icon, iconStyles } from './overrides/icon';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

/**
 * Crumb: Breadcrumbs are styled navigational links used to indicate a user journey or path. They are a simple, effective and proven method to aid orientation.
 */
export const Crumb = ({
	current,
	href,
	text,
	onClick,
	className,
	overrides: componentOverrides,
	...rest
}) => {
	const {
		COLORS,
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		Crumb: {
			styles: crumbStyles,
			component: CrumbWrapper,
			attributes: (_, a) => a,
		},
		Link: {
			styles: linkStyles,
			component: Link,
			attributes: (_, a) => a,
		},
		Icon: {
			styles: iconStyles,
			component: Icon,
			attributes: (_, a) => a,
		},
	};

	const state = {
		current,
		href,
		text,
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
		<overrides.Crumb.component
			className={className}
			aria-current={current ? 'page' : undefined}
			{...overrides.Crumb.attributes(state)}
			css={overrides.Crumb.styles(state)}
		>
			<overrides.Link.component
				href={current ? null : href}
				onClick={onClick}
				{...overrides.Link.attributes(state)}
				css={overrides.Link.styles(state)}
			>
				{text}
			</overrides.Link.component>
			{!current && (
				<overrides.Icon.component
					aria-hidden="true"
					size="small"
					color={COLORS.primary}
					{...overrides.Icon.attributes(state)}
					css={overrides.Icon.styles(state)}
				/>
			)}
		</overrides.Crumb.component>
	);
};

Crumb.isCrumb = true;

// ==============================
// Types
// ==============================

Crumb.propTypes = {
	/**
	 * The text of the crumb
	 */
	text: PropTypes.string.isRequired,

	/**
	 * An href for a link
	 */
	href: PropTypes.string,

	/**
	 * A function for the onClick event
	 */
	onClick: PropTypes.func,

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
