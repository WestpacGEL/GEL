/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme, useMediaQuery } from '@westpac/core';

// ==============================
// Component
// ==============================

export const HeaderContact = ({ icon: Icon, tag: Tag, children, ...props }) => {
	const { COLORS } = useTheme();
	const mq = useMediaQuery();

	return (
		<Tag
			css={mq({
				display: 'flex',
				flexWrap: 'nowrap',
				alignItems: 'center',
				justifyContent: 'center',
				color: COLORS.text, //reset

				'&, :hover, :focus': {
					textDecoration: 'none', //reset underlining
				},
			})}
			{...props}
		>
			{Icon && <Icon size="medium" />}
			<div
				css={mq({
					paddingLeft: '0.5rem', //gap
					fontSize: '0.875rem',
					lineHeight: 1.3, //slightly tighter than default
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

HeaderContact.propTypes = {
	/**
	 * Component icon
	 */
	icon: PropTypes.func,

	/**
	 * Component `href` attribute.
	 *
	 * This prop is required unless the `tag` prop is configured.
	 */
	href: (props, propName, componentName) => {
		if (props.tag === 'a' && props[propName] == undefined) {
			return new Error(
				`The prop \`${propName}\` is marked as required in \`${componentName}\`, but its value is \`undefined\`.`
			);
		}
	},

	/**
	 * Component tag
	 */
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),

	/**
	 * Component children
	 */
	children: PropTypes.node.isRequired,
};
HeaderContact.defaultProps = {
	tag: 'a',
};
