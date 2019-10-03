/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme, useMediaQuery } from '@westpac/core';
import { useHeaderRightContext } from './HeaderRight';
import { SrOnly } from '@westpac/accessibility-helpers';

// ==============================
// Component
// ==============================

export const HeaderButton = ({ srOnlyText, icon: Icon, tag: Tag, children, ...props }) => {
	const { COLORS } = useTheme();
	const mq = useMediaQuery();
	const { isRight } = useHeaderRightContext();

	return (
		<Tag
			css={mq({
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center', //vertical alignment
				alignItems: 'center', //horizontal alignment
				alignSelf: 'stretch', //vertically stretch
				marginTop: ['0.375rem', '0.375rem'],
				marginBottom: ['0.375rem', '0.375rem'],
				paddingLeft: ['0.5625rem', '1.125rem'],
				paddingRight: ['0.5625rem', '1.125rem'],
				minWidth: ['2.625rem', '0.375rem'],
				[isRight ? 'borderLeft' : 'borderRight']: `1px solid ${COLORS.border}`,
			})}
			{...props}
		>
			{srOnlyText && <SrOnly>{srOnlyText}</SrOnly>}
			{Icon && <Icon size="medium" color={COLORS.text} />}
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
