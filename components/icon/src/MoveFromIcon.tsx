import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const MoveFromIcon = ({
	assistiveText = 'MoveFrom',
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
					d="M20 0H4C2.9 0 2 0.9 2 2V22C2 23.1 2.9 24 4 24H20C21.11 24 22 23.1 22 22V16.2427L20 18.2427V22H4V2H20V5.75735L22 7.75735V2C22 0.9 21.11 0 20 0Z"
					fill="currentColor"
				/>
				<path
					d="M16.2929 7.70712L19.5858 11H11V13H19.5858L16.2929 16.2929L17.7071 17.7071L23.4142 12L17.7071 6.29291L16.2929 7.70712Z"
					fill="currentColor"
				/>
			</Fragment>
		) : (
			<Fragment>
				<path
					d="M20 0H4C2.9 0 2 0.9 2 2V22C2 23.1 2.9 24 4 24H20C21.11 24 22 23.1 22 22V16.2427L20 18.2427V22H4V2H20V5.75735L22 7.75735V2C22 0.9 21.11 0 20 0Z"
					fill="currentColor"
				/>
				<path
					d="M16.2929 7.70712L19.5858 11H11V13H19.5858L16.2929 16.2929L17.7071 17.7071L23.4142 12L17.7071 6.29291L16.2929 7.70712Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);

MoveFromIcon.propTypes = {
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
