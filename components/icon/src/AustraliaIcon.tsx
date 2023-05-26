import PropTypes from 'prop-types';
import { Icon, IconProps } from './Icon';

export const AustraliaIcon = ({
	assistiveText = 'Australia',
	copyrightYear = '2020',
	size = 'medium',
	overrides,
	...props
}: Omit<IconProps, 'icon'>) => (
	<Icon
		icon="AustraliaIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		{...props}
	>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M23.95125,12.8562667 L24,14.3317333 L22.94325,17.0472667 L22.368,17.3802 L21.12,20.1903333 L19.056,21.0476 L18.528,20.4286667 L17.52,20.7616 L15.55125,19.4291333 L15.21675,18.3812 L14.06325,18.1421333 L14.64,16.6681333 L13.632,17.9991333 L13.1025,17.6669333 L12.62325,16.3352 L10.94325,15.7155333 L8.016,16.3352 L7.056,16.9057333 L6.72,17.5239333 L4.656,17.7615333 L3.74325,18.6188 L2.01525,18.2858667 L2.208,16.6681333 L1.53525,15.1428 L0.192,13.1899333 L0.28725,12.6670667 L0.04875,11.9528 L0,10.7142 L0.28725,10.1429333 L2.16,9.14266667 L5.04,7.09593333 L5.47125,5.90573333 L6.24,5.80893333 L7.248,4.09586667 L7.87125,3.95286667 L8.78325,4.7148 L9.64725,4.76173333 L9.45525,4.3342 L10.99125,2.23906667 L13.82475,2.81033333 L14.30325,2.66733333 L14.54475,2.95186667 L13.488,4.61873333 L16.8945,6.4286 L17.47125,4.90546667 L17.56725,3.1902 L18.28725,2 L18.76875,2.90566667 L19.0065,4.5718 L19.96725,5.00006667 L20.35125,7.6672 L21.88875,8.95273333 L22.17525,10.1429333 L22.79925,10.1913333 L23.95125,12.8562667 Z M18.57525,23.9530667 L18.23925,22.9044 L18.048,21.9525333 L18.91125,22.3331333 L19.87125,22.1424667 L19.87125,23.2857333 L19.63125,23.8562667 L19.3425,23.6656 L19.056,24 L18.57525,23.9530667 Z"
		/>
	</Icon>
);

AustraliaIcon.propTypes = {
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
