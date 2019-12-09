/** @jsx jsx */

import { jsx, useBrand, merge } from '@westpac/core';
import { CSSTransition } from 'react-transition-group';
import { CloseIcon } from '@westpac/icon';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { AlertHeading, headingStyles } from './overrides/heading';
import { CloseBtn, closeBtnStyles } from './overrides/closeBtn';
import { Wrapper, wrapperStyles } from './overrides/wrapper';
import { AlertBody, bodyStyles } from './overrides/body';
import { Icon, iconStyles } from './overrides/icon';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const Alert = ({
	look,
	dismissible,
	icon: ComponentIcon,
	heading,
	headingTag,
	children,
	overrides: componentOverrides,
	...rest
}) => {
	const { OVERRIDES, [pkg.name]: brandOverrides } = useBrand();
	const [open, setOpen] = useState(true);
	console.log(OVERRIDES);

	const defaultOverrides = {
		styles: wrapperStyles,
		component: Wrapper,
		attributes: state => state,

		Body: {
			styles: bodyStyles,
			component: AlertBody,
			attributes: state => state,
		},

		CloseBtn: {
			styles: closeBtnStyles,
			component: CloseBtn,
			attributes: state => state,
		},

		Icon: {
			styles: iconStyles,
			component: Icon,
			attributes: state => state,
		},

		Heading: {
			styles: headingStyles,
			component: AlertHeading,
			attributes: state => state,
		},
	};
	const overrides = merge(defaultOverrides, brandOverrides, componentOverrides);

	const state = {
		look,
		dismissible: dismissible ? dismissible : undefined,
		icon: ComponentIcon,
		heading,
		headingTag,
		overrides: componentOverrides,
		open,
		...rest,
	};

	return (
		<CSSTransition in={open} unmountOnExit classNames="anim" timeout={400}>
			<overrides.component
				css={overrides.styles( wrapperStyles( null, state ), state )}
				{...overrides.attributes( state )}
			>
				{dismissible && (
					<overrides.CloseBtn.component
						css={overrides.CloseBtn.styles( closeBtnStyles( null, state ), state )}
						{...overrides.CloseBtn.attributes( state )}
						onClose={() => setOpen(false)}
						icon={CloseIcon}
					/>
				)}
				{overrides.Icon.component && (
					<overrides.Icon.component
						css={overrides.Icon.styles( iconStyles( null, state ), state )}
						{...overrides.Icon.attributes( state )}
						size={['small', 'medium']}
						color="inherit"
					/>
				)}
				<overrides.Body.component
					css={overrides.Body.styles( bodyStyles( null, state ), state )}
					{...overrides.Body.attributes( state )}
				>
					{heading && (
						<overrides.Heading.component
							css={overrides.Heading.styles( headingStyles( null, state ), state )}
							{...overrides.Heading.attributes( state )}
							tag={headingTag}
						>
							{heading}
						</overrides.Heading.component>
					)}
					{children}
				</overrides.Body.component>
			</overrides.component>
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
	look: PropTypes.oneOf(['success', 'info', 'warning', 'danger', 'system']).isRequired,

	/**
	 * Enable dismissible mode
	 */
	dismissible: PropTypes.bool.isRequired,

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
	headingTag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired,

	/**
	 * Alert children
	 */
	children: PropTypes.node,

	/**
	 * The override API
	 */
	override: PropTypes.shape({
		styles: PropTypes.func,
		component: PropTypes.elementType,
		attributes: PropTypes.object,
		Body: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.object,
		}),
		CloseBtn: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.object,
		}),
		Icon: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.object,
		}),
		Heading: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.object,
		}),
	}),
};

Alert.defaultProps = {
	look: 'info',
	dismissible: false,
	headingTag: 'h2',
};
