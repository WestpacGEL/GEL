/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';

// ==============================
// Component
// ==============================

const Option = (props) => {
	const {
		children,
		className,
		cx,
		getStyles,
		isDisabled,
		isFocused,
		isSelected,
		innerRef,
		innerProps,
	} = props;
	return (
		<div
			css={getStyles('option', props)}
			className={cx(
				{
					option: true,
					'option--is-disabled': isDisabled,
					'option--is-focused': isFocused,
					'option--is-selected': isSelected,
				},
				className
			)}
			ref={innerRef}
			{...innerProps}
		>
			{children}
		</div>
	);
};

// ==============================
// Styles
// ==============================

const optionStyles = (_, { isFocused }) => {
	const { COLORS } = useBrand();
	return {
		fontSize: '0.875rem',
		padding: '0.5rem 1rem',
		backgroundColor: isFocused && COLORS.hero,
		color: isFocused ? '#fff' : COLORS.text,
	};
};

// ==============================
// Attributes
// ==============================

const optionAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultOption = {
	component: Option,
	styles: optionStyles,
	attributes: optionAttributes,
};
