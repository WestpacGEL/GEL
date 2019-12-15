import 'core-js/es6/string';
import 'core-js/es6/map';
import 'core-js/es6/set';
import 'core-js/es6/array';
import 'raf/polyfill';

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
