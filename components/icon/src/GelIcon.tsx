import PropTypes from 'prop-types';
import { Icon, IconProps } from './Icon';

export const GelIcon = ({
	assistiveText = 'Gel',
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
				d="M11.998 0.033959C17.795 0.033959 22.494 4.73096 22.494 10.525C22.494 19.198 14.411 22.782 11.998 23.989V21.016C6.20101 21.016 1.50201 16.319 1.50201 10.526C1.50201 4.72996 6.20201 0.032959 11.998 0.032959V0.033959ZM7.20901 7.60096C5.32801 7.60096 3.92701 8.88696 3.92701 10.794V10.864C3.92701 12.736 5.08301 14.057 7.20901 14.057C9.23101 14.057 10.272 12.859 10.272 11.267V10.497H7.33201V11.747H8.50501C8.46901 12.247 8.13701 12.692 7.26201 12.692C6.17701 12.692 5.80001 11.905 5.80001 10.89V10.82C5.80001 9.69196 6.33401 9.00996 7.21801 9.00996C7.88301 9.00996 8.26001 9.31596 8.34701 9.90196H10.124C10.001 8.27496 8.68801 7.60196 7.20901 7.60196V7.60096ZM15.121 7.69796H10.798V13.952H15.261V12.57H12.583V11.433H14.605V10.156H12.583V9.07996H15.121V7.69796ZM17.607 7.69796H15.804V13.952H19.97V12.562H17.607V7.69696V7.69796Z"
				fill="currentColor"
			/>
		) : (
			<path
				d="M11.998 0.033959C17.795 0.033959 22.494 4.73096 22.494 10.525C22.494 19.198 14.411 22.782 11.998 23.989V21.016C6.20095 21.016 1.50195 16.319 1.50195 10.526C1.50195 4.72996 6.20195 0.032959 11.998 0.032959V0.033959ZM7.20895 7.60096C5.32795 7.60096 3.92695 8.88696 3.92695 10.794V10.864C3.92695 12.736 5.08295 14.057 7.20895 14.057C9.23095 14.057 10.272 12.859 10.272 11.267V10.497H7.33195V11.747H8.50495C8.46895 12.247 8.13695 12.692 7.26195 12.692C6.17695 12.692 5.79995 11.905 5.79995 10.89V10.82C5.79995 9.69196 6.33395 9.00996 7.21795 9.00996C7.88295 9.00996 8.25995 9.31596 8.34695 9.90196H10.124C10.001 8.27496 8.68795 7.60196 7.20895 7.60196V7.60096ZM15.121 7.69796H10.798V13.952H15.261V12.57H12.583V11.433H14.605V10.156H12.583V9.07996H15.121V7.69796ZM17.607 7.69796H15.804V13.952H19.97V12.562H17.607V7.69696V7.69796Z"
				fill="currentColor"
			/>
		)}
	</Icon>
);

GelIcon.propTypes = {
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
