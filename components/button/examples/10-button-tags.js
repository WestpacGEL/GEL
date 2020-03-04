/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Button } from '@westpac/button';

import { Intopia } from '../../../helpers/example/components/Intopia.js';
import { Playground } from '../../../website/src/components/playground/macro';

export default ({ context, showCode, showDemo }) => {
	const Link = ({ children, ...rest }) => <span {...rest}>{children}</span>;

	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Intopia />
			<h2>
				Button with an <code>&lt;a&gt;</code> tag
			</h2>
			<Button href="#0">Link</Button>{' '}
			<Button href="#0" look="link">
				Link
			</Button>
			<hr />
			<h2>
				Button with a <code>&lt;button&gt;</code> tag
			</h2>
			<Button>Default</Button> <Button type="button">Button</Button>{' '}
			<Button type="reset">Reset</Button> <Button type="submit">Submit</Button>
			<hr />
			<h2>
				Button with an <code>&lt;input&gt;</code> tag
			</h2>
			<Button tag="input" type="button" defaultValue="Button" />{' '}
			<Button tag="input" type="reset" defaultValue="Reset" />{' '}
			<Button tag="input" type="submit" defaultValue="Submit" />
			<hr />
			<h2>
				Button with an <code>&lt;Link&gt;</code> tag
			</h2>
			<Button tag={Link} to="path/to/thing" value="Button">
				Nav
			</Button>
		</Playground>
	);
};
