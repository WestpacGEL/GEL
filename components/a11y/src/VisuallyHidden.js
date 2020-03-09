/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { defaultVisuallyHidden } from './overrides/visuallyHidden';
import pkg from '../package.json';

// ==============================
// Component
//
// Only display content to screen readers
//
// See: https://a11yproject.com/posts/how-to-hide-content/
// See: https://hugogiraudel.com/2016/10/13/css-hide-and-seek/
// ==============================

export const VisuallyHidden = ({ tag, children, overrides: componentOverrides, ...rest }) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		VisuallyHiddenRoot: defaultVisuallyHidden,
	};

	const state = {
		tag,
		overrides: componentOverrides,
		...rest,
	};

	const {
		VisuallyHiddenRoot: {
			component: VisuallyHiddenRoot,
			styles: visuallyHiddenRootStyles,
			attributes: visuallyHiddenRootAttributes,
		},
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<VisuallyHiddenRoot
			tag={tag}
			children={children}
			{...rest}
			{...visuallyHiddenRootAttributes(state)}
			css={visuallyHiddenRootStyles(state)}
		/>
	);
};

// ==============================
// Types
// ==============================

VisuallyHidden.propTypes = {
	/**
	 * Component tag
	 */
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]).isRequired,

	/**
	 * Component content
	 */
	children: PropTypes.node.isRequired,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		VisuallyHidden: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};

VisuallyHidden.defaultProps = {
	tag: 'span',
};
