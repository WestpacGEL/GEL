import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const EditIcon = ({
	assistiveText = 'Edit',
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
				d="M23.6101 3.50951C24.13 4.02944 24.13 4.86932 23.6101 5.38925L21.1704 7.82891L16.1711 2.82961L18.6107 0.389946C19.1307 -0.129982 19.9706 -0.129982 20.4905 0.389946L23.6101 3.50951ZM0 24V19.0007L14.7446 4.25608L19.7439 9.25538L4.99931 24H0Z"
				fill="currentColor"
			/>
		) : (
			<Fragment>
				<path
					d="M23.61 3.50951C24.13 4.02944 24.13 4.86932 23.61 5.38925L21.1704 7.82891L16.1711 2.82961L18.6107 0.389946C19.1307 -0.129982 19.9706 -0.129982 20.4905 0.389946L23.61 3.50951Z"
					fill="currentColor"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M0 19.0005V23.9998H4.99931L19.7439 9.25517L14.7446 4.25586L0 19.0005ZM16.9155 9.25517L4.17088 21.9998H2V19.8289L14.7446 7.08429L16.9155 9.25517Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);

EditIcon.propTypes = {
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
