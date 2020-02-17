/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import { Fragment, useState, useEffect, useRef } from 'react';
import { useOutsideClick } from '@westpac/hooks';
import { CloseIcon } from '@westpac/icon';
import { FocusOn } from 'react-focus-on';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import { Modal as ModalWrapper, modalStyles } from './overrides/modal';
import { Backdrop, backdropStyles } from './overrides/backdrop';
import { CloseBtn, closeBtnStyles } from './overrides/closeBtn';
import { Header, headerStyles } from './overrides/header';
import { Title, titleStyles } from './overrides/title';
import pkg from '../package.json';

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
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();
	const [open, setOpen] = useState(isOpen);

	const defaultOverrides = {
		Modal: {
			styles: modalStyles,
			component: ModalWrapper,
			attributes: () => null,
		},
		Backdrop: {
			styles: backdropStyles,
			component: Backdrop,
			attributes: () => null,
		},
		Header: {
			styles: headerStyles,
			component: Header,
			attributes: () => null,
		},
		Title: {
			styles: titleStyles,
			component: Title,
			attributes: () => null,
		},
		CloseBtn: {
			styles: closeBtnStyles,
			component: CloseBtn,
			attributes: () => null,
		},
	};

	const state = {
		heading,
		open,
		onClose,
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

	if (typeof window !== 'undefined') {
		return ReactDOM.createPortal(
			<Fragment>
				<overrides.Backdrop.component
					heading={heading}
					open={open}
					onClose={onClose}
					size={size}
					dismissible={dismissible}
					{...overrides.Backdrop.attributes(state)}
					css={overrides.Backdrop.styles(state)}
				/>
				<FocusOn enabled={open} onActivation={() => titleRef.current.focus()}>
					<overrides.Modal.component
						role="dialog"
						aria-modal="true"
						ref={modalRef}
						heading={heading}
						open={open}
						onClose={onClose}
						size={size}
						dismissible={dismissible}
						{...rest}
						{...overrides.Modal.attributes(state)}
						css={overrides.Modal.styles(state)}
					>
						<overrides.Header.component
							heading={heading}
							open={open}
							onClose={onClose}
							size={size}
							dismissible={dismissible}
							{...overrides.Header.attributes(state)}
							css={overrides.Header.styles(state)}
						>
							<overrides.Title.component
								ref={titleRef}
								tabIndex="-1"
								heading={heading}
								open={open}
								onClose={onClose}
								size={size}
								dismissible={dismissible}
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
									heading={heading}
									open={open}
									onClose={onClose}
									size={size}
									dismissible={dismissible}
									{...overrides.CloseBtn.attributes(state)}
									css={overrides.CloseBtn.styles(state)}
								/>
							)}
						</overrides.Header.component>
						{children}
					</overrides.Modal.component>
				</FocusOn>
			</Fragment>,
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
