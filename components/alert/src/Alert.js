/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
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
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();
	const [open, setOpen] = useState(true);

	const defaultOverrides = {
		styles: wrapperStyles,
		component: Wrapper,
		attributes: state => state,

		subComponent: {
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
		},
	};

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

	const overrides = overrideReconciler(
		defaultOverrides,
		tokenOverrides,
		brandOverrides,
		componentOverrides,
		state
	);

	return (
		<CSSTransition in={open} unmountOnExit classNames="anim" timeout={400}>
			<overrides.component css={overrides.styles} {...overrides.attributes(state)}>
				{dismissible && (
					<overrides.subComponent.CloseBtn.component
						css={overrides.subComponent.CloseBtn.styles}
						{...overrides.subComponent.CloseBtn.attributes(state)}
						onClose={() => setOpen(false)}
						icon={CloseIcon}
					/>
				)}
				{overrides.subComponent.Icon.component && (
					<overrides.subComponent.Icon.component
						css={overrides.subComponent.Icon.styles}
						{...overrides.subComponent.Icon.attributes(state)}
						size={['small', 'medium']}
						color="inherit"
					/>
				)}
				<overrides.subComponent.Body.component
					css={overrides.subComponent.Body.styles}
					{...overrides.subComponent.Body.attributes(state)}
				>
					{heading && (
						<overrides.subComponent.Heading.component
							css={overrides.subComponent.Heading.styles}
							{...overrides.subComponent.Heading.attributes(state)}
							tag={headingTag}
						>
							{heading}
						</overrides.subComponent.Heading.component>
					)}
					{children}
				</overrides.subComponent.Body.component>
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
