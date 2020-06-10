/** @jsx jsx */

import { jsx } from '@westpac/core';
import { useState } from 'react';
import { Modal, Body, Footer } from '@westpac/modal';
import { Button } from '@westpac/button';
import { Playground } from '../../../../website/src/components/playground/macro';

const Wrapper = (props) => <div css={{ display: 'flex', justifyContent: 'center' }} {...props} />;

export default ({ context, showCode, showDemo }) => {
	const [open, setOpen] = useState(false);
	const [size, setSize] = useState('medium');

	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Wrapper>
				<Button
					onClick={() => {
						setSize('small');
						setOpen(true);
					}}
					overrides={{ Button: { styles: (styles) => ({ ...styles, marginRight: '2rem' }) } }}
				>
					Small Modal
				</Button>
				<Button
					onClick={() => {
						setSize('medium');
						setOpen(true);
					}}
					overrides={{ Button: { styles: (styles) => ({ ...styles, marginRight: '2rem' }) } }}
				>
					Default Modal
				</Button>
				<Button
					onClick={() => {
						setSize('large');
						setOpen(true);
					}}
				>
					Large Modal
				</Button>
			</Wrapper>
			<Modal heading="Modal heading" open={open} size={size} onClose={() => setOpen(false)}>
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
