import PropTypes from 'prop-types';
import { Icon, IconProps } from './Icon';

export const ZipFileIcon = ({
	assistiveText = 'Zip File',
	copyrightYear = '2020',
	size = 'medium',
	overrides,
	...props
}: Omit<IconProps, 'icon'>) => (
	<Icon
		icon="ZipFileIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		overrides={overrides}
		{...props}
	>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M4,0 L16,0 L22,6 L22,22 C22,23.1045695 21.1045695,24 20,24 L4,24 C2.8954305,24 2,23.1045695 2,22 L2,2 L2,2 C2,0.8954305 2.8954305,2.02906125e-16 4,0 L4,0 Z M4,2 L4,22 L20,22 L20,6 L16,6 L16,2 L4,2 Z M7,20 L11,20 L11,18 L7,18 L7,20 Z M9,16 L12,16 L12,14 L9,14 L9,16 Z M6,14 L9,14 L9,12 L6,12 L6,14 Z M9,12 L12,12 L12,10 L9,10 L9,12 Z M6,10 L9,10 L9,8 L6,8 L6,10 Z M9,8 L12,8 L12,6 L9,6 L9,8 Z M6,6 L6,4 L9,4 L9,6 L6,6 Z M6,16 L12,16 L12,20 C12,20.5522847 11.5522847,21 11,21 L7,21 C6.44771525,21 6,20.5522847 6,20 L6,16 Z"
		/>
	</Icon>
);

ZipFileIcon.propTypes = {
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
