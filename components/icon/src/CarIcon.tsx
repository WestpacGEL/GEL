import PropTypes from 'prop-types';
import { Icon, IconProps } from './Icon';

export const CarIcon = ({
	assistiveText = 'Car',
	copyrightYear = '2020',
	size = 'medium',
	overrides,
	...props
}: Omit<IconProps, 'icon'>) => (
	<Icon
		icon="CarIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		overrides={overrides}
		{...props}
	>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M22,10 L22,21 C22,21.5522847 21.5522847,22 21,22 L19,22 C18.4477153,22 18,21.5522847 18,21 L18,19 L6,19 L6,21 C6,21.5522847 5.55228475,22 5,22 L3,22 C2.44771525,22 2,21.5522847 2,21 L2,10 L4.31111111,3.13625 C4.54444444,2.4725 5.15555556,2 5.88888889,2 L18.1111111,2 C18.8444444,2 19.4666667,2.4725 19.6888889,3.13625 L22,10 Z M5.5,15 C6.32842712,15 7,14.3284271 7,13.5 C7,12.6715729 6.32842712,12 5.5,12 C4.67157288,12 4,12.6715729 4,13.5 C4,14.3284271 4.67157288,15 5.5,15 Z M18.5,15 C19.3284271,15 20,14.3284271 20,13.5 C20,12.6715729 19.3284271,12 18.5,12 C17.6715729,12 17,12.6715729 17,13.5 C17,14.3284271 17.6715729,15 18.5,15 Z M6.13060769,4 L4.78375728,8 L19.2162427,8 L17.8693923,4 L6.13060769,4 Z"
		/>
	</Icon>
);

CarIcon.propTypes = {
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
