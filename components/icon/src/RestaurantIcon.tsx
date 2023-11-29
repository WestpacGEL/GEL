import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const RestaurantIcon = ({
	assistiveText = 'Restaurant',
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
					d="M22.7372 2.06942C24.6114 3.94363 24.0036 7.59008 21.3797 10.214C19.0953 12.4984 16.0358 13.2546 14.0456 12.1752L3.20634 23.0144L1.79213 21.6002L12.6313 10.761C11.552 8.77075 12.3082 5.71127 14.5926 3.42685C17.2165 0.802944 20.863 0.195203 22.7372 2.06942Z"
					fill="currentColor"
				/>
				<path
					d="M1.64982 8.94469L6.63445 13.9296L10.7013 9.86266L2.31881 1.48856C-0.391107 4.19848 -0.386318 6.90855 1.64982 8.94469Z"
					fill="currentColor"
				/>
				<path
					d="M22.5902 21.753L14.9433 14.106L13.5291 15.5202L21.176 23.1672L22.5902 21.753Z"
					fill="currentColor"
				/>
			</Fragment>
		) : (
			<Fragment>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M21.3799 10.214C24.0038 7.59008 24.6115 3.94363 22.7373 2.06942C20.8631 0.195203 17.2167 0.802943 14.5928 3.42685C12.3083 5.71132 11.5521 8.77091 12.6316 10.7612L1.7924 21.6003L3.20662 23.0146L14.0459 12.1753C16.0361 13.2546 19.0955 12.4984 21.3799 10.214ZM21.7726 5.53177C21.943 4.5094 21.685 3.84548 21.3231 3.48363C20.9613 3.12179 20.2973 2.86373 19.275 3.03413C18.2573 3.20374 17.0582 3.78988 16.007 4.84106C14.9558 5.89224 14.3697 7.09135 14.2 8.10906C14.0296 9.13142 14.2877 9.79535 14.6495 10.1572C15.0114 10.519 15.6753 10.7771 16.6977 10.6067C17.7154 10.4371 18.9145 9.85095 19.9657 8.79977C21.0169 7.74859 21.603 6.54948 21.7726 5.53177Z"
					fill="currentColor"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M1.24831 8.54302C-0.20126 7.09345 -0.378664 5.15206 1.03361 3.03148C1.36802 2.52935 1.79157 2.01716 2.30846 1.49908L2.31897 1.48856L10.7011 9.8611L10.6998 9.86237L10.7008 9.86337L9.28658 11.2776L9.28558 11.2766L6.63358 13.9286L1.24831 8.54302ZM7.87137 9.86237L6.63362 11.1001L2.66256 7.12885C2.15579 6.62207 2.01128 6.13563 2.07813 5.6122C2.11658 5.31116 2.23532 4.93171 2.48716 4.48338L7.87137 9.86237Z"
					fill="currentColor"
				/>
				<path
					d="M13.5292 15.5202L14.9434 14.106L22.5904 21.753L21.1762 23.1672L13.5292 15.5202Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);

RestaurantIcon.propTypes = {
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