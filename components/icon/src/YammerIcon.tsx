import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const YammerIcon = ({
	assistiveText = 'Yammer',
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
				d="M0 2C0 0.89543 0.895431 0 2 0H22C23.1046 0 24 0.895431 24 2V22C24 23.1046 23.1046 24 22 24H2C0.89543 24 0 23.1046 0 22V2ZM13.2518 7.02362L9.58192 16.1792C8.96041 17.7604 8.33891 18.8438 6.45733 18.8438C6.20812 18.8438 5.93027 18.8261 5.65974 18.7786C5.28561 18.6713 5.06504 18.2838 5.1668 17.9079C5.25576 17.577 5.56285 17.3625 5.89189 17.3796C5.91443 17.3814 6.25809 17.4021 6.35619 17.4021C7.3768 17.4021 7.8216 16.7672 8.30113 15.4121L4.88468 7.07724C4.74698 6.65437 4.96268 6.19494 5.3825 6.03713C5.79196 5.88358 6.24651 6.05663 6.42991 6.44477L9.1426 13.2959H9.18281L11.7621 6.49595C11.9071 6.10233 12.336 5.89638 12.7412 6.02555C13.1537 6.15778 13.3841 6.60867 13.2518 7.02362ZM17.2073 7.62703L17.1856 7.63854C16.675 7.92004 13.2232 10.3384 13.6126 10.612C14.0001 10.8819 16.3606 9.8199 17.9734 8.93639C18.2787 8.69205 18.3561 8.25212 18.141 7.91639C17.9509 7.62087 17.5951 7.499 17.274 7.59223C17.2525 7.60293 17.2304 7.61473 17.2073 7.62703ZM19.3602 13.2923C17.5213 13.2917 14.9408 13.0864 14.7312 12.6641C14.5216 12.237 18.7113 11.7776 19.2944 11.7764C19.3291 11.7764 19.362 11.7764 19.3943 11.7782C19.7197 11.8501 19.9732 12.1291 19.9982 12.4789C20.0244 12.8768 19.7453 13.2253 19.3602 13.2923ZM18.141 17.2298C17.9509 17.5247 17.5951 17.6478 17.274 17.5545L17.2368 17.5346C17.2203 17.5258 17.2032 17.5167 17.1856 17.507C16.675 17.2261 13.2232 14.8071 13.6126 14.5347C14.0001 14.2636 16.3606 15.3262 17.9734 16.2098C18.2787 16.4535 18.3561 16.894 18.141 17.2298Z"
				fill="currentColor"
			/>
		) : (
			<Fragment>
				<path
					d="M13.2519 7.0241L9.58201 16.1797C8.96051 17.7609 8.339 18.8443 6.45743 18.8443C6.20821 18.8443 5.93037 18.8266 5.65983 18.7791C5.28571 18.6718 5.06513 18.2843 5.16689 17.9083C5.25585 17.5775 5.56295 17.363 5.89198 17.3801C5.91452 17.3819 6.25818 17.4026 6.35628 17.4026C7.37689 17.4026 7.82169 16.7677 8.30122 15.4126L4.88478 7.07772C4.74707 6.65485 4.96277 6.19542 5.38259 6.03761C5.79205 5.88406 6.2466 6.05711 6.43001 6.44524L9.14269 13.2964H9.18291L11.7621 6.49643C11.9072 6.10281 12.3361 5.89686 12.7413 6.02603C13.1538 6.15826 13.3842 6.60915 13.2519 7.0241Z"
					fill="currentColor"
				/>
				<path
					d="M17.2074 7.6275L17.1857 7.63902C16.6751 7.92052 13.2233 10.3389 13.6126 10.6125C14.0002 10.8824 16.3607 9.82038 17.9735 8.93686C18.2788 8.69253 18.3562 8.2526 18.1411 7.91687C17.951 7.62135 17.5952 7.49948 17.274 7.59271C17.2527 7.60337 17.2304 7.61526 17.2074 7.6275Z"
					fill="currentColor"
				/>
				<path
					d="M19.3603 13.2928C17.5214 13.2922 14.9409 13.0869 14.7313 12.6646C14.5217 12.2375 18.7114 11.7781 19.2945 11.7768C19.3292 11.7768 19.3621 11.7768 19.3944 11.7787C19.7198 11.8506 19.9733 12.1296 19.9983 12.4794C20.0245 12.8773 19.7454 13.2258 19.3603 13.2928Z"
					fill="currentColor"
				/>
				<path
					d="M18.1411 17.2302C17.951 17.5251 17.5952 17.6482 17.274 17.555L17.2369 17.5351C17.2282 17.5304 17.2193 17.5257 17.2102 17.5208C17.2022 17.5165 17.194 17.512 17.1857 17.5075C16.6751 17.2266 13.2233 14.8076 13.6126 14.5352C14.0002 14.2641 16.3607 15.3267 17.9735 16.2102C18.2788 16.454 18.3562 16.8945 18.1411 17.2302Z"
					fill="currentColor"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M0 2C0 0.89543 0.895431 0 2 0H22C23.1046 0 24 0.895431 24 2V22C24 23.1046 23.1046 24 22 24H2C0.89543 24 0 23.1046 0 22V2ZM2 2H22V22H2L2 2Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);

YammerIcon.propTypes = {
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
