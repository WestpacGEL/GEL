/** @jsx jsx */

import { jsx, useBrand, overrideReconciler, useInstanceId } from '@westpac/core';
import { useState, useEffect, useRef, cloneElement } from 'react';
import { CloseIcon } from '@westpac/icon';
import PropTypes from 'prop-types';

import { Popover as PopoverWrapper, popoverStyles } from './overrides/popover';
import { CloseBtn, closeBtnStyles } from './overrides/closeBtn';
import { PopoverBody, bodyStyles } from './overrides/body';
import { Panel, panelStyles } from './overrides/panel';
import { Title, titleStyles } from './overrides/title';
import pkg from '../package.json';

export const Popover = ({
	open: isOpen,
	title,
	content,
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
	const [popoverId] = useState(useInstanceId());
	const [open, setOpen] = useState(open);
	const [position, setPosition] = useState('top');
	const triggerRef = useRef();
	const popoverRef = useRef();

	const defaultOverrides = {
		Popover: {
			styles: popoverStyles,
			component: PopoverWrapper,
			attributes: (_, a) => a,
		},
		Panel: {
			styles: panelStyles,
			component: Panel,
			attributes: (_, a) => a,
		},
		Title: {
			styles: titleStyles,
			component: Title,
			attributes: (_, a) => a,
		},
		Body: {
			styles: bodyStyles,
			component: PopoverBody,
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
		title,
		content,
		dismissible,
		position,
		overrides: componentOverrides,
		...rest,
	};

	const overrides = overrideReconciler(
		defaultOverrides,
		tokenOverrides,
		brandOverrides,
		componentOverrides
	);

	useEffect(() => {
		if (open) {
			const trigger = triggerRef.current.getBoundingClientRect();
			const popover = popoverRef.current.getBoundingClientRect();

			if (popover.height > trigger.top) {
				setPosition('bottom');
			} else {
				setPosition('top');
			}
		}
	});

	useEffect(() => {
		setOpen(isOpen);
	}, [isOpen]);

	const handleOpen = () => {
		if (open) {
			if (popoverRef.current.contains(document.activeElement)) {
				setTimeout(() => triggerRef.current.focus(), 100);
			}
			setOpen(false);
		} else {
			setOpen(true);
			setTimeout(() => popoverRef.current.focus(), 100);
		}
	};

	const handleOutsideClick = e => {
		if (dismissible && open && popoverRef.current && !popoverRef.current.contains(e.target)) {
			handleOpen();
		}
	};

	useEffect(() => {
		if (open) {
			document.addEventListener('click', handleOutsideClick);
		}
		return () => {
			document.removeEventListener('click', handleOutsideClick);
		};
	}, [open]);

	// on escape close should also check if focused
	const keyHandler = event => {
		if (open && event.keyCode === 27) handleOpen();
	};

	// bind key events
	useEffect(() => {
		window.document.addEventListener('keydown', keyHandler);
		return () => {
			window.document.removeEventListener('keydown', keyHandler);
		};
	});

	const childrenWithProps = cloneElement(children, {
		'aria-describedby': `gel-popover-${popoverId}`,
	});

	return (
		<overrides.Popover.component
			ref={triggerRef}
			onClick={handleOpen}
			className={className}
			{...overrides.Popover.attributes(state)}
			css={overrides.Popover.styles(state)}
		>
			{childrenWithProps}
			{open && (
				<overrides.Panel.component
					id={`gel-popover-${popoverId}`}
					aria-label="Use the ESC key to close"
					ref={popoverRef}
					tabIndex="-1"
					{...overrides.Panel.attributes(state)}
					css={overrides.Panel.styles(state)}
				>
					<overrides.Title.component
						{...overrides.Title.attributes(state)}
						css={overrides.Title.styles(state)}
					>
						{title}
					</overrides.Title.component>
					<overrides.Body.component
						{...overrides.Body.attributes(state)}
						css={overrides.Body.styles(state)}
					>
						{content}
					</overrides.Body.component>
					<overrides.CloseBtn.component
						onClick={() => handleOpen()}
						icon={CloseIcon}
						{...overrides.CloseBtn.attributes(state)}
						css={overrides.CloseBtn.styles(state)}
					/>
				</overrides.Panel.component>
			)}
		</overrides.Popover.component>
	);
};

// ==============================
// Types
// ==============================
Popover.propTypes = {
	/**
	 * State of whether the popover is open
	 */
	open: PropTypes.bool,

	/**
	 * Enable dismissible mode.
	 *
	 * Allows popover close via background click.
	 */
	dismissible: PropTypes.bool,

	/**
	 * Trigger element to open the popover
	 */
	children: PropTypes.node,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Popover: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Panel: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Title: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Body: PropTypes.shape({
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

Popover.defaultProps = {
	open: false,
	dismissible: false,
};
