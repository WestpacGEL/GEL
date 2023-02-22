import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useBrand, overrideReconciler } from '@westpac/core';

import { defaultFormSectionImg } from './overrides/formSectionImg';
import pkg from '../package.json';

export interface FormSectionImgProps {
	/**
	 * Component img src
	 */
	src: string;
	/**
	 * The override API
	 */
	overrides?: {
		FormSectionImg?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
	};
}

// ==============================
// Component
// ==============================

export const FormSectionImg = ({ overrides: componentOverrides, ...rest }: FormSectionImgProps) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		FormSectionImg: defaultFormSectionImg,
	};

	const state = {
		overrides: componentOverrides,
		...rest,
	};

	const {
		FormSectionImg: {
			component: FormSectionImg,
			styles: formSectionImgStyles,
			attributes: formSectionImgAttributes,
		},
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<FormSectionImg
			{...rest}
			state={state}
			{...formSectionImgAttributes(state)}
			css={formSectionImgStyles(state)}
		/>
	);
};

FormSectionImg.defaultProps = {};

FormSectionImg.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn proptypes"  |
	// ----------------------------------------------------------------------
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		FormSectionImg: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
	}),
};
