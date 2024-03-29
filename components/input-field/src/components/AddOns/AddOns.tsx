import PropTypes from 'prop-types';
import { useBrand } from '@westpac/core';
import { AddOnProps, InputAddOnProps } from './AddOns.types';
import { useInputFieldContext } from '../InputField';

const DefaultAddOn = ({ position, children, ...props }: AddOnProps) => {
	return (
		<div
			css={{
				display: 'flex',
				flexShrink: 0,
				'> button, select': {
					...(position === 'before' ? { borderTopRightRadius: 0, borderBottomRightRadius: 0 } : {}),
					...(position === 'after' ? { borderTopLeftRadius: 0, borderBottomLeftRadius: 0 } : {}),
				},
			}}
			{...props}
		>
			{children}
		</div>
	);
};

const TextAddOn = ({ position, children, ...props }: AddOnProps) => {
	const { COLORS } = useBrand();
	const { id, size } = useInputFieldContext();
	const sizeMap = {
		small: {
			padding: '0.1875rem 0.5625rem 0.25rem',
			fontSize: '0.875rem',
			height: '1.875rem',
		},
		medium: {
			padding: '0.3125rem 0.75rem',
			fontSize: '1rem',
			height: '2.25rem',
		},
		large: {
			padding: '0.5rem 0.9375rem',
			fontSize: '1rem',
			height: '2.625rem',
		},
		xlarge: {
			padding: '0.5625rem 1.125rem 0.625rem',
			fontSize: '1.125rem',
			height: '3rem',
		},
	};
	return (
		<div
			id={`${id}-text-${position}`}
			css={{
				boxSizing: 'border-box',
				position: 'relative',
				...sizeMap[size],
				lineHeight: 1.5,
				backgroundColor: COLORS.light,
				border: `1px solid ${COLORS.borderDark}`,
				borderRadius:
					position === 'before' ? '0.1875rem 0rem 0rem 0.1875rem' : '0rem 0.1875rem 0.1875rem 0rem',
				whiteSpace: 'nowrap',
			}}
			{...props}
		>
			{children}
		</div>
	);
};

const IconAddOn = ({ position, children, ...props }: AddOnProps) => {
	const { size } = useInputFieldContext();
	const paddingMap = {
		small: '0.5625rem',
		medium: '0.75rem',
		large: '0.9375rem',
		xlarge: '1.125rem',
	};

	return (
		<div
			css={{
				height: '100%',
				display: 'flex',
				alignItems: 'center',
				...(position === 'before' && { paddingLeft: paddingMap[size] }),
				...(position === 'after' && { paddingRight: paddingMap[size] }),
			}}
			{...props}
		>
			{children}
		</div>
	);
};

export const InputAddOn = ({
	position,
	icon: Icon,
	iconProps = {},
	inset = false,
	children,
	...props
}: InputAddOnProps) => {
	const isInset = Icon ? true : inset;

	let Wrapper = DefaultAddOn;

	if (Icon) {
		Wrapper = IconAddOn;
	} else if (typeof children === 'string') {
		Wrapper = TextAddOn;
	}

	return (
		<Wrapper
			position={position}
			css={{
				...(isInset && { position: 'absolute', [position === 'before' ? 'left' : 'right']: 0 }),
			}}
			{...props}
		>
			{Icon ? <Icon size="small" aria-hidden={true} {...iconProps} /> : children}
		</Wrapper>
	);
};

InputAddOn.displayName = 'InputAddOn';

DefaultAddOn.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn prop-types"  |
	// ----------------------------------------------------------------------
	/**
	 * Children
	 */
	children: PropTypes.node,
	/**
	 * Position of add on i.e. before or after input
	 */
	position: PropTypes.oneOf(['after', 'before']).isRequired,
};

TextAddOn.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn prop-types"  |
	// ----------------------------------------------------------------------
	/**
	 * Children
	 */
	children: PropTypes.node,
	/**
	 * Position of add on i.e. before or after input
	 */
	position: PropTypes.oneOf(['after', 'before']).isRequired,
};

IconAddOn.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn prop-types"  |
	// ----------------------------------------------------------------------
	/**
	 * Children
	 */
	children: PropTypes.node,
	/**
	 * Position of add on i.e. before or after input
	 */
	position: PropTypes.oneOf(['after', 'before']).isRequired,
};

InputAddOn.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn prop-types"  |
	// ----------------------------------------------------------------------
	/**
	 * Children
	 */
	children: PropTypes.node,
	/**
	 * Icon to display
	 */
	icon: PropTypes.func,
	/**
	 * Icon component props
	 */
	iconProps: PropTypes.shape({
		/**
		 * String to use as the `aria-label` for the icon. Set to an empty string if you
		 * are rendering the icon with visible text to prevent accessibility label
		 * duplication.
		 *
		 * Defaults to the icon name e.g. `BusinessPersonIcon` --> "Business Person"
		 */
		assistiveText: PropTypes.string,
		/**
		 * children prop
		 */
		children: PropTypes.node,
		/**
		 * The color for the icon.
		 *
		 * Defaults to the current text color.
		 */
		color: PropTypes.string,
		/**
		 * The icon SVG metadata copyright year text
		 */
		copyrightYear: PropTypes.string,
		/**
		 * The look of the icon.
		 *
		 * Defaults to the filled version.
		 */
		look: PropTypes.string,
		/**
		 * The override API
		 */
		overrides: PropTypes.shape({
			Icon: PropTypes.shape({
				attributes: PropTypes.func,
				component: PropTypes.elementType,
				styles: PropTypes.func,
			}),
			Svg: PropTypes.shape({
				attributes: PropTypes.func,
				component: PropTypes.elementType,
				styles: PropTypes.func,
			}),
		}),
		/**
		 * Control the size of the icon.
		 *
		 * Defaults to "medium" --> 24px
		 */
		size: PropTypes.oneOfType([
			PropTypes.oneOf(['large', 'medium', 'small', 'xlarge', 'xsmall']),
			PropTypes.arrayOf(PropTypes.oneOf(['large', 'medium', 'small', 'xlarge', 'xsmall'])),
		]),
	}),
	/**
	 * Render compononent within input borders
	 */
	inset: PropTypes.bool,
	/**
	 * Position of add on i.e. before or after input
	 */
	position: PropTypes.oneOf(['after', 'before']).isRequired,
};
