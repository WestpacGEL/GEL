/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useMediaQuery } from '@westpac/core';
import { Button } from '@westpac/button';
import { CloseIcon } from '@westpac/icon';
import { SidebarHeading } from './styled';
import { useSidebarContext } from './Sidebar';

// ==============================
// Component
// ==============================

export const SidebarContentHeader = ({ heading, toggleText, ...props }) => {
	const mq = useMediaQuery();
	const { handleClick } = useSidebarContext();

	return (
		<div
			css={mq({
				position: 'relative',
				padding: '0 0.75rem',
				height: '3.375rem', //matches header height
				display: 'flex',
				alignItems: 'center',
				display: [`${open ? 'flex' : 'none'}`, null, 'none'], //MD hide (to disable keyboard focus)
			})}
			{...props}
		>
			{/* LHS */}
			{heading && <SidebarHeading>{heading}</SidebarHeading>}

			{/* RHS */}
			<Button
				css={mq({
					marginLeft: 'auto', //position right (using flex)
					display: [null, null, 'none'], //hide
				})}
				appearance="link"
				size="large"
				trim
				iconAfter={CloseIcon}
				srOnlyText="Close"
				onClick={handleClick}
			/>
		</div>
	);
};

// ==============================
// Types
// ==============================

/**
 * Sidebar header
 */
SidebarContentHeader.propTypes = {
	/**
	 * Sidebar heading
	 */
	heading: PropTypes.node.isRequired,

	/**
	 * Sidebar toggle button text
	 */
	toggleText: PropTypes.string.isRequired,
};

SidebarContentHeader.defaultProps = {};
