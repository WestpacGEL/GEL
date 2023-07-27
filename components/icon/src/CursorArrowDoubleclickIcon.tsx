import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const CursorArrowDoubleclickIcon = ({
	assistiveText = 'Cursor Arrow Doubleclick',
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
				<g clip-path="url(#clip0_2741_3568)">
					<path
						d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 12.2336 21.992 12.4654 21.9762 12.6951L23.9323 13.2819C23.9771 12.8607 24 12.433 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C12.4334 24 12.8614 23.977 13.283 23.9322L12.6961 21.9761C12.4661 21.992 12.234 22 12 22C6.47715 22 2 17.5228 2 12Z"
						fill="currentColor"
					/>
					<path
						d="M12 5C15.7996 5 18.8921 8.02722 18.9972 11.8014L16.9335 11.1822C16.5431 8.80981 14.4829 7 12 7C9.23858 7 7 9.23858 7 12C7 14.4833 8.81041 16.5438 11.1834 16.9336L11.8025 18.9973C8.02782 18.8927 5 15.7999 5 12C5 8.13401 8.13401 5 12 5Z"
						fill="currentColor"
					/>
					<path
						d="M23.4032 15.2117L18.9917 16.6861L24 21.6709L21.6831 23.9879L16.6865 18.9913L15.2121 23.4028L11.7016 11.7012L23.4032 15.2117Z"
						fill="currentColor"
					/>
				</g>
				<defs>
					<clipPath id="clip0_2741_3568">
						<rect width="24" height="24" fill="currentColor" />
					</clipPath>
				</defs>
			</Fragment>
		) : (
			<Fragment>
				<g clip-path="url(#clip0_2741_3567)">
					<path
						d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 12.2336 21.992 12.4654 21.9762 12.6951L23.9323 13.2819C23.9771 12.8607 24 12.433 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C12.4334 24 12.8614 23.977 13.283 23.9322L12.6961 21.9761C12.4661 21.992 12.234 22 12 22C6.47715 22 2 17.5228 2 12Z"
						fill="currentColor"
					/>
					<path
						d="M12 5C15.7996 5 18.8921 8.02722 18.9972 11.8014L16.9335 11.1822C16.5431 8.80981 14.4829 7 12 7C9.23858 7 7 9.23858 7 12C7 14.4833 8.81041 16.5438 11.1834 16.9336L11.8025 18.9973C8.02782 18.8927 5 15.7999 5 12C5 8.13401 8.13401 5 12 5Z"
						fill="currentColor"
					/>
					<path
						d="M23.4032 15.2117L18.9917 16.6861L24 21.6709L21.6831 23.9879L16.6865 18.9913L15.2121 23.4028L11.7016 11.7012L23.4032 15.2117Z"
						fill="currentColor"
					/>
				</g>
				<defs>
					<clipPath id="clip0_2741_3567">
						<rect width="24" height="24" fill="currentColor" />
					</clipPath>
				</defs>
			</Fragment>
		)}
	</Icon>
);

CursorArrowDoubleclickIcon.propTypes = {
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
