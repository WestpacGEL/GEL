/** @jsx jsx */

import { jsx, useBrand, overrideReconciler2 as overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';
import React from 'react';

import { AssistiveText, assistiveTextStyles } from './overrides/assistivetext';
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
	assistiveText,
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
		AssistiveText: {
			styles: assistiveTextStyles,
			component: AssistiveText,
			attributes: (_, a) => a,
		},
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
		assistiveText,
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
			{...overrides.Crumb.attributes(state)}
			css={overrides.Crumb.styles(state)}
		>
			{current && (
				<overrides.AssistiveText.component
					insideCrumb={true}
					{...overrides.AssistiveText.attributes(state)}
					css={overrides.AssistiveText.styles(state)}
				>
					{assistiveText}
				</overrides.AssistiveText.component>
			)}
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
	 * Visually hidden text to use for the current page crumb
	 */
	assistiveText: PropTypes.string.isRequired,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		AssistiveText: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.object,
		}),
		Crumb: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.object,
		}),
		Link: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.object,
		}),
		Icon: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.object,
		}),
	}),
};

Crumb.defaultProps = {
	assistiveText: 'Current page:',
};
