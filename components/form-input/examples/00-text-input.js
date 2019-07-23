import React from 'react';

import { FormInput } from '../src';
import { FormGroup } from '../../form/src';
import { Button } from '../../button/src';

export default () => (
	<>
		<h2>Default instance (no styling props)</h2>
		<FormInput />

		<hr />

		<h2>Size</h2>
		<FormInput size="small" placeholder="Small" />
		<br />
		<FormInput size="medium" placeholder="Medium" />
		<br />
		<FormInput size="large" placeholder="Large" />
		<br />
		<FormInput size="xlarge" placeholder="Xlarge" />

		<hr />

		<h2>Invalid</h2>
		<FormInput invalid />

		<hr />

		<h2>Disabled</h2>
		<FormInput disabled />
		<br />
		<FormInput disabled value="This input is disabled and contains a value" />

		<hr />

		<h2>Readonly</h2>
		<FormInput readOnly value="This value is readonly" />

		<hr />

		<h2>Inline</h2>
		<FormGroup inline>
			<FormInput /> <FormInput /> <Button type="submit">Submit</Button>
		</FormGroup>

		<hr />

		<h2>Fixed width</h2>
		<FormInput width={2} placeholder="2" />
		<br />
		<FormInput width={3} placeholder="3" />
		<br />
		<FormInput width={4} placeholder="width 4" />
		<br />
		<FormInput width={5} placeholder="width 5" />
		<br />
		<FormInput width={10} placeholder="width 10" />
		<br />
		<FormInput width={20} placeholder="width 20" />
		<br />
		<FormInput width={30} placeholder="width 30" />
	</>
);
