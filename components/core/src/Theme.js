import React from 'react';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import emotionStyled from '@emotion/styled';
// import brandTokens from './tokens.json';

export const styled = emotionStyled;

const brands = {};

export const GEL = ({ brand, theme, ...props }) => (
	<EmotionThemeProvider theme={theme(brands[brand])} {...props} />
);

GEL.defaultProps = {
	brand: 'WBC',
	theme: () => {},
};
