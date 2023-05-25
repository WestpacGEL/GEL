import PropTypes from 'prop-types';
import { Icon, IconProps } from './Icon';

export const UmbrellaIcon = ({
	assistiveText = 'Umbrella',
	copyrightYear = '2020',
	size = 'medium',
	...props
}: Omit<IconProps, 'icon'>) => (
	<Icon
		icon="UmbrellaIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		{...props}
	>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M9,22 C7.8954305,22 7,21.1045695 7,20 L5,20 C5,22.209139 6.790861,24 9,24 C11.209139,24 13,22.209139 13,20 L13,12 L23.9178524,12 C23.4380073,6.18357693 18.8100281,1.54335515 12.9990298,1.04444955 C13,0.44771525 12.5522847,0 12,0 C11.4477153,0 11,0.44771525 11,1 C5.15134535,1.49983643 0.482096586,6.15628579 0,12 L11,12 L11,20 C11,21.1045695 10.1045695,22 9,22 Z"
		/>
	</Icon>
);

UmbrellaIcon.propTypes = {
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
