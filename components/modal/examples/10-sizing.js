import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from '../src';

// TO DO: Replace with proper button import once published to npm
import { Button } from '../../button/src';

export default () => {
	const [open, setOpen] = useState(false);
	const openModal = () => setOpen(true);
	const closeModal = () => setOpen(false);

	const [openSmall, setOpenSmall] = useState(false);
	const openSmallModal = () => setOpenSmall(true);
	const closeSmallModal = () => setOpenSmall(false);

	const [openLarge, setOpenLarge] = useState(false);
	const openLargeModal = () => setOpenLarge(true);
	const closeLargeModal = () => setOpenLarge(false);

	return (
		<>
			<p>
				<Button onClick={openModal}>Open default modal</Button>
			</p>
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
					<Button appearance="faint" onClick={closeModal}>
						Close
					</Button>
				</ModalFooter>
			</Modal>

			<p>
				<Button onClick={openSmallModal}>Open small modal</Button>
			</p>
			<Modal isOpen={openSmall} onClose={closeSmallModal} size="small">
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
					<Button appearance="faint" onClick={closeSmallModal}>
						Close
					</Button>
				</ModalFooter>
			</Modal>

			<p>
				<Button onClick={openLargeModal}>Open large modal</Button>
			</p>
			<Modal isOpen={openLarge} onClose={closeLargeModal} size="large">
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
					<Button appearance="faint" onClick={closeLargeModal}>
						Close
					</Button>
				</ModalFooter>
			</Modal>
		</>
	);
};
