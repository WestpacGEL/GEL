import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const StrollerIcon = ({
	assistiveText = 'Stroller',
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
					d="M15.6513 9.37651L21.9396 3.05707C20.2185 1.3445 17.9571 0.281287 15.5404 0.0484215C13.1774 -0.179268 10.8086 0.400638 8.81954 1.69078L15.6513 9.37651Z"
					fill="currentColor"
				/>
				<path
					d="M7.20841 1.38673C6.45277 0.536029 5.35061 1.62098e-05 4.12326 1.62098e-05C1.88687 1.62098e-05 0.066146 1.77966 0 4.00002H2.00176C2.06652 2.88458 2.99159 2.00002 4.12326 2.00002C4.92037 2.00002 5.61497 2.43887 5.97864 3.08815V16C5.97864 17.1046 6.87407 18 7.97864 18H19.7518C20.6146 18 21.0724 16.9806 20.4992 16.3357L7.21128 1.38673H7.20841Z"
					fill="currentColor"
				/>
				<path
					d="M9.97864 21.5C9.97864 22.8807 8.85935 24 7.47864 24C6.09793 24 4.97864 22.8807 4.97864 21.5C4.97864 20.1193 6.09793 19 7.47864 19C8.85935 19 9.97864 20.1193 9.97864 21.5Z"
					fill="currentColor"
				/>
				<path
					d="M22.4786 21.5C22.4786 22.8807 21.3594 24 19.9786 24C18.5979 24 17.4786 22.8807 17.4786 21.5C17.4786 20.1193 18.5979 19 19.9786 19C21.3594 19 22.4786 20.1193 22.4786 21.5Z"
					fill="currentColor"
				/>
			</Fragment>
		) : (
			<Fragment>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M21.9396 3.05707L15.6513 9.37651L8.81954 1.69078C9.40147 1.31332 10.0159 0.996663 10.6532 0.743233C12.1941 0.13044 13.8687 -0.112653 15.5404 0.0484215C17.2849 0.216515 18.9485 0.817267 20.3863 1.78261C20.9403 2.15459 21.4609 2.58071 21.9396 3.05707ZM18.9428 3.23322L15.7334 6.45852L12.0894 2.35894C13.1372 2.04438 14.2437 1.93274 15.3486 2.0392C16.6298 2.16265 17.857 2.57437 18.9428 3.23322Z"
					fill="currentColor"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M5.97864 3.08815V16C5.97864 17.1046 6.87407 18 7.97864 18H19.7518C20.6146 18 21.0724 16.9806 20.4992 16.3357L7.21128 1.38673H7.20841C6.45277 0.536029 5.35061 1.62159e-05 4.12326 1.62159e-05C1.88687 1.62159e-05 0.066146 1.77966 0 4.00002H2.00176C2.06652 2.88458 2.99159 2.00002 4.12326 2.00002C4.92037 2.00002 5.61497 2.43887 5.97864 3.08815ZM17.525 16L7.97864 5.26041V16H17.525Z"
					fill="currentColor"
				/>
				<path
					d="M9.97864 21.5C9.97864 22.8807 8.85935 24 7.47864 24C6.09793 24 4.97864 22.8807 4.97864 21.5C4.97864 20.1193 6.09793 19 7.47864 19C8.85935 19 9.97864 20.1193 9.97864 21.5Z"
					fill="currentColor"
				/>
				<path
					d="M22.4786 21.5C22.4786 22.8807 21.3594 24 19.9786 24C18.5979 24 17.4786 22.8807 17.4786 21.5C17.4786 20.1193 18.5979 19 19.9786 19C21.3594 19 22.4786 20.1193 22.4786 21.5Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);

StrollerIcon.propTypes = {
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
