import { jsx, useBrand, useMediaQuery, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const FormSectionImg = ({ state: _, ...rest }) => <img alt="Form section image" {...rest} />;

// ==============================
// Styles
// ==============================

const formSectionImgStyles = () => {
	const mq = useMediaQuery();

	return mq({
		label: getLabel('form-section-img'),
		display: 'block',
		margin: ['0 auto 1.125rem', '0 auto 2.625rem'],
		maxWidth: '100%',
	})[0];
};

// ==============================
// Attributes
// ==============================

const formSectionImgAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultFormSectionImg = {
	component: FormSectionImg,
	styles: formSectionImgStyles,
	attributes: formSectionImgAttributes,
};
