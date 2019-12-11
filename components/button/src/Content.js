/** @jsx jsx */

import { jsx, useBrand, merge } from '@westpac/core';
import PropTypes from 'prop-types';
import { Fragment } from 'react';

import { TextWrapper } from './TextWrapper';
import pkg from '../package.json';

// ==============================
// Utils
// ==============================

// Map button size to icon size
const iconSizeMap = {
	small: 'small', //18px
	medium: 'small', //18px
	large: 'medium', //24px
	xlarge: 'medium', //24px
};

// ==============================
// Component
// ==============================

export const Content = ({
	size,
	block,
	iconAfter: IconAfter,
	iconBefore: IconBefore,
	children,
}) => {
	const { [pkg.name]: overridesWithTokens } = useBrand();

	const overrides = {
		TextWrapper,
	};
	merge(overrides, overridesWithTokens);

	// Compose a button text + icon fragment, if these are provided
	return (
		<Fragment>
			{IconBefore && (
				<IconBefore
					css={{ marginRight: children && '0.4em' }}
					size={iconSizeMap[size]}
					color="inherit"
				/>
			)}
			{children && <overrides.TextWrapper block={block}>{children}</overrides.TextWrapper>}
			{IconAfter && (
				<IconAfter
					css={{ marginLeft: children && '0.4em' }}
					size={iconSizeMap[size]}
					color="inherit"
				/>
			)}
		</Fragment>
	);
};

Content.propTypes = {
	/**
	 * Button size
	 */
	size: PropTypes.oneOfType([
		PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']),
		PropTypes.arrayOf(PropTypes.oneOf(['small', 'medium', 'large', 'xlarge'])),
	]).isRequired,

	/**
	 * Places an icon within the button, after the button’s text
	 */
	iconAfter: PropTypes.func,

	/**
	 * Places an icon within the button, before the button’s text
	 */
	iconBefore: PropTypes.func,

	/**
	 * Block mode.
	 *
	 * Fit button width to its parent width.
	 */
	block: PropTypes.oneOfType([PropTypes.bool, PropTypes.arrayOf(PropTypes.bool)]).isRequired,

	/**
	 * Button text
	 */
	children: PropTypes.node,
};

Content.defaultProps = {
	size: 'medium',
	block: false,
};
