import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const CursorArrowRaysIcon = ({
	assistiveText = 'Cursor Arrow Rays',
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
				<g clip-path="url(#clip0_2741_3564)">
					<path
						d="M13.2935 0.072621C13.5571 0.102135 13.7981 0.235143 13.9636 0.442385C14.1291 0.649626 14.2055 0.914124 14.176 1.17769L13.7309 5.15285C13.7014 5.41642 13.5684 5.65747 13.3611 5.82297C13.1539 5.98847 12.8894 6.06487 12.6258 6.03535C12.3623 6.00584 12.1212 5.87283 11.9557 5.66559C11.7902 5.45835 11.7138 5.19385 11.7433 4.93028L12.1885 0.955126C12.218 0.691557 12.351 0.450507 12.5582 0.285006C12.7655 0.119504 13.03 0.0431067 13.2935 0.072621Z"
						fill="currentColor"
					/>
					<path
						d="M4.1739 3.22502C3.90868 3.2252 3.6544 3.33073 3.46699 3.51839C3.27959 3.70606 3.1744 3.96049 3.17458 4.2257C3.17477 4.49092 3.2803 4.7452 3.46796 4.93261L6.29833 7.7591C6.48599 7.9465 6.74042 8.05169 7.00563 8.05151C7.27085 8.05132 7.52513 7.94579 7.71254 7.75813C7.89995 7.57046 8.00513 7.31604 8.00495 7.05082C8.00477 6.7856 7.89924 6.53132 7.71157 6.34391L4.88121 3.51743C4.69354 3.33002 4.43912 3.22484 4.1739 3.22502Z"
						fill="currentColor"
					/>
					<path
						d="M0.245821 12.6149C0.0806036 12.8224 0.00456904 13.087 0.0344444 13.3505C0.0643197 13.614 0.197658 13.8549 0.405126 14.0201C0.612593 14.1853 0.877196 14.2614 1.14072 14.2315L5.11527 13.7809C5.37879 13.751 5.61966 13.6177 5.78488 13.4102C5.9501 13.2028 6.02613 12.9382 5.99626 12.6746C5.96638 12.4111 5.83304 12.1702 5.62558 12.005C5.41811 11.8398 5.1535 11.7638 4.88998 11.7937L0.915435 12.2442C0.651906 12.2741 0.411039 12.4074 0.245821 12.6149Z"
						fill="currentColor"
					/>
					<path
						d="M5.5807 22.1623C5.35604 22.0214 5.19657 21.7969 5.13738 21.5384C5.07819 21.2799 5.12412 21.0084 5.26507 20.7838L7.39087 17.3954C7.53182 17.1708 7.75625 17.0113 8.01477 16.9521C8.2733 16.8929 8.54475 16.9388 8.76941 17.0798C8.99408 17.2207 9.15354 17.4452 9.21274 17.7037C9.27193 17.9622 9.226 18.2337 9.08505 18.4583L6.95924 21.8467C6.81829 22.0713 6.59387 22.2308 6.33534 22.29C6.07682 22.3492 5.80536 22.3033 5.5807 22.1623Z"
						fill="currentColor"
					/>
					<path
						d="M22.2431 6.36099C22.302 6.10238 22.2557 5.83099 22.1144 5.60652C21.9731 5.38206 21.7485 5.2229 21.4899 5.16406C21.2313 5.10522 20.9599 5.15152 20.7354 5.29278L17.35 7.42322C17.1255 7.56448 16.9664 7.78912 16.9075 8.04773C16.8487 8.30634 16.895 8.57773 17.0362 8.8022C17.1775 9.02666 17.4021 9.18583 17.6607 9.24466C17.9193 9.3035 18.1907 9.2572 18.4152 9.11594L21.8006 6.9855C22.0251 6.84424 22.1843 6.6196 22.2431 6.36099Z"
						fill="currentColor"
					/>
					<path
						d="M23.4033 15.2117L18.9918 16.6861L24.0001 21.6709L21.6831 23.9879L16.6865 18.9913L15.2121 23.4028L11.7017 11.7012L23.4033 15.2117Z"
						fill="currentColor"
					/>
				</g>
				<defs>
					<clipPath id="clip0_2741_3564">
						<rect width="24" height="24" fill="currentColor" />
					</clipPath>
				</defs>
			</Fragment>
		) : (
			<Fragment>
				<g clip-path="url(#clip0_2741_3563)">
					<path
						d="M13.2935 0.072621C13.5571 0.102135 13.7981 0.235143 13.9636 0.442385C14.1291 0.649626 14.2055 0.914124 14.176 1.17769L13.7309 5.15285C13.7014 5.41642 13.5684 5.65747 13.3611 5.82297C13.1539 5.98847 12.8894 6.06487 12.6258 6.03535C12.3623 6.00584 12.1212 5.87283 11.9557 5.66559C11.7902 5.45835 11.7138 5.19385 11.7433 4.93028L12.1885 0.955126C12.218 0.691557 12.351 0.450507 12.5582 0.285006C12.7655 0.119504 13.03 0.0431067 13.2935 0.072621Z"
						fill="currentColor"
					/>
					<path
						d="M4.1739 3.22502C3.90868 3.2252 3.6544 3.33073 3.46699 3.51839C3.27959 3.70606 3.1744 3.96049 3.17458 4.2257C3.17477 4.49092 3.2803 4.7452 3.46796 4.93261L6.29833 7.7591C6.48599 7.9465 6.74042 8.05169 7.00563 8.05151C7.27085 8.05132 7.52513 7.94579 7.71254 7.75813C7.89995 7.57046 8.00513 7.31604 8.00495 7.05082C8.00477 6.7856 7.89924 6.53132 7.71157 6.34391L4.88121 3.51743C4.69354 3.33002 4.43912 3.22484 4.1739 3.22502Z"
						fill="currentColor"
					/>
					<path
						d="M0.245821 12.6149C0.0806036 12.8224 0.00456904 13.087 0.0344444 13.3505C0.0643197 13.614 0.197658 13.8549 0.405126 14.0201C0.612593 14.1853 0.877196 14.2614 1.14072 14.2315L5.11527 13.7809C5.37879 13.751 5.61966 13.6177 5.78488 13.4102C5.9501 13.2028 6.02613 12.9382 5.99626 12.6746C5.96638 12.4111 5.83304 12.1702 5.62558 12.005C5.41811 11.8398 5.1535 11.7638 4.88998 11.7937L0.915435 12.2442C0.651906 12.2741 0.411039 12.4074 0.245821 12.6149Z"
						fill="currentColor"
					/>
					<path
						d="M5.5807 22.1623C5.35604 22.0214 5.19657 21.7969 5.13738 21.5384C5.07819 21.2799 5.12412 21.0084 5.26507 20.7838L7.39087 17.3954C7.53182 17.1708 7.75625 17.0113 8.01477 16.9521C8.2733 16.8929 8.54475 16.9388 8.76941 17.0798C8.99408 17.2207 9.15354 17.4452 9.21274 17.7037C9.27193 17.9622 9.226 18.2337 9.08505 18.4583L6.95924 21.8467C6.81829 22.0713 6.59387 22.2308 6.33534 22.29C6.07682 22.3492 5.80536 22.3033 5.5807 22.1623Z"
						fill="currentColor"
					/>
					<path
						d="M22.2431 6.36099C22.302 6.10238 22.2557 5.83099 22.1144 5.60652C21.9731 5.38206 21.7485 5.2229 21.4899 5.16406C21.2313 5.10522 20.9599 5.15152 20.7354 5.29278L17.35 7.42322C17.1255 7.56448 16.9664 7.78912 16.9075 8.04773C16.8487 8.30634 16.895 8.57773 17.0362 8.8022C17.1775 9.02666 17.4021 9.18583 17.6607 9.24466C17.9193 9.3035 18.1907 9.2572 18.4152 9.11594L21.8006 6.9855C22.0251 6.84424 22.1843 6.6196 22.2431 6.36099Z"
						fill="currentColor"
					/>
					<path
						d="M23.4033 15.2117L18.9918 16.6861L24.0001 21.6709L21.6831 23.9879L16.6865 18.9913L15.2121 23.4028L11.7017 11.7012L23.4033 15.2117Z"
						fill="currentColor"
					/>
				</g>
				<defs>
					<clipPath id="clip0_2741_3563">
						<rect width="24" height="24" fill="currentColor" />
					</clipPath>
				</defs>
			</Fragment>
		)}
	</Icon>
);

CursorArrowRaysIcon.propTypes = {
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
