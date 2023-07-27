import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const CalculateIcon = ({
	assistiveText = 'Calculate',
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
				d="M2 0C0.895431 0 0 0.89543 0 2V22C0 23.1046 0.89543 24 2 24H22C23.1046 24 24 23.1046 24 22V2C24 0.895431 23.1046 0 22 0H2ZM18.7175 10.1315L16.9497 8.36377L15.182 10.1315L13.7677 8.71733L15.5355 6.94956L13.7677 5.18179L15.182 3.76758L16.9497 5.53535L18.7175 3.76758L20.1317 5.18179L18.3639 6.94956L20.1317 8.71733L18.7175 10.1315ZM10.6667 5.99935H4V7.99935H10.6667V5.99935ZM13.3334 13.333H20V15.333H13.3334V13.333ZM13.3334 16.6663H20V18.6663H13.3334V16.6663ZM6.33333 16.6663V18.9997H8.33333V16.6663H10.6667V14.6663H8.33333V12.333H6.33333V14.6663H4V16.6663H6.33333Z"
				fill="currentColor"
			/>
		) : (
			<Fragment>
				<path
					d="M16.9497 8.3641L18.7175 10.1319L20.1317 8.71765L18.3639 6.94988L20.1317 5.18212L18.7175 3.7679L16.9497 5.53567L15.182 3.7679L13.7677 5.18212L15.5355 6.94988L13.7677 8.71765L15.182 10.1319L16.9497 8.3641Z"
					fill="currentColor"
				/>
				<path d="M4 5.99967H10.6667V7.99967H4V5.99967Z" fill="currentColor" />
				<path d="M20 13.3333H13.3334V15.3333H20V13.3333Z" fill="currentColor" />
				<path d="M20 16.6667H13.3334V18.6667H20V16.6667Z" fill="currentColor" />
				<path
					d="M6.33333 19V16.6667H4V14.6667H6.33333V12.3333H8.33333V14.6667H10.6667V16.6667H8.33333V19H6.33333Z"
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

CalculateIcon.propTypes = {
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
