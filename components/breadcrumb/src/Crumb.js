/** @jsx jsx */

import { jsx, useBrand, merge } from '@westpac/core';
import { VisuallyHidden } from '@westpac/a11y';
import { ArrowRightIcon } from '@westpac/icon';
import { name } from '../package.json';
import PropTypes from 'prop-types';
import React from 'react';

// ==============================
// Component
// ==============================

/**
 * Crumb: Breadcrumbs are styled navigational links used to indicate a user journey or path. They are a simple, effective and proven method to aid orientation.
 */
export const Crumb = ({ current, href, text, label, icon: Icon, onClick, ...props }) => {
	const { COLORS, [name]: localBrandTokens } = useBrand();

	const localTokens = {
		crumbCSS: {},
		crumbLinkCSS: {},
		Icon,
	};
	merge(localTokens, localBrandTokens);

	return (
		<li
			css={{
				boxSizing: 'border-box',
				display: 'inline-block',
				position: 'relative',
				color: COLORS.text,
				verticalAlign: 'middle',
				...localTokens.crumbCSS,
			}}
			{...props}
		>
			{current && <VisuallyHidden>{label}</VisuallyHidden>}
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

					...localTokens.crumbLinkCSS,
				}}
			>
				{text}
			</a>
			{!current && (
				<localTokens.Icon
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
	 * The label of the current page
	 */
	label: PropTypes.string.isRequired,

	/**
	 * The icon between Crumbs
	 */
	icon: PropTypes.func.isRequired,
};

Crumb.defaultProps = {
	label: 'Current page:',
	icon: ArrowRightIcon,
};
