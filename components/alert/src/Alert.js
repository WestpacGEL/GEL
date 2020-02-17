/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import { useTransition, animated } from 'react-spring';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Alert as AlertWrapper, alertStyles } from './overrides/alert';
import { AlertHeading, headingStyles } from './overrides/heading';
import { CloseBtn, closeBtnStyles } from './overrides/closeBtn';
import { AlertBody, bodyStyles } from './overrides/body';
import { Icon, iconStyles } from './overrides/icon';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const Alert = ({
	open: isOpen,
	look,
	dismissible,
	icon,
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
	const [open, setOpen] = useState(isOpen);
	const transition = useTransition(open, null, {
		initial: { opacity: 1 },
		from: { opacity: 1 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
		config: { duration: 400 },
	});

	const defaultOverrides = {
		Alert: {
			styles: alertStyles,
			component: AlertWrapper,
			attributes: () => null,
		},
		Body: {
			styles: bodyStyles,
			component: AlertBody,
			attributes: () => null,
		},
		CloseBtn: {
			styles: closeBtnStyles,
			component: CloseBtn,
			attributes: () => null,
		},
		Icon: {
			styles: iconStyles,
			component: Icon,
			attributes: () => null,
		},
		Heading: {
			styles: headingStyles,
			component: AlertHeading,
			attributes: () => null,
		},
	};

	const state = {
		open,
		look,
		dismissible: dismissible ? dismissible : undefined,
		icon,
		heading,
		headingTag,
		overrides: componentOverrides,
		...rest,
	};

	const overrides = overrideReconciler(
		defaultOverrides,
		tokenOverrides,
		brandOverrides,
		componentOverrides
	);

	useEffect(() => {
		setOpen(isOpen);
	}, [isOpen]);

	const CloseBtnJSX = () => (
		<overrides.CloseBtn.component
			open={open}
			look={look}
			dismissible={dismissible}
			icon={icon}
			heading={heading}
			headingTag={headingTag}
			children={children}
			onClose={() => setOpen(false)}
			{...overrides.CloseBtn.attributes(state)}
			css={overrides.CloseBtn.styles(state)}
		/>
	);

	const IconJSX = () => (
		<overrides.Icon.component
			open={open}
			look={look}
			dismissible={dismissible}
			icon={icon}
			heading={heading}
			headingTag={headingTag}
			size={['small', 'medium']}
			color="inherit"
			{...overrides.Icon.attributes(state)}
			css={overrides.Icon.styles(state)}
		/>
	);

	const HeadingJSX = () => (
		<overrides.Heading.component
			open={open}
			look={look}
			dismissible={dismissible}
			icon={icon}
			heading={heading}
			headingTag={headingTag}
			{...overrides.Heading.attributes(state)}
			css={overrides.Heading.styles(state)}
		/>
	);

	const AlertJSX = () => (
		<overrides.Alert.component
			open={open}
			look={look}
			dismissible={dismissible}
			icon={icon}
			heading={heading}
			headingTag={headingTag}
			{...rest}
			{...overrides.Alert.attributes(state)}
			css={overrides.Alert.styles(state)}
		>
			{overrides.Icon.component && <IconJSX />}
			<overrides.Body.component
				open={open}
				look={look}
				dismissible={dismissible}
				icon={icon}
				heading={heading}
				headingTag={headingTag}
				{...overrides.Body.attributes(state)}
				css={overrides.Body.styles(state)}
			>
				{heading && <HeadingJSX />}
				{children}
			</overrides.Body.component>
			{dismissible && <CloseBtnJSX />}
		</overrides.Alert.component>
	);

	return transition.map(
		({ item, key, props }) =>
			item && (
				<animated.div key={key} style={props}>
					<AlertJSX />
				</animated.div>
			)
	);
};

// ==============================
// Types
// ==============================

Alert.propTypes = {
	/**
	 * Manually signal an open or close state of this alert
	 */
	open: PropTypes.bool,

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
	overrides: PropTypes.shape({
		Alert: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Body: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		CloseBtn: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Icon: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Heading: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};

Alert.defaultProps = {
	open: true,
	look: 'info',
	dismissible: false,
	headingTag: 'h2',
};
