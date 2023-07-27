import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const AccountIcon = ({
	assistiveText = 'Account',
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
					d="M20.5 7C20.5 8.933 16.6944 10.5 12 10.5C7.30558 10.5 3.5 8.933 3.5 7C3.5 5.067 7.30558 3.5 12 3.5C16.6944 3.5 20.5 5.067 20.5 7Z"
					fill="currentColor"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M24 18.5V5.5C24 2.46243 18.6274 0 12 0C5.37258 0 0 2.46243 0 5.5V18.5C0 21.5376 5.37258 24 12 24C18.6274 24 24 21.5376 24 18.5ZM12 12.5C14.5427 12.5 16.938 12.0794 18.7719 11.3242C19.6842 10.9486 20.5541 10.4507 21.2271 9.79542C21.9065 9.13403 22.5 8.18867 22.5 7C22.5 5.81133 21.9065 4.86598 21.2271 4.20458C20.5541 3.54935 19.6842 3.0514 18.7719 2.67577C16.938 1.92063 14.5427 1.5 12 1.5C9.45731 1.5 7.06201 1.92063 5.22809 2.67577C4.31585 3.0514 3.44592 3.54935 2.77286 4.20458C2.09348 4.86598 1.5 5.81133 1.5 7C1.5 8.18867 2.09348 9.13403 2.77286 9.79542C3.44592 10.4507 4.31585 10.9486 5.22809 11.3242C7.06201 12.0794 9.45731 12.5 12 12.5ZM2.77285 14.5454C2.19165 13.9796 1.67333 13.206 1.53564 12.25H3.58607C4.17528 13.9461 7.71784 15.25 12 15.25C16.2821 15.25 19.8247 13.9461 20.4139 12.25H22.4643C22.3267 13.206 21.8083 13.9796 21.2271 14.5454C20.5541 15.2007 19.6841 15.6986 18.7719 16.0742C16.938 16.8294 14.5427 17.25 12 17.25C9.4573 17.25 7.062 16.8294 5.22808 16.0742C4.31583 15.6986 3.44591 15.2007 2.77285 14.5454ZM1.53564 17C1.67333 17.956 2.19165 18.7296 2.77285 19.2954C3.44591 19.9507 4.31583 20.4486 5.22808 20.8242C7.062 21.5794 9.4573 22 12 22C14.5427 22 16.938 21.5794 18.7719 20.8242C19.6841 20.4486 20.5541 19.9507 21.2271 19.2954C21.8083 18.7296 22.3267 17.956 22.4643 17H20.4139C19.8247 18.6961 16.2821 20 12 20C7.71784 20 4.17528 18.6961 3.58607 17H1.53564Z"
					fill="currentColor"
				/>
			</Fragment>
		) : (
			<Fragment>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M18.7719 11.3242C16.938 12.0794 14.5427 12.5 12 12.5C9.45731 12.5 7.06201 12.0794 5.22809 11.3242C4.31585 10.9486 3.44592 10.4507 2.77286 9.79542C2.09348 9.13403 1.5 8.18867 1.5 7C1.5 5.81133 2.09348 4.86598 2.77286 4.20458C3.44592 3.54935 4.31585 3.0514 5.22809 2.67577C7.06201 1.92063 9.45731 1.5 12 1.5C14.5427 1.5 16.938 1.92063 18.7719 2.67577C19.6842 3.0514 20.5541 3.54935 21.2271 4.20458C21.9065 4.86598 22.5 5.81133 22.5 7C22.5 8.18867 21.9065 9.13403 21.2271 9.79542C20.5541 10.4507 19.6842 10.9486 18.7719 11.3242ZM12 10.5C16.6944 10.5 20.5 8.933 20.5 7C20.5 5.067 16.6944 3.5 12 3.5C7.30558 3.5 3.5 5.067 3.5 7C3.5 8.933 7.30558 10.5 12 10.5Z"
					fill="currentColor"
				/>
				<path
					d="M1.53564 12.25C1.67333 13.206 2.19165 13.9796 2.77285 14.5454C3.44591 15.2007 4.31583 15.6986 5.22808 16.0742C7.062 16.8294 9.4573 17.25 12 17.25C14.5427 17.25 16.938 16.8294 18.7719 16.0742C19.6841 15.6986 20.5541 15.2007 21.2271 14.5454C21.8083 13.9796 22.3267 13.206 22.4643 12.25H20.4139C19.8247 13.9461 16.2821 15.25 12 15.25C7.71784 15.25 4.17528 13.9461 3.58607 12.25H1.53564Z"
					fill="currentColor"
				/>
				<path
					d="M2.77285 19.2954C2.19165 18.7296 1.67333 17.956 1.53564 17H3.58607C4.17528 18.6961 7.71784 20 12 20C16.2821 20 19.8247 18.6961 20.4139 17H22.4643C22.3267 17.956 21.8083 18.7296 21.2271 19.2954C20.5541 19.9507 19.6841 20.4486 18.7719 20.8242C16.938 21.5794 14.5427 22 12 22C9.4573 22 7.062 21.5794 5.22808 20.8242C4.31583 20.4486 3.44591 19.9507 2.77285 19.2954Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);

AccountIcon.propTypes = {
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
