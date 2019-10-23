/** @jsx jsx */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CloseIcon, AlertIcon, InfoIcon, TickIcon } from '@westpac/icon';
import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { CSSTransition } from 'react-transition-group';
import { Heading } from '@westpac/heading';
import { Button } from '@westpac/button';

// ==============================
// Component
// ==============================

export const Alert = ({ look, closable, icon: Icon, heading, headingTag, children }) => {
	const { COLORS, SPACING } = useBrand();
	const mq = useMediaQuery();
	const [open, setOpen] = useState(true);

	const iconMap = {
		success: TickIcon,
		info: InfoIcon,
		warning: AlertIcon,
		danger: AlertIcon,
		system: AlertIcon,
	};

	// Set a default icon
	if (Icon === undefined) {
		Icon = iconMap[look];
	}

	//<Transition>
	//	{state => <div css={{ state === 'exiting' }}}
	//</Transition>

	return (
		<CSSTransition in={open} unmountOnExit classNames="anim" timeout={400}>
			<div
				css={mq({
					marginBottom: '1.3125rem',
					padding: ['1.125rem', closable ? `1.125rem 1.875rem 1.125rem 1.125rem` : '1.125rem'],
					position: 'relative',
					display: [null, 'flex'],
					zIndex: 1,
					transition: 'opacity 0.3s ease-in-out',
					'&.anim-exit-active': {
						opacity: 0,
					},
					color: look === 'system' ? 'black' : COLORS[look],
					backgroundColor: look === 'system' ? COLORS.system : COLORS.tints[`${look}5`],
					borderTop: '1px solid',
					borderBottom: '1px solid',
					borderColor: look === 'system' ? COLORS.system : COLORS.tints[`${look}50`],
				})}
			>
				{closable && (
					<Button
						onClick={() => {
							setOpen(false);
						}}
						iconAfter={CloseIcon}
						look="link"
						css={mq({
							color: 'inherit',
							position: ['relative', 'absolute'],
							zIndex: 1,
							float: ['right', 'none'],
							top: '0.1875rem',
							right: 0,
							marginTop: ['-1.125rem', 0],
							marginRight: ['-1.125rem', 0],
							opacity: 1,

							':hover': {
								opacity: 0.5,
							},
						})}
					/>
				)}
				{Icon && (
					<Icon
						css={mq({
							float: ['left', 'none'],
							marginRight: ['0.375rem', '0.75rem'],
							flex: 'none',
						})}
						size={['small', 'medium']}
						color="inherit"
					/>
				)}
				<div
					css={mq({
						position: 'relative',
						flex: 1,
						top: [null, Icon && '0.125rem'],
						'& > a, & > h1, & > h2, & > h3, & > h4, & > h5, & > h6, & > ol, & > ul': {
							color: 'inherit',
						},
					})}
				>
					{heading && (
						<Heading size={7} tag={headingTag} css={{ marginBottom: SPACING(2) }}>
							{heading}
						</Heading>
					)}
					{children}
				</div>
			</div>
		</CSSTransition>
	);
};

// ==============================
// Types
// ==============================

Alert.propTypes = {
	/**
	 * Alert look
	 */
	look: PropTypes.oneOf(['success', 'info', 'warning', 'danger', 'system']),

	/**
	 * Enable closable mode
	 */
	closable: PropTypes.bool,

	/**
	 * Alert icon.
	 *
	 * The alert icon is automatically rendered based on look, but can be overriden via this prop. Pass a `null` value to remove completely.
	 */
	icon: PropTypes.func,

	/**
	 * The heading
	 */
	heading: PropTypes.string,

	/**
	 * The tag of the heading element for semantic reasons
	 */
	headingTag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),

	/**
	 * Alert children
	 */
	children: PropTypes.node,
};

Alert.defaultProps = {
	look: 'info',
	closable: false,
	headingTag: 'h2',
};
