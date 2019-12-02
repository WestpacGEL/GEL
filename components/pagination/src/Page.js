/** @jsx jsx */

import { jsx, useBrand, merge } from '@westpac/core';
import { VisuallyHidden } from '@westpac/a11y';
import PropTypes from 'prop-types';
import { usePaginationContext } from './Pagination';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const Page = ({ index, label, first, last, disabled, ariaLabel, ...props }) => {
	const { COLORS, [pkg.name]: overridesWithTokens } = useBrand();
	const { current } = usePaginationContext();

	const active = index === current;

	const overrides = {
		pageCSS: {},
		PageLink,
	};

	merge(overrides, overridesWithTokens);

	return (
		<li>
			<overrides.PageLink
				css={{
					marginLeft: -1,
					border: `1px solid ${active ? COLORS.hero : COLORS.border}`,
					backgroundColor: active ? COLORS.hero : '#fff',
					padding: '0.4375rem 0.75rem',
					fontSize: '0.875rem',
					color: active ? '#fff' : COLORS.neutral,
					textDecoration: 'none',
					cursor: 'pointer',
					transition: 'background .2s ease, border .2s ease',

					':hover': {
						backgroundColor: !active && COLORS.background,
					},

					...(first && {
						marginLeft: 0,
						borderTopLeftRadius: '0.1875rem',
						borderBottomLeftRadius: '0.1875rem',
					}),
					...(last && {
						borderTopRightRadius: '0.1875rem',
						borderBottomRightRadius: '0.1875rem',
					}),
					...(disabled && {
						color: COLORS.muted,
						backgroundColor: COLORS.light,
						cursor: 'not-allowed',
						opacity: '0.5',
					}),

					...overrides.pageCSS,
				}}
				{...props}
			>
				<VisuallyHidden>{ariaLabel ? ariaLabel : `Go to page ${label}`}</VisuallyHidden>
				{label}
			</overrides.PageLink>
		</li>
	);
};

Page.propTypes = {
	/**
	 * Index of page
	 */
	index: PropTypes.number,

	/**
	 * Page label
	 */
	label: PropTypes.string,

	/**
	 * If page is first in pagination
	 */
	first: PropTypes.bool,

	/**
	 * If page is last in pagination
	 */
	last: PropTypes.bool,

	/**
	 * If page is disabled
	 */
	disabled: PropTypes.bool,

	/**
	 * Aria label for the page
	 */
	ariaLabel: PropTypes.string,
};

Page.defaultProps = {
	first: false,
	last: false,
	disabled: false,
};

// ==============================
// Override Component
// ==============================

const PageLink = props => <a {...props} />;
