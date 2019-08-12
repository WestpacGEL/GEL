import React from 'react';

import { ProgressBar } from '../src';

export default () => {
	return (
		<>
			<ProgressBar valuenow={45} />
			<ProgressBar valuenow={74} skinny />
		</>
	);
};
