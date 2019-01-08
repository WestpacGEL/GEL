import React from 'react';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';

const brands = {};

export const GEL = ({ brand, theme, ...props }) => (
	<EmotionThemeProvider theme={theme(brands[brand])} {...props} />
);

GEL.defaultProps = {
	brand: 'WBC',
	theme: () => {},
};
