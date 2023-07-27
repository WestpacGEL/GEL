import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const ScanDocumentIcon = ({
	assistiveText = 'Scan Document',
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
			<Fragment>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M4 0C2.89543 0 2 0.89543 2 2V12H22V6L16 0H4ZM20 6L16 2V6H20Z"
					fill="currentColor"
				/>
				<path
					d="M2 22V18H22V22C22 23.1046 21.1046 24 20 24H4C2.89543 24 2 23.1046 2 22Z"
					fill="currentColor"
				/>
				<path d="M24 16H0V14H24V16Z" fill="currentColor" />
			</Fragment>
		) : (
			<Fragment>
				<path d="M2 2C2 0.89543 2.89543 0 4 0H16L22 6V12H20V6H16V2H4V12H2V2Z" fill="currentColor" />
				<path d="M24 14V16H0V14H24Z" fill="currentColor" />
				<path
					d="M2 22V18H4V22H20V18H22V22C22 23.1046 21.1046 24 20 24H4C2.89543 24 2 23.1046 2 22Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);

ScanDocumentIcon.propTypes = {
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
