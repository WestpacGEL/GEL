import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const RefreshIcon = ({
	assistiveText = 'Refresh',
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
			<Fragment>
				<path
					d="M12 2.5C17.2467 2.5 21.5 6.75329 21.5 12H24L20.5 17L17 12H19.5C19.5 7.85786 16.1421 4.5 12 4.5C9.65137 4.5 7.55487 5.57956 6.17968 7.26952L5.02991 5.54487C6.76508 3.67216 9.24566 2.5 12 2.5Z"
					fill="currentColor"
				/>
				<path
					d="M12 19.5C7.85786 19.5 4.5 16.1421 4.5 12H7L3.5 7L0 12H2.5C2.5 17.2467 6.75329 21.5 12 21.5C14.7543 21.5 17.2349 20.3278 18.9701 18.4551L17.8203 16.7305C16.4451 18.4204 14.3486 19.5 12 19.5Z"
					fill="currentColor"
				/>
			</Fragment>
		) : (
			<Fragment>
				<path
					d="M12 2.5C17.2467 2.5 21.5 6.75329 21.5 12H24L20.5 17L17 12H19.5C19.5 7.85786 16.1421 4.5 12 4.5C9.65137 4.5 7.55487 5.57956 6.17968 7.26952L5.02991 5.54487C6.76508 3.67216 9.24566 2.5 12 2.5Z"
					fill="currentColor"
				/>
				<path
					d="M12 19.5C7.85786 19.5 4.5 16.1421 4.5 12H7L3.5 7L0 12H2.5C2.5 17.2467 6.75329 21.5 12 21.5C14.7543 21.5 17.2349 20.3278 18.9701 18.4551L17.8203 16.7305C16.4451 18.4204 14.3486 19.5 12 19.5Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);

RefreshIcon.propTypes = {
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
