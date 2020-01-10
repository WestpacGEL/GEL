/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import { VisuallyHidden } from '@westpac/a11y';
import { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Wrapper, wrapperStyles } from './overrides/wrapper';
import { Text, textStyles } from './overrides/text';
import { Bar, barStyles } from './overrides/bar';
import pkg from '../package.json';

// ==============================
// Component
// ==============================
export const ProgressBar = ({ value, look, overrides: componentOverrides, ...props }) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const roundedValue = Math.round(value);

	const defaultOverrides = {
		styles: wrapperStyles,
		component: Wrapper,
		attributes: state => state,

		subComponent: {
			Bar: {
				styles: barStyles,
				component: Bar,
				attributes: state => state,
			},
			Text: {
				styles: textStyles,
				component: Text,
				attributes: state => state,
			},
		},
	};

	const state = {
		look,
		value: roundedValue,
		overrides: componentOverrides,
		...props,
	};

	const overrides = overrideReconciler(
		defaultOverrides,
		tokenOverrides,
		brandOverrides,
		componentOverrides,
		state
	);

	return (
		<overrides.component css={overrides.styles} {...overrides.attributes(state)}>
			<overrides.subComponent.Bar.component
				role="progressbar"
				aria-valuemin="0"
				aria-valuemax="100"
				aria-valuenow={roundedValue}
				aria-live="polite"
				css={overrides.subComponent.Bar.styles}
				{...overrides.subComponent.Bar.attributes(state)}
			>
				{look !== 'skinny' ? (
					<Fragment>
						<overrides.subComponent.Text.component
							role="text"
							css={overrides.subComponent.Text.styles}
							{...overrides.subComponent.Text.attributes(state)}
						>
							{roundedValue}%
						</overrides.subComponent.Text.component>
						<VisuallyHidden>Complete</VisuallyHidden>
					</Fragment>
				) : (
					<VisuallyHidden>{roundedValue}% Complete</VisuallyHidden>
				)}
			</overrides.subComponent.Bar.component>
		</overrides.component>
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

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		styles: PropTypes.func,
		component: PropTypes.elementType,
		attributes: PropTypes.object,
		subComponent: PropTypes.shape({
			Bar: PropTypes.shape({
				styles: PropTypes.func,
				component: PropTypes.elementType,
				attributes: PropTypes.object,
			}),
			Text: PropTypes.shape({
				styles: PropTypes.func,
				component: PropTypes.elementType,
				attributes: PropTypes.object,
			}),
		}),
	}),
};

ProgressBar.defaultProps = {
	value: 0,
	look: 'default',
};
