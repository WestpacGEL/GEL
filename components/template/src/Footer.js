/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme, useMediaQuery } from '@westpac/core';

// ==============================
// Component
// ==============================

export const Footer = ({ fancy, tag: Tag, children, ...props }) => {
	const { COLORS } = useTheme();
	const mq = useMediaQuery();

	return (
		<Tag
			css={mq({
				flex: 'none', //no flex grow or shrink
				position: 'relative',
				overflow: 'hidden',
				backgroundColor: '#fff',

				// Divider (top line)
				'::before': {
					content: '""',
					display: 'block',
					backgroundColor: COLORS.primary,
					height: 1,

					// Fancy mode styling (WBC only)
					/*...(fancy &&  {
					height: 12,
					backgroundImage:
						"url('data:image/svg+xml;charset%3DUS-ASCII,%3Csvg%20width%3D%221128%22%20height%3D%2212%22%20viewBox%3D%220%200%201128%2012%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3EGraphic%2FEnergy-stripe%3C%2Ftitle%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%20opacity%3D%22.9%22%3E%3Cpath%20fill%3D%22%23DD3A46%22%20d%3D%22M1042%2012h86V0h-86%22%2F%3E%3Cpath%20fill%3D%22%23D5002B%22%20d%3D%22M891%2012h67V0h-67%22%2F%3E%3Cpath%20fill%3D%22%23B6000B%22%20d%3D%22M675%2012h159V0H675%22%2F%3E%3Cpath%20fill%3D%22%23D5002B%22%20d%3D%22M568%2012h105V0H568%22%2F%3E%3Cpath%20fill%3D%22%23B6000B%22%20d%3D%22M375.82%2012H503V0H375.82%22%2F%3E%3Cpath%20fill%3D%22%23DD3A46%22%20d%3D%22M264.136%2012H286V0h-21.864%22%2F%3E%3Cpath%20fill%3D%22%23D5002B%22%20d%3D%22M0%2012h70.91V0H0%22%2F%3E%3Cpath%20fill%3D%22%23B6000B%22%20d%3D%22M50.356%200l3.392%2012h216.76l-3.8-12%22%2F%3E%3Cpath%20fill%3D%22%23D5002B%22%20d%3D%22M282.478%200l-3.798%2012H378V0%22%2F%3E%3Cpath%20fill%3D%22%23C30019%22%20d%3D%22M498.832%200l-3.393%2012H571V0%22%2F%3E%3Cpath%20fill%3D%22%23DD3A46%22%20d%3D%22M665.88%200l3.798%2012h8.173l3.8-12%22%2F%3E%3Cpath%20fill%3D%22%23C30019%22%20d%3D%22M827.246%200l3.393%2012h63.972l3.39-12M955%200v12h93.68l-3.392-12%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')",
					backgroundRepeat: 'repeat-x',
					backgroundPosition: 'center top',
				}),*/
				},
			})}
			{...props}
		>
			<div
				css={mq({
					padding: ['1.125rem 0.75rem', '1.125rem 1.5rem 1.5rem'],
				})}
			>
				{children}
			</div>
		</Tag>
	);
};

// ==============================
// Types
// ==============================

Footer.propTypes = {
	/**
	 * Enable fancy mode.
	 *
	 * Renders a more decorative divider line.
	 */
	fancy: PropTypes.bool,

	/**
	 * Footer tag
	 */
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),

	/**
	 * Component children
	 */
	children: PropTypes.node.isRequired,
};

Footer.defaultProps = {
	fancy: false,
	tag: 'footer',
};
