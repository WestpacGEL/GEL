import 'core-js/es';
import 'raf/polyfill';

import ResizeObserver from 'resize-observer-polyfill';
window.ResizeObserver = ResizeObserver;

import React from 'react';
import { createRoot } from 'react-dom/client';

import { AppStart } from './components/AppStart';

export default (components, packageName, pkg, version) => {
	const rootElement = document.getElementById('root');
	const root = createRoot(rootElement);
	root.render(
		<AppStart packageName={packageName} pkg={pkg} components={components} version={version} />
	);
};
