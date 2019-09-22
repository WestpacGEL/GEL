/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme, paint } from '@westpac/core';

// ==============================
// Component
// ==============================

export const HeaderContact = ({ icon: Icon, tag: Tag, children, ...props }) => {
	const { colors, breakpoints } = useTheme();
	const mq = paint(breakpoints);

	const style = {
		common: {
			display: 'flex',
			flexWrap: 'nowrap',
			alignItems: 'center',
			justifyContent: 'center',
			color: colors.text, //reset

			'&, :hover, :focus': {
				textDecoration: 'none', //reset underlining
			},
		},

		details: {
			paddingLeft: '0.8rem', //gap
			fontSize: '1.4rem',
			lineHeight: 1.3, //slightly tighter than default
		},
	};

	return (
		<Tag css={mq(style.common)} {...props}>
			{Icon && <Icon size="medium" />}
			<div css={mq(style.details)}>{children}</div>
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
