/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import { Fragment } from 'react';
import PropTypes from 'prop-types';

import { ProgressBar as ProgressBarWrapper, progressBarStyles } from './overrides/progressBar';
import { Text, textStyles } from './overrides/text';
import { Bar, barStyles } from './overrides/bar';
import pkg from '../package.json';

// ==============================
// Component
// ==============================
export const ProgressBar = ({ value, look, overrides: componentOverrides, ...rest }) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const roundedValue = Math.round(value);

	const defaultOverrides = {
		ProgressBar: {
			styles: progressBarStyles,
			component: ProgressBarWrapper,
			attributes: () => null,
		},
		Bar: {
			styles: barStyles,
			component: Bar,
			attributes: () => null,
		},
		Text: {
			styles: textStyles,
			component: Text,
			attributes: () => null,
		},
	};

	const state = {
		value: roundedValue,
		look,
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
		<overrides.ProgressBar.component
			role="progressbar"
			aria-valuemin="0"
			aria-valuemax="100"
			aria-valuenow={roundedValue}
			aria-valuetext={`${roundedValue}% complete`}
			aria-live="polite"
			value={roundedValue}
			look={look}
			{...rest}
			{...overrides.ProgressBar.attributes(state)}
			css={overrides.ProgressBar.styles(state)}
		>
			<overrides.Bar.component
				value={roundedValue}
				look={look}
				{...overrides.Bar.attributes(state)}
				css={overrides.Bar.styles(state)}
			>
				{look !== 'skinny' && (
					<Fragment>
						<overrides.Text.component
							value={roundedValue}
							look={look}
							{...overrides.Text.attributes(state)}
							css={overrides.Text.styles(state)}
						>
							{`${roundedValue}%`}
						</overrides.Text.component>
					</Fragment>
				)}
			</overrides.Bar.component>
		</overrides.ProgressBar.component>
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
	 * Enable skinny mode
	 */
	look: PropTypes.oneOf(['default', 'skinny']).isRequired,

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

ProgressBar.defaultProps = {
	value: 0,
	look: 'default',
};
