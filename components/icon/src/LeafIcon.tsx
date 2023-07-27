import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const LeafIcon = ({
	assistiveText = 'Leaf',
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
				d="M22 12V2.00004L12.0288 2.00004L12 2C6.47715 2 2 6.47715 2 12C2 14.2292 2.72939 16.288 3.96252 17.9508L2.46302 19.4503C1.87723 20.0361 1.87723 20.9858 2.46302 21.5716C3.0488 22.1574 3.99855 22.1574 4.58434 21.5716L6.08906 20.0669C7.74486 21.2822 9.7886 22 12 22C17.5228 22 22 17.5229 22 12ZM17.1944 6.84038C17.5849 7.2309 17.5849 7.86407 17.1944 8.25459L9.19441 16.2546C8.80389 16.6451 8.17072 16.6451 7.7802 16.2546C7.38967 15.8641 7.38967 15.2309 7.7802 14.8404L15.7802 6.84038C16.1707 6.44985 16.8039 6.44985 17.1944 6.84038Z"
				fill="currentColor"
			/>
		) : (
			<Fragment>
				<path
					d="M17.1944 8.25447C17.585 7.86394 17.585 7.23078 17.1944 6.84025C16.8039 6.44973 16.1708 6.44973 15.7802 6.84025L7.78024 14.8403C7.38971 15.2308 7.38971 15.8639 7.78024 16.2545C8.17076 16.645 8.80392 16.645 9.19445 16.2545L17.1944 8.25447Z"
					fill="currentColor"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M12.0288 2.00004H22V12C22 17.5228 17.5228 22 12 22C9.7886 22 7.74486 21.2822 6.08906 20.0669L4.58434 21.5716C3.99855 22.1574 3.0488 22.1574 2.46302 21.5716C1.87723 20.9858 1.87723 20.0361 2.46302 19.4503L3.96252 17.9508C2.72939 16.288 2 14.2292 2 12C2 6.47715 6.47715 2 12 2L12.0288 2.00004ZM20 4.00004H12.0232L12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12V4.00004Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);

LeafIcon.propTypes = {
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
