/** @jsx jsx */

import { createContext, useContext, useState, useEffect } from 'react';
import { jsx, useBrand, useMediaQuery, merge } from '@westpac/core';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import FocusLock from 'react-focus-lock';
import { CSSTransition } from 'react-transition-group';
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
	open: isOpen,
	onClose,
	size,
	overrides: overridesComponent,
	children,
	...props
}) => {
	const { [pkg.name]: overridesWithTokens } = useBrand();
	const [open, setOpen] = useState(isOpen);

	const overrides = {
		duration: 300,
		backdropCSS: {},
		css: {},
	};

	merge(overrides, overridesWithTokens, overridesComponent);

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

	const modalId = shortid.generate();
	const titleId = `modal-header-title-${modalId}`;
	const bodyId = `modal-body-${modalId}`;

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
		if (e.target === e.currentTarget) {
			handleClose();
		}
	};

	return ReactDOM.createPortal(
		<CSSTransition
			mountOnEnter
			unmountOnExit
			in={open}
			timeout={overrides.duration}
			classNames="modal-backdrop"
		>
			<Backdrop onClick={handleBackdropClick} css={overrides.backdropCSS}>
				<FocusLock returnFocus autoFocus={false}>
					<CSSTransition appear in={open} timeout={100} classNames="modal">
						<ModalContext.Provider value={{ titleId, bodyId, handleClose }}>
							<StyledModal
								role="dialog"
								aria-modal="true"
								aria-labelledby={titleId}
								aria-describedby={bodyId}
								tabIndex="-1"
								size={size}
								css={overrides.css}
								{...props}
							>
								{children}
							</StyledModal>
						</ModalContext.Provider>
					</CSSTransition>
				</FocusLock>
			</Backdrop>
		</CSSTransition>,
		document.body
	);
};

// ==============================
// Types
// ==============================

Modal.propTypes = {
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
	 * Modal overrides
	 */
	overrides: PropTypes.shape({
		duration: PropTypes.number,
		backdropCSS: PropTypes.object,
		css: PropTypes.object,
	}),
};

Modal.defaultProps = {
	open: false,
	size: 'medium',
};

// ==============================
// Styled Components
// ==============================
const Backdrop = props => (
	<div
		css={{
			position: 'fixed',
			zIndex: '1001',
			backgroundColor: 'rgba(0,0,0,0.5)',
			top: 0,
			right: 0,
			bottom: 0,
			left: 0,
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'baseline',
			transition: 'all 0.3s ease',

			'&.modal-backdrop-enter': {
				opacity: 0,
			},

			'&.modal-backdrop-enter-active': {
				opacity: 1,
			},

			'&.modal-backdrop-exit': {
				opacity: 1,
			},

			'&.modal-backdrop-exit-active': {
				opacity: 0,
			},
		}}
		{...props}
	/>
);

const StyledModal = ({ size, ...props }) => {
	const mq = useMediaQuery();

	return (
		<div
			css={mq({
				overflow: 'auto',
				maxHeight: '85%',
				margin: '0 0.75rem',
				backgroundColor: '#fff',
				borderRadius: 3,
				boxShadow: '0 5px 15px rgba(0,0,0,0.5)',
				transition: 'all 0.3s ease',
				width: ['auto', size === 'small' ? '18.75rem' : '37.5rem', size === 'large' && '56.25rem'],

				'&.modal-appear': {
					opacity: 0,
				},

				'&.modal-appear-done': {
					transform: 'translate(0rem,1.875rem)',
				},
			})}
			{...props}
		/>
	);
};
