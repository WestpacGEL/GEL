import PropTypes from 'prop-types';
import { Icon, IconProps } from './Icon';

export const IdCardIcon = ({
	assistiveText = 'Id Card',
	copyrightYear = '2020',
	size = 'medium',
	overrides,
	...props
}: Omit<IconProps, 'icon'>) => (
	<Icon
		icon="IdCardIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		{...props}
	>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M2,2 L22,2 C23.1045695,2 24,2.8954305 24,4 L24,20 C24,21.1045695 23.1045695,22 22,22 L2,22 C0.8954305,22 1.3527075e-16,21.1045695 0,20 L0,4 C-1.3527075e-16,2.8954305 0.8954305,2 2,2 Z M16,16 L16,18 L22,18 L22,16 L16,16 Z M16,8 L16,10 L22,10 L22,8 L16,8 Z M16,12 L16,14 L22,14 L22,12 L16,12 Z M14,18.1 L2,18.1 L2,17.1 C2,15.1 6,14 8,14 C10,14 14,15.1 14,17.1 L14,18.1 Z M8,6 C9.66,6 11,7.34 11,9 C11,10.66 9.66,12 8,12 C6.34,12 5,10.66 5,9 C5,7.34 6.34,6 8,6 Z"
		/>
	</Icon>
);

IdCardIcon.propTypes = {
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
