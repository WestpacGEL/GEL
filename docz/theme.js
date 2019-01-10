import React from 'react';
import { theme, ThemeConfig, DocPreview } from 'docz';
import { ThemeProvider } from 'emotion-theming';

const Theme = () => (
	<ThemeConfig>
		{config => (
			<ThemeProvider theme={config}>
				<DocPreview components={{}} />
			</ThemeProvider>
		)}
	</ThemeConfig>
);

const themeConfig = {
	colors: {
		primary: 'tomato',
		secondary: 'khaki',
		gray: 'lightslategray',
	},
};

export default theme(themeConfig)(Theme);
