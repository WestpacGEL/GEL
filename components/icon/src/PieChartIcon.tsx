import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const PieChartIcon = ({
	assistiveText = 'PieChart',
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
					d="M12 24C5.37258 24 0 18.6182 0 11.9794C0 5.67798 4.84047 0.509022 11 0V13.0223H23.9555C23.4278 19.1728 18.2767 24 12 24Z"
					fill="currentColor"
				/>
				<path d="M23.96 11C23.4975 5.14095 18.8435 0.482904 13 0V11H23.96Z" fill="currentColor" />
			</Fragment>
		) : (
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M23.631 9C23.7947 9.6471 23.906 10.3154 23.96 11H13V0C13.6846 0.0565753 14.3529 0.170457 15 0.336862C19.231 1.42485 22.5578 4.75813 23.631 9ZM21.5542 9C20.5875 5.86688 18.1243 3.39621 15 2.41612V9H21.5542ZM11 13.0223V0C10.3154 0.0565728 9.64715 0.170706 9 0.337556C3.82432 1.67197 0 6.37832 0 11.9794C0 18.6182 5.37258 24 12 24C17.578 24 22.267 20.1877 23.6122 15.0223C23.7807 14.3752 23.8967 13.707 23.9555 13.0223H11ZM21.5311 15.0223H9V2.41727C4.94512 3.69345 2 7.4908 2 11.9794C2 17.5169 6.48038 22 12 22C16.4617 22 20.2455 19.0698 21.5311 15.0223Z"
				fill="currentColor"
			/>
		)}
	</Icon>
);

PieChartIcon.propTypes = {
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
