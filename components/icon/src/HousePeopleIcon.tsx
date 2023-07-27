import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const HousePeopleIcon = ({
	assistiveText = 'House People',
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
					d="M22 8V11.4288C21.0982 10.5449 19.8629 10 18.5 10C17.4757 10 16.5177 10.3099 15.7222 10.8419L15.4938 10.9946C14.6593 10.3699 13.623 10 12.5 10C9.73793 10 7.5 12.2379 7.5 15C7.5 15.965 7.7732 16.8661 8.24649 17.6301C8.11315 17.6773 7.98253 17.7275 7.85495 17.7808C6.58522 18.3105 5 19.4483 5 21.5V22H2V8L12 0L22 8Z"
					fill="currentColor"
				/>
				<path
					d="M21.5784 19.358C21.724 19.3973 21.8647 19.4398 22 19.4856C23.2163 19.897 24 20.5692 24 21.5V24H20V21.5C20 21.3573 19.9923 21.2191 19.9776 21.0852C19.9282 20.6343 19.7991 20.2323 19.6148 19.8753C19.4475 19.5514 19.2347 19.2644 18.9946 19.0116C18.9934 19.0103 18.9921 19.009 18.9908 19.0076C18.9908 19.0076 18.9908 19.0076 18.9908 19.0076C19.7587 19.0317 20.4851 19.113 21.134 19.2511C21.2866 19.2836 21.4349 19.3192 21.5784 19.358Z"
					fill="currentColor"
				/>
				<path
					d="M17.5667 20.4127C17.8453 20.724 18 21.0865 18 21.5V24H7V21.5C7 20.3635 8.16833 19.6125 9.86603 19.2511C10.6517 19.0838 11.5508 19 12.5 19C13.4492 19 14.3483 19.0838 15.134 19.2511C15.2589 19.2777 15.381 19.3064 15.5 19.3372C16.3529 19.5582 17.0452 19.8875 17.4832 20.3246C17.4907 20.3321 17.4981 20.3396 17.5054 20.3471C17.5179 20.3599 17.5301 20.3727 17.5421 20.3857C17.5423 20.3859 17.5419 20.3854 17.5421 20.3857C17.5453 20.3892 17.5493 20.3934 17.5525 20.397C17.5573 20.4022 17.562 20.4075 17.5667 20.4127Z"
					fill="currentColor"
				/>
				<path
					d="M16.8339 17.4956C16.9435 17.5688 17.0582 17.6351 17.1773 17.6937C17.5762 17.8898 18.0252 18 18.5 18C18.6132 18 18.7249 17.9937 18.8348 17.9815C18.8985 17.9745 18.9615 17.9654 19.0239 17.9545C19.6368 17.8466 20.1855 17.5529 20.6096 17.1335C21.1594 16.5897 21.5 15.8348 21.5 15C21.5 13.4557 20.3346 12.1848 18.8348 12.0185C18.7249 12.0063 18.6132 12 18.5 12C18.0252 12 17.5762 12.1102 17.1773 12.3063C17.0582 12.3649 16.9435 12.4312 16.8339 12.5044C16.8553 12.5415 16.8762 12.5788 16.8967 12.6164C17.2815 13.3249 17.5 14.1369 17.5 15C17.5 15.6909 17.36 16.349 17.1067 16.9475C17.0268 17.1364 16.9356 17.3194 16.8339 17.4956Z"
					fill="currentColor"
				/>
				<path
					d="M14.6096 17.1335C14.6916 17.0524 14.769 16.9665 14.8413 16.8764C15.2535 16.3627 15.5 15.7103 15.5 15C15.5 13.3425 14.1575 12 12.5 12C10.8425 12 9.5 13.3425 9.5 15C9.5 15.8348 9.84057 16.5898 10.3904 17.1335C10.9323 17.6693 11.6773 18 12.5 18C13.2797 18 13.9897 17.7029 14.5231 17.2157C14.5524 17.1889 14.5813 17.1615 14.6096 17.1335Z"
					fill="currentColor"
				/>
			</Fragment>
		) : (
			<Fragment>
				<path
					d="M20 8.96125L12 2.56125L4 8.96125V20H5.5L5 22H2V8L12 0L22 8V12L20 10.5V8.96125Z"
					fill="currentColor"
				/>
				<path
					d="M12.5 12C14.1575 12 15.5 13.3425 15.5 15C15.5 16.6575 14.1575 18 12.5 18C10.8425 18 9.5 16.6575 9.5 15C9.5 13.3425 10.8425 12 12.5 12Z"
					fill="currentColor"
				/>
				<path
					d="M7 24V21.5C7 19.8375 9.5 19 12.5 19C13.6001 19 14.633 19.1126 15.5 19.3372C16.9973 19.7252 18 20.4471 18 21.5V24H7Z"
					fill="currentColor"
				/>
				<path
					d="M20 21.5V24H24V21.5C24 19.9291 21.7678 19.0948 18.9908 19.0076C19.576 19.6221 20 20.4388 20 21.5Z"
					fill="currentColor"
				/>
				<path
					d="M16.8339 17.4956C17.3105 17.8142 17.8834 18 18.5 18C20.1575 18 21.5 16.6575 21.5 15C21.5 13.3425 20.1575 12 18.5 12C17.8834 12 17.3104 12.1858 16.8339 12.5044C17.2576 13.2388 17.5 14.091 17.5 15C17.5 15.909 17.2576 16.7612 16.8339 17.4956Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);

HousePeopleIcon.propTypes = {
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
