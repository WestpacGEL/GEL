/** @jsx jsx */

import {
	jsx,
	useBrand,
	useInstanceId,
	overrideReconciler2 as overrideReconciler,
} from '@westpac/core';
import { useState, useEffect, useRef, Fragment } from 'react';
import PropTypes from 'prop-types';

import { Tooltip as TooltipWrapper, tooltipStyles } from './overrides/tooltip';
import { Bubble, bubbleStyles } from './overrides/bubble';
import pkg from '../package.json';

// ==============================
// Component
// ==============================
export const Tooltip = ({ text, title, className, overrides: componentOverrides, ...rest }) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();
	const [visible, setVisible] = useState(false);
	const [position, setPosition] = useState({ placement: 'top', top: 0, left: 0 });
	const [tooltipId] = useState(`tooltipBubble-${useInstanceId()}`);
	const triggerRef = useRef();
	const tooltipRef = useRef();

	const defaultOverrides = {
		Tooltip: {
			styles: tooltipStyles,
			component: TooltipWrapper,
			attributes: (_, a) => a,
		},
		Bubble: {
			styles: bubbleStyles,
			component: Bubble,
			attributes: (_, a) => a,
		},
	};

	const state = {
		text,
		position,
		visible,
		overrides: componentOverrides,
		...rest,
	};

	const overrides = overrideReconciler(
		defaultOverrides,
		tokenOverrides,
		brandOverrides,
		componentOverrides
	);

	const handleEnter = () => setVisible(true);
	const handleLeave = () => setVisible(false);

	useEffect(() => {
		if (visible) {
			document.addEventListener('scroll', handleLeave, true);
		}
		return document.removeEventListener('scroll', handleLeave);
	}, [visible]);

	useEffect(() => {
		if (visible) {
			const trigger = triggerRef.current.getBoundingClientRect();
			const tooltip = tooltipRef.current.getBoundingClientRect();
			const remSize = parseInt(
				window.getComputedStyle(document.getElementsByTagName('html')[0]).fontSize
			);
			const left = (trigger.left - tooltip.width / 2 + trigger.width / 2) / remSize;

			if (tooltip.height > trigger.top) {
				const top = (trigger.top + window.scrollY + trigger.height + remSize) / remSize;
				setPosition({ placement: 'bottom', top, left });
			} else {
				const top = (trigger.top + window.scrollY - tooltip.height - remSize) / remSize;
				setPosition({ placement: 'top', top, left });
			}
		}
	}, [visible]);

	return (
		<Fragment>
			<overrides.Bubble.component
				tooltipId={tooltipId}
				text={text}
				ref={tooltipRef}
				{...overrides.Bubble.attributes(state)}
				css={overrides.Bubble.styles(state)}
			/>
			<overrides.Tooltip.component
				title={title ? text : undefined}
				onMouseEnter={handleEnter}
				onMouseLeave={handleLeave}
				aria-describedby={tooltipId}
				tabIndex={0}
				ref={triggerRef}
				className={className}
				{...overrides.Tooltip.attributes(state)}
				css={overrides.Tooltip.styles(state)}
			/>
		</Fragment>
	);
};

// ==============================
// Types
// ==============================
Tooltip.propTypes = {
	/**
	 * Tooltip text
	 */
	text: PropTypes.string.isRequired,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Tooltip: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Bubble: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};

Tooltip.defaultProps = {};
