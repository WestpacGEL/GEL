import PropTypes from 'prop-types';
import { Icon, IconProps } from './Icon';

export const InvestIcon = ({
	assistiveText = 'Invest',
	copyrightYear = '2020',
	size = 'medium',
	...props
}: Omit<IconProps, 'icon'>) => (
	<Icon
		icon="InvestIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		{...props}
	>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M18,24 L22,24 L22,10 L18,10 L18,24 Z M10,24 L14,24 L14,16 L10,16 L10,24 Z M2,24 L6,24 L6,14 L2,14 L2,24 Z M21.7309981,3.73099809 L12.2500311,13.4994066 L5.63133825,6.8807138 L0,12.512052 L8.8817842e-16,9.68362492 L5.63133825,4.05228667 L12.2287557,10.6497041 L20.3166269,2.31662686 L18,3.99680289e-15 L24,0 L24,6 L21.7309981,3.73099809 L21.7309981,3.73099809 Z"
		/>
	</Icon>
);

InvestIcon.propTypes = {
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
