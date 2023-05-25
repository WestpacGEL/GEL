import PropTypes from 'prop-types';
import { Icon, IconProps } from './Icon';

export const SuperIcon = ({
	assistiveText = 'Super',
	copyrightYear = '2020',
	size = 'medium',
	...props
}: Omit<IconProps, 'icon'>) => (
	<Icon
		icon="SuperIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		{...props}
	>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M3.53466187,12.00015 L2.57142857,12.00015 C1.38987861,12.00015 1,12.75 1,13.5 C1,19.293 5.93758571,24 12.0056571,24 C18.0745143,24 23,19.2615064 23,13.5 C23,12.75 22.6083687,12.00015 21.4285714,12.00015 L20.4653381,12.00015 C20.4882799,11.6707392 20.5,11.3371409 20.5,11 C20.5,4.92486775 16.0009665,1.8189894e-12 12,0 C7.99903353,-1.81943589e-12 3.5,4.92486775 3.5,11 C3.5,11.3371409 3.51172012,11.6707392 3.53466187,12.00015 L3.53466187,12.00015 Z M5.53995504,12 C5.51357894,11.6722891 5.5,11.3386771 5.5,11 C5.5,6.24348282 8.96383884,2 12,2 C15.0361612,2 18.5,6.24348282 18.5,11 C18.5,11.3386771 18.4864211,11.6722891 18.460045,12 L5.53995504,12 L5.53995504,12 Z"
		/>
	</Icon>
);

SuperIcon.propTypes = {
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
	 * The icon SVG metadata copyright year text
	 */
	copyrightYear: PropTypes.string,
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
