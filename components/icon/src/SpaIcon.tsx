import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const SpaIcon = ({
	assistiveText = 'Spa',
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
					d="M12.9853 1.88355C15.286 4.18421 16.4572 7.18664 16.4989 10.2018C14.7126 11.1913 13.1743 12.5734 12.0001 14.2315C10.8258 12.5734 9.28751 11.1913 7.50122 10.2018C7.54294 7.18664 8.71412 4.18421 11.0148 1.88355C11.3306 1.56775 11.6596 1.27324 12.0001 1C12.3405 1.27324 12.6695 1.56775 12.9853 1.88355Z"
					fill="currentColor"
				/>
				<path
					d="M0.154666 10.5447C0.420726 10.5263 0.689273 10.517 0.96 10.517C6.17499 10.517 10.5806 13.9822 12 18.7357C13.4194 13.9822 17.825 10.517 23.04 10.517C23.3107 10.517 23.5793 10.5263 23.8453 10.5447C23.9471 11.1603 24 11.7925 24 12.437C24 18.7993 18.8423 23.957 12.48 23.957C12.3192 23.957 12.1592 23.9537 12 23.9471C11.8408 23.9537 11.6808 23.957 11.52 23.957C5.15768 23.957 0 18.7993 0 12.437C0 11.7925 0.052925 11.1603 0.154666 10.5447Z"
					fill="currentColor"
				/>
			</Fragment>
		) : (
			<Fragment>
				<path
					d="M16.4989 10.2018C15.7617 10.6102 15.0666 11.0855 14.422 11.6194C14.7685 8.85484 13.9612 5.97324 12.0001 3.75395C10.0389 5.97324 9.23161 8.85484 9.5781 11.6194C8.93349 11.0855 8.23848 10.6102 7.50122 10.2018C7.54294 7.18664 8.71412 4.18421 11.0148 1.88355C11.3306 1.56775 11.6596 1.27324 12.0001 1C12.3405 1.27324 12.6695 1.56775 12.9853 1.88355C15.286 4.18421 16.4572 7.18664 16.4989 10.2018Z"
					fill="currentColor"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M0.96 10.517C5.17213 10.517 8.85627 12.7776 10.8653 16.1517C11.3437 16.9551 11.7271 17.8216 12 18.7357C12.273 17.8216 12.6563 16.9551 13.1347 16.1517C15.1437 12.7776 18.8279 10.517 23.04 10.517C23.3107 10.517 23.5793 10.5263 23.8453 10.5447C23.9471 11.1603 24 11.7925 24 12.437C24 18.7832 18.8684 23.9309 12.5282 23.9569L12.48 23.957C12.3192 23.957 12.1592 23.9537 12 23.9471C11.8408 23.9537 11.6808 23.957 11.52 23.957L11.4718 23.9569C5.13164 23.9309 0 18.7832 0 12.437C0 11.7925 0.052925 11.1603 0.154666 10.5447C0.420726 10.5263 0.689273 10.517 0.96 10.517ZM13.9164 19.3079C14.9939 15.6992 18.1547 12.9915 21.999 12.5733C21.9292 17.5498 18.0409 21.603 13.132 21.935L13.9164 19.3079ZM10.0836 19.3079L10.868 21.935C5.95912 21.603 2.07078 17.5498 2.00096 12.5732C5.84533 12.9915 9.00606 15.6992 10.0836 19.3079Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);

SpaIcon.propTypes = {
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
