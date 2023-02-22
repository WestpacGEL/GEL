import { useBrand } from '@westpac/core';
import { sizeMap } from '../_utils';

// ==============================
// Component
// ==============================

const Control = (props) => {
	const {
		children,
		cx,
		getStyles,
		className,
		isDisabled,
		isFocused,
		innerRef,
		innerProps,
		menuIsOpen,
	} = props;
	return (
		<div
			ref={innerRef}
			css={getStyles('control', props)}
			className={cx(
				{
					control: true,
					'control--is-disabled': isDisabled,
					'control--is-focused': isFocused,
					'control--menu-is-open': menuIsOpen,
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

const controlStyles = (_, { selectProps: { size, invalid, isDisabled }, isFocused, ...rest }) => {
	const { COLORS, PACKS, TYPE } = useBrand();

	// We'll add important to focus state for text inputs so they are always visible even with the useFocus helper
	const focus = { ...PACKS.focus };
	focus.outline += ' !important';
	const borderWidth = 1; //px
	const lineHeight = 1.5;

	return {
		position: 'relative',
		display: 'flex',
		alignItems: 'center',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
		boxSizing: 'border-box',
		appearance: 'none',
		lineHeight: lineHeight,
		color: COLORS.text,
		backgroundColor: '#fff',
		border: `${borderWidth}px solid ${
			invalid || rest.ariaInvalid ? COLORS.danger : COLORS.borderDark
		}`,
		borderRadius: '0.1875rem',
		transition: 'border 0.2s ease',
		paddingLeft: sizeMap[size].paddingLeft,
		fontSize: sizeMap[size].fontSize,
		height: `calc(${lineHeight}em + ${((p) => `${p[0]} + ${p[2] || p[0]}`)(
			sizeMap[size].padding
		)} + ${2 * borderWidth}px)`,
		...TYPE.bodyFont[400],

		...(isFocused && focus),

		// Disabled
		...(isDisabled && {
			cursor: 'not-allowed',
			opacity: 1, // iOS fix for unreadable disabled content
			backgroundColor: COLORS.background,
			borderStyle: 'dashed',
			color: COLORS.muted,
		}),
	};
};

// ==============================
// Attributes
// ==============================

const controlAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultControl = {
	component: Control,
	styles: controlStyles,
	attributes: controlAttributes,
};
