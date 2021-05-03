/** @jsx jsx */

import { jsx } from '@westpac/core';

// ==============================
// Component
// ==============================

const IndicatorsContainer = (props) => {
	const { children, className, cx, innerProps, getStyles } = props;

	return (
		<div
			css={getStyles('indicatorsContainer', props)}
			className={cx(
				{
					indicators: true,
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

const indicatorsContainerStyles = () => {
	return {
		display: 'flex',
		padding: '0.3125rem 0.75rem',
	};
};

// ==============================
// Attributes
// ==============================

const indicatorsContainerAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultIndicatorsContainer = {
	component: IndicatorsContainer,
	styles: indicatorsContainerStyles,
	attributes: indicatorsContainerAttributes,
};
