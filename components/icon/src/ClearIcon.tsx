import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const ClearIcon = ({
	assistiveText = 'Clear',
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
				d="M12 24C18.6278 24 24 18.627 24 12C24 5.373 18.6278 0 12 0C5.37225 0 0 5.373 0 12C0 18.627 5.37225 24 12 24ZM8.46447 7.05018L12 10.5857L15.5355 7.05018L16.9497 8.4644L13.4142 11.9999L16.9497 15.5355L15.5355 16.9497L12 13.4141L8.46447 16.9497L7.05025 15.5355L10.5858 11.9999L7.05025 8.4644L8.46447 7.05018Z"
				fill="currentColor"
			/>
		) : (
			<Fragment>
				<path
					d="M8.46447 7.05018L12 10.5857L15.5355 7.05018L16.9497 8.4644L13.4142 11.9999L16.9497 15.5355L15.5355 16.9497L12 13.4141L8.46447 16.9497L7.05025 15.5355L10.5858 11.9999L7.05025 8.4644L8.46447 7.05018Z"
					fill="currentColor"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M24 12C24 18.627 18.6278 24 12 24C5.37225 24 0 18.627 0 12C0 5.373 5.37225 0 12 0C18.6278 0 24 5.373 24 12ZM22 12C22 17.5225 17.5231 22 12 22C6.4769 22 2 17.5225 2 12C2 6.47749 6.4769 2 12 2C17.5231 2 22 6.47749 22 12Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);

ClearIcon.propTypes = {
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
