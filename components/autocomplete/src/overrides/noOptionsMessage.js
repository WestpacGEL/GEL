/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';

// ==============================
// Component
// ==============================

const NoOptionsMessage = (props) => {
	const { children, className, cx, getStyles, innerProps } = props;
	return (
		<div
			css={getStyles('noOptionsMessage', props)}
			className={cx(
				{
					'menu-notice': true,
					'menu-notice--no-options': true,
				},
				className
			)}
			{...innerProps}
		>
			{children}
		</div>
	);
};

// ==============================
// Styles
// ==============================

const noOptionsMessageStyles = () => {
	const { COLORS } = useBrand();
	return { fontSize: '0.875rem', padding: '0.5rem 1rem', color: COLORS.text };
};

// ==============================
// Attributes
// ==============================

const noOptionsMessageAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultNoOptionsMessage = {
	component: NoOptionsMessage,
	styles: noOptionsMessageStyles,
	attributes: noOptionsMessageAttributes,
};
