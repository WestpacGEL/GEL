/** @jsx jsx */

import { jsx, useBrand, overrideReconciler, useInstanceId } from '@westpac/core';
import {
	Fragment,
	createContext,
	useContext,
	useState,
	useEffect,
	useRef,
	forwardRef,
} from 'react';
import { useOutsideClick } from '@westpac/hooks';
import { CloseIcon } from '@westpac/icon';
import FocusLock from 'react-focus-lock';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import { Modal as ModalWrapper, modalStyles } from './overrides/modal';
import { Backdrop, backdropStyles } from './overrides/backdrop';
import { CloseBtn, closeBtnStyles } from './overrides/closeBtn';
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

	const defaultOverrides = {
		Modal: {
			styles: modalStyles,
			component: ModalWrapper,
			attributes: (_, a) => a,
		},
		Backdrop: {
			styles: backdropStyles,
			component: Backdrop,
			attributes: (_, a) => a,
		},
		Header: {
			styles: headerStyles,
			component: Header,
			attributes: (_, a) => a,
		},
		Title: {
			styles: titleStyles,
			component: Title,
			attributes: (_, a) => a,
		},
		CloseBtn: {
			styles: closeBtnStyles,
			component: CloseBtn,
			attributes: (_, a) => a,
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
		componentOverrides
	);

	const modalRef = useRef();

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
		<Fragment>
			<overrides.Backdrop.component
				{...overrides.Backdrop.attributes(state)}
				css={overrides.Backdrop.styles(state)}
			/>
			<ModalContext.Provider value={{ dismissible, handleClose }}>
				<overrides.Modal.component
					role="dialog"
					aria-modal="true"
					tabIndex="-1"
					ref={modalRef}
					className={className}
					{...overrides.Modal.attributes(state)}
					css={overrides.Modal.styles(state)}
				>
					<FocusLock returnFocus autoFocus={false} as={FocusWrapper}>
						<overrides.Header.component
							{...overrides.Header.attributes(state)}
							css={overrides.Header.styles(state)}
						>
							<overrides.Title.component
								{...overrides.Title.attributes(state)}
								css={overrides.Title.styles(state)}
							>
								{heading}
							</overrides.Title.component>
							{dismissible && (
								<overrides.CloseBtn.component
									onClick={() => handleClose()}
									icon={CloseIcon}
									aria-label="Close"
									{...overrides.CloseBtn.attributes(state)}
									css={overrides.CloseBtn.styles(state)}
								/>
							)}
						</overrides.Header.component>
						{children}
					</FocusLock>
				</overrides.Modal.component>
			</ModalContext.Provider>
		</Fragment>,
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

// ==============================
// Utils
// ==============================
const FocusWrapper = forwardRef((props, ref) => (
	<div ref={ref} css={{ height: '100%' }} {...props} />
));
