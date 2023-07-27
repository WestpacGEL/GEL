import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const BackspaceIcon = ({
	assistiveText = 'Backspace',
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
				d="M7 2H22C23.1 2 24 2.9 24 4V20C24 21.1 23.1 22 22 22H7C6.31 22 5.77 21.64 5.41 21.11L0 12L5.41 2.88C5.77 2.35 6.31 2 7 2ZM17.59 17L19 15.59L15.41 12L19 8.41L17.59 7L14 10.59L10.41 7L9 8.41L12.59 12L9 15.59L10.41 17L14 13.41L17.59 17Z"
				fill="currentColor"
			/>
		) : (
			<Fragment>
				<path
					d="M17.59 17L19 15.59L15.41 12L19 8.41L17.59 7L14 10.59L10.41 7L9 8.41L12.59 12L9 15.59L10.41 17L14 13.41L17.59 17Z"
					fill="currentColor"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M0 12L5.41 21.11C5.77 21.64 6.31 22 7 22H22C23.1 22 24 21.1 24 20V4C24 2.9 23.1 2 22 2H7C6.31 2 5.77 2.35 5.41 2.88L0 12ZM2.32575 11.9994L7.07103 4H22V20H7.0769L2.32575 11.9994ZM6.99981 4C6.99983 4 6.9997 4 6.99981 4Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);

BackspaceIcon.propTypes = {
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
