import React from 'react';
import ReactDOM from 'react-dom';

import { AppDocs } from './components/AppDocs';

export default components => {
	const rootElement = document.getElementById('root');
	ReactDOM.render(<AppDocs components={components} />, rootElement);
};
