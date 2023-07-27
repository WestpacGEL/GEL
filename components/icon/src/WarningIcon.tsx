import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const WarningIcon = ({
	assistiveText = 'Warning',
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
				d="M12.7078 0.293176C12.3169 -0.0977248 11.6831 -0.0977256 11.2922 0.293175L0.293176 11.2922C-0.0977252 11.6831 -0.0977252 12.3169 0.293176 12.7078L11.2922 23.7068C11.6831 24.0977 12.3169 24.0977 12.7078 23.7068L23.7068 12.7078C24.0977 12.3169 24.0977 11.6831 23.7068 11.2922L12.7078 0.293176ZM10.9999 14H12.9999V6H10.9999V14ZM10.9999 18H12.9999V16H10.9999V18Z"
				fill="currentColor"
			/>
		) : (
			<Fragment>
				<path d="M11 14H13V6H11V14Z" fill="currentColor" />
				<path d="M11 18H13V16H11V18Z" fill="currentColor" />
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M11.2922 0.293175C11.6831 -0.0977256 12.3169 -0.0977248 12.7078 0.293176L23.7068 11.2922C24.0977 11.6831 24.0977 12.3169 23.7068 12.7078L12.7078 23.7068C12.3169 24.0977 11.6831 24.0977 11.2922 23.7068L0.293176 12.7078C-0.0977252 12.3169 -0.0977252 11.6831 0.293176 11.2922L11.2922 0.293175ZM11.9995 2.41654L2.41602 12L11.9995 21.5835L21.5829 12L11.9995 2.41654Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);

WarningIcon.propTypes = {
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
