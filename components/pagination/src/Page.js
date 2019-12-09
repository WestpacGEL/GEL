/** @jsx jsx */

import { jsx, useBrand, merge } from '@westpac/core';
import PropTypes from 'prop-types';

import { usePaginationContext } from './Pagination';
import pkg from '../package.json';

// ==============================
// Override Component
// ==============================

const PageLink = props => <button {...props} />;

// ==============================
// Component
// ==============================

export const Page = ({ index, label, first, last, disabled, ariaLabel, ...props }) => {
	const { BRAND, COLORS, [pkg.name]: overridesWithTokens } = useBrand();
	const { current } = usePaginationContext();

	const active = index === current;

	const overrides = {
		pageCSS: {},
		PageLink,
	};

	merge(overrides, overridesWithTokens);

	const activeColor = BRAND === 'STG' ? COLORS.text : '#fff';

	return (
		<li>
			<overrides.PageLink
				css={{
					appearance: 'none',
					marginLeft: -1,
					lineHeight: 1.15,
					display: 'inline-block',
					border: `1px solid ${active ? COLORS.hero : COLORS.border}`,
					backgroundColor: active ? COLORS.hero : '#fff',
					padding: '0.4375rem 0.75rem',
					fontSize: '0.875rem',
					color: active ? activeColor : COLORS.neutral,
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
				disabled={disabled}
				{...props}
				aria-label={ariaLabel ? ariaLabel : `Go to page ${label}`}
			>
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
	 * If page is disabled
	 */
	disabled: PropTypes.bool,

	/**
	 * Aria label for the page
	 */
	ariaLabel: PropTypes.string,
};

Page.defaultProps = {
	disabled: false,
};
