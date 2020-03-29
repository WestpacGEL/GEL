/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { Button } from '@westpac/button';
import { TextInput, Textarea, Select } from '@westpac/text-input';
import { Body } from '@westpac/body-text';

import { Intopia } from '../../../helpers/example/components/Intopia.js';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<Intopia />

			<h2>Focus test</h2>

			<BodyText>
				<h3>Expected behaviour</h3>
				<p>
					Keyboard users will see a visible outline when tabbing to focusable elements. <br />
					Mouse users will not see a visible outline when clicking on all focusable elements except
					text input elements (text input, select and textarea).
				</p>
				<p>
					Learn more about{' '}
					<a
						href="https://medium.com/@wilkowskidom/how-i-learned-to-stop-worrying-and-love-the-outline-7a35b3b49e7"
						target="_blank"
					>
						How we handle focus
					</a>
					.
				</p>
			</BodyText>

			<hr />

			<BodyText>
				<p>
					<a href="#0">This is a link</a>
				</p>
			</BodyText>

			<Button>Button as a &lt;button&gt;</Button>
			<br />
			<br />
			<Button href="#0">Button as an &lt;a&gt;</Button>
			<br />
			<br />
			<BodyText>
				<Button>Button as a &lt;button&gt; and child of Body</Button>
				<br />
				<br />
				<Button href="#0">Button as an &lt;a&gt; and child of Body</Button>
			</BodyText>

			<hr />

			<p>Note: All users should see our focus outline styling; not just keyboard users.</p>
			<TextInput />
			<br />
			<Select>
				<option>Select</option>
			</Select>
			<br />
			<Textarea />

			<hr />

			<BodyText>
				<p>Note: The following headings should show focus outline styling when keyboard tabbing.</p>
				<h1 tabIndex="0">This is a h1 heading</h1>
				<h2 tabIndex="0">This is a h2 heading</h2>
				<h3 tabIndex="0">This is a h3 heading</h3>
				<h4 tabIndex="0">This is a h4 heading</h4>
				<h5 tabIndex="0">This is a h5 heading</h5>
				<h6 tabIndex="0">This is a h6 heading</h6>
			</BodyText>
		</GEL>
	);
}

export default Example;
