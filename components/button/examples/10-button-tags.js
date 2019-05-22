import React from 'react';

import { Button } from '../src/index.js';

export default () => (
	<>
		<Button href="#0">Link</Button>{' '}
		<Button type="submit">Button</Button>{' '}
		<Button tag="input" type="button" value="Input" />{' '}
		<Button tag="input" type="submit" value="Submit" />{' '}
		<Button tag="input" type="reset" value="Reset" />
	</>
);
