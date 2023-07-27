import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const PresetsIcon = ({
	assistiveText = 'Presets',
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
					fillRule="evenodd"
					clipRule="evenodd"
					d="M19.8551 4C19.4248 2.55426 18.0855 1.5 16.5 1.5C14.9145 1.5 13.5752 2.55426 13.1449 4H1C0.447715 4 0 4.44772 0 5C0 5.55228 0.447715 6 1 6H13.1449C13.5752 7.44574 14.9145 8.5 16.5 8.5C18.0855 8.5 19.4248 7.44574 19.8551 6H23C23.5523 6 24 5.55228 24 5C24 4.44772 23.5523 4 23 4H19.8551ZM18 5C18 5.82843 17.3284 6.5 16.5 6.5C15.6716 6.5 15 5.82843 15 5C15 4.17157 15.6716 3.5 16.5 3.5C17.3284 3.5 18 4.17157 18 5Z"
					fill="currentColor"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M0 12C0 11.4477 0.447715 11 1 11H4.14494C4.57521 9.55426 5.91449 8.5 7.5 8.5C9.08551 8.5 10.4248 9.55426 10.8551 11H23C23.5523 11 24 11.4477 24 12C24 12.5523 23.5523 13 23 13H10.8551C10.4248 14.4457 9.08551 15.5 7.5 15.5C5.91449 15.5 4.57521 14.4457 4.14494 13H1C0.447715 13 0 12.5523 0 12ZM7.5 13.5C6.67157 13.5 6 12.8284 6 12C6 11.1716 6.67157 10.5 7.5 10.5C8.32843 10.5 9 11.1716 9 12C9 12.8284 8.32843 13.5 7.5 13.5Z"
					fill="currentColor"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M1 18C0.447715 18 0 18.4477 0 19C0 19.5523 0.447715 20 1 20H11.1449C11.5752 21.4457 12.9145 22.5 14.5 22.5C16.0855 22.5 17.4248 21.4457 17.8551 20H23C23.5523 20 24 19.5523 24 19C24 18.4477 23.5523 18 23 18H17.8551C17.4248 16.5543 16.0855 15.5 14.5 15.5C12.9145 15.5 11.5752 16.5543 11.1449 18H1ZM16 19C16 19.8284 15.3284 20.5 14.5 20.5C13.6716 20.5 13 19.8284 13 19C13 18.1716 13.6716 17.5 14.5 17.5C15.3284 17.5 16 18.1716 16 19Z"
					fill="currentColor"
				/>
			</Fragment>
		) : (
			<Fragment>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M19.8551 4C19.4248 2.55426 18.0855 1.5 16.5 1.5C14.9145 1.5 13.5752 2.55426 13.1449 4H1C0.447715 4 0 4.44772 0 5C0 5.55228 0.447715 6 1 6H13.1449C13.5752 7.44574 14.9145 8.5 16.5 8.5C18.0855 8.5 19.4248 7.44574 19.8551 6H23C23.5523 6 24 5.55228 24 5C24 4.44772 23.5523 4 23 4H19.8551ZM18 5C18 5.82843 17.3284 6.5 16.5 6.5C15.6716 6.5 15 5.82843 15 5C15 4.17157 15.6716 3.5 16.5 3.5C17.3284 3.5 18 4.17157 18 5Z"
					fill="currentColor"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M0 12C0 11.4477 0.447715 11 1 11H4.14494C4.57521 9.55426 5.91449 8.5 7.5 8.5C9.08551 8.5 10.4248 9.55426 10.8551 11H23C23.5523 11 24 11.4477 24 12C24 12.5523 23.5523 13 23 13H10.8551C10.4248 14.4457 9.08551 15.5 7.5 15.5C5.91449 15.5 4.57521 14.4457 4.14494 13H1C0.447715 13 0 12.5523 0 12ZM7.5 13.5C6.67157 13.5 6 12.8284 6 12C6 11.1716 6.67157 10.5 7.5 10.5C8.32843 10.5 9 11.1716 9 12C9 12.8284 8.32843 13.5 7.5 13.5Z"
					fill="currentColor"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M1 18C0.447715 18 0 18.4477 0 19C0 19.5523 0.447715 20 1 20H11.1449C11.5752 21.4457 12.9145 22.5 14.5 22.5C16.0855 22.5 17.4248 21.4457 17.8551 20H23C23.5523 20 24 19.5523 24 19C24 18.4477 23.5523 18 23 18H17.8551C17.4248 16.5543 16.0855 15.5 14.5 15.5C12.9145 15.5 11.5752 16.5543 11.1449 18H1ZM16 19C16 19.8284 15.3284 20.5 14.5 20.5C13.6716 20.5 13 19.8284 13 19C13 18.1716 13.6716 17.5 14.5 17.5C15.3284 17.5 16 18.1716 16 19Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);

PresetsIcon.propTypes = {
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
