/** @jsx jsx */

import { GEL, jsx, useBrand, overrideReconciler } from '@westpac/core';
import { createContext, useContext, useState, useEffect, useRef } from 'react';
import { useOutsideClick } from '@westpac/hooks';
import { FocusOn } from 'react-focus-on';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import { defaultModal } from './overrides/modal';
import { defaultBackdrop } from './overrides/backdrop';
import { defaultCloseBtn } from './overrides/closeBtn';
import { defaultHeader } from './overrides/header';
import { defaultTitle } from './overrides/title';
import pkg from '../package.json';

// ==============================
// Context and Consumer Hook
// ==============================

const ModalContext = createContext();

export const useModalContext = () => {
	const context = useContext(ModalContext);

	if (!context) {
		throw new Error('<Body/> and <Footer/> components should be wrapped in a <Modal>.');
	}

	return context;
};

// ==============================
// Component
// ==============================

export const Modal = ({
	heading,
	open: isOpen,
	onClose,
	size,
	dismissible,
	children,
	overrides: componentOverrides,
	...rest
}) => {
	const brand = useBrand();
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = brand;

	const [open, setOpen] = useState(isOpen);

	const defaultOverrides = {
		Modal: defaultModal,
		Backdrop: defaultBackdrop,
		Header: defaultHeader,
		Title: defaultTitle,
		CloseBtn: defaultCloseBtn,
	};

	const state = {
		open,
		heading,
		onClose,
		size,
		dismissible,
		overrides: componentOverrides,
		...rest,
	};

	const {
		Modal: { component: Modal, styles: modalStyles, attributes: modalAttributes },
		Backdrop: { component: Backdrop, styles: backdropStyles, attributes: backdropAttributes },
		Header: { component: Header, styles: headerStyles, attributes: headerAttributes },
		Title: { component: Title, styles: titleStyles, attributes: titleAttributes },
		CloseBtn: { component: CloseBtn, styles: closeBtnStyles, attributes: closeBtnAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	const modalRef = useRef();
	const titleRef = useRef();

	useEffect(() => {
		setOpen(isOpen);
	}, [isOpen]);

	const handleClose = () => {
		if (onClose) {
			onClose();
		} else {
			setOpen(false);
		}
	};

	// on escape close modal
	const keyHandler = (event) => {
		if (dismissible && open && event.keyCode === 27) handleClose();
	};

	// bind key events
	useEffect(() => {
		window.document.addEventListener('keydown', keyHandler);
		return () => {
			window.document.removeEventListener('keydown', keyHandler);
		};
	});

	useOutsideClick(modalRef, () => {
		if (dismissible) {
			handleClose();
		}
	});

	if (typeof window !== 'undefined') {
		return ReactDOM.createPortal(
			<GEL brand={brand}>
				<ModalContext.Provider value={{ state }}>
					<Backdrop state={state} {...backdropAttributes(state)} css={backdropStyles(state)} />
					<FocusOn enabled={open} onActivation={() => titleRef.current.focus()}>
						<Modal
							ref={modalRef}
							state={state}
							{...rest}
							{...modalAttributes(state)}
							css={modalStyles(state)}
						>
							<Header state={state} {...headerAttributes(state)} css={headerStyles(state)}>
								<Title
									ref={titleRef}
									state={state}
									{...titleAttributes(state)}
									css={titleStyles(state)}
								>
									{heading}
								</Title>
								{dismissible && (
									<CloseBtn
										onClick={() => handleClose()}
										state={state}
										{...closeBtnAttributes(state)}
										css={{ '&&': closeBtnStyles(state) }}
									/>
								)}
							</Header>
							{children}
						</Modal>
					</FocusOn>
				</ModalContext.Provider>
			</GEL>,
			document.body
		);
	} else {
		return null;
	}
};

// ==============================
// Types
// ==============================

Modal.propTypes = {
	/**
	 * Modal heading text
	 */
	heading: PropTypes.string.isRequired,

	/**
	 * State of whether the modal is open
	 */
	open: PropTypes.bool.isRequired,

	/**
	 * Callback function for handling modal state
	 */
	onClose: PropTypes.func,

	/**
	 * Size of the modal
	 */
	size: PropTypes.oneOf(['small', 'medium', 'large']).isRequired,

	/**
	 * Enable dismissible mode.
	 *
	 * Allows modal close via close button, background overlay click and Esc key.
	 */
	dismissible: PropTypes.bool,

	/**
	 * The content for this list group
	 */
	children: PropTypes.node,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Modal: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Backdrop: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Header: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Title: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		CloseBtn: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};

Modal.defaultProps = {
	open: false,
	size: 'medium',
	dismissible: true,
};
