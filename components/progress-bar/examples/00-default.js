import React from 'react';

import { ProgressBar } from '../src';

export default () => {
	return (
		<>
			<ProgressBar valuemin="0" valuemax="100" valuenow="45" />
			<ProgressBar valuemin="0" valuemax="100" valuenow="74" skinny />
		</>
	);
};
