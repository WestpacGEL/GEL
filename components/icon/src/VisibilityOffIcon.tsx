import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const VisibilityOffIcon = ({
	assistiveText = 'VisibilityOff',
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
					d="M2.41421 2.41406L1 3.82828L3.94205 6.77032C2.20226 8.1367 0.831869 9.93569 0 12.0002C1.887 16.6832 6.545 20.0002 12 20.0002C13.5504 20.0002 15.0365 19.7322 16.4128 19.2411L20.7266 23.5548L22.1408 22.1406L2.41421 2.41406ZM13.8274 16.6557L12.1673 14.9956C12.1119 14.9986 12.0561 15.0002 12 15.0002C10.3431 15.0002 9 13.657 9 12.0002C9 11.944 9.00154 11.8882 9.00459 11.8329L7.34447 10.1727C7.12211 10.7388 7 11.3552 7 12.0002C7 14.7616 9.23858 17.0002 12 17.0002C12.6449 17.0002 13.2614 16.878 13.8274 16.6557Z"
					fill="currentColor"
				/>
				<path
					d="M11.8332 9.00471L14.9954 12.1669C14.9985 12.1117 15 12.0561 15 12.0002C15 10.3433 13.6569 9.00015 12 9.00015C11.944 9.00015 11.8884 9.00168 11.8332 9.00471Z"
					fill="currentColor"
				/>
				<path
					d="M17 12.0002C17 12.6449 16.8779 13.2612 16.6557 13.8272L20.0583 17.2297C21.7979 15.8634 23.1682 14.0645 24 12.0002C22.113 7.31715 17.455 4.00015 12 4.00015C10.4497 4.00015 8.96382 4.26805 7.58759 4.75907L10.173 7.34447C10.7389 7.1222 11.3552 7.00015 12 7.00015C14.7614 7.00015 17 9.23873 17 12.0002Z"
					fill="currentColor"
				/>
			</Fragment>
		) : (
			<Fragment>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M2.41421 2.41406L1 3.82828L3.94205 6.77032C2.20226 8.1367 0.831869 9.93569 0 12.0002C1.887 16.6832 6.545 20.0002 12 20.0002C13.5504 20.0002 15.0365 19.7322 16.4128 19.2411L20.7266 23.5548L22.1408 22.1406L2.41421 2.41406ZM14.8141 17.6423L13.8274 16.6557C13.2614 16.878 12.6449 17.0002 12 17.0002C9.23858 17.0002 7 14.7616 7 12.0002C7 11.3552 7.12211 10.7388 7.34447 10.1727L5.36831 8.19659C4.02733 9.20262 2.93439 10.5053 2.19096 12.0002C3.9508 15.5388 7.66904 18.0002 12 18.0002C12.9741 18.0002 13.9173 17.8756 14.8141 17.6423ZM9.00459 11.8329C9.00154 11.8882 9 11.944 9 12.0002C9 13.657 10.3431 15.0002 12 15.0002C12.0561 15.0002 12.1119 14.9986 12.1673 14.9956L9.00459 11.8329Z"
					fill="currentColor"
				/>
				<path
					d="M21.809 12.0002C21.0657 13.4949 19.9728 14.7975 18.632 15.8035L20.0583 17.2297C21.7979 15.8634 23.1682 14.0645 24 12.0002C22.113 7.31715 17.455 4.00015 12 4.00015C10.4497 4.00015 8.96382 4.26805 7.58759 4.75907L9.18636 6.35784C10.0831 6.12463 11.026 6.00015 12 6.00015C16.331 6.00015 20.0492 8.46148 21.809 12.0002Z"
					fill="currentColor"
				/>
				<path
					d="M11.8332 9.00471L10.173 7.34447C10.7389 7.1222 11.3552 7.00015 12 7.00015C14.7614 7.00015 17 9.23873 17 12.0002C17 12.6449 16.8779 13.2612 16.6557 13.8272L14.9954 12.1669C14.9985 12.1117 15 12.0561 15 12.0002C15 10.3433 13.6569 9.00015 12 9.00015C11.944 9.00015 11.8884 9.00168 11.8332 9.00471Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);

VisibilityOffIcon.propTypes = {
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
