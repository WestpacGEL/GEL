import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const QuestionMarkIcon = ({
	assistiveText = 'QuestionMark',
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
					d="M5 8.66726C5 4.9836 7.9836 2 11.6673 2C15.3509 2 18.3345 4.9836 18.3345 8.66726C18.3345 10.8056 17.0177 11.9564 15.7356 13.0769C14.5192 14.1399 13.3341 15.1756 13.3341 17.0013H10.0004C10.0004 13.9656 11.5708 12.7619 12.9514 11.7037C14.0345 10.8735 15.0009 10.1328 15.0009 8.66726C15.0009 6.83376 13.5008 5.33363 11.6673 5.33363C9.83376 5.33363 8.33363 6.83376 8.33363 8.66726H5Z"
					fill="currentColor"
				/>
				<path d="M13.3344 21.9985H10.0007V18.6649H13.3344V21.9985Z" fill="currentColor" />
			</Fragment>
		) : (
			<Fragment>
				<path
					d="M5 8.66726C5 4.9836 7.9836 2 11.6673 2C15.3509 2 18.3345 4.9836 18.3345 8.66726C18.3345 10.8056 17.0177 11.9564 15.7356 13.0769C14.5192 14.1399 13.3341 15.1756 13.3341 17.0013H10.0004C10.0004 13.9656 11.5708 12.7619 12.9514 11.7037C14.0345 10.8735 15.0009 10.1328 15.0009 8.66726C15.0009 6.83376 13.5008 5.33363 11.6673 5.33363C9.83376 5.33363 8.33363 6.83376 8.33363 8.66726H5Z"
					fill="currentColor"
				/>
				<path d="M13.3344 21.9985H10.0007V18.6649H13.3344V21.9985Z" fill="currentColor" />
			</Fragment>
		)}
	</Icon>
);

QuestionMarkIcon.propTypes = {
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
