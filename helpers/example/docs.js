import 'core-js/es';
import 'raf/polyfill';

import ResizeObserver from 'resize-observer-polyfill';
window.ResizeObserver = ResizeObserver;

import React from 'react';
import { createRoot } from 'react-dom/client';

import { AppDocs } from './components/AppDocs';

export default (components) => {
	const rootElement = document.getElementById('root');
	const root = createRoot(rootElement);
	root.render(<AppDocs components={components} />);
};
