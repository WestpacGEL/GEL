import PropTypes from 'prop-types';
import { Icon, IconProps } from './Icon';

export const TransportIcon = ({
	assistiveText = 'Transport',
	copyrightYear = '2020',
	size = 'medium',
	overrides,
	...props
}: Omit<IconProps, 'icon'>) => (
	<Icon
		icon="TransportIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		{...props}
	>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M16,22 L8,22 L8,23 C8,23.5522847 7.55228475,24 7,24 L5,24 C4.44771525,24 4,23.5522847 4,23 L4,22 L3,22 C2.44771525,22 2,21.5522847 2,21 L2,2 C2,0.8954305 2.8954305,2.02906125e-16 4,0 L20,0 C21.1045695,-2.02906125e-16 22,0.8954305 22,2 L22,21 C22,21.5522847 21.5522847,22 21,22 L20,22 L20,23 C20,23.5522847 19.5522847,24 19,24 L17,24 C16.4477153,24 16,23.5522847 16,23 L16,22 L16,22 Z M6,18 C7.1045695,18 8,17.1045695 8,16 C8,14.8954305 7.1045695,14 6,14 C4.8954305,14 4,14.8954305 4,16 C4,17.1045695 4.8954305,18 6,18 Z M18,18 C19.1045695,18 20,17.1045695 20,16 C20,14.8954305 19.1045695,14 18,14 C16.8954305,14 16,14.8954305 16,16 C16,17.1045695 16.8954305,18 18,18 Z M4,4 L4,12 L20,12 L20,4 L4,4 Z M9,2 L9,3 L15,3 L15,2 L9,2 Z"
		/>
	</Icon>
);

TransportIcon.propTypes = {
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
