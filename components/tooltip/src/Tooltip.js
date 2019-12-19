/** @jsx jsx */

import { useState, useEffect, useRef, forwardRef, Fragment } from 'react';
import { jsx, useBrand, merge, useInstanceId } from '@westpac/core';
import PropTypes from 'prop-types';

import { TooltipBubble } from './TooltipBubble';
import pkg from '../package.json';

// ==============================
// Overwrite component
// ==============================
const Wrapper = forwardRef(({ tag: Tag, ...props }, ref) => <Tag ref={ref} {...props} />);

// ==============================
// Component
// ==============================
export const Tooltip = ({ tag, text, ...props }) => {
	const { [pkg.name]: overwritesWithTokens } = useBrand();
	const [visible, setVisible] = useState(false);
	const [position, setPosition] = useState({ placement: 'top', top: 0, left: 0 });
	const [tooltipId] = useState(`gel-tooltip-${useInstanceId()}`);
	const triggerRef = useRef();
	const tooltipRef = useRef();

	const overwrites = {
		tooltipCSS: {},
		CSS: {},
		Wrapper,
	};

	merge(overwrites, overwritesWithTokens);

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
			<TooltipBubble
				id={tooltipId}
				text={text}
				visible={visible}
				position={position}
				ref={tooltipRef}
				css={overwrites.tooltipCSS}
			/>
			<overwrites.Wrapper
				tag={tag}
				aria-describedby={tooltipId}
				title={tag === 'abbr' ? text : undefined}
				onMouseEnter={handleEnter}
				onMouseLeave={handleLeave}
				onFocus={handleEnter}
				onBlur={handleLeave}
				tabIndex={0}
				ref={triggerRef}
				css={{
					position: 'relative',
					display: 'inline-block',
					cursor: 'help',
					...overwrites.CSS,
				}}
				{...props}
			/>
		</Fragment>
	);
};

// ==============================
// Types
// ==============================
Tooltip.propTypes = {
	/**
	 * Tooltip tag
	 */
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),

	/**
	 * Tooltip text
	 */
	text: PropTypes.string.isRequired,
};
Tooltip.defaultProps = {
	tag: 'span',
};
