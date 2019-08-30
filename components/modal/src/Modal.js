/** @jsx jsx */

import React, { Children, cloneElement, useState, useEffect } from 'react';
import { jsx, useTheme } from '@westpac/core';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import FocusLock from 'react-focus-lock';
import { CSSTransition } from 'react-transition-group';
import { ModalBackdrop, StyledModal } from './styled';
import { ModalHeader } from './ModalHeader';
import { ModalBody } from './ModalBody';

// ==============================
// Component
// ==============================
export const Modal = ({ isOpen, onClose, size, children, ...props }) => {
	const [open, setOpen] = useState(isOpen);

	useEffect(
		() => {
			setOpen(isOpen);
		},
		[isOpen]
	);

	const handleClose = () => {
		if (onClose) {
			onClose();
		} else {
			setOpen(false);
		}
	};

	const modalId = shortid.generate();
	const titleId = `modal-header-title-${modalId}`;
	const bodyId = `modal-body-${modalId};`;

	const childrenWithProps = Children.map(children, child => {
		if (child && child.type) {
			if (child.type === ModalHeader) {
				return cloneElement(child, {
					id: titleId,
					onClose: handleClose,
				});
			}

			if (child.type === ModalBody) {
				return cloneElement(child, {
					id: bodyId,
				});
			}
		}
		return child;
	});

	// on escape close modal
	const keyHandler = event => {
		if (event.keyCode === 27) handleClose();
	};

	// bind key events
	useEffect(() => {
		window.document.addEventListener('keydown', keyHandler);
		return () => {
			window.document.removeEventListener('keydown', keyHandler);
		};
	});

	const handleBackdropClick = e => {
		if (e.target === e.currentTarget) handleClose();
	};

	return ReactDOM.createPortal(
		<CSSTransition mountOnEnter unmountOnExit in={open} timeout={300} classNames="modal-backdrop">
			<ModalBackdrop onClick={handleBackdropClick}>
				<FocusLock returnFocus autoFocus={false}>
					<CSSTransition appear in={open} timeout={100} classNames="modal">
						<StyledModal
							role="dialog"
							aria-modal="true"
							aria-labelledby={titleId}
							aria-describedby={bodyId}
							tabIndex="-1"
							size={size}
							{...props}
						>
							{childrenWithProps}
						</StyledModal>
					</CSSTransition>
				</FocusLock>
			</ModalBackdrop>
		</CSSTransition>,
		document.body
	);
};

// ==============================
// Types
// ==============================

Modal.propTypes = {
	/** State of whether the modal is open */
	isOpen: PropTypes.bool,
	/** Callback function for handling modal state */
	onClose: PropTypes.func,
	/** Size of the modal */
	size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Modal.defaultProps = {
	isOpen: false,
	size: 'medium',
};
