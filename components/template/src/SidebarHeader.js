/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme, useMediaQuery } from '@westpac/core';
import { Button } from '@westpac/button';
import { MoreVerticalIcon } from '@westpac/icon';
import { SidebarHeading } from './styled';

import { useSidebarContext } from './Sidebar';

// ==============================
// Component
// ==============================

export const SidebarHeader = ({ heading, toggleText, ...props }) => {
	const { COLORS, LAYOUT } = useTheme();
	const mq = useMediaQuery();
	const { open, handleClick } = useSidebarContext();

	const maxWidth = width => `@media (max-width: ${width}px)`;

	return (
		<div
			css={mq({
				display: ['flex', null, 'none'],
				alignItems: 'center',
				paddingTop: '0.375rem',
				paddingBottom: '0.375rem',
				paddingLeft: ['0.75rem', '1.5rem'], //matches header padding
				paddingRight: ['0.75rem', '1.5rem'], //matches header padding
				height: '3.375rem', //matches header height
				backgroundColor: '#fff', //TODO: on scroll only
				transition: 'all .2s ease-out',
			})}
			{...props}
		>
			{/* LHS */}
			{heading && (
				<div css={{ display: 'flex', alignItems: 'center' }}>
					<SidebarHeading>{heading}</SidebarHeading>
				</div>
			)}

			{/* RHS */}
			<div css={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
				<Button
					css={{
						fontSize: '0.875rem', //override
						color: COLORS.text, //override

						// Backdrop overlay
						'::after': {
							content: '""',
							position: 'fixed',
							top: 0,
							right: 0,
							bottom: 0,
							left: 0,
							zIndex: 1020,
							backgroundColor: 'rgba(0,0,0,0.7)',
							transition: 'opacity .15s linear',
							opacity: 0, //hide
							visibility: 'hidden', //hide

							[maxWidth(LAYOUT.breakpoints.md - 1)]: {
								opacity: open && 1, //show
								visibility: open && 'visible', //show
							},
						},
					}}
					appearance="link"
					size="large"
					trim
					iconAfter={MoreVerticalIcon}
					iconColor={COLORS.primary}
					onClick={handleClick}
				>
					{toggleText}
				</Button>
			</div>
		</div>
	);
};

// ==============================
// Types
// ==============================

/**
 * Sidebar header
 */
SidebarHeader.propTypes = {
	/**
	 * Sidebar heading
	 */
	heading: PropTypes.node.isRequired,

	/**
	 * Sidebar toggle button text
	 */
	toggleText: PropTypes.string.isRequired,
};

SidebarHeader.defaultProps = {};
