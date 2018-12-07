import React from 'react';
import ReactDOM from 'react-dom';

import { ThemeProvider } from '../src/index.js';

ReactDOM.render(
	<div>
		I think it's working???
		<ThemeProvider />
	</div>,

	document.getElementById('root')
);
