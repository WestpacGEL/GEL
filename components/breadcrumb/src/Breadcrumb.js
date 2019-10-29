/** @jsx jsx */

import { jsx, useBrand, merge } from '@westpac/core';
import { cloneElement, Children } from 'react';
import { VisuallyHidden } from '@westpac/a11y';
import { ArrowRightIcon } from '@westpac/icon';
import PropTypes from 'prop-types';
import pkg from '../package.json';
import { Crumb } from './Crumb';

// ==============================
// Component
// ==============================

/**
 * Breadcrumb: Breadcrumbs are styled navigational links used to indicate a user journey or path. They are a simple, effective and proven method to aid orientation.
 */
export const Breadcrumb = ({ children, data, current, label, currentLabel, ...props }) => {
	const { [pkg.name]: overwritesWithTokens } = useBrand();

	const overwrites = {
		Crumb,
		listCSS: {},
		Label: VisuallyHidden,
		Icon: ArrowRightIcon,
		css: {},
	};
	merge(overwrites, overwritesWithTokens);

	let allChildren = [];
	if (data) {
		data.map(({ href, text, onClick }, index) => {
			allChildren.push(
				<overwrites.Crumb
					key={index}
					current={index === data.length - 1}
					label={currentLabel}
					href={href}
					text={text}
					icon={overwrites.Icon}
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
		<div css={overwrites.css} {...props}>
			<overwrites.Label>{label}</overwrites.Label>
			<ol
				css={{
					padding: '0.375rem 1.125rem',
					marginBottom: '1.3125rem',
					fontSize: '0.8125rem',
					listStyle: 'none',
					...overwrites.listCSS,
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
