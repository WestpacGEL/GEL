import React, { useState } from 'react';

import { Modal } from '../src';
import { Box } from './_utils';

export default () => {
	const [open, setOpen] = useState(false);

	const openModal = () => setOpen(true);
	const closeModal = () => setOpen(false);
	// this isnt working after the first time because the values arent matching!!!
	// open here is not the same as the one in the modal after clicking close on the backdrop...!!!!!
	return (
		<>
			<button onClick={() => setOpen(true)}>Open</button>
			<Modal isOpen={open} onClose={closeModal} />
		</>
	);
};
