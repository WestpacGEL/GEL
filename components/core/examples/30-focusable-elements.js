import React from 'react';

import { Button } from '../../button/src';
// import { TextInput } from '../../text-input/src';

export default () => (
	<>
		<h2>Links</h2>
		<a href="#0">This is a link</a>

		<hr />

		<h2>Buttons</h2>
		<Button>This is a Button as a &lt;button&gt;</Button>
		<br />
		<br />
		<Button href="#0">This is a Button as an &lt;a&gt;</Button>

		<hr />

		<h2>Inputs</h2>
		<p>Note: All users should see our focus outline styling; not just keyboard users.</p>
		{/* <TextInput />
		<br />
		<TextInput tag="select">
			<option>Select</option>
		</TextInput>
		<br />
		<TextInput tag="textarea" /> */}

		<hr />

		<h2>Headings</h2>

		<h3>
			Not reachable by the keyboard navigation (<code>tabindex="0"</code>)
		</h3>
		<p>Note: The following headings should show focus outline styling when keyboard tabbing.</p>

		<h1 tabIndex="0">This is a h1 heading</h1>
		<h2 tabIndex="0">This is a h2 heading</h2>
		<h3 tabIndex="0">This is a h3 heading</h3>
		<h4 tabIndex="0">This is a h4 heading</h4>
		<h5 tabIndex="0">This is a h5 heading</h5>
		<h6 tabIndex="0">This is a h6 heading</h6>

		<h3>
			Reachable by the keyboard navigation (<code>tabindex="-1"</code>)
		</h3>
		<p>Note: The following headings should NOT show focus outline styling when keyboard tabbing.</p>

		<h1 tabIndex="-1">This is a h1 heading</h1>
		<h2 tabIndex="-1">This is a h2 heading</h2>
		<h3 tabIndex="-1">This is a h3 heading</h3>
		<h4 tabIndex="-1">This is a h4 heading</h4>
		<h5 tabIndex="-1">This is a h5 heading</h5>
		<h6 tabIndex="-1">This is a h6 heading</h6>
	</>
);
