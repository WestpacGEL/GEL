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
	};

	merge(overrides, overridesWithTokens);

	// MOVE THIS!!!
	const styles = {
		marginLeft: -1,
		border: `1px solid ${active ? COLORS.hero : COLORS.border}`,
		backgroundColor: active ? COLORS.hero : '#fff',
		padding: '0.4375rem 0.75rem',
		fontSize: '0.875rem',
		color: active ? '#fff' : COLORS.neutral,
		textDecoration: 'none',
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
	};

	// will probaby need to have 2 onclick handlers? need to update our current sttae and then also let them pass their own onClick
	return (
		<li>
			<a href="#" css={styles} {...props}>
				<VisuallyHidden>{ariaLabel ? ariaLabel : `Go to page ${label}`}</VisuallyHidden>
				{label}
			</a>
		</li>
	);
};
