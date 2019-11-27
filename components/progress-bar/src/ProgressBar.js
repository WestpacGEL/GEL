/** @jsx jsx */

import PropTypes from 'prop-types';
import { jsx, useBrand, merge } from '@westpac/core';
import { VisuallyHidden } from '@westpac/a11y';
import pkg from '../package.json';

// ==============================
// Utils
// ==============================

const round = value => Math.round(value);

// ==============================
// Component
// ==============================

export const ProgressBar = ({ value, look, ...props }) => {
	const { COLORS, TYPE, [pkg.name]: overridesWithTokens } = useBrand();

	const roundedValue = round(value);

	const overrides = {
		default: {
			wrapperCSS: {
				height: '1.5rem',
				borderRadius: '1.5rem',

				'::after': {
					content: '"0%"',
					position: 'absolute',
					left: '0.625rem',
					top: 0,
					height: '100%',
					color: COLORS.muted,
					fontSize: '0.875rem',
					zIndex: 1,
					...TYPE.bodyFont[700],
				},
			},
			barCSS: {
				borderRadius: '1.5rem',
			},
		},
		skinny: {
			wrapperCSS: {
				height: '0.625rem',
				borderRadius: '0.625rem',
			},
			barCSS: {
				borderRadius: '0.625rem',
			},
		},
	};

	merge(overrides, overridesWithTokens);

	return (
		<div
			css={{
				marginBottom: '1.3125rem',
				overflow: 'hidden',
				backgroundColor: '#fff',
				border: `1px solid ${COLORS.border}`,
				padding: '0.0625rem',
				position: 'relative',
				boxSizing: 'border-box',
				...overrides[look].wrapperCSS,
			}}
			{...props}
		>
			<div
				css={{
					position: 'relative',
					float: 'left',
					width: 0,
					height: '100%',
					fontSize: '0.875rem',
					lineHeight: '1.25rem',
					color: '#fff',
					textAlign: 'right',
					backgroundColor: COLORS.hero,
					zIndex: 2,
					overflow: 'hidden',
					boxSizing: 'border-box',
					transition: 'width .6s ease',
					...TYPE.bodyFont[700],
					...overrides[look].barCSS,

					'@media print': {
						backgroundColor: '#000 !important',
					},
				}}
				style={{ width: `${roundedValue}%` }}
				role="progressbar"
				aria-valuemin="0"
				aria-valuemax="100"
				aria-valuenow={value}
				aria-live="polite"
			>
				{look === 'default' && (
					<span
						css={{
							display: 'inline-block',
							margin: '0 0.75rem',
							'@media print': {
								backgroundColor: '#000 !important',
								color: '#fff !important',
							},
						}}
					>
						{roundedValue}%
					</span>
				)}
				<VisuallyHidden>Complete</VisuallyHidden>
			</div>
		</div>
	);
};

// ==============================
// Types
// ==============================

ProgressBar.propTypes = {
	/**
	 * The progress bar value as a percentage. Decimal numbers are rounded.
	 */
	value: PropTypes.number,

	/**
	 * Enable skinny mode
	 */
	look: PropTypes.oneOf(['default', 'skinny']),
};

ProgressBar.defaultProps = {
	value: 0,
	look: 'default',
};
