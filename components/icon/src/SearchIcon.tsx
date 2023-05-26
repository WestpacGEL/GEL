import PropTypes from 'prop-types';
import { Icon, IconProps } from './Icon';

export const SearchIcon = ({
	assistiveText = 'Search',
	copyrightYear = '2020',
	size = 'medium',
	overrides,
	...props
}: Omit<IconProps, 'icon'>) => (
	<Icon
		icon="SearchIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		{...props}
	>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M2,9 C2,5.13425 5.13425,2 9,2 C12.86575,2 16,5.13425 16,9 C16,12.86575 12.86575,16 9,16 C5.13425,16 2,12.86575 2,9 M22.59075,20.15925 L16.46325,14.03175 C17.433,12.5955 18,10.86375 18,9 C18,4.02975 13.97025,0 9,0 C4.02975,0 0,4.02975 0,9 C0,13.97025 4.02975,18 9,18 C10.4715,18 11.856,17.64 13.08225,17.01375 L19.40925,23.34075 C19.84875,23.78025 20.424,24 21,24 C21.576,24 22.15125,23.78025 22.59075,23.34075 C23.46975,22.4625 23.46975,21.0375 22.59075,20.15925"
		/>
	</Icon>
);

SearchIcon.propTypes = {
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
