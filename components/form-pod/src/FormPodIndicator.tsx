import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import { RefreshIcon } from '@westpac/icon';

import { defaultIndicatorText } from './overrides/indicatorText';
import { defaultIndicatorIcon } from './overrides/indicatorIcon';
import { defaultIndicator } from './overrides/indicator';
import pkg from '../package.json';

export interface FormPodIndicatorProps {
	/**
	 * Indicator icon
	 */
	icon?: (...args: unknown[]) => unknown;
	/**
	 * Indicator text
	 */
	text?: string;
	/**
	 * The override API
	 */
	overrides?: {
		Indicator?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		IndicatorText?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		IndicatorIcon?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
	};
}

// ==============================
// Component
// ==============================

export const FormPodIndicator = ({
	icon,
	text = 'Saving',
	overrides: componentOverrides,
	...rest
}: FormPodIndicatorProps) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		Indicator: defaultIndicator,
		IndicatorText: defaultIndicatorText,
		IndicatorIcon: defaultIndicatorIcon,
	};

	const state = {
		icon: icon || RefreshIcon,
		text,
		overrides: componentOverrides,
		...rest,
	};

	const {
		Indicator: { component: Indicator, styles: indicatorStyles, attributes: indicatorAttributes },
		IndicatorText: {
			component: IndicatorText,
			styles: indicatorTextStyles,
			attributes: indicatorTextAttributes,
		},
		IndicatorIcon: {
			component: IndicatorIcon,
			styles: indicatorIconStyles,
			attributes: indicatorIconAttributes,
		},
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<Indicator {...rest} state={state} {...indicatorAttributes(state)} css={indicatorStyles(state)}>
			{text && (
				<IndicatorText
					state={state}
					{...indicatorTextAttributes(state)}
					css={indicatorTextStyles(state)}
				>
					{text}
				</IndicatorText>
			)}
			{icon && (
				<IndicatorIcon
					state={state}
					{...indicatorIconAttributes(state)}
					css={indicatorIconStyles(state)}
				/>
			)}
		</Indicator>
	);
};

FormPodIndicator.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn prop-types"  |
	// ----------------------------------------------------------------------
	/**
	 * Indicator icon
	 */
	icon: PropTypes.func,
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Indicator: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		IndicatorIcon: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		IndicatorText: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
	}),
	/**
	 * Indicator text
	 */
	text: PropTypes.string,
};

FormPodIndicator.defaultProps = { text: 'Saving' };
