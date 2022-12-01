/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { defaultPreheading } from './overrides/preheading';
import { defaultHeaderIcon } from './overrides/headerIcon';
import { defaultHeading } from './overrides/heading';
import { defaultHeader } from './overrides/header';
import { defaultFormPod } from './overrides/formPod';
import pkg from '../package.json';

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
}: typeof FormPod.propTypes & typeof FormPod.defaultProps) => {
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

// ==============================
// Types
// ==============================

FormPod.propTypes = {
	/**
	 * Pre-heading text.
	 *
	 * This text is visible in XS and SM breakpoints only.
	 */
	preheading: PropTypes.string,

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
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Header: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		HeaderIcon: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Preheading: PropTypes.shape({
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

FormPod.defaultProps = {};
