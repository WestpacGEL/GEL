import React from 'react';

import { Breadcrumb, Crumb } from '../src';

export default () => (
	<>
		<Breadcrumb>
			<Crumb>
				<a href="/">Home</a>
			</Crumb>
			<Crumb>
				<a href="/personal-banking/">Personal</a>
			</Crumb>
			<Crumb>Credit cards</Crumb>
		</Breadcrumb>
	</>
);
