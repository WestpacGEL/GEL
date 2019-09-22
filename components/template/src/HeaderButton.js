/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme, paint } from '@westpac/core';
import { SrOnly } from '@westpac/accessibility-helpers';

// ==============================
// Component
// ==============================

export const HeaderButton = ({ srOnlyText, icon: Icon, tag: Tag, isRight, children, ...props }) => {
	const {
		breakpoints,
		colors,
		template: { header },
	} = useTheme();
	const mq = paint(breakpoints);

	const style = {
		common: {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center', //vertical alignment
			alignItems: 'center', //horizontal alignment
			alignSelf: 'stretch', //vertically stretch
			marginTop: header.button.marginTop,
			marginBottom: header.button.marginBottom,
			paddingLeft: header.button.paddingLeft,
			paddingRight: header.button.paddingRight,
			minWidth: header.button.minWidth,
			[isRight ? 'borderLeft' : 'borderRight']: header.button.border,
		},
	};

	return (
		<Tag css={mq(style.common)} {...props}>
			{srOnlyText && <SrOnly>{srOnlyText}</SrOnly>}
			{Icon && <Icon size="medium" color={colors.text} />}
		</Tag>
	);
};

// ==============================
// Types
// ==============================

HeaderButton.propTypes = {
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
	 * Component icon
	 */
	icon: PropTypes.func,

	/**
	 * ‘Screen reader only’ text
	 */
	srOnlyText: PropTypes.string.isRequired,

	/**
	 * Component tag
	 */
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

HeaderButton.defaultProps = {
	tag: 'a',
};
