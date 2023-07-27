import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const ArrowForkIcon = ({
	assistiveText = 'ArrowFork',
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
					d="M24.0003 2.00012L16 2L18.5859 4.58593L14.0859 9.08597L16.9143 11.9144L21.4143 7.41437L24.0002 10.0003L24.0003 2.00012Z"
					fill="currentColor"
				/>
				<path
					d="M0.000245841 2.00025L8.00016 2.00021L5.41423 4.58607L13.9999 13.1718V24.0002H9.99991V14.8286L2.58576 7.41446L0 10.0002L0.000245841 2.00025Z"
					fill="currentColor"
				/>
			</Fragment>
		) : (
			<Fragment>
				<path
					d="M24.0003 2.00012L16 2L18.5859 4.58593L14.0859 9.08597L16.9143 11.9144L21.4143 7.41437L24.0002 10.0003L24.0003 2.00012Z"
					fill="currentColor"
				/>
				<path
					d="M0.000245841 2.00025L8.00016 2.00021L5.41423 4.58607L13.9999 13.1718V24.0002H9.99991V14.8286L2.58576 7.41446L0 10.0002L0.000245841 2.00025Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);

ArrowForkIcon.propTypes = {
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
