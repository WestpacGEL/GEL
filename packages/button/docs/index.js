import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@westpac/core/theme';

import { Button } from '../index.js';

console.log('Button', Button);

ReactDOM.render(
	<ThemeProvider value="WBC">
		<Button>Should be button</Button>
	</ThemeProvider>,

	document.getElementById('root')
);
