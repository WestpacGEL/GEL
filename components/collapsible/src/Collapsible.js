/** @jsx jsx */

import { jsx, useBrand, overrideReconciler, useInstanceId, wrapHandlers } from '@westpac/core';
import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { defaultCollapsible } from './overrides/collapsible';
import { defaultTrigger } from './overrides/trigger';
import { defaultContent } from './overrides/content';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const Collapsible = ({
	open,
	text,
	size,
	instanceIdPrefix,
	onClick = () => {},
	children,
	overrides: componentOverrides,
	...rest
}) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const [isOpen, setIsOpen] = useState(open);
	const triggerRef = useRef();
	const collapsibleRef = useRef();

	const defaultOverrides = {
		Collapsible: defaultCollapsible,
		Trigger: defaultTrigger,
		Content: defaultContent,
	};

	const [instanceId, setInstanceId] = useState(instanceIdPrefix);
	const [closed, setClosed] = useState(true);

	useEffect(() => {
		if (!instanceIdPrefix) {
			setInstanceId(`gel-collapsible-${useInstanceId()}`);
		}
	}, [instanceIdPrefix]);

	const state = {
		isOpen,
		text,
		size,
		instanceId,
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

	const handleOpen = (event) => {
		wrapHandlers(
			() => onClick,
			() => {
				if (isOpen) {
					setIsOpen(false);
					triggerRef.current.focus();
				} else {
					setIsOpen(true);
				}
			}
		)(event);
	};

	const keyHandler = (event) => {
		if (
			isOpen &&
			event.keyCode === 27 &&
			(collapsibleRef.current.contains(event.target) || triggerRef.current.contains(event.target))
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

// ==============================
// Types
// ==============================

Collapsible.propTypes = {
	/**
	 * State of whether the Collapsible is open
	 */
	open: PropTypes.bool,

	/**
	 * Button text
	 */
	text: PropTypes.string.isRequired,

	/**
	 * Define an id prefix for internal elements
	 */
	instanceIdPrefix: PropTypes.string,

	/**
	 * A function for the onClick event
	 */
	onClick: PropTypes.func,

	/**
	 * Trigger element to open the collapsible
	 */
	children: PropTypes.node,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Collapsible: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Trigger: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Content: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};

export const defaultProps = {
	open: false,
};

Collapsible.defaultProps = defaultProps;
