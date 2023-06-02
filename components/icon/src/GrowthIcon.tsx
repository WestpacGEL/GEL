import PropTypes from 'prop-types';
import { Icon, IconProps } from './Icon';

export const GrowthIcon = ({
	assistiveText = 'Growth',
	copyrightYear = '2020',
	size = 'medium',
	color,
	overrides,
	...props
}: Omit<IconProps, 'icon'>) => (
	<Icon
		icon="GrowthIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		color={color}
		overrides={overrides}
		{...props}
	>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M2,14 C2,19.5222222 6.47777778,24 12,24 C12,18.4777778 7.52222222,14 2,14 Z M12,24 C17.5222222,24 22,19.5222222 22,14 C16.4777778,14 12,18.4777778 12,24 Z M9.00569016,2.81370323 C9.10188477,1.2436235 10.4057105,5.91645679e-31 12,5.91645679e-31 C13.5942895,5.91645679e-31 14.8981152,1.2436235 14.9943098,2.81370323 C16.4021361,2.11197034 18.1310585,2.61930477 18.9282032,4 C19.725348,5.38069523 19.3002513,7.13165316 17.9886197,8 C19.3002513,8.86834684 19.725348,10.6193048 18.9282032,12 C18.1310585,13.3806952 16.4021361,13.8880297 14.9943098,13.1862968 C14.8981152,14.7563765 13.5942895,16 12,16 C10.4057105,16 9.10188477,14.7563765 9.00569016,13.1862968 C7.59786393,13.8880297 5.86894154,13.3806952 5.07179677,12 C4.274652,10.6193048 4.6997487,8.86834684 6.01138033,8 C4.6997487,7.13165316 4.274652,5.38069523 5.07179677,4 C5.86894154,2.61930477 7.59786393,2.11197034 9.00569016,2.81370323 L9.00569016,2.81370323 Z M12,11 C13.6568542,11 15,9.65685425 15,8 C15,6.34314575 13.6568542,5 12,5 C10.3431458,5 9,6.34314575 9,8 C9,9.65685425 10.3431458,11 12,11 Z"
		/>
	</Icon>
);

GrowthIcon.propTypes = {
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
