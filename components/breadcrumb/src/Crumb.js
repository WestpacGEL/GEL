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
export const Crumb = ({ current, href, text, onClick, overrides: componentOverrides, ...rest }) => {
	const {
		COLORS,
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		Crumb: {
			styles: crumbStyles,
			component: CrumbWrapper,
			attributes: () => null,
		},
		Link: {
			styles: linkStyles,
			component: Link,
			attributes: () => null,
		},
		Icon: {
			styles: iconStyles,
			component: Icon,
			attributes: () => null,
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
			aria-current={current ? 'page' : undefined}
			current={current}
			href={href}
			text={text}
			{...rest}
			{...overrides.Crumb.attributes(state)}
			css={overrides.Crumb.styles(state)}
		>
			<overrides.Link.component
				current={current}
				href={current ? null : href}
				text={text}
				onClick={onClick}
				{...overrides.Link.attributes(state)}
				css={overrides.Link.styles(state)}
			>
				{text}
			</overrides.Link.component>
			{!current && (
				<overrides.Icon.component
					aria-hidden="true"
					assistiveText={null}
					size="small"
					color={COLORS.primary}
					current={current}
					href={href}
					text={text}
					{...overrides.Icon.attributes(state)}
					css={overrides.Icon.styles(state)}
				/>
			)}
		</overrides.Crumb.component>
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
