import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useBrand, overrideReconciler, wrapHandlers } from '@westpac/core';
import { useState, useEffect, useRef, useId, useMemo, useCallback } from 'react';

import { defaultCollapsible } from './overrides/collapsible';
import { defaultTrigger } from './overrides/trigger';
import { defaultContent } from './overrides/content';
import pkg from '../package.json';

export interface CollapsibleProps {
	/**
	 * size
	 */
	size?: string[] | 'small' | 'medium' | 'large' | 'xlarge';
	/**
	 * Define an id for internal elements
	 */
	instanceId?: string;
	/**
	 * State of whether the Collapsible is open
	 */
	open?: boolean;
	/**
	 * Button text
	 */
	text: string;
	/**
	 * A function for the onClick event
	 */
	onClick?: (...args: unknown[]) => unknown;
	/**
	 * Trigger element to open the collapsible
	 */
	children?: React.ReactNode;
	/**
	 * The override API
	 */
	overrides?: {
		Collapsible?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		Trigger?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		Content?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
	};
}

// ==============================
// Component
// ==============================

export const Collapsible = ({
	instanceId,
	open = false,
	text,
	size,
	onClick = () => {},
	children,
	overrides: componentOverrides,
	...rest
}: CollapsibleProps) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const [isOpen, setIsOpen] = useState(open);
	const triggerRef = useRef<HTMLDivElement>(null);
	const collapsibleRef = useRef<HTMLDivElement>(null);

	const defaultOverrides = {
		Collapsible: defaultCollapsible,
		Trigger: defaultTrigger,
		Content: defaultContent,
	};

	const _id = useId();
	const id = useMemo(() => instanceId || `gel-collapsible-${_id}`, [_id, instanceId]);
	const [closed, setClosed] = useState(true);

	const state = {
		id,
		isOpen,
		text,
		size,
		closed,
		setClosed,
		overrides: componentOverrides,
		...rest,
	};

	const {
		Collapsible: {
			component: Collapsible,
			styles: collapsibleStyles,
			attributes: collapsibleAttributes,
		},
		Trigger: { component: Trigger, styles: triggerStyles, attributes: triggerAttributes },
		Content: { component: Content, styles: contentStyles, attributes: contentAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	const handleOpen = useCallback(
		(event: KeyboardEvent) => {
			wrapHandlers(
				() => onClick,
				() => {
					if (isOpen) {
						setIsOpen(false);
						triggerRef.current?.focus();
					} else {
						setIsOpen(true);
					}
				}
			)(event);
		},
		[isOpen, onClick, triggerRef]
	);

	const keyHandler = useCallback(
		(event: KeyboardEvent) => {
			if (
				isOpen &&
				event.keyCode === 27 &&
				triggerRef.current &&
				collapsibleRef.current &&
				event.target instanceof Element &&
				(collapsibleRef.current.contains(event.target) ||
					triggerRef.current?.contains(event.target))
			) {
				handleOpen(event);
			}
		},
		[collapsibleRef, handleOpen, isOpen, triggerRef]
	);

	// bind key events
	useEffect(() => {
		window.document.addEventListener('keydown', keyHandler);
		return () => {
			window.document.removeEventListener('keydown', keyHandler);
		};
	}, [keyHandler]);

	return (
		<Collapsible
			{...rest}
			state={state}
			{...collapsibleAttributes(state)}
			css={collapsibleStyles(state)}
		>
			<Trigger
				ref={triggerRef}
				onClick={handleOpen}
				state={state}
				{...triggerAttributes(state)}
				css={triggerStyles(state)}
			>
				{text}
			</Trigger>
			<Content
				ref={collapsibleRef}
				state={state}
				{...contentAttributes(state)}
				css={contentStyles(state)}
			>
				{children}
			</Content>
		</Collapsible>
	);
};

export const defaultProps = {
	open: false,
};

Collapsible.defaultProps = defaultProps;

Collapsible.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn proptypes"  |
	// ----------------------------------------------------------------------
	/**
	 * Trigger element to open the collapsible
	 */
	children: PropTypes.node,
	/**
	 * Define an id for internal elements
	 */
	instanceId: PropTypes.string,
	/**
	 * A function for the onClick event
	 */
	onClick: PropTypes.func,
	/**
	 * State of whether the Collapsible is open
	 */
	open: PropTypes.bool,
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Collapsible: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		Content: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		Trigger: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
	}),
	/**
	 * size
	 */
	size: PropTypes.oneOfType([
		PropTypes.oneOf(['large', 'medium', 'small', 'xlarge']),
		PropTypes.arrayOf(PropTypes.string),
	]),
	/**
	 * Button text
	 */
	text: PropTypes.string.isRequired,
};
