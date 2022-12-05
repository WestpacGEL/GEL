/** @jsx jsx */

import { jsx, useBrand, overrideReconciler, useInstanceId, wrapHandlers } from '@westpac/core';
import { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { usePopoverPosition } from '@westpac/hooks';
import PropTypes from 'prop-types';

import { defaultPopover } from './overrides/popover';
import { defaultTrigger } from './overrides/trigger';
import { defaultCloseBtn } from './overrides/closeBtn';
import { defaultBody } from './overrides/body';
import { defaultPanel } from './overrides/panel';
import { defaultHeading } from './overrides/heading';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const Popover = ({
	instanceId,
	open,
	heading,
	headingTag,
	content,
	placement,
	onClick = () => {},
	children,
	overrides: componentOverrides,
	...rest
}: typeof Popover.propTypes & typeof Popover.defaultProps) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const [isOpen, setIsOpen] = useState(open);
	const [position, setPosition] = useState({
		placement: placement ? placement : 'top',
		empty: !placement,
	});
	const triggerRef = useRef();
	const popoverRef = useRef();

	const defaultOverrides = {
		Popover: defaultPopover,
		Trigger: defaultTrigger,
		Panel: defaultPanel,
		Heading: defaultHeading,
		Body: defaultBody,
		CloseBtn: defaultCloseBtn,
	};

	const [id] = useState(instanceId || `gel-popover-${useInstanceId()}`);

	const state = {
		id,
		isOpen,
		heading,
		headingTag,
		content,
		placement,
		position,
		overrides: componentOverrides,
		...rest,
	};

	const {
		Popover: { component: Popover, styles: popoverStyles, attributes: popoverAttributes },
		Trigger: { component: Trigger, styles: triggerStyles, attributes: triggerAttributes },
		Panel: { component: Panel, styles: panelStyles, attributes: panelAttributes },
		Heading: { component: Heading, styles: headingStyles, attributes: headingAttributes },
		Body: { component: Body, styles: bodyStyles, attributes: bodyAttributes },
		CloseBtn: { component: CloseBtn, styles: closeBtnStyles, attributes: closeBtnAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	useEffect(() => {
		setIsOpen(open);
	}, [open]);

	useLayoutEffect(() => {
		if (!isOpen) {
			triggerRef.current.focus();
		}
	}, [isOpen]);

	const handleOpen = (event) => {
		wrapHandlers(
			() => onClick(),
			() => {
				setIsOpen((currentState) => !currentState);
			}
		)(event);
	};

	useEffect(() => {
		if (isOpen) {
			if (placement) {
				setPosition({ placement });
			} else {
				setPosition(usePopoverPosition(triggerRef, popoverRef));
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isOpen]);

	const keyHandler = (event) => {
		if (
			isOpen &&
			event.keyCode === 27 &&
			(popoverRef.current.contains(event.target) || triggerRef.current.contains(event.target))
		) {
			handleOpen(event);
		}
	};

	// bind key events
	useEffect(() => {
		window.document.addEventListener('keydown', keyHandler);
		return () => {
			window.document.removeEventListener('keydown', keyHandler);
		};
	});

	return (
		<Popover state={state} {...popoverAttributes(state)} css={popoverStyles(state)}>
			<Trigger
				ref={triggerRef}
				onClick={handleOpen}
				{...rest}
				state={state}
				{...triggerAttributes(state)}
				css={triggerStyles(state)}
			>
				{children}
			</Trigger>
			<Panel ref={popoverRef} state={state} {...panelAttributes(state)} css={panelStyles(state)}>
				{heading && (
					<Heading state={state} {...headingAttributes(state)} css={headingStyles(state)}>
						{heading}
					</Heading>
				)}
				<Body state={state} {...bodyAttributes(state)} css={bodyStyles(state)}>
					{content}
				</Body>
				<CloseBtn
					onClick={handleOpen}
					state={state}
					{...closeBtnAttributes(state)}
					css={closeBtnStyles(state)}
				/>
			</Panel>
		</Popover>
	);
};

// ==============================
// Types
// ==============================

Popover.propTypes = {
	/**
	 * Define an id for internal elements
	 */
	instanceId: PropTypes.string,

	/**
	 * State of whether the Popover is open
	 */
	open: PropTypes.bool,

	/**
	 * The Popover heading
	 */
	heading: PropTypes.string,

	/**
	 * The tag of the heading element for semantic reasons
	 */
	headingTag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired,

	/**
	 * The body of the popover
	 */
	content: PropTypes.string.isRequired,

	/**
	 * A function for the onClick event
	 */
	onClick: PropTypes.func,

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

export const defaultProps = {
	open: false,
	headingTag: 'h4',
};

Popover.defaultProps = defaultProps;
