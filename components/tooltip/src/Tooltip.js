/** @jsx jsx */

import { useState, useEffect, useRef, Fragment } from 'react';
import { jsx, useBrand, useInstanceId, overrideReconciler } from '@westpac/core';
import { Wrapper, wrapperStyles } from './overrides/wrapper';
import { TooltipBubble, tooltipBubbleStyles } from './overrides/tooltipBubble';
import PropTypes from 'prop-types';
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
		styles: wrapperStyles,
		component: Wrapper,
		attributes: state => state,

		subComponent: {
			TooltipBubble: {
				styles: tooltipBubbleStyles,
				component: TooltipBubble,
				attributes: state => state,
			},
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
		componentOverrides,
		state
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
			<overrides.subComponent.TooltipBubble.component
				tooltipId={tooltipId}
				text={text}
				ref={tooltipRef}
				{...overrides.subComponent.TooltipBubble.attributes(state)}
				css={overrides.subComponent.TooltipBubble.styles}
			/>
			<overrides.component
				title={title ? text : undefined}
				onMouseEnter={handleEnter}
				onMouseLeave={handleLeave}
				aria-describedby={tooltipId}
				tabIndex={0}
				ref={triggerRef}
				className={className}
				{...overrides.attributes(state)}
				css={overrides.styles}
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
		styles: PropTypes.func,
		component: PropTypes.elementType,
		attributes: PropTypes.object,
		subComponent: PropTypes.shape({
			TooltipBubble: PropTypes.shape({
				styles: PropTypes.func,
				component: PropTypes.elementType,
				attributes: PropTypes.object,
			}),
		}),
	}),
};

Tooltip.defaultProps = {};
