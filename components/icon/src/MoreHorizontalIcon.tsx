import PropTypes from 'prop-types';
import { Icon, IconProps } from './Icon';

export const MoreHorizontalIcon = ({
	assistiveText = 'More Horizontal',
	copyrightYear = '2020',
	size = 'medium',
	overrides,
	...props
}: Omit<IconProps, 'icon'>) => (
	<Icon
		icon="MoreHorizontalIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		{...props}
	>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M4.5,9.5 C5.875,9.5 7,10.625 7,12 C7,13.375 5.875,14.5 4.5,14.5 C3.125,14.5 2,13.375 2,12 C2,10.625 3.125,9.5 4.5,9.5 Z M19.5,9.5 C20.875,9.5 22,10.625 22,12 C22,13.375 20.875,14.5 19.5,14.5 C18.125,14.5 17,13.375 17,12 C17,10.625 18.125,9.5 19.5,9.5 Z M12,9.5 C13.375,9.5 14.5,10.625 14.5,12 C14.5,13.375 13.375,14.5 12,14.5 C10.625,14.5 9.5,13.375 9.5,12 C9.5,10.625 10.625,9.5 12,9.5 Z"
		/>
	</Icon>
);

MoreHorizontalIcon.propTypes = {
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
