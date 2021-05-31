/** @jsx jsx */

import { jsx } from '@westpac/core';
import { useState } from 'react';
import { Modal, Body, Footer } from '@westpac/modal';
import { Button } from '@westpac/button';
import { Playground } from '../../../../website/src/components/playground/macro';

const demo = ({ context, showCode, showDemo }) => {
	const [open, setOpen] = useState(false);
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Button onClick={() => setOpen(true)} look="primary" soft>
				Open
			</Button>
			<Modal heading="Sudden and magnificent" open={open} onClose={() => setOpen(false)}>
				<Body>
					‘The line of the horizon was clear and hard against the sky, and in one particular quarter
					it showed black against a silvery climbing phosphorescence that grew and grew.’
				</Body>
				<Footer>
					<Button look="faint" onClick={() => setOpen(false)}>
						Close
					</Button>
					<Button look="primary" onClick={() => setOpen(false)}>
						Save changes
					</Button>
				</Footer>
			</Modal>
		</Playground>
	);
};

export default Demo;
