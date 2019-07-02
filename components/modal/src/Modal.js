/** @jsx jsx */

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { jsx, css, useTheme, styled } from '@westpac/core';

/* 
Need
- Backdrop
- Header
- Body
- Footer
- will need to put foucs on modal after opening
*/

// ==============================
// Utils
// ==============================
// need to separate these components into their own files, in here for now just for ease of use
const ModalBackdrop = props => (
	<div
		css={{
			position: 'fixed',
			backgroundColor: 'rgba(0,0,0,0.5)',
			top: 0,
			right: 0,
			bottom: 0,
			left: 0,
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'flex-start',
			padding: '0 12px',
		}}
		{...props}
	/>
);

// need to add responsive design to this
const StyledModal = props => (
	<div
		css={{
			marginTop: 30,
			width: 600,
			maxheight: '85%',
			borderRadius: 3,
			boxShadow: '0 5px 15px rgba(0,0,0,0.5)',
			backgroundColor: '#fff',
		}}
		{...props}
	/>
);

const ModalHeader = props => {
	const theme = useTheme();

	return (
		<div
			css={{
				borderBottom: `1px solid ${theme.colors.hero.default}`,
				padding: '16px 24px 12px',
			}}
			{...props}
		/>
	);
};

const ModalHeaderTitle = props => {
	const theme = useTheme();
	return (
		<span
			css={{
				fontSize: 18,
				fontWeight: 700,
				color: `${theme.colors.text}`,
			}}
			{...props}
		/>
	);
};

const ModalBody = props => <div css={{ padding: '18px 24px' }} {...props} />;

const ModalFooter = props => {
	const theme = useTheme();

	return (
		<div
			css={{
				backgroundColor: `${theme.colors.background}`,
				borderTop: `1px solid ${theme.colors.border}`,
				textAlign: 'right',
				padding: '12px 18px',
			}}
			{...props}
		/>
	);
};
// ==============================
// Component
// ==============================

// really need to figure out the pattern for onClose
// since they pass isOpen we cant update that ourselves?
export const Modal = ({ isOpen, onClose, children }) => {
	const [open, setOpen] = useState(isOpen);

	// only run effect on props change
	// important for if they pass us a function to update the props they are passing in via an onclose funciton or redux
	useEffect(
		() => {
			setOpen(isOpen);
		},
		[isOpen]
	);

	// Really need to determine what the pattern is going to be for this...
	const handleClose = () => {
		if (onClose) {
			onClose();
		} else {
			setOpen(false);
		}
	};

	//should be <ModalBackdrop>{children}</ModalBackdrop>
	return ReactDOM.createPortal(
		<>
			{open && (
				<ModalBackdrop onClick={handleClose}>
					<StyledModal>
						<ModalHeader>
							<ModalHeaderTitle>Modal title</ModalHeaderTitle>
						</ModalHeader>
						<ModalBody>
							‘It was much pleasanter at home’, thought poor Alice, ‘when one wasn’t always growing
							larger and smaller, and being ordered about by mice and rabbits. I almost wish I
							hadn’t gone down that rabbit-hole — and yet — and yet — it’s rather curious, you know,
							this sort of life! I do wonder what can have happened to me! When I used to read
							fairy-tales, I fancied that kind of thing never happened, and now here I am in the
							middle of one! There ought to be a book written about me, that there ought!’
						</ModalBody>
						<ModalFooter>
							<button
								onClick={e => {
									e.preventDefault();
									console.log('save??');
								}}
							>
								Save
							</button>
						</ModalFooter>
					</StyledModal>
				</ModalBackdrop>
			)}
		</>,
		document.body
	);
};

// ==============================
// Types
// ==============================

Modal.propTypes = {
	/**
	 * Describe `someProperty` here
	 */
	someProperty: PropTypes.string,
};

Modal.defaultProps = {};
