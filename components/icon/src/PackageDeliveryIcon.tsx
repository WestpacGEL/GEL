import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const PackageDeliveryIcon = ({
	assistiveText = 'Package Delivery',
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
					d="M0.053006 0.679823C0.229985 0.156663 0.79756 -0.123973 1.32072 0.053006L3.72221 0.865403C4.67238 1.18683 5.39903 1.96186 5.65864 2.93074L9.2639 16.3857L7.33205 16.9034L3.72679 3.44838C3.64026 3.12542 3.39804 2.86708 3.08132 2.75993L0.679823 1.94754C0.156663 1.77056 -0.123973 1.20298 0.053006 0.679823Z"
					fill="currentColor"
				/>
				<path
					d="M22.149 18.1095C22.6824 17.9665 22.999 17.4182 22.8561 16.8847C22.7131 16.3512 22.1648 16.0347 21.6313 16.1776C21.6262 16.179 21.6212 16.1804 21.6161 16.1818L12.938 18.5071L13.4557 20.4389L22.149 18.1095Z"
					fill="currentColor"
				/>
				<path
					d="M12.2309 19.7318C12.6598 21.3322 11.71 22.9773 10.1096 23.4061C8.50921 23.8349 6.8642 22.8852 6.43537 21.2848C6.00655 19.6844 6.95629 18.0393 8.55669 17.6105C10.1571 17.1817 11.8021 18.1314 12.2309 19.7318Z"
					fill="currentColor"
				/>
				<path
					d="M8.34861 5.24284C8.06273 4.1759 8.69589 3.07923 9.76282 2.79335L17.4902 0.722795C18.5572 0.436912 19.6538 1.07008 19.9397 2.13701L22.5279 11.7963C22.8138 12.8632 22.1806 13.9599 21.1137 14.2458L13.3863 16.3163C12.3194 16.6022 11.2227 15.969 10.9368 14.9021L8.34861 5.24284Z"
					fill="currentColor"
				/>
			</Fragment>
		) : (
			<Fragment>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M0.053006 0.679823C0.229985 0.156663 0.79756 -0.123973 1.32072 0.053006L3.72221 0.865403C4.67238 1.18683 5.39903 1.96186 5.65864 2.93074L9.2639 16.3857L7.33205 16.9034L3.72679 3.44838C3.64026 3.12542 3.39804 2.86708 3.08132 2.75993L0.679823 1.94754C0.156663 1.77056 -0.123973 1.20298 0.053006 0.679823Z"
					fill="currentColor"
				/>
				<path
					d="M22.149 18.1095C22.6824 17.9665 22.999 17.4182 22.8561 16.8847C22.7131 16.3512 22.1648 16.0347 21.6313 16.1776C21.6262 16.179 21.6212 16.1804 21.6161 16.1818L12.938 18.5071L13.4557 20.4389L22.149 18.1095Z"
					fill="currentColor"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M9.59197 21.4742C10.1254 21.3313 10.442 20.7829 10.2991 20.2495C10.1561 19.716 9.6078 19.3994 9.07433 19.5424C8.54087 19.6853 8.22428 20.2337 8.36722 20.7671C8.51017 21.3006 9.0585 21.6172 9.59197 21.4742ZM10.1096 23.4061C11.71 22.9773 12.6598 21.3322 12.2309 19.7318C11.8021 18.1314 10.1571 17.1817 8.55669 17.6105C6.95629 18.0393 6.00655 19.6844 6.43537 21.2848C6.8642 22.8852 8.50921 23.8349 10.1096 23.4061Z"
					fill="currentColor"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M18.0079 2.65465L10.2805 4.7252L12.8687 14.3845L20.5961 12.3139L18.0079 2.65465ZM9.76282 2.79335C8.69589 3.07923 8.06273 4.1759 8.34861 5.24284L10.9368 14.9021C11.2227 15.969 12.3194 16.6022 13.3863 16.3163L21.1137 14.2458C22.1806 13.9599 22.8138 12.8632 22.5279 11.7963L19.9397 2.13701C19.6538 1.07008 18.5572 0.436912 17.4902 0.722795L9.76282 2.79335Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);

PackageDeliveryIcon.propTypes = {
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
