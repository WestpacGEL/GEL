import 'core-js/es6/string';
import 'core-js/es6/object';
import 'core-js/es6/array';
import 'core-js/es6/map';
import 'core-js/es6/set';
import 'raf/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import { AppDocs } from './components/AppDocs';

export default components => {
	const rootElement = document.getElementById('root');
	ReactDOM.render(<AppDocs components={components} />, rootElement);
};
