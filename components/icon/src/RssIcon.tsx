import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const RssIcon = ({
	assistiveText = 'Rss',
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
				d="M0 2C0 0.89543 0.895431 0 2 0H22C23.1046 0 24 0.895431 24 2V22C24 23.1046 23.1046 24 22 24H2C0.89543 24 0 23.1046 0 22V2ZM20.0008 20C20.0008 11.1801 12.6224 4 4 4V7.068C11.0547 7.068 16.921 12.8701 16.921 20H20.0008ZM14.5632 19.9995H11.4827C11.4827 17.9952 10.7027 16.1093 9.29022 14.6975C7.87615 13.2827 6.35156 12.5028 4 12.5028V9.43555C9.48697 9.43555 14.5632 14.1739 14.5632 19.9995ZM6.12973 15.7334C7.30943 15.7334 8.26259 16.6913 8.26259 17.86C8.26259 19.0342 7.30943 19.9819 6.12973 19.9819C4.95473 19.9819 4 19.0342 4 17.86C4 16.6913 4.95473 15.7334 6.12973 15.7334Z"
				fill="currentColor"
			/>
		) : (
			<Fragment>
				<path
					d="M20.0008 20C20.0008 11.1801 12.6224 4 4 4V7.068C11.0547 7.068 16.921 12.8701 16.921 20H20.0008Z"
					fill="currentColor"
				/>
				<path
					d="M14.5632 19.9995H11.4827C11.4827 17.9952 10.7027 16.1093 9.29022 14.6975C7.87615 13.2827 6.35156 12.5028 4 12.5028V9.43555C9.48697 9.43555 14.5632 14.1739 14.5632 19.9995Z"
					fill="currentColor"
				/>
				<path
					d="M6.12973 15.7334C7.30943 15.7334 8.26259 16.6913 8.26259 17.86C8.26259 19.0342 7.30943 19.9819 6.12973 19.9819C4.95473 19.9819 4 19.0342 4 17.86C4 16.6913 4.95473 15.7334 6.12973 15.7334Z"
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

RssIcon.propTypes = {
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
