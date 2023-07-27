import PropTypes from 'prop-types';
import { Icon, IconProps } from './Icon';

export const EmailIcon = ({
	assistiveText = 'Email',
	copyrightYear = '2023',
	size = 'medium',
	look = 'filled',
	color,
	overrides,
	...props
}: Omit<IconProps, 'icon'>) => (
	<Icon
		icon="TestIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		look={look}
		color={color}
		overrides={overrides}
		{...props}
	>
		{look === 'filled' ? (
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M2 2H22C23.1046 2 24 2.89543 24 4V20C24 21.1046 23.1046 22 22 22H2C0.89543 22 0 21.1046 0 20V4C0 2.89543 0.89543 2 2 2ZM2 6.40625V8.68443L12 14.139L22 8.68443V6.40625L12 11.8608L2 6.40625Z"
				fill="currentColor"
			/>
		) : (
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M2 2H22C23.1046 2 24 2.89543 24 4V20C24 21.1046 23.1046 22 22 22H2C0.89543 22 0 21.1046 0 20V4C0 2.89543 0.89543 2 2 2ZM2 4H22V6.40633L12 11.8609L2 6.40633V4ZM2 8.68451V20H22V8.68451L12 14.1391L2 8.68451Z"
				fill="currentColor"
			/>
		)}
	</Icon>
);

EmailIcon.propTypes = {
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
	 * The look of the icon.
	 *
	 * Defaults to the filled version.
	 */
	look: PropTypes.string,
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
