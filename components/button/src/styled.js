/** @jsx jsx */

import React from 'react';
import { jsx } from '@westpac/core';
import { propTypes, defaultProps } from './Button';
import { SrOnly } from '@westpac/accessibility-helpers';

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

export const ButtonTextWrapper = ({ isBlock, isSrOnlyText, children }) => {
	if (isSrOnlyText) {
		return <SrOnly>{children}</SrOnly>;
	} else if (isBlock) {
		// Wrap with styled span to provide text truncation (only available in block mode)
		return <span css={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{children}</span>;
	} else {
		return children;
	}
};

export const ButtonContent = ({
	size,
	isBlock,
	iconAfter: IconAfter,
	iconBefore: IconBefore,
	isSrOnlyText,
	children,
}) => {
	// Compose a button text + icon fragment, if these are provided
	return (
		<>
			{IconBefore && (
				<IconBefore
					css={{ marginRight: children && !isSrOnlyText && '0.4em' }}
					size={iconSizeMap[size]}
					color="inherit"
				/>
			)}
			{children && (
				<ButtonTextWrapper isBlock={isBlock} isSrOnlyText={isSrOnlyText}>
					{children}
				</ButtonTextWrapper>
			)}
			{IconAfter && (
				<IconAfter
					css={{ marginLeft: children && !isSrOnlyText && '0.4em' }}
					size={iconSizeMap[size]}
					color="inherit"
				/>
			)}
		</>
	);
};

ButtonContent.propTypes = {
	...propTypes,
};
ButtonContent.defaultProps = defaultProps;
