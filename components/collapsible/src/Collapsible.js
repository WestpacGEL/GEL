/** @jsx jsx */

import { jsx, useBrand, overrideReconciler, useInstanceId, wrapHandlers } from '@westpac/core';
import { useState, useEffect, useRef } from 'react';
import { useCollapsiblePosition } from '@westpac/hooks';
import PropTypes from 'prop-types';

import { defaultCollapsible } from './overrides/collapsible';
import { defaultToggle } from './overrides/toggle';
import { defaultContent } from './overrides/content';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const Collapsible = ({
	open: isOpen,
	text,
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

	const [open, setOpen] = useState(isOpen);
	const toggleRef = useRef();
	const collapsibleRef = useRef();

	const defaultOverrides = {
		Collapsible: defaultCollapsible,
		Toggle: defaultToggle,
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
		open,
		text,
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
		Toggle: { component: Toggle, styles: toggleStyles, attributes: toggleAttributes },
		Content: { component: Content, styles: contentStyles, attributes: contentAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	const handleOpen = (event) => {
		wrapHandlers(
			() => onClick,
			() => {
				if (open) {
					setOpen(false);
					toggleRef.current.focus();
				} else {
					setOpen(true);
				}
			}
		)(event);
	};

	const keyHandler = (event) => {
		if (
			open &&
			event.keyCode === 27 &&
			(collapsibleRef.current.contains(event.target) || toggleRef.current.contains(event.target))
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
		<Collapsible state={state} {...collapsibleAttributes(state)} css={collapsibleStyles(state)}>
			<Toggle
				ref={toggleRef}
				onClick={handleOpen}
				{...rest}
				state={state}
				{...toggleAttributes(state)}
				css={toggleStyles(state)}
			>
				{text}
			</Toggle>
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
	 * Toggle element to open the collapsible
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
