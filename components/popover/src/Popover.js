/** @jsx jsx */

import { jsx, useBrand, overrideReconciler, useInstanceId } from '@westpac/core';
import { useState, useEffect, useRef } from 'react';
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
	open: isOpen,
	heading,
	headingTag,
	content,
	instanceIdPrefix,
	children,
	overrides: componentOverrides,
	...rest
}) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const [open, setOpen] = useState(isOpen);
	const [position, setPosition] = useState({ placement: 'top', empty: true });
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

	const [instanceId, setInstanceId] = useState(instanceIdPrefix);

	useEffect(() => {
		if (!instanceIdPrefix) {
			setInstanceId(`gel-popover-${useInstanceId()}`);
		}
	}, [instanceIdPrefix]);

	const state = {
		open,
		heading,
		headingTag,
		content,
		position,
		instanceId,
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
		setOpen(isOpen);
	}, [isOpen]);

	const handleOpen = () => {
		if (open) {
			setOpen(false);
			triggerRef.current.focus();
		} else {
			setOpen(true);
		}
	};

	useEffect(() => {
		if (open) {
			setPosition(usePopoverPosition(triggerRef, popoverRef));
		}
	}, [open]);

	const keyHandler = (e) => {
		if (
			open &&
			e.keyCode === 27 &&
			(popoverRef.current.contains(e.target) || triggerRef.current.contains(e.target))
		) {
			handleOpen();
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
					<Heading state={state} {...headingAttributes(state)} css={{ '&&': headingStyles(state) }}>
						{heading}
					</Heading>
				)}
				<Body state={state} {...bodyAttributes(state)} css={bodyStyles(state)}>
					{content}
				</Body>
				<CloseBtn
					onClick={() => handleOpen()}
					state={state}
					{...closeBtnAttributes(state)}
					css={{ '&&': closeBtnStyles(state) }}
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
	 * Define an id prefix for internal elements
	 */
	instanceIdPrefix: PropTypes.string,

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
	headingTag: 'h4',
};
