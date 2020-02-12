/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';
import React from 'react';

import { AssistiveText, assistiveTextStyles } from './overrides/assistivetext';
import { Crumb as CrumbWrapper, crumbStyles } from './overrides/crumb';
import { Link, linkStyles } from './overrides/link';
import { Icon, iconStyles } from './overrides/icon';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

/**
 * Crumb: Breadcrumbs are styled navigational links used to indicate a user journey or path. They are a simple, effective and proven method to aid orientation.
 */
export const Crumb = ({
	current,
	href,
	text,
	assistiveText,
	currentAssistiveText,
	onClick,
	overrides: componentOverrides,
	...rest
}) => {
	const {
		COLORS,
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		AssistiveText: {
			styles: assistiveTextStyles,
			component: AssistiveText,
			attributes: () => null,
		},
		Crumb: {
			styles: crumbStyles,
			component: CrumbWrapper,
			attributes: () => null,
		},
		Link: {
			styles: linkStyles,
			component: Link,
			attributes: () => null,
		},
		Icon: {
			styles: iconStyles,
			component: Icon,
			attributes: () => null,
		},
	};

	const state = {
		current,
		href,
		text,
		assistiveText,
		currentAssistiveText,
		onClick,
		overrides: componentOverrides,
		...rest,
	};

	const overrides = overrideReconciler(
		defaultOverrides,
		tokenOverrides,
		brandOverrides,
		componentOverrides
	);

	return (
		<overrides.Crumb.component
			current={current}
			href={href}
			text={text}
			assistiveText={assistiveText}
			currentAssistiveText={currentAssistiveText}
			{...rest}
			{...overrides.Crumb.attributes(state)}
			css={overrides.Crumb.styles(state)}
		>
			{current && (
				<overrides.AssistiveText.component
					current={current}
					href={href}
					text={text}
					assistiveText={currentAssistiveText}
					currentAssistiveText={currentAssistiveText}
					insideCrumb={true}
					{...overrides.AssistiveText.attributes(state)}
					css={overrides.AssistiveText.styles(state)}
				>
					{currentAssistiveText}
				</overrides.AssistiveText.component>
			)}
			<overrides.Link.component
				current={current}
				href={href}
				text={text}
				assistiveText={currentAssistiveText}
				currentAssistiveText={currentAssistiveText}
				onClick={onClick}
				{...overrides.Link.attributes(state)}
				css={overrides.Link.styles(state)}
			>
				{text}
			</overrides.Link.component>
			{!current && (
				<overrides.Icon.component
					current={current}
					href={href}
					text={text}
					assistiveText={currentAssistiveText}
					currentAssistiveText={currentAssistiveText}
					aria-hidden="true"
					size="small"
					color={COLORS.primary}
					{...overrides.Icon.attributes(state)}
					css={overrides.Icon.styles(state)}
				/>
			)}
		</overrides.Crumb.component>
	);
};

Crumb.isCrumb = true;

// ==============================
// Types
// ==============================

Crumb.propTypes = {
	/**
	 * The text of the crumb
	 */
	current: PropTypes.bool,

	/**
	 * An href for a link
	 */
	href: PropTypes.string,

	/**
	 * The text of the crumb
	 */
	text: PropTypes.string.isRequired,

	/**
	 * Visually hidden text to use for the current page crumb
	 */
	assistiveText: PropTypes.string,

	/**
	 * Visually hidden text to use for the current page crumb
	 */
	currentAssistiveText: PropTypes.string.isRequired,

	/**
	 * A function for the onClick event
	 */
	onClick: PropTypes.func,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		AssistiveText: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Crumb: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Link: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Icon: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};

Crumb.defaultProps = {
	currentAssistiveText: 'Current page:',
};
