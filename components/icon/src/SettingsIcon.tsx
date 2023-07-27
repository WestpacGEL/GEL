import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const SettingsIcon = ({
	assistiveText = 'Settings',
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
				d="M21.2525 12C21.2525 12.4125 21.2268 12.8 21.1754 13.175L23.7584 15.15C24.0026 15.325 24.0668 15.6375 23.9126 15.9125L21.4453 20.0625C21.2911 20.3375 20.9698 20.4375 20.6871 20.3375L17.6158 19.1375C16.9861 19.6125 16.2921 20.0125 15.5339 20.3125L15.0713 23.4875C15.0328 23.7875 14.7758 24 14.4673 24H9.53266C9.22425 24 8.98008 23.7875 8.91583 23.4875L8.4532 20.3125C7.69501 20.0125 7.01392 19.6125 6.37139 19.1375L3.30006 20.3375C3.01735 20.425 2.69608 20.3375 2.54187 20.0625L0.0745346 15.9125C-0.0668233 15.6625 -0.00256982 15.325 0.228743 15.15L2.83744 13.175C2.77318 12.8 2.74748 12.3875 2.74748 12C2.74748 11.6125 2.79889 11.2 2.86314 10.825L0.254444 8.85C-0.00256985 8.675 -0.0539726 8.35 0.100236 8.0875L2.55472 3.9375C2.70893 3.6625 3.0302 3.5625 3.31291 3.6625L6.38424 4.8625C7.01392 4.4 7.70786 3.9875 8.46605 3.6875L8.92868 0.5125C8.98008 0.2125 9.22425 0 9.53266 0H14.4673C14.7758 0 15.0328 0.2125 15.0842 0.5125L15.5468 3.6875C16.305 3.9875 16.9861 4.3875 17.6286 4.8625L20.6999 3.6625C20.9827 3.575 21.3039 3.6625 21.4581 3.9375L23.9255 8.0875C24.0668 8.3375 24.0026 8.675 23.7713 8.85L21.1626 10.825C21.2268 11.2 21.2525 11.6 21.2525 12ZM12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z"
				fill="currentColor"
			/>
		) : (
			<Fragment>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12ZM15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
					fill="currentColor"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M17.6158 19.1375L20.6871 20.3375C20.9698 20.4375 21.2911 20.3375 21.4453 20.0625L23.9126 15.9125C24.0668 15.6375 24.0026 15.325 23.7584 15.15L21.1754 13.175C21.2268 12.8 21.2525 12.4125 21.2525 12C21.2525 11.6 21.2268 11.2 21.1626 10.825L23.7713 8.85C24.0026 8.675 24.0668 8.3375 23.9255 8.0875L21.4581 3.9375C21.3039 3.6625 20.9827 3.575 20.6999 3.6625L17.6286 4.8625C16.9861 4.3875 16.305 3.9875 15.5468 3.6875L15.0842 0.5125C15.0328 0.2125 14.7758 0 14.4673 0H9.53266C9.22425 0 8.98008 0.2125 8.92868 0.5125L8.46605 3.6875C7.70786 3.9875 7.01392 4.4 6.38424 4.8625L3.31291 3.6625C3.0302 3.5625 2.70893 3.6625 2.55472 3.9375L0.100236 8.0875C-0.0539726 8.35 -0.00256985 8.675 0.254444 8.85L2.86314 10.825C2.79889 11.2 2.74748 11.6125 2.74748 12C2.74748 12.3875 2.77318 12.8 2.83744 13.175L0.228743 15.15C-0.00256982 15.325 -0.0668233 15.6625 0.0745346 15.9125L2.54187 20.0625C2.69608 20.3375 3.01735 20.425 3.30006 20.3375L6.37139 19.1375C7.01392 19.6125 7.69501 20.0125 8.4532 20.3125L8.91583 23.4875C8.98008 23.7875 9.22425 24 9.53266 24H14.4673C14.7758 24 15.0328 23.7875 15.0713 23.4875L15.5339 20.3125C16.2921 20.0125 16.9861 19.6125 17.6158 19.1375ZM19.1939 12.9034L19.0359 14.0567L21.5474 15.9771L20.3175 18.0459L17.3031 16.8681L16.4113 17.5408C15.9153 17.915 15.3777 18.2235 14.7981 18.4528L13.7217 18.8787L13.2669 22H10.7202L10.2654 18.8787L9.18905 18.4528C8.61947 18.2274 8.08915 17.9202 7.5603 17.5292L6.67222 16.8727L3.66968 18.0459L2.44281 15.9823L5.01405 14.0356L4.80871 12.8372C4.76866 12.6035 4.74748 12.3091 4.74748 12C4.74748 11.7729 4.77917 11.4851 4.83441 11.1628L5.03975 9.96435L2.46618 8.01594L3.68503 5.95513L6.68132 7.12581L7.56818 6.47442C8.09262 6.08922 8.63701 5.77073 9.2019 5.54721L10.2783 5.12132L10.7331 2H13.2798L13.7346 5.12132L14.811 5.54721C15.3805 5.77258 15.9109 6.0798 16.4397 6.47075L17.3278 7.12727L20.3303 5.95415L21.5572 8.0177L18.9859 9.96435L19.1913 11.1628C19.2316 11.3978 19.2525 11.6802 19.2525 12C19.2525 12.3282 19.2321 12.6247 19.1939 12.9034Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);

SettingsIcon.propTypes = {
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
