import React, { useState } from 'react';
import { Modal, Header, Body, Footer } from '../src';
// import { Button } from '@westpac/button';

export default () => {
	const [open, setOpen] = useState(false);

	const openModal = () => setOpen(true);
	const closeModal = () => setOpen(false);

	return (
		<>
			<button onClick={openModal}>Open</button>
			<Modal open={open} onClose={closeModal}>
				<Header>Modal Title</Header>
				<Body>
					‘It was much pleasanter at home’, thought poor Alice, ‘when one wasn’t always growing
					larger and smaller, and being ordered about by mice and rabbits. I almost wish I hadn’t
					gone down that rabbit-hole — and yet — and yet — it’s rather curious, you know, this sort
					of life! I do wonder what can have happened to me! When I used to read fairy-tales, I
					fancied that kind of thing never happened, and now here I am in the middle of one! There
					ought to be a book written about me, that there ought!’
				</Body>
				<Footer>
					<button appearance="faint" onClick={closeModal}>
						Close
					</button>
				</Footer>
			</Modal>
		</>
	);
};
