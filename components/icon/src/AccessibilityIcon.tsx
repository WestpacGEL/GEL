import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const AccessibilityIcon = ({
	assistiveText = 'Accessibility',
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
					d="M12 5C13.375 5 14.5 3.875 14.5 2.5C14.5 1.125 13.375 0 12 0C10.625 0 9.5 1.125 9.5 2.5C9.5 3.875 10.625 5 12 5Z"
					fill="currentColor"
				/>
				<path
					d="M12 6.02203C15.4589 6.02203 19.1989 5.65536 22.3889 4.7998L23 7.24425C20.8297 7.82767 18.3475 8.22171 16 8.43702V24H13V16H11V24H8V8.43702C5.65253 8.22171 3.17031 7.82767 1 7.24425L1.61111 4.7998C4.80111 5.65536 8.54111 6.02203 12 6.02203Z"
					fill="currentColor"
				/>
			</Fragment>
		) : (
			<Fragment>
				<path
					d="M12 5C13.375 5 14.5 3.875 14.5 2.5C14.5 1.125 13.375 0 12 0C10.625 0 9.5 1.125 9.5 2.5C9.5 3.875 10.625 5 12 5Z"
					fill="currentColor"
				/>
				<path
					d="M12 6.02203C15.4589 6.02203 19.1989 5.65536 22.3889 4.7998L23 7.24425C20.8297 7.82767 18.3475 8.22171 16 8.43702V24H13V16H11V24H8V8.43702C5.65253 8.22171 3.17031 7.82767 1 7.24425L1.61111 4.7998C4.80111 5.65536 8.54111 6.02203 12 6.02203Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);

AccessibilityIcon.propTypes = {
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
