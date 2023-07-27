import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const ImageSquareIcon = ({
	assistiveText = 'Image Square',
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
				d="M24 21.6V2.4C24 1.07452 23.1046 0 22 0H2C0.89543 0 0 1.07452 0 2.4V21.6C0 22.9255 0.89543 24 2 24H22C23.1046 24 24 22.9255 24 21.6ZM18 7.5C18 8.88071 16.8807 10 15.5 10C14.1193 10 13 8.88071 13 7.5C13 6.11929 14.1193 5 15.5 5C16.8807 5 18 6.11929 18 7.5ZM13.9767 18.3256L9.5 11L4 20H20L16.5 14L13.9767 18.3256Z"
				fill="currentColor"
			/>
		) : (
			<Fragment>
				<path d="M13.9767 18.3256L9.5 11L4 20H20L16.5 14L13.9767 18.3256Z" fill="currentColor" />
				<path
					d="M15.5 10C16.8807 10 18 8.88071 18 7.5C18 6.11929 16.8807 5 15.5 5C14.1193 5 13 6.11929 13 7.5C13 8.88071 14.1193 10 15.5 10Z"
					fill="currentColor"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M24 2.4V21.6C24 22.9255 23.1046 24 22 24H2C0.89543 24 0 22.9255 0 21.6V2.4C0 1.07452 0.89543 0 2 0H22C23.1046 0 24 1.07452 24 2.4ZM22 2H2V22H22V2Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);

ImageSquareIcon.propTypes = {
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
