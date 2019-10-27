/** @jsx jsx */

import { jsx } from '@westpac/core';
import { VisuallyHidden } from '@westpac/a11y';
import PropTypes from 'prop-types';

// ==============================
// Component
// ==============================

export const TextWrapper = ({ block, srOnlyText, children }) => {
	if (srOnlyText) {
		return <VisuallyHidden>{children}</VisuallyHidden>;
	} else if (block) {
		// Wrap with styled span to provide text truncation (only available in block mode)
		return <span css={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{children}</span>;
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
