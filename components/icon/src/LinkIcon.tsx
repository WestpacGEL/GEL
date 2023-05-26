import PropTypes from 'prop-types';
import { Icon, IconProps } from './Icon';

export const LinkIcon = ({
	assistiveText = 'Link',
	copyrightYear = '2020',
	size = 'medium',
	overrides,
	...props
}: Omit<IconProps, 'icon'>) => (
	<Icon
		icon="LinkIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		{...props}
	>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M13,18 L13,16 L18,16 C20.209139,16 22,14.209139 22,12 C22,9.790861 20.209139,8 18,8 L13,8 L13,6 L18,6 C21.3137085,6 24,8.6862915 24,12 C24,15.3137085 21.3137085,18 18,18 L13,18 Z M11,18 L6,18 C2.6862915,18 -1.77635684e-15,15.3137085 -1.77635684e-15,12 C-1.77635684e-15,8.6862915 2.6862915,6 6,6 L11,6 L11,8 L6,8 C3.790861,8 2,9.790861 2,12 C2,14.209139 3.790861,16 6,16 L11,16 L11,18 L11,18 Z M8,11 L16,11 L16,13 L8,13 L8,11 Z"
		/>
	</Icon>
);

LinkIcon.propTypes = {
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
