import { jsx } from '@westpac/core';
import { useState } from 'react';
import { Modal, Body, Footer } from '@westpac/modal';
import { Button } from '@westpac/button';
import { Playground } from '../../../../website/src/components/playground/macro';

const Wrapper = (props) => <div css={{ display: 'flex', justifyContent: 'center' }} {...props} />;

const Demo = ({ context, showCode, showDemo }) => {
	const [open, setOpen] = useState(false);
	const [size, setSize] = useState('medium');
	const content =
		size === 'small'
			? `The line of the horizon was clear and hard against the sky, and in one particular quarter it showed black against a silvery climbing phosphorescence that grew and grew.`
			: `The line of the horizon was clear and hard against the sky, and in one particular quarter
it showed black against a silvery climbing phosphorescence that grew and grew. At last,
over the rim of the waiting earth the moon lifted with slow majesty till it swung clear of
the horizon and rode off, free of moorings; and once more they began to see
surfaces—meadows wide-spread, and quiet gardens, and the river itself from bank to bank,
all softly disclosed, all washed clean of mystery and terror, all radiant again as by day,
but with a difference that was tremendous. Their old haunts greeted them again in other
raiment, as if they had slipped away and put on this pure new apparel and come quietly
back, smiling as they shyly waited to see if they would be recognised again under it.`;
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Wrapper>
				<Button
					onClick={() => {
						setSize('small');
						setOpen(true);
					}}
					look="primary"
					soft
					overrides={{ Button: { styles: (styles) => ({ ...styles, marginRight: '2rem' }) } }}
				>
					Small Modal
				</Button>
				<Button
					onClick={() => {
						setSize('medium');
						setOpen(true);
					}}
					look="primary"
					soft
					overrides={{ Button: { styles: (styles) => ({ ...styles, marginRight: '2rem' }) } }}
				>
					Default Modal
				</Button>
				<Button
					onClick={() => {
						setSize('large');
						setOpen(true);
					}}
					look="primary"
					soft
				>
					Large Modal
				</Button>
			</Wrapper>
			<Modal heading="Modal heading" open={open} size={size} onClose={() => setOpen(false)}>
				<Body>{content}</Body>
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
