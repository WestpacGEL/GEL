import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const WriteIcon = ({
	assistiveText = 'Write',
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
				d="M21.6101 3.50951C22.13 4.02944 22.13 4.86932 21.6101 5.38925L19.1704 7.82891L14.1711 2.82961L16.6107 0.389946C17.1307 -0.129982 17.9706 -0.129982 18.4905 0.389946L21.6101 3.50951ZM2 15.0007V20H6.99931L17.7439 9.25538L12.7446 4.25608L2 15.0007ZM0 22H24V24H0V22Z"
				fill="currentColor"
			/>
		) : (
			<Fragment>
				<path
					d="M21.6101 3.50951C22.13 4.02944 22.13 4.86932 21.6101 5.38925L19.1704 7.82891L14.1711 2.82961L16.6108 0.389946C17.1307 -0.129982 17.9706 -0.129982 18.4905 0.389946L21.6101 3.50951Z"
					fill="currentColor"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M2 19.9998V15.0005L12.7446 4.25586L17.7439 9.25517L6.99931 19.9998H2ZM6.17088 17.9998L14.9155 9.25517L12.7446 7.08429L4 15.8289V17.9998H6.17088Z"
					fill="currentColor"
				/>
				<path d="M0 22H24V24H0V22Z" fill="currentColor" />
			</Fragment>
		)}
	</Icon>
);

WriteIcon.propTypes = {
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
