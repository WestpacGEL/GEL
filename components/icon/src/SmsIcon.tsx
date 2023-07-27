import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const SmsIcon = ({
	assistiveText = 'Sms',
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
				d="M2 0C0.89543 0 0 0.89543 0 2V24L6 18H22C23.1046 18 24 17.1046 24 16V2C24 0.89543 23.1046 0 22 0H2ZM6 11C7.10457 11 8 10.1046 8 9C8 7.89543 7.10457 7 6 7C4.89543 7 4 7.89543 4 9C4 10.1046 4.89543 11 6 11ZM14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9ZM18 11C19.1046 11 20 10.1046 20 9C20 7.89543 19.1046 7 18 7C16.8954 7 16 7.89543 16 9C16 10.1046 16.8954 11 18 11Z"
				fill="currentColor"
			/>
		) : (
			<Fragment>
				<path
					d="M6 11C7.10457 11 8 10.1046 8 9C8 7.89543 7.10457 7 6 7C4.89543 7 4 7.89543 4 9C4 10.1046 4.89543 11 6 11Z"
					fill="currentColor"
				/>
				<path
					d="M12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11Z"
					fill="currentColor"
				/>
				<path
					d="M20 9C20 10.1046 19.1046 11 18 11C16.8954 11 16 10.1046 16 9C16 7.89543 16.8954 7 18 7C19.1046 7 20 7.89543 20 9Z"
					fill="currentColor"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M0 2V24L6 18H22C23.1046 18 24 17.1046 24 16V2C24 0.89543 23.1046 0 22 0H2C0.89543 0 0 0.89543 0 2ZM22 16H5.17157L2 19.1716V2H22V16Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);

SmsIcon.propTypes = {
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
