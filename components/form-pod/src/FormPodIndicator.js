/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import { RefreshIcon } from '@westpac/icon';
import PropTypes from 'prop-types';

import { defaultIndicatorText } from './overrides/indicatorText';
import { defaultIndicatorIcon } from './overrides/indicatorIcon';
import { defaultIndicator } from './overrides/indicator';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const FormPodIndicator = ({ icon, text, overrides: componentOverrides, ...rest }) => {
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
		icon,
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

// ==============================
// Types
// ==============================

FormPodIndicator.propTypes = {
	/**
	 * Indicator icon
	 */
	icon: PropTypes.func,

	/**
	 * Indicator text
	 */
	text: PropTypes.string,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Indicator: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		IndicatorText: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		IndicatorIcon: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};

FormPodIndicator.defaultProps = {
	icon: RefreshIcon,
	text: 'Saving',
};
