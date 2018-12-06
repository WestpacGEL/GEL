import React from 'react';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import emotionStyled from '@emotion/styled';
import brandTokens from './tokens.json';

export const brands = JSON.stringify(brandTokens);
export const styled = emotionStyled;

export const ThemeProvider = ({ brand = 'WBC', theme = {}, ...props }) => (
	<EmotionThemeProvider theme={{ ...brands[brand], ...theme }} {...props} />
);
