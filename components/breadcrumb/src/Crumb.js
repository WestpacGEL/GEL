/** @jsx jsx */

import { jsx, useBrand, merge } from '@westpac/core';
import { VisuallyHidden } from '@westpac/a11y';
import { ArrowRightIcon } from '@westpac/icon';
import pkg from '../package.json';
import PropTypes from 'prop-types';
import React from 'react';

// ==============================
// Component
// ==============================

/**
 * Crumb: Breadcrumbs are styled navigational links used to indicate a user journey or path. They are a simple, effective and proven method to aid orientation.
 */
export const Crumb = ({ current, href, text, assistiveText, icon: Icon, onClick, ...props }) => {
	const { COLORS, [pkg.name]: overridesWithTokens } = useBrand();

	const overrides = {
		crumbCSS: {},
		crumbLinkCSS: {},
		crumbLabel: VisuallyHidden,
		Icon,
	};
	merge(overrides, overridesWithTokens);

	return (
		<li
			css={{
				boxSizing: 'border-box',
				display: 'inline-block',
				position: 'relative',
				color: COLORS.text,
				verticalAlign: 'middle',
				...overrides.crumbCSS,
			}}
			{...props}
		>
			{current && <overrides.crumbLabel>{assistiveText}</overrides.crumbLabel>}
			<a
				href={current ? null : href}
				onClick={onClick}
				{...props}
				css={{
					color: COLORS.text,
					textDecoration: 'none',
					verticalAlign: 'middle',
					cursor: current ? 'auto' : 'pointer',

					':focus, :hover': {
						textDecoration: current ? 'none' : 'underline',
					},

					...overrides.crumbLinkCSS,
				}}
			>
				{text}
			</a>
			{!current && (
				<overrides.Icon
					aria-hidden="true"
					size="small"
					color={COLORS.primary}
					css={{
						marginLeft: '0.1875rem',
						marginRight: '0.1875rem',
						verticalAlign: 'middle',
					}}
				/>
			)}
		</li>
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
	 * The icon between Crumbs
	 */
	icon: PropTypes.func.isRequired,
};

Crumb.defaultProps = {
	assistiveText: 'Current page:',
	icon: ArrowRightIcon,
};
