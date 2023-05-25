import PropTypes from 'prop-types';
import { Icon, IconProps } from './Icon';

export const ShareIcon = ({
	assistiveText = 'Share',
	copyrightYear = '2020',
	size = 'medium',
	...props
}: Omit<IconProps, 'icon'>) => (
	<Icon
		icon="ShareIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		{...props}
	>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M19.0722892,16.9638554 C18.1566265,16.9638554 17.3373494,17.3253012 16.7108434,17.8915663 L8.12048193,12.8915663 C8.18072289,12.6144578 8.22891566,12.3373494 8.22891566,12.0481928 C8.22891566,11.7590361 8.18072289,11.4819277 8.12048193,11.2048193 L16.6144578,6.25301205 C17.2650602,6.85542169 18.1204819,7.22891566 19.0722892,7.22891566 C21.0722892,7.22891566 22.686747,5.61445783 22.686747,3.61445783 C22.686747,1.61445783 21.0722892,0 19.0722892,0 C17.0722892,0 15.4578313,1.61445783 15.4578313,3.61445783 C15.4578313,3.90361446 15.5060241,4.18072289 15.5662651,4.45783133 L7.07228916,9.40963855 C6.42168675,8.80722892 5.56626506,8.43373494 4.61445783,8.43373494 C2.61445783,8.43373494 1,10.0481928 1,12.0481928 C1,14.0481928 2.61445783,15.6626506 4.61445783,15.6626506 C5.56626506,15.6626506 6.42168675,15.2891566 7.07228916,14.686747 L15.6506024,19.6987952 C15.5903614,19.9518072 15.5542169,20.2168675 15.5542169,20.4819277 C15.5542169,22.4216867 17.1325301,24 19.0722892,24 C21.0120482,24 22.5903614,22.4216867 22.5903614,20.4819277 C22.5903614,18.5421687 21.0120482,16.9638554 19.0722892,16.9638554 Z"
		/>
	</Icon>
);

ShareIcon.propTypes = {
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
