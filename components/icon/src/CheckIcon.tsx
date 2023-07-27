import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const CheckIcon = ({
	assistiveText = 'Check',
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
				d="M2 4C0.895431 4 0 4.89543 0 6V18C0 19.1046 0.89543 20 2 20H22C23.1046 20 24 19.1046 24 18V6C24 4.89543 23.1046 4 22 4H2ZM3.5 13.6898H5.06519C5.14049 14.3374 5.80744 14.7618 6.66803 14.7618C7.53399 14.7618 8.12564 14.3428 8.12564 13.7659C8.12564 13.2544 7.75452 12.9714 6.81863 12.7592L5.80744 12.536C4.37672 12.2258 3.67212 11.4912 3.67212 10.3429C3.67212 9.08119 4.6119 8.19156 6 7.98389V7H7.25V7.97579C8.69992 8.16551 9.58642 9.04598 9.61016 10.2994H8.08799C8.03421 9.63542 7.45869 9.23271 6.64651 9.23271C5.84509 9.23271 5.30723 9.6191 5.30723 10.2014C5.30723 10.6857 5.68373 10.9578 6.57659 11.1646L7.51786 11.366C9.07229 11.7034 9.75 12.3782 9.75 13.5755C9.75 14.9209 8.7982 15.8293 7.25 16.0235V17H6V16.0289C4.48408 15.8532 3.54296 14.9987 3.5 13.6898ZM18 10H12V12H18V10ZM20 14H12V16H20V14Z"
				fill="currentColor"
			/>
		) : (
			<Fragment>
				<path d="M20 14H12V16H20V14Z" fill="currentColor" />
				<path d="M12 10H18V12H12V10Z" fill="currentColor" />
				<path
					d="M5.06519 13.6898H3.5C3.54296 14.9987 4.48408 15.8532 6 16.0289V17H7.25V16.0235C8.7982 15.8293 9.75 14.9209 9.75 13.5755C9.75 12.3782 9.07229 11.7034 7.51786 11.366L6.57659 11.1646C5.68373 10.9578 5.30723 10.6857 5.30723 10.2014C5.30723 9.6191 5.84509 9.23271 6.64651 9.23271C7.45869 9.23271 8.03421 9.63542 8.08799 10.2994H9.61016C9.58642 9.04598 8.69992 8.16551 7.25 7.97579V7H6V7.98389C4.6119 8.19156 3.67212 9.08119 3.67212 10.3429C3.67212 11.4912 4.37672 12.2258 5.80744 12.536L6.81863 12.7592C7.75452 12.9714 8.12565 13.2544 8.12565 13.7659C8.12565 14.3428 7.53399 14.7618 6.66803 14.7618C5.80744 14.7618 5.14049 14.3374 5.06519 13.6898Z"
					fill="currentColor"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M0 6C0 4.89543 0.895431 4 2 4H22C23.1046 4 24 4.89543 24 6V18C24 19.1046 23.1046 20 22 20H2C0.89543 20 0 19.1046 0 18V6ZM2 6H22V18H2L2 6Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);

CheckIcon.propTypes = {
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
