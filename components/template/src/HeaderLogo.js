/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme, paint } from '@westpac/core';
import { SrOnly } from '@westpac/accessibility-helpers';
import { Hide } from './Hide';

// ==============================
// Utils
// ==============================

const asArray = val => (Array.isArray(val) ? val : [val]);

// ==============================
// Component
// ==============================

export const HeaderLogo = ({ logo, isLogoCenter, srOnlyText, tag: Tag, ...props }) => {
	const {
		breakpoints,
		template: { header },
	} = useTheme();
	const mq = paint(breakpoints);

	const style = {
		// Common styling
		common: {
			display: 'inline-flex',
			alignItems: 'center',
			paddingLeft: header.logo.paddingLeft,
			paddingRight: header.logo.paddingRight,
		},

		// Logo position styling
		position: (() => {
			if (!isLogoCenter) return;

			const logoCenterArr = asArray(isLogoCenter);

			return {
				position: logoCenterArr.map(lc => lc !== null && (lc ? 'absolute' : 'static')),
				zIndex: logoCenterArr.map(lc => lc !== null && (lc ? 0 : 'auto')),
				left: logoCenterArr.map(lc => lc !== null && (lc ? '50%' : 'auto')),
				top: logoCenterArr.map(lc => lc !== null && (lc ? '50%' : 'auto')),
				transform: logoCenterArr.map(lc => lc !== null && (lc ? 'translate(-50%, -50%)' : 'none')),
			};
		})(),
	};

	const logoArr = asArray(logo);

	return (
		<Tag css={mq({ ...style.common, ...style.position })} {...props}>
			{srOnlyText && <SrOnly>{srOnlyText}</SrOnly>}
			{logoArr.map((l, idx) => (
				<Hide isShow={Array.from({ length: asArray(logo).length }, (v, i) => i === idx)} key={idx}>
					{l}
				</Hide>
			))}
		</Tag>
	);
};

// ==============================
// Types
// ==============================

HeaderLogo.propTypes = {
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
	 * Logo component
	 */
	logo: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),

	/**
	 * ‘Screen reader only’ text
	 */
	srOnlyText: PropTypes.string.isRequired,

	/**
	 * Component tag
	 */
	tag: PropTypes.string,
};

HeaderLogo.defaultProps = {
	srOnlyText: 'Go to home',
	tag: 'a',
};
