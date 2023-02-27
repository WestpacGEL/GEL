import { GEL, jsx } from '@westpac/core';
import { useState } from 'react';
import { Modal, Body } from '@westpac/modal';
import { Button } from '@westpac/button';

function Example({ brand }) {
	const [open, setOpen] = useState(false);

	return (
		<GEL brand={brand}>
			<Button onClick={() => setOpen(true)}>Open default modal</Button>
			<Modal heading="Modal heading" open={open} onClose={() => setOpen(false)}>
				<Body>
					<p>
						‘It was much pleasanter at home’, thought poor Alice, ‘when one wasn’t always growing
						larger and smaller, and being ordered about by mice and rabbits. I almost wish I hadn’t
						gone down that rabbit-hole — and yet — and yet — it’s rather curious, you know, this
						sort of life! I do wonder what can have happened to me! When I used to read fairy-tales,
						I fancied that kind of thing never happened, and now here I am in the middle of one!
						There ought to be a book written about me, that there ought!’
					</p>
					<p>
						‘It was much pleasanter at home’, thought poor Alice, ‘when one wasn’t always growing
						larger and smaller, and being ordered about by mice and rabbits. I almost wish I hadn’t
						gone down that rabbit-hole — and yet — and yet — it’s rather curious, you know, this
						sort of life! I do wonder what can have happened to me! When I used to read fairy-tales,
						I fancied that kind of thing never happened, and now here I am in the middle of one!
						There ought to be a book written about me, that there ought!’
					</p>
					<p>
						‘It was much pleasanter at home’, thought poor Alice, ‘when one wasn’t always growing
						larger and smaller, and being ordered about by mice and rabbits. I almost wish I hadn’t
						gone down that rabbit-hole — and yet — and yet — it’s rather curious, you know, this
						sort of life! I do wonder what can have happened to me! When I used to read fairy-tales,
						I fancied that kind of thing never happened, and now here I am in the middle of one!
						There ought to be a book written about me, that there ought!’
					</p>
				</Body>
			</Modal>
		</GEL>
	);
}

export default Example;
