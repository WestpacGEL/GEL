import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const BpayIcon = ({
	assistiveText = 'Bpay',
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
				d="M24 12.0005C24 18.6277 18.6277 24.0009 11.9995 24.0009C5.37234 24.0009 0 18.6277 0 12.0005C0 5.37327 5.37234 0 11.9995 0C18.6277 0 24 5.37327 24 12.0005ZM16.0517 12.4575C16.6605 11.91 17.1219 11.0144 17.1219 10.1319C17.1219 7.78292 15.4768 6.44938 13.1278 6.44938H10.8427V4H8.42331V6.45068H6V8.90658H10.0567L8.42331 9.51143V18.592C8.42331 18.8462 8.56279 18.9804 8.77527 19H14.2854C16.1677 18.9387 17.6746 17.3758 17.6746 15.453C17.6746 14.1925 17.0268 13.0871 16.0517 12.4575ZM11.1921 16.4763L14.2515 16.4737C14.9411 16.4151 15.4886 15.8298 15.4886 15.1115C15.4886 14.3541 14.8811 13.7376 14.1316 13.7376H13.0027C12.7694 13.7376 12.6194 13.6098 12.6025 13.3621V11.807C12.6103 11.5802 12.7381 11.4355 12.9818 11.425L13.4368 11.4016C14.1277 11.4016 14.6843 10.8345 14.6843 10.1358C14.6843 9.43973 14.1277 8.8401 13.4368 8.8401H10.8062V16.0853C10.8153 16.3381 10.9639 16.4711 11.1921 16.4763Z"
				fill="currentColor"
			/>
		) : (
			<Fragment>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M16.0517 12.4575C16.6605 11.91 17.1219 11.0144 17.1219 10.1319C17.1219 7.78292 15.4768 6.44938 13.1278 6.44938H10.8427V4H8.42331V6.45068H6V8.90658H10.0567L8.42331 9.51143V18.592C8.42331 18.8462 8.56279 18.9804 8.77527 19H14.2854C16.1677 18.9387 17.6746 17.3758 17.6746 15.453C17.6746 14.1925 17.0268 13.0871 16.0517 12.4575ZM14.2515 16.4737L11.1921 16.4763C10.9639 16.4711 10.8153 16.3381 10.8062 16.0853V8.8401H13.4368C14.1277 8.8401 14.6843 9.43973 14.6843 10.1358C14.6843 10.8345 14.1277 11.4016 13.4368 11.4016L12.9818 11.425C12.7381 11.4355 12.6103 11.5802 12.6025 11.807V13.3621C12.6194 13.6098 12.7694 13.7376 13.0027 13.7376H14.1316C14.8811 13.7376 15.4886 14.3541 15.4886 15.1115C15.4886 15.8298 14.9411 16.4151 14.2515 16.4737Z"
					fill="currentColor"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M24 12.0005C24 18.6277 18.6277 24.0009 11.9995 24.0009C5.37234 24.0009 0 18.6277 0 12.0005C0 5.37327 5.37234 0 11.9995 0C18.6277 0 24 5.37327 24 12.0005ZM22 12.0005C22 17.5232 17.523 22.0009 11.9995 22.0009C6.47711 22.0009 2 17.5233 2 12.0005C2 6.47764 6.47711 2 11.9995 2C17.523 2 22 6.47774 22 12.0005Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);

BpayIcon.propTypes = {
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
