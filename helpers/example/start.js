import 'raf/polyfill';
import 'core-js/es';

import React from 'react';
import ReactDOM from 'react-dom';

import { AppStart } from './components/AppStart';

export default (components, packageName, pkg, version) => {
	const rootElement = document.getElementById('root');
	ReactDOM.render(
		<AppStart packageName={packageName} pkg={pkg} components={components} version={version} />,
		rootElement
	);
};
