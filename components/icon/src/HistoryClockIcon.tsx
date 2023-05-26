import PropTypes from 'prop-types';
import { Icon, IconProps } from './Icon';

export const HistoryClockIcon = ({
	assistiveText = 'History Clock',
	copyrightYear = '2020',
	size = 'medium',
	overrides,
	...props
}: Omit<IconProps, 'icon'>) => (
	<Icon
		icon="HistoryClockIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		{...props}
	>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M6.77789622,20.0665245 L8.05829694,18.5300437 C9.53261534,19.7599774 11.4298869,20.5 13.5,20.5 C18.1944204,20.5 22,16.6944204 22,12 C22,7.30557963 18.1944204,3.5 13.5,3.5 C8.80557963,3.5 5,7.30557963 5,12 L3,12 C3,6.20101013 7.70101013,1.5 13.5,1.5 C19.2989899,1.5 24,6.20101013 24,12 C24,17.7989899 19.2989899,22.5 13.5,22.5 C10.9428015,22.5 8.59911307,21.5858544 6.77789622,20.0665245 L6.77789622,20.0665245 Z M4,16.5 L0,12 L8,12 L4,16.5 Z M14,12.8457833 L18.1961524,15.268433 L17.1961524,17.0004838 L12,14.0004838 L12.0002793,14 L12,14 L12,6 L14,6 L14,12.8457833 Z"
		/>
	</Icon>
);

HistoryClockIcon.propTypes = {
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
