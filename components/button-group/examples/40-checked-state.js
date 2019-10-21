import React from 'react';
import { ButtonGroup, Button } from '../src';

export default () => (
	<>
		<ButtonGroup name="example-checked" defaultChecked="left">
			<Button value="left">Left</Button>
			<Button value="middle" checked>
				Middle
			</Button>
			<Button value="right">Right</Button>
		</ButtonGroup>
	</>
);
