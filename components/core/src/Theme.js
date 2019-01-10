import React from 'react';
import { ThemeProvider } from 'emotion-theming';

// TODO should come from @wespac/brand/*
const brands = {
	BOM: {
		colors: {
			gray: '#666',
			primary: '#1F252C',
		},
	},
	BSA: {
		colors: {
			gray: '#666',
			primary: '#002F6C',
		},
	},
	BTFG: {
		colors: {
			gray: '#666',
			primary: '#7998AC',
		},
	},
	STG: {
		colors: {
			gray: '#666',
			primary: '#78BE20',
		},
	},
	WBC: {
		colors: {
			gray: '#666',
			primary: '#D5002B',
		},
	},
	WBG: {
		colors: {
			gray: '#666',
			primary: '#9F0029',
		},
	},
};

const defaultBrandKey = 'WBC';
const defaultThemeFn = provided => provided;

export const GEL = ({ brand, theme, ...props }) => (
	<ThemeProvider theme={theme(brands[brand])} {...props} />
);

GEL.defaultProps = {
	brand: defaultBrandKey,
	theme: defaultThemeFn,
};
