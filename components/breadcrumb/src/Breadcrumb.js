/** @jsx jsx */

import { jsx } from '@westpac/core';
import { cloneElement, Children, createContext, useContext } from 'react';
import { VisuallyHidden } from '@westpac/a11y';
import PropTypes from 'prop-types';
import { Crumb } from './Crumb';

// ==============================
// Component
// ==============================

/**
 * Breadcrumb: Breadcrumbs are styled navigational links used to indicate a user journey or path. They are a simple, effective and proven method to aid orientation.
 */
export const Breadcrumb = ({ children, data, current, label, crumbLabel, ...props }) => {
	let allChildren = [];
	if (data) {
		data.map(({ href, text, onClick }, index) => {
			allChildren.push(
				<Crumb
					current={index === data.length - 1}
					label={crumbLabel}
					href={href}
					text={text}
					onClick={onClick}
					key={index}
				/>
			);
		});
	} else {
		const length = Children.count(children);
		allChildren = Children.map(children, (child, index) => {
			return cloneElement(child, { current: index === length - 1 }, index);
		});
	}

	return (
		<div {...props}>
			<VisuallyHidden>{label}</VisuallyHidden>
			<ol
				css={{
					padding: '0.375rem 1.125rem',
					marginBottom: '1.3125rem',
					fontSize: '0.8125rem',
					listStyle: 'none',
				}}
			>
				{allChildren}
			</ol>
		</div>
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
	 * The current page
	 */
	current: PropTypes.string,

	/**
	 * The label of the breadcrumb
	 */
	label: PropTypes.string.isRequired,

	/**
	 * The label of the crumb current page
	 */
	crumbLabel: PropTypes.string,
};

Breadcrumb.defaultProps = {
	label: 'Page navigation:',
};
