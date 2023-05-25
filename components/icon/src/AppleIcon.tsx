import PropTypes from 'prop-types';
import { Icon, IconProps } from './Icon';

export const AppleIcon = ({
	assistiveText = 'Apple',
	copyrightYear = '2020',
	size = 'medium',
	...props
}: Omit<IconProps, 'icon'>) => (
	<Icon
		icon="AppleIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		{...props}
	>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M15.6117278,3.83174638 C16.4690749,2.81624734 17.0478034,1.40624867 16.8896892,0 C15.6547103,0.0494999532 14.1572311,0.80399924 13.2722524,1.81649828 C12.4770764,2.71649743 11.7816811,4.15124607 11.9681944,5.53049477 C13.3467042,5.63624467 14.7536131,4.84649542 15.6117278,3.83174638 M18.7041643,12.7522379 C18.6734625,9.71174082 21.2408986,8.2544922 21.3552627,8.18249226 C19.9122792,6.11924421 17.6649091,5.83724448 16.8643603,5.80424451 C14.9516396,5.61524469 13.1325593,6.90449347 12.1616156,6.90449347 C11.1929746,6.90449347 9.69549539,5.83124449 8.10898107,5.86049446 C6.02433043,5.88974443 4.10163165,7.04399334 3.02783701,8.86949161 C0.862594198,12.5414881 2.47366994,17.981983 4.58518464,20.9617302 C5.61676434,22.4189788 6.84713805,24.0569773 8.46205151,23.9984773 C10.0170965,23.9377274 10.6058031,23.0152282 12.4855194,23.0152282 C14.3660032,23.0152282 14.8933062,23.9984773 16.5404565,23.9684773 C18.2137034,23.9377274 19.2736822,22.4819787 20.2991216,21.0202301 C21.4834426,19.3282317 21.9716009,17.6909833 22,17.6069834 C21.9631579,17.5904834 18.7364011,16.3814845 18.7041643,12.7522379"
		/>
	</Icon>
);

AppleIcon.propTypes = {
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