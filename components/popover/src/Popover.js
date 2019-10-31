/** @jsx jsx */

import { useState, useEffect, useRef, forwardRef, Fragment } from 'react';
import PropTypes from 'prop-types';
import { jsx, useBrand, merge } from '@westpac/core';
import pkg from '../package.json';
import { PopoverPanel } from './PopoverPanel';

// ==============================
// Component
// ==============================
export const Popover = ({ open: isOpen, title, content, children, ...props }) => {
	const { [pkg.name]: overwritesWithTokens } = useBrand();
	const [open, setOpen] = useState(open);
	const [position, setPosition] = useState({ placement: 'top', top: 0, left: 0 });
	const triggerRef = useRef();
	const popoverRef = useRef();

	const overwrites = {
		CSS: {},
		Wrapper,
		Panel,
	};

	merge(overwrites, overwritesWithTokens);

	useEffect(() => {
		setOpen(isOpen);
	}, [isOpen]);

	useEffect(() => {
		if (open) {
			const trigger = triggerRef.current.getBoundingClientRect();
			const popover = popoverRef.current.getBoundingClientRect();
			const remSize = parseInt(
				window.getComputedStyle(document.getElementsByTagName('html')[0]).fontSize
			);
			const left = (trigger.left - popover.width / 2 + trigger.width / 2) / remSize;

			if (popover.height > trigger.top) {
				const top = (trigger.top + trigger.height + remSize) / remSize;
				setPosition({ placement: 'bottom', top, left });
			} else {
				const top = (trigger.top - popover.height - remSize) / remSize;
				setPosition({ placement: 'top', top, left });
			}
		}
	}, [open]);

	const handleOutsideClick = e => {
		if (open && !popoverRef.current.contains(e.target)) {
			setOpen(false);
		}
	};

	useEffect(() => {
		if (open) {
			document.addEventListener('click', handleOutsideClick);
		}
		return () => {
			document.removeEventListener('click', handleOutsideClick);
		};
	}, [open]);

	const handleClick = () => {
		setOpen(!open);
	};

	const keyHandler = event => {
		if (event.keyCode === 27) setOpen(false);
	};

	useEffect(() => {
		window.document.addEventListener('keydown', keyHandler);
		return () => {
			window.document.removeEventListener('keydown', keyHandler);
		};
	});

	return (
		<Fragment>
			<PopoverPanel
				title={title}
				content={content}
				open={open}
				position={position}
				ref={popoverRef}
				Panel={overwrites.Panel}
			/>
			<overwrites.Wrapper
				css={{ display: 'inline-block', ...overwrites.CSS }}
				ref={triggerRef}
				onClick={handleClick}
				{...props}
			>
				{children}
			</overwrites.Wrapper>
		</Fragment>
	);
};

// ==============================
// Types
// ==============================
Popover.propTypes = {
	/** State of whether the popover is open */
	open: PropTypes.bool,
	/** Trigger element to open the popover */
	children: PropTypes.node,
};

Popover.defaultProps = {
	open: false,
};

// ==============================
// Overwrite Component
// ==============================
const Wrapper = forwardRef((props, ref) => <div ref={ref} {...props} />);

const Panel = forwardRef(({ title, content, position, ...props }, ref) => {
	const { COLORS } = useBrand();
	return (
		<div
			ref={ref}
			tabIndex="-1"
			aria-label="Use the ESC key to close"
			css={{
				boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)',
				border: `1px solid ${COLORS.muted}`,
				borderRadius: 3,
				width: '17.625rem',
				backgroundColor: '#fff',
				pointerEvents: 'all',
				textAlign: 'left',

				'::before': {
					content: '""',
					position: 'absolute',
					[position.placement === 'top' ? 'bottom' : 'top']: '-0.8125rem',
					left: '50%',
					marginLeft: '-0.5rem',
					width: 0,
					[position.placement === 'top'
						? 'borderTop'
						: 'borderBottom']: `0.75rem solid ${COLORS.muted}`,
					borderRight: '0.5rem solid transparent',
					borderLeft: '0.5rem solid transparent',
					fontSize: 0,
					lineHeight: 0,
				},

				...(position.placement === 'top' && {
					'::after': {
						content: '""',
						position: 'absolute',
						bottom: '-0.6875rem',
						left: '50%',
						marginLeft: '-0.5rem',
						width: 0,
						borderTop: '0.75rem solid #fff',
						borderRight: '0.5rem solid transparent',
						borderLeft: '0.5rem solid transparent',
						fontSize: 0,
						lineHeight: 0,
					},
				}),
			}}
			{...props}
		>
			<p
				css={{
					margin: 0,
					padding: '0.625rem 0.75rem',
					backgroundColor: COLORS.muted,
					color: '#fff',
					fontSize: '1rem',
				}}
			>
				{title}
			</p>
			<p css={{ margin: 0, padding: '0.625rem 0.75rem', color: COLORS.neutral }}>{content}</p>
		</div>
	);
});
