import React from 'react';
import ReactDOM from 'react-dom';
import 'core-js/es6/string';
import 'core-js/es6/map';
import 'core-js/es6/set';
import 'raf/polyfill';

import { AppStart } from './components/AppStart';

export default (components, packageName, pkg) => {
	const rootElement = document.getElementById('root');
	ReactDOM.render(
		<AppStart packageName={packageName} pkg={pkg} components={components} />,
		rootElement
	);
};
