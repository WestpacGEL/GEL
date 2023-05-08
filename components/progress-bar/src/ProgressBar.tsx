import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useBrand, overrideReconciler } from '@westpac/core';

import { defaultProgressBar } from './overrides/progressBar';
import { defaultText } from './overrides/text';
import { defaultBar } from './overrides/bar';
import pkg from '../package.json';

export interface ProgressBarProps {
	/**
	 * The progress bar value as a percentage. Decimal numbers are rounded.
	 */
	value?: number;
	/**
	 * Progress bar look
	 */
	look?: 'default' | 'skinny';
	/**
	 * Hides the visible label (for `default` look)
	 */
	noLabel?: boolean;
	/**
	 * The override API
	 */
	overrides?: {
		ProgressBar?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		Bar?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		Text?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
	};
}

// ==============================
// Component
// ==============================

export const ProgressBar = ({
	value = 0,
	look = 'default',
	noLabel = false,
	overrides: componentOverrides,
	...rest
}: ProgressBarProps) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const roundedValue = Math.round(value);

	const defaultOverrides = {
		ProgressBar: defaultProgressBar,
		Bar: defaultBar,
		Text: defaultText,
	};

	const state = {
		value: roundedValue,
		look,
		noLabel,
		overrides: componentOverrides,
		...rest,
	};

	const {
		ProgressBar: {
			component: ProgressBar,
			styles: progressBarStyles,
			attributes: progressBarAttributes,
		},
		Bar: { component: Bar, styles: barStyles, attributes: barAttributes },
		Text: { component: Text, styles: textStyles, attributes: textAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<ProgressBar
			{...rest}
			state={state}
			{...progressBarAttributes(state)}
			css={progressBarStyles(state)}
		>
			<Bar
				state={state}
				style={{ width: `${value}%` }}
				{...barAttributes(state)}
				css={barStyles(state)}
			>
				{!noLabel && look !== 'skinny' && (
					<Text state={state} {...textAttributes(state)} css={textStyles(state)}>
						{`${roundedValue}%`}
					</Text>
				)}
			</Bar>
		</ProgressBar>
	);
};

ProgressBar.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn prop-types"  |
	// ----------------------------------------------------------------------
	/**
	 * Progress bar look
	 */
	look: PropTypes.oneOf(['default', 'skinny']),
	/**
	 * Hides the visible label (for `default` look)
	 */
	noLabel: PropTypes.bool,
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Bar: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		ProgressBar: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		Text: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
	}),
	/**
	 * The progress bar value as a percentage. Decimal numbers are rounded.
	 */
	value: PropTypes.number,
};
