import React from 'react';
import PropTypes from 'prop-types';
import { useBrand, overrideReconciler, wrapHandlers } from '@westpac/core';
import { useState, useEffect, useCallback, ReactNode } from 'react';

export const defaultProps = {};
import { defaultCloseBtn } from './overrides/closeBtn';
import { defaultHeading } from './overrides/heading';
import { defaultAlert } from './overrides/alert';
import { defaultBody } from './overrides/body';
import { defaultIcon } from './overrides/icon';
import pkg from '../package.json';

// ==============================
// Types
// ==============================x

export interface OverrideProps {
	styles?: (...args: unknown[]) => unknown;
	component?: React.ElementType;
	attributes?: (...args: unknown[]) => unknown;
}
export interface AlertProps {
	/**
	 * Manually signal an open or close state of this alert
	 */
	open?: boolean;
	/**
	 * Manually signal an open or close state of this alert
	 */
	anotherOne?: boolean;

	/**
	 * Alert look
	 */
	look?: 'info' | 'success' | 'warning' | 'danger' | 'system';

	/**
	 * Alert box style
	 */
	mode?: 'box' | 'text';

	/**
	 * Enable dismissible mode
	 */
	dismissible?: boolean;

	/**
	 * onClose function for dismissible mode
	 */
	onClose?: () => any;

	/**
	 * Alert icon.
	 *
	 * The alert icon is automatically rendered based on look. The icon can be overriden via this prop, for info look alerts only.
	 */
	icon?: () => any;

	/**
	 * The alert heading
	 */
	heading?: string;

	/**
	 * The alert heading tag is automatically defined, but may be overridden via this prop if required for semantic reasons.
	 */
	headingTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

	/**
	 * Alert children
	 */
	children?: ReactNode;

	/**
	 * The override API
	 */
	overrides?: {
		Alert?: OverrideProps;
		Body?: OverrideProps;
		CloseBtn?: OverrideProps;
		Icon?: OverrideProps;
		Heading?: OverrideProps;
	};
}

// ==============================
// Component
// ==============================

export function Alert({
	open: isOpen = true,
	look = 'info',
	mode = 'box',
	dismissible = false,
	onClose = () => {},
	icon,
	heading,
	headingTag = 'h2',
	children,
	overrides: componentOverrides,
	...rest
}: AlertProps) {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		// TODO: when this value is going to come? how is the interface for that? What is structure of the B
		[pkg.name]: brandOverrides,
	} = useBrand();

	const [open, setOpen] = useState(isOpen);

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
		mode,
		dismissible: dismissible ? dismissible : undefined,
		onClose,
		icon,
		heading,
		headingTag,
		overrides: componentOverrides,
		...rest,
	};

	const {
		Alert: { component: OverrideAlert, styles: alertStyles, attributes: alertAttributes },
		Body: { component: OverrideBody, styles: bodyStyles, attributes: bodyAttributes },
		CloseBtn: {
			component: OverrideCloseBtn,
			styles: closeBtnStyles,
			attributes: closeBtnAttributes,
		},
		Heading: { component: OverrideHeading, styles: headingStyles, attributes: headingAttributes },
		Icon: { component: OverrideIcon, styles: iconStyles, attributes: iconAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	useEffect(() => {
		setOpen(isOpen);
	}, [isOpen]);

	const handleClose = useCallback(
		(event: MouseEvent) => {
			wrapHandlers(
				() => onClose(),
				() => setOpen(false)
			)(event);
		},
		[onClose]
	);

	return (
		<OverrideAlert state={state} {...rest} {...alertAttributes(state)} css={alertStyles(state)}>
			{OverrideIcon && (
				<OverrideIcon state={state} {...iconAttributes(state)} css={iconStyles(state)} />
			)}
			<OverrideBody state={state} {...bodyAttributes(state)} css={bodyStyles(state)}>
				{heading && (
					<OverrideHeading state={state} {...headingAttributes(state)} css={headingStyles(state)}>
						{heading}
					</OverrideHeading>
				)}
				{children}
			</OverrideBody>
			{dismissible && mode !== 'text' && (
				<OverrideCloseBtn
					onClose={(event: MouseEvent) => handleClose(event)}
					state={state}
					{...closeBtnAttributes(state)}
					css={closeBtnStyles(state)}
				/>
			)}
		</OverrideAlert>
	);
}

Alert.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn proptypes"  |
	// ----------------------------------------------------------------------
	/**
	 * Alert children
	 */
	children: PropTypes.node,
	/**
	 * Enable dismissible mode
	 */
	dismissible: PropTypes.bool,
	/**
	 * The alert heading
	 */
	heading: PropTypes.string,
	/**
	 * The alert heading tag is automatically defined, but may be overridden via this prop if required for semantic reasons.
	 */
	headingTag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
	/**
	 * Alert icon.
	 *
	 * The alert icon is automatically rendered based on look. The icon can be overriden via this prop, for info look alerts only.
	 */
	icon: PropTypes.func,
	/**
	 * Alert look
	 */
	look: PropTypes.oneOf(['danger', 'info', 'success', 'system', 'warning']),
	/**
	 * Alert box style
	 */
	mode: PropTypes.oneOf(['box', 'text']),
	/**
	 * onClose function for dismissible mode
	 */
	onClose: PropTypes.func,
	/**
	 * Manually signal an open or close state of this alert
	 */
	open: PropTypes.bool,
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Alert: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		Body: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		CloseBtn: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		Heading: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		Icon: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
	}),
};
