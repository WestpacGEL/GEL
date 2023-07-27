import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const GrowthIcon = ({
	assistiveText = 'Growth',
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
					d="M9.00569 2.8137C9.10188 1.24362 10.4057 0 12 0C13.5943 0 14.8981 1.24362 14.9943 2.8137C16.4021 2.11197 18.1311 2.6193 18.9282 4C19.7253 5.3807 19.3003 7.13165 17.9886 8C19.3003 8.86835 19.7253 10.6193 18.9282 12C18.1311 13.3807 16.4021 13.888 14.9943 13.1863C14.8981 14.7564 13.5943 16 12 16C10.4057 16 9.10188 14.7564 9.00569 13.1863C7.59786 13.888 5.86894 13.3807 5.0718 12C4.27465 10.6193 4.69975 8.86835 6.01138 8C4.69975 7.13165 4.27465 5.3807 5.0718 4C5.86894 2.6193 7.59786 2.11197 9.00569 2.8137ZM12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z"
					fill="currentColor"
				/>
				<path
					d="M2 14C2 19.5222 6.47778 24 12 24C12 18.4778 7.52222 14 2 14Z"
					fill="currentColor"
				/>
				<path
					d="M22 14C16.4778 14 12 18.4778 12 24C17.5222 24 22 19.5222 22 14Z"
					fill="currentColor"
				/>
			</Fragment>
		) : (
			<Fragment>
				<path
					d="M12 10C13.1046 10 14 9.10457 14 8C14 6.89543 13.1046 6 12 6C10.8954 6 10 6.89543 10 8C10 9.10457 10.8954 10 12 10Z"
					fill="currentColor"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M14.2102 0.971446C13.6619 0.374294 12.8746 0 12 0C11.1254 0 10.3381 0.374294 9.78978 0.971446C9.3386 1.46278 9.04911 2.10498 9.00569 2.8137C8.37021 2.49695 7.6693 2.42654 7.0182 2.57162C6.22688 2.74794 5.50912 3.24254 5.0718 4C4.63448 4.75746 4.56502 5.62636 4.80798 6.39983C5.0079 7.03623 5.41932 7.60804 6.01138 8C5.41932 8.39196 5.0079 8.96377 4.80799 9.60017C4.56502 10.3736 4.63448 11.2425 5.0718 12C5.50912 12.7575 6.22687 13.2521 7.0182 13.4284C7.6693 13.5735 8.37021 13.5031 9.00569 13.1863C9.04911 13.895 9.3386 14.5372 9.78978 15.0286C10.3381 15.6257 11.1254 16 12 16C12.8746 16 13.6619 15.6257 14.2102 15.0286C14.6614 14.5372 14.9509 13.895 14.9943 13.1863C15.6298 13.5031 16.3307 13.5735 16.9818 13.4284C17.7731 13.2521 18.4909 12.7575 18.9282 12C19.3655 11.2425 19.435 10.3736 19.192 9.60017C18.9921 8.96377 18.5807 8.39196 17.9886 8C18.5807 7.60804 18.9921 7.03623 19.192 6.39983C19.435 5.62636 19.3655 4.75746 18.9282 4C18.4909 3.24254 17.7731 2.74794 16.9818 2.57162C16.3307 2.42655 15.6298 2.49695 14.9943 2.8137C14.9509 2.10498 14.6614 1.46278 14.2102 0.971446ZM10.8172 5.95134L8.11348 4.60366C7.64587 4.37058 7.0692 4.5404 6.80385 5C6.5385 5.4596 6.67977 6.04392 7.11543 6.33234L9.63441 8L7.11543 9.66766C6.67977 9.95608 6.5385 10.5404 6.80385 11C7.0692 11.4596 7.64587 11.6294 8.11348 11.3963L10.8172 10.0487L11.0019 13.064C11.0339 13.5855 11.4693 14 12 14C12.5307 14 12.9661 13.5855 12.9981 13.064L13.1828 10.0487L15.8865 11.3963C16.3541 11.6294 16.9308 11.4596 17.1962 11C17.4615 10.5404 17.3202 9.95608 16.8846 9.66766L14.3656 8L16.8846 6.33234C17.3202 6.04392 17.4615 5.4596 17.1962 5C16.9308 4.5404 16.3541 4.37058 15.8865 4.60366L13.1828 5.95134L12.9981 2.93601C12.9661 2.4145 12.5307 2 12 2C11.4693 2 11.0339 2.4145 11.0019 2.93601L10.8172 5.95134Z"
					fill="currentColor"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M2 14C2 14.6858 2.06906 15.3555 2.2006 16.0025C2.99673 19.9183 6.08167 23.0033 9.99753 23.7994C10.6445 23.9309 11.3142 24 12 24C12.6858 24 13.3555 23.9309 14.0025 23.7994C17.9183 23.0033 21.0033 19.9183 21.7994 16.0025C21.9309 15.3555 22 14.6858 22 14C21.3142 14 20.6445 14.0691 19.9975 14.2006C16.0817 14.9967 12.9967 18.0817 12.2006 21.9975C12.0691 22.6445 12 23.3142 12 24C12 23.3142 11.9309 22.6445 11.7994 21.9975C11.0033 18.0817 7.91833 14.9967 4.00247 14.2006C3.35547 14.0691 2.68579 14 2 14ZM9.64878 21.6488C7.12168 20.8727 5.12733 18.8783 4.35121 16.3512C6.87831 17.1273 8.87267 19.1217 9.64878 21.6488ZM19.6488 16.3512C18.8727 18.8783 16.8783 20.8727 14.3512 21.6488C15.1273 19.1217 17.1217 17.1273 19.6488 16.3512Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);

GrowthIcon.propTypes = {
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
