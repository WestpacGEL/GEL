import PropTypes from 'prop-types';
import { Icon, IconProps } from './Icon';

export const GooglePlusIcon = ({
	assistiveText = 'Google Plus',
	copyrightYear = '2020',
	size = 'medium',
	overrides,
	...props
}: Omit<IconProps, 'icon'>) => (
	<Icon
		icon="GooglePlusIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		{...props}
	>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M2,0 L22,0 C23.1045695,-2.02906125e-16 24,0.8954305 24,2 L24,22 C24,23.1045695 23.1045695,24 22,24 L2,24 C0.8954305,24 1.3527075e-16,23.1045695 0,22 L0,2 L0,2 C-1.3527075e-16,0.8954305 0.8954305,2.02906125e-16 2,0 L2,0 Z M18,11 L16,11 L16,13 L18,13 L18,15 L20,15 L20,13 L22,13 L22,11 L20,11 L20,9 L18,9 L18,11 Z M8.36363636,13.1863638 L11.9727273,13.1863638 C11.8272727,14.1227275 10.8818182,15.9318184 8.36363636,15.9318184 C6.19090909,15.9318184 4.41818182,14.1318184 4.41818182,11.9136366 C4.41818182,9.69545474 6.19090909,7.89545474 8.36363636,7.89545474 C9.6,7.89545474 10.4272727,8.42272746 10.9,8.87727292 L12.6272727,7.21363655 C11.5181818,6.17727292 10.0818182,5.55000019 8.36363636,5.55000019 C4.84545455,5.55000019 2,8.39545474 2,11.9136366 C2,15.4318184 4.84545455,18.2772729 8.36363636,18.2772729 C12.0363636,18.2772729 14.4727273,15.6954547 14.4727273,12.0590911 C14.4727273,11.6409093 14.4272727,11.3227275 14.3727273,11.0045456 L8.36363636,11 L8.36363636,13.1863638 Z"
		/>
	</Icon>
);

GooglePlusIcon.propTypes = {
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
	 * The icon SVG metadata copyright year text
	 */
	copyrightYear: PropTypes.string,
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
