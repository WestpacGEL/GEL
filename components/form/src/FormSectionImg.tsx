/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { defaultFormSectionImg } from './overrides/formSectionImg';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const FormSectionImg = ({
	overrides: componentOverrides,
	...rest
}: typeof FormSectionImg.propTypes & typeof FormSectionImg.defaultProps) => {
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

// ==============================
// Types
// ==============================

FormSectionImg.propTypes = {
	/**
	 * Component img src
	 */
	src: PropTypes.string.isRequired,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		FormSectionImg: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};

FormSectionImg.defaultProps = {};
