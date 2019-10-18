/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useMediaQuery } from '@westpac/core';
import { SrOnly } from '@westpac/accessibility-helpers';
import { Hide } from './Hide';

// ==============================
// Utils
// ==============================

const asArray = val => (Array.isArray(val) ? val : [val]);

// ==============================
// Component
// ==============================

export const HeaderLogo = ({ logo, center, srOnlyText, tag: Tag, ...props }) => {
	const mq = useMediaQuery();

	// Logo position styling
	const stylePosition = (() => {
		if (!center) return;

		const logoCenterArr = asArray(center);

		return {
			position: logoCenterArr.map(lc => lc !== null && (lc ? 'absolute' : 'static')),
			zIndex: logoCenterArr.map(lc => lc !== null && (lc ? 0 : 'auto')),
			left: logoCenterArr.map(lc => lc !== null && (lc ? '50%' : 'auto')),
			top: logoCenterArr.map(lc => lc !== null && (lc ? '50%' : 'auto')),
			transform: logoCenterArr.map(lc => lc !== null && (lc ? 'translate(-50%, -50%)' : 'none')),
		};
	})();

	return (
		<Tag
			css={mq({
				display: 'inline-flex',
				alignItems: 'center',
				paddingLeft: ['0.75rem', '1.5rem'],
				paddingRight: ['0.75rem', '1.5rem'],
				...stylePosition,
			})}
			{...props}
		>
			{srOnlyText && <SrOnly>{srOnlyText}</SrOnly>}
			{asArray(logo).map((l, idx) => (
				<Hide show={Array.from({ length: asArray(logo).length }, (v, i) => i === idx)} key={idx}>
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
	 * Logo component(s)
	 */
	logo: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),

	/**
	 * Center logo mode
	 */
	center: PropTypes.oneOfType([PropTypes.bool, PropTypes.arrayOf(PropTypes.bool)]),

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
	center: false,
	srOnlyText: 'Go to home',
	tag: 'a',
};
