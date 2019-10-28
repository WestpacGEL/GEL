/** @jsx jsx */

import { jsx, useBrand, merge } from '@westpac/core';
import { VisuallyHidden } from '@westpac/a11y';
import PropTypes from 'prop-types';

import pkg from '../package.json';

// ==============================
// Token component
// ==============================

function BlockWrapper({children}) {
	return <span css={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{children}</span>
}

// ==============================
// Component
// ==============================

export const TextWrapper = ({ block, srOnlyText, children }) => {
	const { [pkg.name]: localBrandTokens } = useBrand();

	const localTokens = {
		VisuallyHidden,
		BlockWrapper,
	};
	merge(localTokens, localBrandTokens);

	if (srOnlyText) {
		return <localTokens.VisuallyHidden>{children}</localTokens.VisuallyHidden>;
	} else if (block) {
		// Wrap with styled span to provide text truncation (only available in block mode)
		return <localTokens.BlockWrapper css={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{children}</localTokens.BlockWrapper>;
	} else {
		return children;
	}
};

TextWrapper.propTypes = {
	/**
	 * Block mode.
	 *
	 * Fit button width to its parent width.
	 */
	block: PropTypes.oneOfType([PropTypes.bool, PropTypes.arrayOf(PropTypes.bool)]).isRequired,

	/**
	 * Enable ‘screen reader only’ text mode
	 */
	srOnlyText: PropTypes.bool,

	/**
	 * Button text
	 */
	children: PropTypes.node,
};

TextWrapper.defaultProps = {
	block: false,
};
