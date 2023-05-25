import PropTypes from 'prop-types';
import { Icon, IconProps } from './Icon';

export const BpayIcon = ({
	assistiveText = 'Bpay',
	copyrightYear = '2020',
	size = 'medium',
	...props
}: Omit<IconProps, 'icon'>) => (
	<Icon
		icon="BpayIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		{...props}
	>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M24,12.0004693 C24,18.6276642 18.6276642,24.0009386 11.9995307,24.0009386 C5.37233585,24.0009386 0,18.6276642 0,12.0004693 C0,5.37327441 5.37233585,0 11.9995307,0 C18.6276642,0 24,5.37327441 24,12.0004693 M16.0517077,12.4574607 C17.0267663,13.0870774 17.6746328,14.1924915 17.6746328,15.4530286 C17.6746328,17.3757713 16.167724,18.9387329 14.2853915,19 L8.77526723,19 C8.56278787,18.9804467 8.42330755,18.8461806 8.42330755,18.5919875 L8.42330755,9.51142783 L10.0566612,8.9065786 L6,8.9065786 L6,6.45068219 L8.42330755,6.45068219 L8.42330755,4 L10.8427044,4 L10.8427044,6.44937864 L13.1278352,6.44937864 C15.4768402,6.44937864 17.1219258,7.78291475 17.1219258,10.1319197 C17.1219258,11.014426 16.6604675,11.9099678 16.0517077,12.4574607 Z M14.2514991,16.4737117 C14.9410793,16.4150517 15.4885722,15.8297558 15.4885722,15.1114973 C15.4885722,14.3541323 14.8811158,13.7375511 14.1315721,13.7375511 L13.002694,13.7375511 C12.7693578,13.7375511 12.619449,13.6098027 12.6025028,13.3621274 L12.6025028,11.8069871 C12.6103242,11.5801686 12.7380725,11.4354741 12.9818371,11.4250456 L13.4367776,11.4015816 C14.1276614,11.4015816 14.6842791,10.8345355 14.6842791,10.1358304 C14.6842791,9.43973234 14.1276614,8.84009733 13.4367776,8.84009733 L10.8062049,8.84009733 L10.8062049,16.0852525 C10.8153298,16.338142 10.963935,16.4711045 11.192057,16.4763188 L14.2514991,16.4737117 Z"
		/>
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
