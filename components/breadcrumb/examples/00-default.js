import React from 'react';

import { Breadcrumb } from '../src';

export default () => (
	<Breadcrumb
		arrItem={[
			['Home', '/'],
			['Personal', '/personal-banking/'],
			['Credit cards', '/personal-banking/credit-cards/'],
		]}
	/>
);
