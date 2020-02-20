/** @jsx jsx */

import { jsx, useBrand, overrideReconciler, useInstanceId } from '@westpac/core';
import { useState, useEffect, useRef, cloneElement } from 'react';
import { usePopoverPosition } from '@westpac/hooks';
import PropTypes from 'prop-types';

import { Popover as PopoverWrapper, popoverStyles } from './overrides/popover';
import { CloseBtn, closeBtnStyles } from './overrides/closeBtn';
import { PopoverBody, bodyStyles } from './overrides/body';
import { Panel, panelStyles } from './overrides/panel';
import { Heading, headingStyles } from './overrides/heading';
import pkg from '../package.json';

export const Popover = ({
	open: isOpen,
	heading,
	content,
	dismissible,
	children,
	overrides: componentOverrides,
	...rest
}) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();
	const [popoverId] = useState(useInstanceId());
	const [open, setOpen] = useState(open);
	const [position, setPosition] = useState({ placement: 'top', empty: true });
	const triggerRef = useRef();
	const popoverRef = useRef();

	const defaultOverrides = {
		Popover: {
			styles: popoverStyles,
			component: PopoverWrapper,
			attributes: () => null,
		},
		Panel: {
			styles: panelStyles,
			component: Panel,
			attributes: () => null,
		},
		Heading: {
			styles: headingStyles,
			component: Heading,
			attributes: () => null,
		},
		Body: {
			styles: bodyStyles,
			component: PopoverBody,
			attributes: () => null,
		},
		CloseBtn: {
			styles: closeBtnStyles,
			component: CloseBtn,
			attributes: () => null,
		},
	};

	const state = {
		open,
		heading,
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
			setPosition(usePopoverPosition(triggerRef, popoverRef));
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
			open={open}
			heading={heading}
			content={content}
			dismissible={dismissible}
			position={position}
			{...rest}
			{...overrides.Popover.attributes(state)}
			css={overrides.Popover.styles(state)}
		>
			{childrenWithProps}
			<overrides.Panel.component
				id={`gel-popover-${popoverId}`}
				aria-label="Use the ESC key to close"
				ref={popoverRef}
				tabIndex="-1"
				open={open}
				heading={heading}
				content={content}
				dismissible={dismissible}
				position={position}
				{...overrides.Panel.attributes(state)}
				css={overrides.Panel.styles(state)}
			>
				{heading && (
					<overrides.Heading.component
						open={open}
						heading={heading}
						content={content}
						dismissible={dismissible}
						position={position}
						{...overrides.Heading.attributes(state)}
						css={overrides.Heading.styles(state)}
					>
						{heading}
					</overrides.Heading.component>
				)}
				<overrides.Body.component
					open={open}
					heading={heading}
					content={content}
					dismissible={dismissible}
					position={position}
					{...overrides.Body.attributes(state)}
					css={overrides.Body.styles(state)}
				>
					{content}
				</overrides.Body.component>
				<overrides.CloseBtn.component
					assistiveText="Close"
					onClick={() => handleOpen()}
					open={open}
					heading={heading}
					content={content}
					dismissible={dismissible}
					position={position}
					{...overrides.CloseBtn.attributes(state)}
					css={overrides.CloseBtn.styles(state)}
				/>
			</overrides.Panel.component>
		</overrides.Popover.component>
	);
};

// ==============================
// Types
// ==============================
Popover.propTypes = {
	/**
	 * State of whether the Popover is open
	 */
	open: PropTypes.bool,

	/**
	 * The Popover heading
	 */
	heading: PropTypes.string,

	/**
	 * The body of the popover
	 */
	content: PropTypes.string.isRequired,

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
		heading: PropTypes.shape({
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
