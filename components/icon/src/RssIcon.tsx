import PropTypes from 'prop-types';
import { Icon, IconProps } from './Icon';

export const RssIcon = ({
	assistiveText = 'Rss',
	copyrightYear = '2020',
	size = 'medium',
	overrides,
	...props
}: Omit<IconProps, 'icon'>) => (
	<Icon
		icon="RssIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		{...props}
	>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M2,0 L22,0 L22,0 C23.1045695,-2.02906125e-16 24,0.8954305 24,2 L24,22 L24,22 C24,23.1045695 23.1045695,24 22,24 L2,24 L2,24 C0.8954305,24 1.3527075e-16,23.1045695 0,22 L0,2 L0,2 C-1.3527075e-16,0.8954305 0.8954305,2.02906125e-16 2,0 Z M8.26259063,17.8600823 C8.26259063,19.0342936 7.30942583,19.9819714 6.12972761,19.9819714 C4.95473251,19.9819714 4,19.0342936 4,17.8600823 C4,16.691358 4.95473251,15.7334901 6.12972761,15.7334901 C7.30942583,15.7334901 8.26259063,16.691358 8.26259063,17.8600823 Z M11.4826573,20 C11.4826573,17.9956888 10.7027239,16.1097394 9.29022144,14.6980208 C7.87615128,13.2831668 6.35155791,12.5032334 4,12.5032334 L4,9.43601803 C9.48696845,9.43601803 14.5631981,14.1744072 14.5631981,20 L11.4826573,20 Z M16.9241623,20 L16.9210268,20 C16.9210268,12.8700764 11.0546737,7.06799922 4,7.06799922 L4,4 C12.622379,4 20.0007839,11.1800901 20.0007839,20 L16.9241623,20 Z"
		/>
	</Icon>
);

RssIcon.propTypes = {
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
