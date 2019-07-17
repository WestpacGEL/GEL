import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from '../src';

// TO DO: Replace buttons with GEL buttons once they are fixed and published to npm

export default () => {
	const [open, setOpen] = useState(false);

	const openModal = () => setOpen(true);
	const closeModal = () => setOpen(false);

	return (
		<>
			<button onClick={openModal}>Open</button>
			<Modal isOpen={open} onClose={closeModal}>
				<ModalHeader>Modal Title</ModalHeader>
				<ModalBody>
					‘It was much pleasanter at home’, thought poor Alice, ‘when one wasn’t always growing
					larger and smaller, and being ordered about by mice and rabbits. I almost wish I hadn’t
					gone down that rabbit-hole — and yet — and yet — it’s rather curious, you know, this sort
					of life! I do wonder what can have happened to me! When I used to read fairy-tales, I
					fancied that kind of thing never happened, and now here I am in the middle of one! There
					ought to be a book written about me, that there ought!’
				</ModalBody>
				<ModalFooter>
					<button onClick={closeModal}>Close</button>
				</ModalFooter>
			</Modal>
		</>
	);
};
