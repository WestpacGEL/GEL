import PropTypes from 'prop-types';
import { Icon, IconProps } from './Icon';

export const FaceHappyIcon = ({
	assistiveText = 'FaceHappy',
	copyrightYear = '2023',
	size = 'medium',
	look = 'filled',
	color,
	overrides,
	...props
}: Omit<IconProps, 'icon'>) => (
	<Icon
		icon="TestIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		look={look}
		color={color}
		overrides={overrides}
		{...props}
	>
		{look === 'filled' ? (
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M12 24C18.6278 24 24 18.627 24 12C24 5.373 18.6278 0 12 0C5.37225 0 0 5.373 0 12C0 18.627 5.37225 24 12 24ZM11.8966 19.9574C8.95895 19.9574 6.39114 18.374 5 16.0142L6.72414 15C7.7675 16.7699 9.69335 17.9574 11.8966 17.9574C14.0998 17.9574 16.0256 16.7699 17.069 15L18.7931 16.0142C17.402 18.374 14.8342 19.9574 11.8966 19.9574ZM15 8.25C15 9.07875 15.6713 9.75 16.5 9.75C17.3288 9.75 18 9.07875 18 8.25C18 7.42125 17.3288 6.75 16.5 6.75C15.6713 6.75 15 7.42125 15 8.25ZM7.5 6.75C6.67125 6.75 6 7.42125 6 8.25C6 9.07875 6.67125 9.75 7.5 9.75C8.32875 9.75 9 9.07875 9 8.25C9 7.42125 8.32875 6.75 7.5 6.75Z"
				fill="currentColor"
			/>
		) : (
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M24 12C24 18.627 18.6278 24 12 24C5.37225 24 0 18.627 0 12C0 5.373 5.37225 0 12 0C18.6278 0 24 5.373 24 12ZM12 2C6.47714 2 2 6.47714 2 12C2 17.5229 6.47714 22 12 22C17.5229 22 22 17.5229 22 12C22 6.47714 17.5229 2 12 2ZM11.8966 19.9574C8.95895 19.9574 6.39114 18.374 5 16.0142L6.72414 15C7.7675 16.7699 9.69335 17.9574 11.8966 17.9574C14.0998 17.9574 16.0256 16.7699 17.069 15L18.7931 16.0142C17.402 18.374 14.8342 19.9574 11.8966 19.9574ZM15 8.25C15 9.07875 15.6713 9.75 16.5 9.75C17.3288 9.75 18 9.07875 18 8.25C18 7.42125 17.3288 6.75 16.5 6.75C15.6713 6.75 15 7.42125 15 8.25ZM7.5 6.75C6.67125 6.75 6 7.42125 6 8.25C6 9.07875 6.67125 9.75 7.5 9.75C8.32875 9.75 9 9.07875 9 8.25C9 7.42125 8.32875 6.75 7.5 6.75Z"
				fill="currentColor"
			/>
		)}
	</Icon>
);

FaceHappyIcon.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn prop-types"  |
	// ----------------------------------------------------------------------
	/**
	 * String to use as the `aria-label` for the icon. Set to an empty string if you
	 * are rendering the icon with visible text to prevent accessibility label
	 * duplication.
	 *
	 * Defaults to the icon name e.g. `BusinessPersonIcon` --> "Business Person"
	 */
	assistiveText: PropTypes.string,
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
};
