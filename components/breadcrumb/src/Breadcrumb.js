/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import { cloneElement, Children } from 'react';
import PropTypes from 'prop-types';

import { Breadcrumb as BreadcrumbWrapper, breadcrumbStyles } from './overrides/breadcrumb';
import { List, listStyles } from './overrides/list';
import pkg from '../package.json';
import { Crumb } from './Crumb';

// ==============================
// Component
// ==============================

export const Breadcrumb = ({
	data,
	assistiveText,
	children,
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
			attributes: () => null,
		},
		List: {
			styles: listStyles,
			component: List,
			attributes: () => null,
		},
	};

	const state = {
		data,
		assistiveText,
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
					href={href}
					text={text}
					onClick={onClick}
					assistiveText={assistiveText}
					overrides={componentOverrides}
				/>
			);
		});
	} else {
		const length = Children.count(children);
		allChildren = Children.map(children, (child, index) => {
			return cloneElement(
				child,
				{
					current: index === length - 1,
					assistiveText,
					currentAssistiveText,
					overrides: componentOverrides,
				},
				index
			);
		});
	}

	return (
		<overrides.Breadcrumb.component
			className={className}
			aria-label={assistiveText}
			{...overrides.Breadcrumb.attributes(state)}
			css={overrides.Breadcrumb.styles(state)}
		>
			<overrides.List.component
				data={data}
				assistiveText={assistiveText}
				{...rest}
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
	 * Text to use as the `aria-label` for the breadcrumb
	 */
	assistiveText: PropTypes.string.isRequired,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Breadcrumb: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		List: PropTypes.shape({
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

Breadcrumb.defaultProps = {
	assistiveText: 'Breadcrumb',
};
