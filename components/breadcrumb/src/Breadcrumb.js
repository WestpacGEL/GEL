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
export const Breadcrumb = ({
	children,
	data,
	current,
	assistiveText,
	currentAssistiveText,
	...props
}) => {
	const { [pkg.name]: overridesWithTokens } = useBrand();

	const overrides = {
		Crumb,
		listCSS: {},
		AssistiveText: VisuallyHidden,
		Icon: ArrowRightIcon,
		css: {},
	};
	merge(overrides, overridesWithTokens);

	let allChildren = [];
	if (data) {
		data.map(({ href, text, onClick }, index) => {
			allChildren.push(
				<overrides.Crumb
					key={index}
					current={index === data.length - 1}
					assistiveText={currentAssistiveText}
					href={href}
					text={text}
					icon={overrides.Icon}
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
		<div css={overrides.css} {...props}>
			<overrides.AssistiveText>{assistiveText}</overrides.AssistiveText>
			<ol
				css={{
					padding: '0.375rem 1.125rem',
					marginBottom: '1.3125rem',
					fontSize: '0.8125rem',
					listStyle: 'none',
					...overrides.listCSS,
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
	 * Visually hidden text to use for the breadcrumb
	 */
	assistiveText: PropTypes.string.isRequired,

	/**
	 * Visually hidden text to use for the current page crumb
	 */
	currentAssistiveText: PropTypes.string,
};

Breadcrumb.defaultProps = {
	assistiveText: 'Page navigation:',
};
