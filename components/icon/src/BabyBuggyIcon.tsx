import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const BabyBuggyIcon = ({
	assistiveText = 'Baby Buggy',
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
					d="M22.2388 6.17317C22.7413 7.38642 23 8.68678 23 10H13V0C14.3132 0 15.6136 0.258658 16.8268 0.761205C18.0401 1.26375 19.1425 2.00035 20.0711 2.92893C20.9997 3.85752 21.7362 4.95991 22.2388 6.17317Z"
					fill="currentColor"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M2.38197 10H0V8H3.61803L5.11803 11H22.9871C22.9957 11.1656 23 11.3323 23 11.5C23 13.7036 22.2497 15.732 20.9907 17.3437C21.6186 18.0501 22 18.9805 22 20C22 22.2091 20.2091 24 18 24C15.7909 24 14 22.2091 14 20H11C11 22.2091 9.20914 24 7 24C4.79086 24 3 22.2091 3 20C3 18.3126 4.04481 16.8693 5.52278 16.2816L2.38197 10ZM7 22C8.10457 22 9 21.1046 9 20C9 18.8954 8.10457 18 7 18C5.89543 18 5 18.8954 5 20C5 21.1046 5.89543 22 7 22ZM18 22C19.1046 22 20 21.1046 20 20C20 18.8954 19.1046 18 18 18C16.8954 18 16 18.8954 16 20C16 21.1046 16.8954 22 18 22Z"
					fill="currentColor"
				/>
			</Fragment>
		) : (
			<Fragment>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M23 10C23 9.32662 22.932 8.65661 22.798 8C22.6706 7.3761 22.4837 6.7643 22.2388 6.17317C21.7362 4.95991 20.9997 3.85752 20.0711 2.92893C19.1425 2.00035 18.0401 1.26375 16.8268 0.761205C16.2357 0.516351 15.6239 0.329394 15 0.202041C14.3434 0.0680107 13.6734 0 13 0V10H23ZM20.391 6.93853C20.5343 7.2844 20.6528 7.63912 20.746 8H15V2.25403C15.3609 2.34721 15.7156 2.4657 16.0615 2.60896C17.0321 3.011 17.914 3.60028 18.6569 4.34315C19.3997 5.08601 19.989 5.96793 20.391 6.93853Z"
					fill="currentColor"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M2.38197 10H0V8H3.61803L5.11803 11H22.9871C22.9957 11.1656 23 11.3323 23 11.5C23 11.6677 22.9957 11.8344 22.9871 12C22.9696 12.3383 22.9343 12.672 22.8823 13C22.6252 14.6209 21.9581 16.1053 20.9907 17.3437C21.6186 18.0501 22 18.9805 22 20C22 22.2091 20.2091 24 18 24C15.7909 24 14 22.2091 14 20H11C11 22.2091 9.20914 24 7 24C4.79086 24 3 22.2091 3 20C3 18.3126 4.04481 16.8693 5.52278 16.2816L2.38197 10ZM7.6438 16.0515L6.11803 13H20.85C20.6056 14.2044 20.0726 15.3046 19.3254 16.2248C18.9106 16.0792 18.4645 16 18 16C16.5194 16 15.2267 16.8044 14.5351 18H10.4649C9.87563 16.9814 8.8501 16.2467 7.6438 16.0515ZM16 20C16 21.1046 16.8954 22 18 22C19.1046 22 20 21.1046 20 20C20 18.8954 19.1046 18 18 18C16.8954 18 16 18.8954 16 20ZM7 22C8.10457 22 9 21.1046 9 20C9 18.8954 8.10457 18 7 18C5.89543 18 5 18.8954 5 20C5 21.1046 5.89543 22 7 22Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);

BabyBuggyIcon.propTypes = {
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
