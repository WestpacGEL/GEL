/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { defaultPictogram } from './overrides/pictogram';
import { defaultSvg } from './overrides/svg';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export { colorMap } from './_utils';
export { useBrand };

export const Pictogram = ({
	type,
	assistiveText,
	pictogram,
	children,
	overrides: componentOverrides,
	...rest
}) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		Pictogram: defaultPictogram,
		Svg: defaultSvg,
	};

	const state = {
		type,
		assistiveText,
		pictogram,
		overrides: componentOverrides,
		...rest,
	};

	const {
		Pictogram: { component: Pictogram, styles: pictogramStyles, attributes: pictogramAttributes },
		Svg: { component: Svg, styles: svgStyles, attributes: svgAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<Pictogram {...rest} state={state} {...pictogramAttributes(state)} css={pictogramStyles(state)}>
			<Svg state={state} css={svgStyles(state)} {...svgAttributes(state)}>
				{children}
			</Svg>
		</Pictogram>
	);
};

// ==============================
// Types
// ==============================

export const propTypes = {
	/**
	 *  The visual style of the pictogram
	 */
	type: PropTypes.oneOf(['colour-filled', 'colour', 'dark', 'light']).isRequired,

	/**
	 * String to use as the `aria-label` for the pictogram. Set to an empty string if you
	 * are rendering the pictogram with visible text to prevent accessibility label
	 * duplication.
	 *
	 * Defaults to the pictogram name e.g. `WalletPictogram` --> "Wallet"
	 */
	assistiveText: PropTypes.string,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Pictogram: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Svg: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};

export const defaultProps = {
	type: 'colour',
};

Pictogram.propTypes = propTypes;
Pictogram.defaultProps = defaultProps;
