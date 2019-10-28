/** @jsx jsx */

import { jsx, useBrand, merge } from '@westpac/core';
import { cloneElement, Children } from 'react';
import { VisuallyHidden } from '@westpac/a11y';
import { ArrowRightIcon } from '@westpac/icon';
import { name } from '../package.json';
import PropTypes from 'prop-types';
import { Crumb } from './Crumb';

// ==============================
// Component
// ==============================

/**
 * Breadcrumb: Breadcrumbs are styled navigational links used to indicate a user journey or path. They are a simple, effective and proven method to aid orientation.
 */
export const Breadcrumb = ({ children, data, current, label, currentLabel, ...props }) => {
	const { [name]: localBrandTokens } = useBrand();

	const localTokens = {
		Crumb,
		listCSS: {},
		Label: VisuallyHidden,
		Icon: ArrowRightIcon,
	};
	merge(localTokens, localBrandTokens);

	let allChildren = [];
	if (data) {
		data.map(({ href, text, onClick }, index) => {
			allChildren.push(
				<localTokens.Crumb
					key={index}
					current={index === data.length - 1}
					label={currentLabel}
					href={href}
					text={text}
					icon={localTokens.Icon}
					onClick={onClick}
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
			<localTokens.Label>{label}</localTokens.Label>
			<ol
				css={{
					padding: '0.375rem 1.125rem',
					marginBottom: '1.3125rem',
					fontSize: '0.8125rem',
					listStyle: 'none',
					...localTokens.listCSS,
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
	 * The label of the breadcrumb
	 */
	label: PropTypes.string.isRequired,

	/**
	 * The label of the crumb current page
	 */
	currentLabel: PropTypes.string,
};

Breadcrumb.defaultProps = {
	label: 'Page navigation:',
};
