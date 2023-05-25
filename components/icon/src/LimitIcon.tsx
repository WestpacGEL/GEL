import PropTypes from 'prop-types';
import { Icon, IconProps } from './Icon';

export const LimitIcon = ({
	assistiveText = 'Limit',
	copyrightYear = '2020',
	size = 'medium',
	...props
}: Omit<IconProps, 'icon'>) => (
	<Icon
		icon="LimitIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		{...props}
	>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M20.4663464,17.3242108 C21.437899,15.7825285 22,13.9569085 22,12 C22,6.47714286 17.5228571,2 12,2 C10.0430915,2 8.21747148,2.562101 6.67578925,3.53365362 L20.4663464,17.3242108 L20.4663464,17.3242108 Z M17.7016635,20.2163822 L3.78361783,6.29833646 C2.6591542,7.91570425 2,9.88087368 2,12 C2,17.5228571 6.47714286,22 12,22 C14.1191263,22 16.0842958,21.3408458 17.7016635,20.2163822 L17.7016635,20.2163822 Z M24,12 C24,18.627 18.62775,24 12,24 C5.37225,24 -8.8817842e-16,18.627 -8.8817842e-16,12 C-8.8817842e-16,5.373 5.37225,0 12,0 C18.62775,0 24,5.373 24,12 Z"
		/>
	</Icon>
);

LimitIcon.propTypes = {
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
