import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const InvoiceIcon = ({
	assistiveText = 'Invoice',
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
				d="M2 2C2 0.89543 2.89543 0 4 0H16L22 6V22C22 23.1046 21.1046 24 20 24H4C2.89543 24 2 23.1046 2 22V2ZM16 2L20 6H16V2ZM6 15.3657H8.19127C8.29669 16.2723 9.23042 16.8666 10.4352 16.8666C11.6476 16.8666 12.4759 16.2799 12.4759 15.4723C12.4759 14.7562 11.9563 14.36 10.6461 14.0628L9.23042 13.7505C7.22741 13.3162 6.24096 12.2876 6.24096 10.68C6.24096 8.91366 7.55666 7.66818 9.5 7.37744V6H11.25V7.36611C13.2799 7.63171 14.521 8.86437 14.5542 10.6191H12.4232C12.3479 9.68959 11.5422 9.1258 10.4051 9.1258C9.28313 9.1258 8.53012 9.66674 8.53012 10.482C8.53012 11.16 9.05723 11.541 10.3072 11.8305L11.625 12.1124C13.8012 12.5848 14.75 13.5295 14.75 15.2057C14.75 17.0892 13.4175 18.361 11.25 18.6329V20H9.5V18.6404C7.37772 18.3944 6.06015 17.1981 6 15.3657ZM18 18.5C18 19.3284 17.3284 20 16.5 20C15.6716 20 15 19.3284 15 18.5C15 17.6716 15.6716 17 16.5 17C17.3284 17 18 17.6716 18 18.5Z"
				fill="currentColor"
			/>
		) : (
			<Fragment>
				<path
					d="M6 15.3657H8.19127C8.29669 16.2723 9.23042 16.8666 10.4352 16.8666C11.6476 16.8666 12.4759 16.2799 12.4759 15.4723C12.4759 14.7562 11.9563 14.36 10.6461 14.0628L9.23042 13.7505C7.22741 13.3162 6.24096 12.2876 6.24096 10.68C6.24096 8.91366 7.55666 7.66818 9.5 7.37744V6H11.25V7.36611C13.2799 7.63171 14.521 8.86437 14.5542 10.6191H12.4232C12.3479 9.68959 11.5422 9.1258 10.4051 9.1258C9.28313 9.1258 8.53012 9.66674 8.53012 10.482C8.53012 11.16 9.05723 11.541 10.3072 11.8305L11.625 12.1124C13.8012 12.5848 14.75 13.5295 14.75 15.2057C14.75 17.0892 13.4175 18.361 11.25 18.633V20H9.5V18.6404C7.37772 18.3944 6.06015 17.1981 6 15.3657Z"
					fill="currentColor"
				/>
				<path
					d="M16.5 20C17.3284 20 18 19.3284 18 18.5C18 17.6716 17.3284 17 16.5 17C15.6716 17 15 17.6716 15 18.5C15 19.3284 15.6716 20 16.5 20Z"
					fill="currentColor"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M2 2C2 0.89543 2.89543 0 4 0H16L22 6V22C22 23.1046 21.1046 24 20 24H4C2.89543 24 2 23.1046 2 22V2ZM4 2H16V6H20V22H4V2Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);

InvoiceIcon.propTypes = {
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
