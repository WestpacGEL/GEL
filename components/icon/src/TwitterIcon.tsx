import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const TwitterIcon = ({
	assistiveText = 'Twitter',
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
				d="M2 0C0.895431 0 0 0.89543 0 2V22C0 23.1046 0.89543 24 2 24H22C23.1046 24 24 23.1046 24 22V2C24 0.895431 23.1046 0 22 0H2ZM18.1146 7.34209C18.7788 7.26155 19.4119 7.08237 20 6.81641C19.5605 7.48568 19.003 8.07379 18.3618 8.54452C18.368 8.68749 18.3712 8.83233 18.3712 8.97655C18.3712 13.3898 15.0691 18.4799 9.032 18.4799C7.1784 18.4799 5.45216 17.9261 4 16.9784C4.25597 17.0096 4.51506 17.0259 4.7804 17.0259C6.31809 17.0259 7.72905 16.4921 8.85219 15.5962C7.41626 15.5693 6.19572 14.6035 5.77743 13.2768C5.97846 13.3156 6.167 13.3362 6.37802 13.3362C6.6777 13.3362 6.93429 13.2956 7.20899 13.2194C5.70813 12.9122 4.50944 11.5625 4.50944 9.94487V9.90241C5.13376 10.1534 5.52583 10.3032 6.06337 10.3207C5.18308 9.72198 4.67052 8.69935 4.67052 7.54062C4.67052 6.92879 4.83221 6.35504 5.11503 5.86183C6.73451 7.88212 9.15249 9.21192 11.8801 9.35114C11.8239 9.10641 11.7952 8.85169 11.7952 8.58947C11.7952 6.74586 13.2655 5.25 15.0773 5.25C16.0219 5.25 16.8747 5.65581 17.4734 6.30447C18.2213 6.15401 18.9237 5.87681 19.558 5.49473C19.312 6.27388 18.7919 6.92879 18.1146 7.34209Z"
				fill="currentColor"
			/>
		) : (
			<Fragment>
				<path
					d="M18.1146 7.34209C18.7788 7.26155 19.4119 7.08237 20 6.81641C19.5605 7.48568 19.003 8.07379 18.3618 8.54452C18.368 8.68749 18.3712 8.83233 18.3712 8.97655C18.3712 13.3898 15.0691 18.4799 9.032 18.4799C7.1784 18.4799 5.45216 17.9261 4 16.9784C4.25597 17.0096 4.51506 17.0259 4.7804 17.0259C6.31809 17.0259 7.72905 16.4921 8.85219 15.5962C7.41626 15.5693 6.19572 14.6035 5.77743 13.2768C5.97846 13.3156 6.167 13.3362 6.37802 13.3362C6.6777 13.3362 6.93429 13.2956 7.20899 13.2194C5.70813 12.9122 4.50944 11.5625 4.50944 9.94487V9.90241C5.13376 10.1534 5.52583 10.3032 6.06337 10.3207C5.18308 9.72198 4.67052 8.69935 4.67052 7.54062C4.67052 6.92879 4.83221 6.35504 5.11503 5.86183C6.73451 7.88212 9.15249 9.21192 11.8801 9.35114C11.8239 9.10641 11.7952 8.85169 11.7952 8.58947C11.7952 6.74586 13.2655 5.25 15.0773 5.25C16.0219 5.25 16.8747 5.65581 17.4734 6.30447C18.2213 6.15401 18.9237 5.87681 19.558 5.49473C19.312 6.27388 18.7919 6.92879 18.1146 7.34209Z"
					fill="currentColor"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M0 2C0 0.89543 0.895431 0 2 0H22C23.1046 0 24 0.895431 24 2V22C24 23.1046 23.1046 24 22 24H2C0.89543 24 0 23.1046 0 22V2ZM2 2H22V22H2V2Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);

TwitterIcon.propTypes = {
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
