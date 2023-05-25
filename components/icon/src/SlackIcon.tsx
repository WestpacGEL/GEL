import PropTypes from 'prop-types';
import { Icon, IconProps } from './Icon';

export const SlackIcon = ({
	assistiveText = 'Slack',
	copyrightYear = '2020',
	size = 'medium',
	...props
}: Omit<IconProps, 'icon'>) => (
	<Icon
		icon="SlackIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		{...props}
	>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M22.5 0A1.5 1.5 0 0124 1.5v21a1.5 1.5 0 01-1.5 1.5h-21A1.5 1.5 0 010 22.5v-21A1.5 1.5 0 011.5 0h21zM9.767 12.61c-.894 0-1.625.73-1.625 1.623V18.3c0 .894.73 1.624 1.625 1.624.894 0 1.624-.73 1.624-1.624v-4.067c0-.894-.73-1.624-1.624-1.624zm4.466 4.066H12.61V18.3c0 .894.73 1.624 1.624 1.624.894 0 1.625-.73 1.625-1.624 0-.894-.73-1.624-1.625-1.624zm-6.909-4.067H5.7c-.894 0-1.624.73-1.624 1.624 0 .894.73 1.625 1.624 1.625.894 0 1.624-.73 1.624-1.625V12.61zm10.976 0h-4.067c-.894 0-1.624.73-1.624 1.624 0 .894.73 1.625 1.624 1.625H18.3c.894 0 1.624-.73 1.624-1.625 0-.894-.73-1.624-1.624-1.624zm-4.067-8.533c-.894 0-1.624.73-1.624 1.624v4.067c0 .894.73 1.624 1.624 1.624.894 0 1.625-.73 1.625-1.624V5.7c0-.894-.73-1.624-1.625-1.624zM18.3 8.142c-.894 0-1.624.73-1.624 1.625v1.624H18.3c.894 0 1.624-.73 1.624-1.624 0-.894-.73-1.625-1.624-1.625zm-8.533 0H5.7c-.894 0-1.624.73-1.624 1.625 0 .894.73 1.624 1.624 1.624h4.067c.894 0 1.624-.73 1.624-1.624 0-.894-.73-1.625-1.624-1.625zm0-4.066c-.894 0-1.625.73-1.625 1.624 0 .894.73 1.624 1.625 1.624h1.624V5.7c0-.894-.73-1.624-1.624-1.624z"
		/>
	</Icon>
);

SlackIcon.propTypes = {
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
