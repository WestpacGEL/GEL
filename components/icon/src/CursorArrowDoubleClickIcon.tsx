import PropTypes from 'prop-types';
import { Icon, IconProps } from './Icon';

export const CursorArrowDoubleClickIcon = ({
	assistiveText = 'Cursor arrow double-click',
	copyrightYear = '2021',
	size = 'medium',
	overrides,
	...props
}: Omit<IconProps, 'icon'>) => (
	<Icon
		icon="CursorArrowDoubleClickIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		overrides={overrides}
		{...props}
	>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="m11 10 8.167 7.524-3.675.107 2.45 5.563-1.878.806-2.45-5.562L11 21.018V10Zm1-10c6.627 0 12 5.373 12 12 0 .672-.055 1.332-.162 1.974l-1.973-.33A10.07 10.07 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12a9.99 9.99 0 0 0 4.453 8.322l-1.11 1.664A11.989 11.989 0 0 1 0 12C0 5.373 5.373 0 12 0Zm0 5a7 7 0 0 1 6.906 8.152l-1.973-.33a5 5 0 1 0-7.706 3.338l-1.11 1.665A7 7 0 0 1 12 5Z"
		/>
	</Icon>
);

CursorArrowDoubleClickIcon.propTypes = {
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
