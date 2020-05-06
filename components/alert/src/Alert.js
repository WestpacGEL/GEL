/** @jsx jsx */

import { jsx, useBrand, overrideReconciler, wrapHandlers } from '@westpac/core';
import { useTransition, animated } from 'react-spring';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { defaultCloseBtn } from './overrides/closeBtn';
import { defaultHeading } from './overrides/heading';
import { defaultAlert } from './overrides/alert';
import { defaultBody } from './overrides/body';
import { defaultIcon } from './overrides/icon';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const Alert = ({
	open: isOpen,
	look,
	dismissible,
	onClose = () => {},
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
		Alert: defaultAlert,
		Body: defaultBody,
		CloseBtn: defaultCloseBtn,
		Heading: defaultHeading,
		Icon: defaultIcon,
	};

	const state = {
		open,
		look,
		dismissible: dismissible ? dismissible : undefined,
		onClose,
		icon,
		heading,
		headingTag,
		overrides: componentOverrides,
		...rest,
	};

	const {
		Alert: { component: Alert, styles: alertStyles, attributes: alertAttributes },
		Body: { component: Body, styles: bodyStyles, attributes: bodyAttributes },
		CloseBtn: { component: CloseBtn, styles: closeBtnStyles, attributes: closeBtnAttributes },
		Heading: { component: Heading, styles: headingStyles, attributes: headingAttributes },
		Icon: { component: Icon, styles: iconStyles, attributes: iconAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	useEffect(() => {
		setOpen(isOpen);
	}, [isOpen]);

	const handleClose = event => {
		wrapHandlers(
			() => onClose(),
			() => setOpen(false)
		)(event);
	};

	const HeadingJSX = () => (
		<Heading state={state} {...headingAttributes(state)} css={headingStyles(state)}>
			{heading}
		</Heading>
	);

	const IconJSX = () => <Icon state={state} {...iconAttributes(state)} css={iconStyles(state)} />;

	const CloseBtnJSX = () => (
		<CloseBtn
			onClose={event => handleClose(event)}
			state={state}
			{...closeBtnAttributes(state)}
			css={{ '&&': closeBtnStyles(state) }}
		/>
	);

	const AlertJSX = () => (
		<Alert state={state} {...rest} {...alertAttributes(state)} css={alertStyles(state)}>
			{Icon && <IconJSX />}
			<Body state={state} {...bodyAttributes(state)} css={bodyStyles(state)}>
				{heading && <HeadingJSX />}
				{children}
			</Body>
			{dismissible && <CloseBtnJSX />}
		</Alert>
	);

	return transition.map(
		({ item, key, props }) =>
			item && (
				<animated.div key={key} style={props} data-js="alert__version__">
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
	 * onClose function for dismissible mode
	 */
	onClose: PropTypes.func,

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
