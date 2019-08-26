import React from 'react';

import { ProgressBar } from '../src';

export default () => {
	return (
		<>
			<ProgressBar valueNow={45} />
			<ProgressBar valueNow={74} skinny />
		</>
	);
};
