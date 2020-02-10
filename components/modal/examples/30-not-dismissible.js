/** @jsx jsx */

import { jsx } from '@westpac/core';
import { useState } from 'react';
import { Modal, Body, Footer } from '@westpac/modal';
import { Button } from '@westpac/button';

import { Intopia } from '../../../helpers/example/components/Intopia.js';

function Example({ brand }) {
	const [open, setOpen] = useState(false);

	return (
		<Playground brand={brand}>
			<Intopia />

			<Button onClick={() => setOpen(true)}>Open</Button>
			<Modal heading="Modal Title" open={open} onClose={() => setOpen(false)} dismissible={false}>
				<Body>
					‘It was much pleasanter at home’, thought poor Alice, ‘when one wasn’t always growing
					larger and smaller, and being ordered about by mice and rabbits. I almost wish I hadn’t
					gone down that rabbit-hole — and yet — and yet — it’s rather curious, you know, this sort
					of life! I do wonder what can have happened to me! When I used to read fairy-tales, I
					fancied that kind of thing never happened, and now here I am in the middle of one! There
					ought to be a book written about me, that there ought!’
				</Body>
				<Footer>
					<Button look="faint" onClick={() => setOpen(false)}>
						Cancel
					</Button>
					<Button look="primary" onClick={() => setOpen(false)}>
						Submit
					</Button>
				</Footer>
			</Modal>
		</Playground>
	);
}

export default Example;
