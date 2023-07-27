import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const SlackIcon = ({
	assistiveText = 'Slack',
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
				d="M2 0C0.895431 0 0 0.89543 0 2V22C0 23.1046 0.89543 24 2 24H22C23.1046 24 24 23.1046 24 22V2C24 0.895431 23.1046 0 22 0H2ZM15.8578 9.76624C15.8578 10.6602 15.1275 11.3904 14.2336 11.3904C13.3396 11.3904 12.6094 10.6602 12.6094 9.76624V5.69941C12.6094 4.80546 13.3396 4.0752 14.2336 4.0752C15.1275 4.0752 15.8578 4.80546 15.8578 5.69941V9.76624ZM16.6763 9.76679C16.6763 8.87284 17.4065 8.14258 18.3005 8.14258C19.1944 8.14258 19.9247 8.87284 19.9247 9.76679C19.9247 10.6607 19.1944 11.391 18.3005 11.391H16.6763V9.76679ZM11.3909 9.76679C11.3909 8.87284 10.6607 8.14258 9.76672 8.14258H5.6999C4.80595 8.14258 4.07568 8.87284 4.07568 9.76679C4.07568 10.6607 4.80595 11.391 5.6999 11.391H9.76672C10.6607 11.391 11.3909 10.6607 11.3909 9.76679ZM9.76679 7.32362C8.87284 7.32362 8.14258 6.59336 8.14258 5.69941C8.14258 4.80546 8.87284 4.0752 9.76679 4.0752C10.6607 4.0752 11.391 4.80546 11.391 5.69941V7.32362H9.76679ZM9.76679 12.6094C8.87284 12.6094 8.14258 13.3396 8.14258 14.2336V18.3004C8.14258 19.1944 8.87284 19.9246 9.76679 19.9246C10.6607 19.9246 11.391 19.1944 11.391 18.3004V14.2336C11.391 13.3396 10.6607 12.6094 9.76679 12.6094ZM7.32411 14.2336C7.32411 15.1275 6.59384 15.8578 5.6999 15.8578C4.80595 15.8578 4.07568 15.1275 4.07568 14.2336C4.07568 13.3396 4.80595 12.6094 5.6999 12.6094H7.32411V14.2336ZM15.8578 18.3C15.8578 17.406 15.1275 16.6758 14.2336 16.6758H12.6094V18.3C12.6094 19.1939 13.3396 19.9242 14.2336 19.9242C15.1275 19.9242 15.8578 19.1939 15.8578 18.3ZM14.2336 15.8578C13.3396 15.8578 12.6094 15.1275 12.6094 14.2336C12.6094 13.3396 13.3396 12.6094 14.2336 12.6094H18.3004C19.1944 12.6094 19.9246 13.3396 19.9246 14.2336C19.9246 15.1275 19.1944 15.8578 18.3004 15.8578H14.2336Z"
				fill="currentColor"
			/>
		) : (
			<Fragment>
				<path
					d="M15.8578 9.76624C15.8578 10.6602 15.1275 11.3904 14.2336 11.3904C13.3396 11.3904 12.6094 10.6602 12.6094 9.76624V5.69941C12.6094 4.80546 13.3396 4.0752 14.2336 4.0752C15.1275 4.0752 15.8578 4.80546 15.8578 5.69941V9.76624Z"
					fill="currentColor"
				/>
				<path
					d="M16.6763 9.76679C16.6763 8.87284 17.4065 8.14258 18.3005 8.14258C19.1944 8.14258 19.9247 8.87284 19.9247 9.76679C19.9247 10.6607 19.1944 11.391 18.3005 11.391H16.6763V9.76679Z"
					fill="currentColor"
				/>
				<path
					d="M11.3909 9.76679C11.3909 8.87284 10.6607 8.14258 9.76672 8.14258H5.6999C4.80595 8.14258 4.07568 8.87284 4.07568 9.76679C4.07568 10.6607 4.80595 11.391 5.6999 11.391H9.76672C10.6607 11.391 11.3909 10.6607 11.3909 9.76679Z"
					fill="currentColor"
				/>
				<path
					d="M9.76679 7.32362C8.87284 7.32362 8.14258 6.59336 8.14258 5.69941C8.14258 4.80546 8.87284 4.0752 9.76679 4.0752C10.6607 4.0752 11.391 4.80546 11.391 5.69941V7.32362H9.76679Z"
					fill="currentColor"
				/>
				<path
					d="M9.76679 12.6094C8.87284 12.6094 8.14258 13.3396 8.14258 14.2336V18.3004C8.14258 19.1944 8.87284 19.9246 9.76679 19.9246C10.6607 19.9246 11.391 19.1944 11.391 18.3004V14.2336C11.391 13.3396 10.6607 12.6094 9.76679 12.6094Z"
					fill="currentColor"
				/>
				<path
					d="M7.32411 14.2336C7.32411 15.1275 6.59384 15.8578 5.6999 15.8578C4.80595 15.8578 4.07568 15.1275 4.07568 14.2336C4.07568 13.3396 4.80595 12.6094 5.6999 12.6094H7.32411V14.2336Z"
					fill="currentColor"
				/>
				<path
					d="M15.8578 18.3C15.8578 17.406 15.1275 16.6758 14.2336 16.6758H12.6094V18.3C12.6094 19.1939 13.3396 19.9242 14.2336 19.9242C15.1275 19.9242 15.8578 19.1939 15.8578 18.3Z"
					fill="currentColor"
				/>
				<path
					d="M14.2336 15.8578C13.3396 15.8578 12.6094 15.1275 12.6094 14.2336C12.6094 13.3396 13.3396 12.6094 14.2336 12.6094H18.3004C19.1944 12.6094 19.9246 13.3396 19.9246 14.2336C19.9246 15.1275 19.1944 15.8578 18.3004 15.8578H14.2336Z"
					fill="currentColor"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M0 2C0 0.89543 0.895431 0 2 0H22C23.1046 0 24 0.895431 24 2V22C24 23.1046 23.1046 24 22 24H2C0.89543 24 0 23.1046 0 22V2ZM2 2H22V22H2V2Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);

SlackIcon.propTypes = {
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
