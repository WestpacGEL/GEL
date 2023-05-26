import PropTypes from 'prop-types';
import { Icon, IconProps } from './Icon';

export const NotificationActiveIcon = ({
	assistiveText = 'Notification Active',
	copyrightYear = '2020',
	size = 'medium',
	overrides,
	...props
}: Omit<IconProps, 'icon'>) => (
	<Icon
		icon="NotificationActiveIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		{...props}
	>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M14,3.25203497 C17.4504544,4.14012056 20,7.27232114 20,11 L20,17 L22,19 L22,20 L2,20 L2,19 L4,17 L4,11 C4,7.27232114 6.54954557,4.14012056 10,3.25203497 L10,2 C10,0.8954305 10.8954305,0 12,0 C13.1045695,0 14,0.8954305 14,2 L14,3.25203497 L14,3.25203497 Z M9,21 L15.003,21 C15.003,22.6568542 13.6591827,24 12.0015,24 C10.3438173,24 9,22.6568542 9,21 Z M0.041073777,10 C0.316286557,6.66401946 1.95604422,3.71495492 4.40091892,1.71223423 L5.66743243,3.2601952 C3.67084816,4.89569849 2.31858497,7.28854422 2.04937524,10 L0.041073777,10 L0.041073777,10 Z M23.9589262,10 L23.9589262,10 L21.9506248,10 C21.681415,7.28854422 20.3291518,4.89569849 18.3325676,3.2601952 L19.5990811,1.71223423 C22.0439558,3.71495492 23.6837134,6.66401946 23.9589262,10 Z"
		/>
	</Icon>
);

NotificationActiveIcon.propTypes = {
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
