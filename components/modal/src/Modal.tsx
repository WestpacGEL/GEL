/** @jsx jsx */

import { jsx, GEL, useBrand, overrideReconciler } from '@westpac/core';
import {
	Fragment,
	createContext,
	useContext,
	useState,
	useEffect,
	useRef,
	useCallback,
} from 'react';
import { FocusOn, AutoFocusInside } from 'react-focus-on';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import { defaultModal } from './overrides/modal';
import { defaultModalDialog } from './overrides/modalDialog';
import { defaultModalContent } from './overrides/modalContent';
import { defaultHeader } from './overrides/header';
import { defaultHeading } from './overrides/heading';
import { defaultCloseBtn } from './overrides/closeBtn';
import { defaultBackdrop } from './overrides/backdrop';
import pkg from '../package.json';

// ==============================
// Context and Consumer Hook
// ==============================

const ModalContext = createContext(null);

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
}: typeof Modal.propTypes & typeof Modal.defaultProps) => {
	const brand = useBrand();
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = brand;

	const [open, setOpen] = useState(isOpen);

	const defaultOverrides = {
		Modal: defaultModal,
		ModalDialog: defaultModalDialog,
		ModalContent: defaultModalContent,
		Header: defaultHeader,
		Heading: defaultHeading,
		CloseBtn: defaultCloseBtn,
		Backdrop: defaultBackdrop,
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
		ModalDialog: {
			component: ModalDialog,
			styles: modalDialogStyles,
			attributes: modalDialogAttributes,
		},
		ModalContent: {
			component: ModalContent,
			styles: modalContentStyles,
			attributes: modalContentAttributes,
		},
		Header: { component: Header, styles: headerStyles, attributes: headerAttributes },
		Heading: { component: Heading, styles: headingStyles, attributes: headingAttributes },
		CloseBtn: { component: CloseBtn, styles: closeBtnStyles, attributes: closeBtnAttributes },
		Backdrop: { component: Backdrop, styles: backdropStyles, attributes: backdropAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	const modalRef = useRef(null);
	const headingRef = useRef(null);

	useEffect(() => {
		setOpen(isOpen);
	}, [isOpen]);

	const handleClose = useCallback(() => {
		if (onClose) {
			onClose();
		} else {
			setOpen(false);
		}
	}, [onClose]);

	// on escape close modal
	const keyHandler = useCallback(
		(e: KeyboardEvent) => {
			if (dismissible && open && e.keyCode === 27) handleClose();
		},
		[dismissible, handleClose, open]
	);

	// bind key events
	useEffect(() => {
		window.document.addEventListener('keydown', keyHandler);
		return () => {
			window.document.removeEventListener('keydown', keyHandler);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (typeof window !== 'undefined') {
		return ReactDOM.createPortal(
			<GEL brand={brand}>
				<ModalContext.Provider value={{ state }}>
					<FocusOn enabled={open}>
						<Modal
							ref={modalRef}
							onClick={(e: MouseEvent) => {
								if (e.target !== e.currentTarget) return;
								if (dismissible) {
									handleClose();
								}
							}}
							state={state}
							{...rest}
							{...modalAttributes(state)}
							css={modalStyles(state)}
						>
							<ModalDialog
								state={state}
								{...modalDialogAttributes(state)}
								css={modalDialogStyles(state)}
							>
								<ModalContent
									state={state}
									{...modalContentAttributes(state)}
									css={modalContentStyles(state)}
								>
									<Header state={state} {...headerAttributes(state)} css={headerStyles(state)}>
										<AutoFocusInside>
											<Heading
												ref={headingRef}
												state={state}
												{...headingAttributes(state)}
												css={headingStyles(state)}
											>
												{heading}
											</Heading>
										</AutoFocusInside>
										{dismissible && (
											<CloseBtn
												onClick={() => handleClose()}
												state={state}
												{...closeBtnAttributes(state)}
												css={closeBtnStyles(state)}
											/>
										)}
									</Header>
									{children}
								</ModalContent>
							</ModalDialog>
						</Modal>
					</FocusOn>
					<Backdrop state={state} {...backdropAttributes(state)} css={backdropStyles(state)} />
				</ModalContext.Provider>
			</GEL>,
			document.body
		);
	}

	return <Fragment />;
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
		ModalDialog: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		ModalContent: PropTypes.shape({
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
		Heading: PropTypes.shape({
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

export const defaultProps = {
	open: false,
	size: 'medium',
	dismissible: true,
};

Modal.defaultProps = defaultProps;
