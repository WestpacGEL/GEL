import React from 'react';
import ReactDOM from 'react-dom';

import { AppStart } from './components/AppStart';

export default (components, packageName, pkg) => {
	const rootElement = document.getElementById('root');
	ReactDOM.render(
		<AppStart packageName={packageName} pkg={pkg} components={components} />,
		rootElement
	);
};
