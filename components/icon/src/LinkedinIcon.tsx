import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const LinkedinIcon = ({
	assistiveText = 'Linkedin',
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
				d="M2 0C0.895431 0 0 0.89543 0 2V22C0 23.1046 0.89543 24 2 24H22C23.1046 24 24 23.1046 24 22V2C24 0.895431 23.1046 0 22 0H2ZM6.75 4.5C7.57875 4.5 8.25 5.17125 8.25 6C8.25 6.82875 7.57875 7.5 6.75 7.5C5.92125 7.5 5.25 6.82875 5.25 6C5.25 5.17125 5.92125 4.5 6.75 4.5ZM15.75 9C17.6138 9 18.75 10.6785 18.75 12.75V19.5H15.75V13.5C15.75 12.6713 15.0787 12 14.25 12C13.4213 12 12.75 12.6713 12.75 13.5V19.5H9.75V9H12.75V10.8615C12.8102 10.7934 12.8703 10.7243 12.9309 10.6547C13.6251 9.8566 14.3703 9 15.75 9ZM5.25 19.5H8.25V9H5.25V19.5Z"
				fill="currentColor"
			/>
		) : (
			<Fragment>
				<path
					d="M6.75 4.5C7.57875 4.5 8.25 5.17125 8.25 6C8.25 6.82875 7.57875 7.5 6.75 7.5C5.92125 7.5 5.25 6.82875 5.25 6C5.25 5.17125 5.92125 4.5 6.75 4.5Z"
					fill="currentColor"
				/>
				<path
					d="M15.75 9C17.6138 9 18.75 10.6785 18.75 12.75V19.5H15.75V13.5C15.75 12.6713 15.0787 12 14.25 12C13.4213 12 12.75 12.6713 12.75 13.5V19.5H9.75V9H12.75V10.8615C12.8102 10.7934 12.8703 10.7243 12.9309 10.6547C13.6251 9.8566 14.3703 9 15.75 9Z"
					fill="currentColor"
				/>
				<path d="M5.25 19.5H8.25V9H5.25V19.5Z" fill="currentColor" />
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

LinkedinIcon.propTypes = {
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
