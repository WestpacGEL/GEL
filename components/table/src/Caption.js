/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { CaptionComponent, captionStyles } from './overrides/caption';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const Caption = ({ overrides: componentOverrides, ...props }) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		subComponent: {
			Caption: {
				styles: captionStyles,
				component: CaptionComponent,
				attributes: state => state,
			},
		},
	};

	const state = {
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
		<overrides.subComponent.Caption.component
			css={overrides.subComponent.Caption.styles}
			{...overrides.subComponent.Caption.attributes(state)}
		/>
	);
};

Caption.propTypes = {
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		subComponent: PropTypes.shape({
			Caption: PropTypes.shape({
				styles: PropTypes.func,
				component: PropTypes.elementType,
				attributes: PropTypes.object,
			}),
		}),
	}),
};
