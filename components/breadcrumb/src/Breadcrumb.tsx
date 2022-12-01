/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import { createContext, useContext, cloneElement, Children } from 'react';
import PropTypes from 'prop-types';

import { defaultBreadcrumb } from './overrides/breadcrumb';
import { defaultList } from './overrides/list';

import { Crumb } from './Crumb';
import pkg from '../package.json';

// ==============================
// Context and Consumer Hook
// ==============================

const BreadcrumbContext = createContext(null);

export const useBreadcrumbContext = () => {
	const context = useContext(BreadcrumbContext);

	if (!context) {
		throw new Error('<Crumb/> components should be wrapped in a <Breadcrumb>.');
	}

	return context;
};

// ==============================
// Component
// ==============================

export const Breadcrumb = ({
	data,
	assistiveText,
	children,
	overrides: componentOverrides,
	...rest
}: typeof Breadcrumb.propTypes & typeof Breadcrumb.defaultProps) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		Breadcrumb: defaultBreadcrumb,
		List: defaultList,
	};

	const state = {
		data,
		assistiveText,
		overrides: componentOverrides,
		...rest,
	};

	const {
		Breadcrumb: {
			component: Breadcrumb,
			styles: breadcrumbStyles,
			attributes: breadcrumbAttributes,
		},
		List: { component: List, styles: listStyles, attributes: listAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	let allChildren = [];
	if (data) {
		data.map(({ href, text, tag, onClick }, index) => {
			allChildren.push(
				<Crumb
					key={index}
					current={index === data.length - 1}
					href={href}
					text={text}
					tag={tag}
					onClick={onClick}
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
				},
				index
			);
		});
	}

	return (
		<BreadcrumbContext.Provider value={{ state }}>
			<Breadcrumb state={state} {...breadcrumbAttributes(state)} css={breadcrumbStyles(state)}>
				<List {...rest} state={state} {...listAttributes(state)} css={listStyles(state)}>
					{allChildren}
				</List>
			</Breadcrumb>
		</BreadcrumbContext.Provider>
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
