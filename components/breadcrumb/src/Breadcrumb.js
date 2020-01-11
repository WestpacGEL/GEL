/** @jsx jsx */

import { jsx, useBrand, overrideReconciler2 as overrideReconciler } from '@westpac/core';
import { cloneElement, Children } from 'react';
import PropTypes from 'prop-types';

import { AssistiveText, assistiveTextStyles } from './overrides/assistivetext';
import { Breadcrumb as BreadcrumbWrapper, breadcrumbStyles } from './overrides/breadcrumb';
import { List, listStyles } from './overrides/list';
import pkg from '../package.json';
import { Crumb } from './Crumb';

// ==============================
// Component
// ==============================

/**
 * Breadcrumb: Breadcrumbs are styled navigational links used to indicate a user journey or path. They are a simple, effective and proven method to aid orientation.
 */
export const Breadcrumb = ({
	children,
	data,
	current,
	assistiveText,
	currentAssistiveText,
	className,
	overrides: componentOverrides,
	...rest
}) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		Breadcrumb: {
			styles: breadcrumbStyles,
			component: BreadcrumbWrapper,
			attributes: state => state,
		},
		AssistiveText: {
			styles: assistiveTextStyles,
			component: AssistiveText,
			attributes: state => state,
		},
		List: {
			styles: listStyles,
			component: List,
			attributes: state => state,
		},
	};

	const state = {
		data,
		current,
		assistiveText,
		currentAssistiveText,
		overrides: componentOverrides,
		...rest,
	};

	const overrides = overrideReconciler(
		defaultOverrides,
		tokenOverrides,
		brandOverrides,
		componentOverrides
	);

	let allChildren = [];
	if (data) {
		data.map(({ href, text, onClick }, index) => {
			allChildren.push(
				<Crumb
					key={index}
					current={index === data.length - 1}
					assistiveText={currentAssistiveText}
					href={href}
					text={text}
					onClick={onClick}
					overrides={componentOverrides}
				/>
			);
		});
	} else {
		const length = Children.count(children);
		allChildren = Children.map(children, (child, index) => {
			return cloneElement(
				child,
				{ current: index === length - 1, overrides: componentOverrides },
				index
			);
		});
	}

	return (
		<overrides.Breadcrumb.component
			className={className}
			{...overrides.Breadcrumb.attributes(state)}
			css={overrides.Breadcrumb.styles(state)}
		>
			<overrides.AssistiveText.component
				{...overrides.AssistiveText.attributes(state)}
				css={overrides.AssistiveText.styles(state)}
			>
				{assistiveText}
			</overrides.AssistiveText.component>
			<overrides.List.component
				{...overrides.List.attributes(state)}
				css={overrides.List.styles(state)}
			>
				{allChildren}
			</overrides.List.component>
		</overrides.Breadcrumb.component>
	);
};

// ==============================
// Types
// ==============================

Breadcrumb.propTypes = {
	/**
	 * Any renderable child
	 */
	children: PropTypes.node,

	/**
	 * Data for the crumbs
	 */
	data: PropTypes.arrayOf(
		PropTypes.shape({
			text: PropTypes.string.isRequired,
			href: PropTypes.string,
			onClick: PropTypes.func,
		})
	),

	/**
	 * Visually hidden text to use for the breadcrumb
	 */
	assistiveText: PropTypes.string.isRequired,

	/**
	 * Visually hidden text to use for the current page crumb
	 */
	currentAssistiveText: PropTypes.string,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Breadcrumb: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.object,
		}),
		AssistiveText: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.object,
		}),
		List: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.object,
		}),
		Crumb: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.object,
		}),
		Link: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.object,
		}),
		Icon: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.object,
		}),
	}),
};

Breadcrumb.defaultProps = {
	assistiveText: 'Page navigation:',
};
