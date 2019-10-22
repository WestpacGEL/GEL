/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { ButtonGroup, Button } from '@westpac/button-group';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<ButtonGroup name="example-checked" defaultChecked="left">
				<Button value="left">Left</Button>
				<Button value="middle" checked>
					Middle
				</Button>
				<Button value="right">Right</Button>
			</ButtonGroup>
		</GEL>
	);
}

export default Example;
