import React from 'react';

import { Well } from '../src';

export default () => (
	<>
		<h3>Default</h3>
		<Well>Look, I'm in a well.</Well>

		<hr />

		<h3>Nested</h3>
		<Well>
			I am outside
			<Well>I am inside</Well>
		</Well>

		<hr />

		<h3>Responsive</h3>
		<Well responsive>Look, I'm in a well and my paddings are responsive!</Well>
	</>
);
