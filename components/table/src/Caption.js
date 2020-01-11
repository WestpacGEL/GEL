/** @jsx jsx */

import { jsx, useBrand, overrideReconciler2 as overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { CaptionComponent, captionStyles } from './overrides/caption';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const Caption = ({ overrides: componentOverrides, ...rest }) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		Caption: {
			styles: captionStyles,
			component: CaptionComponent,
			attributes: (_, a) => a,
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
			{...overrides.Caption.attributes(state)}
			css={overrides.Caption.styles(state)}
		/>
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
