import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const CardlessCashIcon = ({
	assistiveText = 'CardlessCash',
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
				<path
					d="M10.5026 15.4898H9C9.04124 16.7595 9.94472 17.5885 11.4 17.759V18.7011H12.6V17.7538C14.0863 17.5653 15 16.6841 15 15.3789C15 14.2174 14.3494 13.5628 12.8571 13.2355L11.9535 13.0401C11.0964 12.8395 10.7349 12.5756 10.7349 12.1057C10.7349 11.5408 11.2513 11.166 12.0207 11.166C12.8003 11.166 13.3528 11.5566 13.4045 12.2007H14.8657C14.843 10.9848 13.9919 10.1307 12.6 9.94662V9H11.4V9.95448C10.0674 10.1559 9.16523 11.019 9.16523 12.243C9.16523 13.3569 9.84165 14.0696 11.2151 14.3705L12.1859 14.587C13.0843 14.7929 13.4406 15.0674 13.4406 15.5637C13.4406 16.1233 12.8726 16.5298 12.0413 16.5298C11.2151 16.5298 10.5749 16.118 10.5026 15.4898Z"
					fill="currentColor"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M1 0C0.447715 0 0 0.447716 0 1V9C0 9.55229 0.447716 10 1 10H3.89978L2.08496 24H21.9151L20.1003 10H23C23.5523 10 24 9.55228 24 9V1C24 0.447715 23.5523 0 23 0H1ZM19.6391 22L17.565 6H6.43503L4.36095 22H19.6391Z"
					fill="currentColor"
				/>
			</Fragment>
		) : (
			<Fragment>
				<path
					d="M10.5026 15.4898H9C9.04124 16.7595 9.94472 17.5885 11.4 17.759V18.7011H12.6V17.7538C14.0863 17.5653 15 16.6841 15 15.3789C15 14.2174 14.3494 13.5628 12.8571 13.2355L11.9535 13.0401C11.0964 12.8395 10.7349 12.5756 10.7349 12.1057C10.7349 11.5408 11.2513 11.166 12.0207 11.166C12.8003 11.166 13.3528 11.5566 13.4045 12.2007H14.8657C14.843 10.9848 13.9919 10.1307 12.6 9.94662V9H11.4V9.95448C10.0674 10.1559 9.16523 11.019 9.16523 12.243C9.16523 13.3569 9.84165 14.0696 11.2151 14.3705L12.1859 14.587C13.0843 14.7929 13.4406 15.0674 13.4406 15.5637C13.4406 16.1233 12.8726 16.5298 12.0413 16.5298C11.2151 16.5298 10.5749 16.118 10.5026 15.4898Z"
					fill="currentColor"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M0 1C0 0.447716 0.447715 0 1 0H23C23.5523 0 24 0.447715 24 1V9C24 9.55228 23.5523 10 23 10H20.1003L21.9151 24H2.08496L3.89978 10H1C0.447716 10 0 9.55229 0 9V1ZM22 8H19.841L19.3225 4H4.67755L4.15903 8H2V2H22V8ZM19.6391 22L17.565 6H6.43503L4.36095 22H19.6391Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);

CardlessCashIcon.propTypes = {
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
