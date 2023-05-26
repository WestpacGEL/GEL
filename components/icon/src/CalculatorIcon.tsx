import PropTypes from 'prop-types';
import { Icon, IconProps } from './Icon';

export const CalculatorIcon = ({
	assistiveText = 'Calculator',
	copyrightYear = '2020',
	size = 'medium',
	overrides,
	...props
}: Omit<IconProps, 'icon'>) => (
	<Icon
		icon="CalculatorIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		overrides={overrides}
		{...props}
	>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M4,0 L20,0 C21.1045695,-2.02906125e-16 22,0.8954305 22,2 L22,22 C22,23.1045695 21.1045695,24 20,24 L4,24 C2.8954305,24 2,23.1045695 2,22 L2,2 C2,0.8954305 2.8954305,2.02906125e-16 4,0 Z M4,2 L4,8 L20,8 L20,2 L4,2 Z M12,16 L12,18 L20,18 L20,16 L12,16 Z M12,20 L12,22 L20,22 L20,20 L12,20 Z"
		/>
	</Icon>
);

CalculatorIcon.propTypes = {
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
