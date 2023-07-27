import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const YoutubeIcon = ({
	assistiveText = 'Youtube',
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
				<path d="M10.5 9.5L14.5 12L10.5 14.5V9.5Z" fill="currentColor" />
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M2 0C0.895431 0 0 0.89543 0 2V22C0 23.1046 0.89543 24 2 24H22C23.1046 24 24 23.1046 24 22V2C24 0.895431 23.1046 0 22 0H2ZM11.9965 7C11.9965 7 8.63804 7 6.39898 7.14383C6.36819 7.14709 6.33383 7.15006 6.29632 7.1533C5.95272 7.18298 5.34458 7.23552 4.79584 7.74606C4.31613 8.17752 4.16001 9.15729 4.16001 9.15729C4.16001 9.15729 4 10.3079 4 11.4584V12.5371C4 13.6876 4.16001 14.8382 4.16001 14.8382C4.16001 14.8382 4.31613 15.818 4.79584 16.2494C5.30048 16.719 5.9363 16.7869 6.34183 16.8302C6.42541 16.8391 6.49921 16.847 6.56007 16.8572C7.8401 16.9662 12 17 12 17C12 17 15.362 16.9955 17.601 16.8517C17.6318 16.8484 17.6662 16.8455 17.7038 16.8422C18.0474 16.8125 18.6557 16.76 19.2042 16.2494C19.6839 15.818 19.8402 14.8382 19.8402 14.8382C19.8402 14.8382 20 13.6876 20 12.5371V11.4584C20 10.3079 19.8402 9.15729 19.8402 9.15729C19.8402 9.15729 19.6839 8.17752 19.2042 7.74606C18.6557 7.23554 18.0473 7.18299 17.7037 7.1533C17.6662 7.15006 17.6318 7.14709 17.601 7.14383C15.362 7 12.0035 7 12.0035 7H11.9965Z"
					fill="currentColor"
				/>
			</Fragment>
		) : (
			<Fragment>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M11.9965 7C11.9965 7 8.63804 7 6.39898 7.14383C6.36819 7.14709 6.33383 7.15006 6.29632 7.1533C5.95272 7.18298 5.34458 7.23552 4.79584 7.74606C4.31613 8.17752 4.16001 9.15729 4.16001 9.15729C4.16001 9.15729 4 10.3079 4 11.4584V12.5371C4 13.6876 4.16001 14.8382 4.16001 14.8382C4.16001 14.8382 4.31613 15.818 4.79584 16.2494C5.30048 16.719 5.9363 16.7869 6.34183 16.8302C6.42541 16.8391 6.49921 16.847 6.56007 16.8572C7.8401 16.9662 12 17 12 17C12 17 15.362 16.9955 17.601 16.8517C17.6318 16.8484 17.6662 16.8455 17.7038 16.8422C18.0474 16.8125 18.6557 16.76 19.2042 16.2494C19.6839 15.818 19.8402 14.8382 19.8402 14.8382C19.8402 14.8382 20 13.6876 20 12.5371V11.4584C20 10.3079 19.8402 9.15729 19.8402 9.15729C19.8402 9.15729 19.6839 8.17752 19.2042 7.74606C18.6557 7.23554 18.0473 7.18299 17.7037 7.1533C17.6662 7.15006 17.6318 7.14709 17.601 7.14383C15.362 7 12.0035 7 12.0035 7H11.9965ZM10.5 9.5L14.5 12L10.5 14.5V9.5Z"
					fill="currentColor"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M0 2C0 0.89543 0.895431 0 2 0H22C23.1046 0 24 0.895431 24 2V22C24 23.1046 23.1046 24 22 24H2C0.89543 24 0 23.1046 0 22V2ZM2 2H22V22H2L2 2Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);

YoutubeIcon.propTypes = {
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
