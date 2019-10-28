/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { Button } from '@westpac/button';
import { Text, Textarea, Select } from '@westpac/text-input';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<h2>Focus test</h2>
			<p>
				<a href="https://medium.com/@wilkowskidom/how-i-learned-to-stop-worrying-and-love-the-outline-7a35b3b49e7">
					The exmplanation for how we handle focus
				</a>
				. So clicking should not show an outline but as soon as you us the tab key will make the
				outline visible. You can click on any of the links below and it shouldn't show any outlines.
			</p>

			<hr />

			<p>
				<a href="#0">This is a link</a>
			</p>
			<p>
				<Button>This is a Button as a &lt;button&gt;</Button>
			</p>
			<p>
				<Button href="#0">This is a Button as an &lt;a&gt;</Button>
			</p>

			<hr />

			<p>Note: All users should see our focus outline styling; not just keyboard users.</p>
			<Text />
			<br />
			<Select>
				<option>Select</option>
			</Select>
			<br />
			<Textarea />

			<hr />

			<p>Note: The following headings should show focus outline styling when keyboard tabbing.</p>
			<h1 tabIndex="0">This is a h1 heading</h1>
			<h2 tabIndex="0">This is a h2 heading</h2>
			<h3 tabIndex="0">This is a h3 heading</h3>
			<h4 tabIndex="0">This is a h4 heading</h4>
			<h5 tabIndex="0">This is a h5 heading</h5>
			<h6 tabIndex="0">This is a h6 heading</h6>
		</GEL>
	);
}

export default Example;
