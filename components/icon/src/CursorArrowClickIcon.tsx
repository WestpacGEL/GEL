import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const CursorArrowClickIcon = ({
	assistiveText = 'Cursor Arrow Click',
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
				<g clip-path="url(#clip0_2741_3570)">
					<path
						d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C12.234 22 12.4661 21.992 12.6961 21.9761L13.283 23.9322C12.8614 23.977 12.4334 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 12.433 23.9771 12.8607 23.9323 13.2819L21.9762 12.6951C21.992 12.4654 22 12.2336 22 12C22 6.47715 17.5228 2 12 2Z"
						fill="currentColor"
					/>
					<path
						d="M23.4032 15.2117L18.9917 16.6861L24 21.6709L21.6831 23.9879L16.6865 18.9913L15.2121 23.4028L11.7016 11.7012L23.4032 15.2117Z"
						fill="currentColor"
					/>
				</g>
				<defs>
					<clipPath id="clip0_2741_3570">
						<rect width="24" height="24" fill="currentColor" />
					</clipPath>
				</defs>
			</Fragment>
		) : (
			<Fragment>
				<g clip-path="url(#clip0_2741_3569)">
					<path
						d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C12.234 22 12.4661 21.992 12.6961 21.9761L13.283 23.9322C12.8614 23.977 12.4334 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 12.433 23.9771 12.8607 23.9323 13.2819L21.9762 12.6951C21.992 12.4654 22 12.2336 22 12C22 6.47715 17.5228 2 12 2Z"
						fill="currentColor"
					/>
					<path
						d="M23.4032 15.2117L18.9917 16.6861L24 21.6709L21.6831 23.9879L16.6865 18.9913L15.2121 23.4028L11.7016 11.7012L23.4032 15.2117Z"
						fill="currentColor"
					/>
				</g>
				<defs>
					<clipPath id="clip0_2741_3569">
						<rect width="24" height="24" fill="currentColor" />
					</clipPath>
				</defs>
			</Fragment>
		)}
	</Icon>
);

CursorArrowClickIcon.propTypes = {
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
