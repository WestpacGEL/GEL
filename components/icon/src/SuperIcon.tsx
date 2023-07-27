import PropTypes from 'prop-types';
import { Icon, IconProps } from './Icon';

export const SuperIcon = ({
	assistiveText = 'Super',
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
				d="M2.57143 12.0001H3.53466C3.51172 11.6707 3.5 11.3371 3.5 11C3.5 4.92487 7.99903 0 12 0C16.001 0 20.5 4.92487 20.5 11C20.5 11.3371 20.4883 11.6707 20.4653 12.0001H21.4286C22.6084 12.0001 23 12.75 23 13.5C23 19.2615 18.0745 24 12.0057 24C5.93759 24 1 19.293 1 13.5C1 12.75 1.38988 12.0001 2.57143 12.0001ZM5.5 11C5.5 11.3387 5.51358 11.6723 5.53996 12H18.46C18.4864 11.6723 18.5 11.3387 18.5 11C18.5 6.24348 15.0362 2 12 2C8.96384 2 5.5 6.24348 5.5 11Z"
				fill="currentColor"
			/>
		) : (
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M20.4653 12H21.4286C22.6084 12 23 12.7499 23 13.4999C23 19.2614 18.0745 23.9999 12.0057 23.9999C5.93759 23.9999 1 19.2929 1 13.4999C1 12.7499 1.38988 12 2.57143 12H3.53465C3.51172 11.6706 3.5 11.3371 3.5 11C3.5 4.92487 7.99903 0 12 0C16.001 0 20.5 4.92487 20.5 11C20.5 11.3371 20.4883 11.6706 20.4653 12ZM5.5 11C5.5 11.3387 5.51358 11.6723 5.53996 12H18.46C18.4864 11.6723 18.5 11.3387 18.5 11C18.5 6.24348 15.0362 2 12 2C8.96384 2 5.5 6.24348 5.5 11ZM12.0057 21.9999C7.13622 21.9999 3.28959 18.3794 3.01562 14H20.9842C20.7093 18.3576 16.8683 21.9999 12.0057 21.9999Z"
				fill="currentColor"
			/>
		)}
	</Icon>
);

SuperIcon.propTypes = {
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
