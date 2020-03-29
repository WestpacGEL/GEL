/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { defaultBodyText } from './overrides/bodyText';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const BodyText = ({ tag, children, overrides: componentOverrides, ...rest }) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		BodyText: defaultBodyText,
	};

	const state = {
		tag,
		children,
		overrides: componentOverrides,
		...rest,
	};

	const {
		BodyText: { component: BodyText, styles: bodyTextStyles, attributes: bodyTextAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<BodyText {...rest} state={state} {...bodyTextAttributes(state)} css={bodyTextStyles(state)}>
			{children}
		</BodyText>
	);
};

// ==============================
// Types
// ==============================

BodyText.propTypes = {
	/**
	 * BodyText tag
	 */
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]).isRequired,

	/**
	 * BodyText children
	 */
	children: PropTypes.node.isRequired,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		BodyText: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};

BodyText.defaultProps = {
	tag: 'div',
};
