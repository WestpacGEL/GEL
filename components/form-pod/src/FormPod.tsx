import PropTypes from 'prop-types';
import { jsx, useBrand, overrideReconciler } from '@westpac/core';

import { defaultPreheading } from './overrides/preheading';
import { defaultHeaderIcon } from './overrides/headerIcon';
import { defaultHeading } from './overrides/heading';
import { defaultHeader } from './overrides/header';
import { defaultFormPod } from './overrides/formPod';
import pkg from '../package.json';
import React, { ReactNode } from 'react';

export interface FormPodProps {
	/**
	 * Children
	 */
	children?: ReactNode;
	/**
	 * Pre-heading text.
	 *
	 * This text is visible in XS and SM breakpoints only.
	 */
	preheading?: string;
	/**
	 * Heading text
	 */
	heading?: string;
	/**
	 * Header icon
	 */
	icon?: (...args: unknown[]) => unknown;
	/**
	 * The override API
	 */
	overrides?: {
		FormPod?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		Header?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		HeaderIcon?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		Preheading?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		Heading?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
	};
}

// ==============================
// Component
// ==============================

export const FormPod = ({
	icon,
	preheading,
	heading,
	children,
	overrides: componentOverrides,
	...rest
}: FormPodProps) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		FormPod: defaultFormPod,
		Header: defaultHeader,
		HeaderIcon: defaultHeaderIcon,
		Preheading: defaultPreheading,
		Heading: defaultHeading,
	};

	const state = {
		icon,
		preheading,
		heading,
		overrides: componentOverrides,
		...rest,
	};

	const {
		FormPod: { component: FormPod, styles: formPodStyles, attributes: formPodAttributes },
		Header: { component: Header, styles: headerStyles, attributes: headerAttributes },
		HeaderIcon: {
			component: HeaderIcon,
			styles: headerIconStyles,
			attributes: headerIconAttributes,
		},
		Preheading: {
			component: Preheading,
			styles: preheadingStyles,
			attributes: preheadingAttributes,
		},
		Heading: { component: Heading, styles: headingStyles, attributes: headingAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<FormPod {...rest} state={state} {...formPodAttributes(state)} css={formPodStyles(state)}>
			<Header state={state} {...headerAttributes(state)} css={headerStyles(state)}>
				{icon && (
					<HeaderIcon
						state={state}
						{...headerIconAttributes(state)}
						css={headerIconStyles(state)}
					/>
				)}
				{preheading && (
					<Preheading state={state} {...preheadingAttributes(state)} css={preheadingStyles(state)}>
						{preheading}
					</Preheading>
				)}
				{heading && (
					<Heading state={state} {...headingAttributes(state)} css={headingStyles(state)}>
						{heading}
					</Heading>
				)}
			</Header>
			{children}
		</FormPod>
	);
};

FormPod.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn proptypes"  |
	// ----------------------------------------------------------------------
	/**
	 * Children
	 */
	children: PropTypes.node,
	/**
	 * Heading text
	 */
	heading: PropTypes.string,
	/**
	 * Header icon
	 */
	icon: PropTypes.func,
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		FormPod: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		Header: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		HeaderIcon: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		Heading: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		Preheading: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
	}),
	/**
	 * Pre-heading text.
	 *
	 * This text is visible in XS and SM breakpoints only.
	 */
	preheading: PropTypes.string,
};
