import React from 'react';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';

export brands from './tokens.json';
export styled from '@emotion/styled';

export const ThemeProvider = ({ brand = 'WBC', theme = {}, ...props }) => (
	<EmotionThemeProvider theme={{ ...brands[brand], ...theme }} {...props} />
);
