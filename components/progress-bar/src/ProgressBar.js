/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { defaultProgressBar } from './overrides/progressBar';
import { defaultText } from './overrides/text';
import { defaultBar } from './overrides/bar';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const ProgressBar = ({ value, look, noLabel, overrides: componentOverrides, ...rest }) => {
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

// ==============================
// Types
// ==============================

ProgressBar.propTypes = {
	/**
	 * The progress bar value as a percentage. Decimal numbers are rounded.
	 */
	value: PropTypes.number.isRequired,

	/**
	 * Progress bar look
	 */
	look: PropTypes.oneOf(['default', 'skinny']).isRequired,

	/**
	 * Hides the visible label (for `default` look)
	 */
	noLabel: PropTypes.bool.isRequired,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		ProgressBar: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Bar: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Text: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};

export const defaultProps = {
	value: 0,
	look: 'default',
	noLabel: false,
};

ProgressBar.defaultProps = defaultProps;
