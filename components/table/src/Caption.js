/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { CaptionComponent, captionStyles } from './overrides/caption';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const Caption = ({ children, overrides: componentOverrides, ...rest }) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		Caption: {
			styles: captionStyles,
			component: CaptionComponent,
			attributes: () => null,
		},
	};

	const state = {
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
		<overrides.Caption.component
			{...rest}
			{...overrides.Caption.attributes(state)}
			css={overrides.Caption.styles(state)}
		>
			{children}
		</overrides.Caption.component>
	);
};

Caption.propTypes = {
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Caption: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};
