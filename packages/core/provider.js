import React from 'react';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';

import brands from './data.json';

export const ThemeProvider = ({ brand, theme = {}, ...props }) => (
  <EmotionThemeProvider theme={{ ...brands[brand], ...theme }} {...props} />
);
