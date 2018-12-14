import React from 'react';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import emotionStyled from '@emotion/styled';

export const styled = emotionStyled;

const brands = {};

export const GEL = ({ brand, theme, ...props }) => {
	// await import(process.env.BRAND);

	return <EmotionThemeProvider theme={theme(brands[brand])} {...props} />;
};

GEL.defaultProps = {
	brand: 'WBC',
	theme: () => {},
};
