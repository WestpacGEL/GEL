import PropTypes from 'prop-types';
import { jsx, useBrand, overrideReconciler, wrapHandlers } from '@westpac/core';

import React, { useState, useEffect, useRef, useId, useMemo, useCallback } from 'react';

import { usePopoverPosition, useIsomorphicLayoutEffect } from '@westpac/hooks';

import { defaultPopover } from './overrides/popover';
import { defaultTrigger } from './overrides/trigger';
import { defaultCloseBtn } from './overrides/closeBtn';
import { defaultBody } from './overrides/body';
import { defaultPanel } from './overrides/panel';
import { defaultHeading } from './overrides/heading';
import pkg from '../package.json';

export interface PopoverProps {
	/**
	 * Define an id for internal elements
	 */
	instanceId?: string;
	/**
	 * State of whether the Popover is open
	 */
	open?: boolean;
	/**
	 * The Popover heading
	 */
	heading?: string;
	/**
	 * The tag of the heading element for semantic reasons
	 */
	headingTag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	/**
	 * The body of the popover
	 */
	content: string;
	/**
	 * A function for the onClick event
	 */
	onClick?: (...args: unknown[]) => unknown;
	/**
	 * Trigger element to open the popover
	 */
	children?: React.ReactNode;
	/**
	 * Placement of the element
	 */
	placement?: string;
	/**
	 * The override API
	 */
	overrides?: {
		Popover?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		Panel?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		heading?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		Body?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		CloseBtn?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
	};
}

interface Position {
	empty?: boolean;
	placement: string;
	offset?: string;
	top?: number;
	left?: number;
	center?: number;
}

// ==============================
// Component
// ==============================

export const Popover = ({
	instanceId,
	open = false,
	heading,
	headingTag,
	content,
	placement = 'top',
	onClick = () => {},
	children,
	overrides: componentOverrides,
	...rest
}: PopoverProps) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const [isOpen, setIsOpen] = useState(open);
	const [position, setPosition] = useState<Position>({
		placement,
		empty: !placement,
	});
	const triggerRef = useRef<HTMLDivElement>(null);
	const popoverRef = useRef<HTMLDivElement>(null);

	const defaultOverrides = {
		Popover: defaultPopover,
		Trigger: defaultTrigger,
		Panel: defaultPanel,
		Heading: defaultHeading,
		Body: defaultBody,
		CloseBtn: defaultCloseBtn,
	};

	const _id = useId();
	const id = useMemo(() => instanceId || `gel-popover-${_id}`, [_id, instanceId]);

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

	useIsomorphicLayoutEffect(() => {
		if (!isOpen) {
			triggerRef.current?.focus();
		}
	}, [isOpen]);

	const handleOpen = useCallback(
		(event: Event) => {
			wrapHandlers(
				() => onClick(),
				() => {
					setIsOpen((currentState) => !currentState);
				}
			)(event);
		},
		[onClick]
	);

	useEffect(() => {
		if (isOpen) {
			if (placement) {
				setPosition({ ...position, placement });
			} else {
				setPosition(usePopoverPosition(triggerRef, popoverRef));
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isOpen]);

	const keyHandler = useCallback(
		(event: KeyboardEvent) => {
			if (
				isOpen &&
				event.keyCode === 27 &&
				event.target instanceof Element &&
				(popoverRef.current?.contains(event.target) || triggerRef.current?.contains(event.target))
			) {
				handleOpen(event);
			}
		},
		[handleOpen, isOpen]
	);

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

Popover.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn prop-types"  |
	// ----------------------------------------------------------------------
	/**
	 * Trigger element to open the popover
	 */
	children: PropTypes.node,
	/**
	 * The body of the popover
	 */
	content: PropTypes.string.isRequired,
	/**
	 * The Popover heading
	 */
	heading: PropTypes.string,
	/**
	 * The tag of the heading element for semantic reasons
	 */
	headingTag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired,
	/**
	 * Define an id for internal elements
	 */
	instanceId: PropTypes.string,
	/**
	 * A function for the onClick event
	 */
	onClick: PropTypes.func,
	/**
	 * State of whether the Popover is open
	 */
	open: PropTypes.bool,
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Body: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		CloseBtn: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		heading: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		Panel: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		Popover: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
	}),
	/**
	 * Placement of the element
	 */
	placement: PropTypes.string,
};

Popover.defaultProps = { onClick: () => {}, open: false, placement: 'top' };
