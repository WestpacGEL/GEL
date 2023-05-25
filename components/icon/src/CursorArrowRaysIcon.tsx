import PropTypes from 'prop-types';
import { Icon, IconProps } from './Icon';

export const CursorArrowRaysIcon = ({
	assistiveText = 'Cursor arrow rays',
	copyrightYear = '2021',
	size = 'medium',
	...props
}: Omit<IconProps, 'icon'>) => (
	<Icon
		icon="CursorArrowRaysIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		{...props}
	>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="m11 10 8.167 7.524-3.675.107 2.45 5.563-1.878.806-2.45-5.562L11 21.018V10Zm-4.851 3.328a1 1 0 0 1-.75 1.2l-3.897.899a1 1 0 0 1-.45-1.949l3.897-.9a1 1 0 0 1 1.2.75ZM21.368 4.5a1 1 0 0 1-.148 1.406l-3.108 2.517a1 1 0 1 1-1.26-1.554l3.11-2.517a1 1 0 0 1 1.406.148Zm-17.33-.148 3.11 2.517a1 1 0 0 1-1.26 1.554L2.78 5.907a1 1 0 0 1 1.259-1.554ZM12 0a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1Z"
		/>
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
	 * The icon SVG metadata copyright year text
	 */
	copyrightYear: PropTypes.string,
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
