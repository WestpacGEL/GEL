/** @jsx jsx */

import { createContext, useContext, useState, useEffect, useRef, forwardRef } from 'react';
import { jsx, useBrand, overrideReconciler, useInstanceId } from '@westpac/core';
import { CSSTransition } from 'react-transition-group';
import { useOutsideClick } from '@westpac/hooks';
import { CloseIcon } from '@westpac/icon';
import FocusLock from 'react-focus-lock';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import { Backdrop, backdropStyles } from './overrides/backdrop';
import { CloseBtn, closeBtnStyles } from './overrides/closeBtn';
import { Wrapper, wrapperStyles } from './overrides/wrapper';
import { Header, headerStyles } from './overrides/header';
import { Title, titleStyles } from './overrides/title';
import pkg from '../package.json';

// ==============================
// Context and Consumer Hook
// ==============================
const ModalContext = createContext();

export const useModalContext = () => {
	const context = useContext(ModalContext);

	if (!context) {
		throw new Error('Modal sub-components should be wrapped in a <Modal>.');
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
	className,
	overrides: componentOverrides,
	...rest
}) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();
	const [modalId] = useState(useInstanceId());
	const [open, setOpen] = useState(isOpen);

	const titleId = `modal-header-title-${modalId}`;
	const bodyId = `modal-body-${modalId}`;

	const modalRef = useRef();

	const defaultOverrides = {
		styles: wrapperStyles,
		component: Wrapper,
		attributes: state => state,

		subComponent: {
			Backdrop: {
				styles: backdropStyles,
				component: Backdrop,
				attributes: state => state,
			},
			Header: {
				styles: headerStyles,
				component: Header,
				attributes: state => state,
			},
			Title: {
				styles: titleStyles,
				component: Title,
				attributes: state => state,
			},
			CloseBtn: {
				styles: closeBtnStyles,
				component: CloseBtn,
				attributes: state => state,
			},
		},
	};

	const state = {
		open,
		heading,
		size,
		dismissible,
		overrides: componentOverrides,
		...rest,
	};

	const overrides = overrideReconciler(
		defaultOverrides,
		tokenOverrides,
		brandOverrides,
		componentOverrides,
		state
	);

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
	const keyHandler = event => {
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

	return ReactDOM.createPortal(
		<CSSTransition mountOnEnter unmountOnExit in={open} timeout={300} classNames="modal-backdrop">
			<overrides.subComponent.Backdrop.component
				{...overrides.subComponent.Backdrop.attributes(state)}
				css={overrides.subComponent.Backdrop.styles}
			>
				<FocusLock returnFocus autoFocus={false} as={FocusWrapper}>
					<CSSTransition appear in={open} timeout={100} classNames="modal">
						<ModalContext.Provider value={{ dismissible, titleId, bodyId, handleClose }}>
							<overrides.component
								role="dialog"
								aria-modal="true"
								aria-labelledby={titleId}
								aria-describedby={bodyId}
								tabIndex="-1"
								ref={modalRef}
								className={className}
								{...overrides.attributes(state)}
								css={overrides.styles}
							>
								<overrides.subComponent.Header.component
									{...overrides.subComponent.Header.attributes(state)}
									css={overrides.subComponent.Header.styles}
								>
									<overrides.subComponent.Title.component
										id={titleId}
										{...overrides.subComponent.Title.attributes(state)}
										css={overrides.subComponent.Title.styles}
									>
										{heading}
									</overrides.subComponent.Title.component>
									{dismissible && (
										<overrides.subComponent.CloseBtn.component
											onClick={() => handleClose()}
											icon={CloseIcon}
											{...overrides.subComponent.CloseBtn.attributes(state)}
											css={overrides.subComponent.CloseBtn.styles}
										/>
									)}
								</overrides.subComponent.Header.component>
								{children}
							</overrides.component>
						</ModalContext.Provider>
					</CSSTransition>
				</FocusLock>
			</overrides.subComponent.Backdrop.component>
		</CSSTransition>,
		document.body
	);
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
	 * The override API
	 */
	overrides: PropTypes.shape({
		styles: PropTypes.func,
		component: PropTypes.elementType,
		attributes: PropTypes.object,
		subComponent: PropTypes.shape({
			Backdrop: PropTypes.shape({
				styles: PropTypes.func,
				component: PropTypes.elementType,
				attributes: PropTypes.object,
			}),
			Header: PropTypes.shape({
				styles: PropTypes.func,
				component: PropTypes.elementType,
				attributes: PropTypes.object,
			}),
			Title: PropTypes.shape({
				styles: PropTypes.func,
				component: PropTypes.elementType,
				attributes: PropTypes.object,
			}),
			CloseBtn: PropTypes.shape({
				styles: PropTypes.func,
				component: PropTypes.elementType,
				attributes: PropTypes.object,
			}),
		}),
	}),
};

Modal.defaultProps = {
	open: false,
	size: 'medium',
	dismissible: true,
};

// ==============================
// Utils
// ==============================
const FocusWrapper = forwardRef((props, ref) => (
	<div ref={ref} css={{ height: '100%' }} {...props} />
));
