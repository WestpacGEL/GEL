import React, { useReducer } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from '../src';
import { Button } from '@westpac/button';

export default () => {
	const initialState = { default: { open: false }, small: { open: false }, large: { open: false } };

	const modalReducer = (state, action) => {
		switch (action.type) {
			case 'default':
				return { ...state, default: { open: action.payload.open } };
			case 'small':
				return { ...state, small: { open: action.payload.open } };
			case 'large':
				return { ...state, large: { open: action.payload.open } };
			default:
				throw new Error();
		}
	};

	const [state, dispatch] = useReducer(modalReducer, initialState);

	const updateModal = (type, open) => dispatch({ type, payload: { open } });

	return (
		<>
			<p>
				<Button onClick={() => updateModal('default', true)}>Open default modal</Button>
			</p>
			<Modal isOpen={state.default.open} onClose={() => updateModal('default', false)}>
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
					<Button appearance="faint" onClick={() => updateModal('default', false)}>
						Close
					</Button>
				</ModalFooter>
			</Modal>

			<p>
				<Button onClick={() => updateModal('small', true)}>Open small modal</Button>
			</p>
			<Modal isOpen={state.small.open} onClose={() => updateModal('small', false)} size="small">
				<ModalHeader>
					Modal Title Modal Title Modal Title Modal Title Modal Title Modal Title
				</ModalHeader>
				<ModalBody>
					‘It was much pleasanter at home’, thought poor Alice, ‘when one wasn’t always growing
					larger and smaller, and being ordered about by mice and rabbits. I almost wish I hadn’t
					gone down that rabbit-hole — and yet — and yet — it’s rather curious, you know, this sort
					of life! I do wonder what can have happened to me! When I used to read fairy-tales, I
					fancied that kind of thing never happened, and now here I am in the middle of one! There
					ought to be a book written about me, that there ought!’ ‘It was much pleasanter at home’,
					thought poor Alice, ‘when one wasn’t always growing larger and smaller, and being ordered
					about by mice and rabbits. I almost wish I hadn’t gone down that rabbit-hole — and yet —
					and yet — it’s rather curious, you know, this sort of life! I do wonder what can have
					happened to me! When I used to read fairy-tales, I fancied that kind of thing never
					happened, and now here I am in the middle of one! There ought to be a book written about
					me, that there ought!’ ‘It was much pleasanter at home’, thought poor Alice, ‘when one
					wasn’t always growing larger and smaller, and being ordered about by mice and rabbits. I
					almost wish I hadn’t gone down that rabbit-hole — and yet — and yet — it’s rather curious,
					you know, this sort of life! I do wonder what can have happened to me! When I used to read
					fairy-tales, I fancied that kind of thing never happened, and now here I am in the middle
					of one! There ought to be a book written about me, that there ought!’
				</ModalBody>
				<ModalFooter>
					<Button appearance="faint" onClick={() => updateModal('small', false)}>
						Close
					</Button>
				</ModalFooter>
			</Modal>

			<p>
				<Button onClick={() => updateModal('large', true)}>Open large modal</Button>
			</p>
			<Modal isOpen={state.large.open} onClose={() => updateModal('large', false)} size="large">
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
					<Button appearance="faint" onClick={() => updateModal('large', false)}>
						Close
					</Button>
				</ModalFooter>
			</Modal>
		</>
	);
};
