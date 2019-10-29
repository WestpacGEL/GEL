/** @jsx jsx */

import { useState, useEffect, useRef, Fragment } from 'react';
import PropTypes from 'prop-types';
import { jsx, useBrand, merge } from '@westpac/core';
import pkg from '../package.json';
import { PopoverPanel } from './PopoverPanel';

// ==============================
// Component
// ==============================
export const Popover = ({ open: isOpen, children, ...props }) => {
	const { [pkg.name]: overwritesWithTokens } = useBrand();
	const [open, setOpen] = useState(open);
	const [position, setPosition] = useState({ placement: 'top', top: 0, left: 0 });
	const triggerRef = useRef();
	const popoverRef = useRef();

	const overwrites = {};

	merge(overwrites, overwritesWithTokens);

	useEffect(() => {
		setOpen(isOpen);
	}, [isOpen]);

	useEffect(() => {
		if (open) {
			const trigger = triggerRef.current.getBoundingClientRect();
			const popover = popoverRef.current.getBoundingClientRect();
			const remSize = parseInt(
				window.getComputedStyle(document.getElementsByTagName('html')[0]).fontSize
			);
			const left = (trigger.left - popover.width / 2 + trigger.width / 2) / remSize;

			if (popover.height > trigger.top) {
				const top = (trigger.top + trigger.height + remSize) / remSize;
				setPosition({ placement: 'bottom', top, left });
			} else {
				const top = (trigger.top - popover.height - remSize) / remSize;
				setPosition({ placement: 'top', top, left });
			}
		}
	}, [open]);

	const handleOutsideClick = e => {
		if (open && !popoverRef.current.contains(e.target)) {
			setOpen(false);
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

	const handleClick = () => {
		setOpen(!open);
	};

	const keyHandler = event => {
		if (event.keyCode === 27) setOpen(false);
	};

	useEffect(() => {
		window.document.addEventListener('keydown', keyHandler);
		return () => {
			window.document.removeEventListener('keydown', keyHandler);
		};
	});

	return (
		<Fragment>
			<PopoverPanel open={open} position={position} ref={popoverRef} {...props} />
			<div css={{ display: 'inline-block' }} ref={triggerRef} onClick={handleClick}>
				{children}
			</div>
		</Fragment>
	);
};

// ==============================
// Types
// ==============================
Popover.propTypes = {
	/** State of whether the popover is open */
	open: PropTypes.bool,
	/** Trigger element to open the popover */
	children: PropTypes.node,
};

Popover.defaultProps = {
	open: false,
};
