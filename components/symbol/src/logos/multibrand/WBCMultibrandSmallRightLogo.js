import React from 'react';
import { propTypes, defaultProps, Symbol } from '../../Symbol';

export const WBCMultibrandSmallRightLogo = props => (
	<Symbol {...props}>
		<path
			fill="#D5002B"
			d="M103.515 30.778l5.128-15.703c.725-2.398 1.955-3.075 3.835-3.075H122c-.748.301-1.243 2.206-1.243 2.206l-4.598 15.771c-.53 1.98-2.188 3.023-4.066 3.023H102c.723-.13 1.516-2.222 1.516-2.222zm-15.033 0S89.275 32.87 90 33H79.908c-1.881 0-3.538-1.043-4.068-3.023l-4.596-15.77S70.748 12.3 70 12h9.52c1.879 0 3.108.677 3.836 3.075l5.126 15.703zM90.5 33V12h11v21h-11z"
			fillRule="evenodd"
		/>
	</Symbol>
);

WBCMultibrandSmallRightLogo.defaultProps = {
	...defaultProps,
	viewBoxWidth: 122,
	viewBoxHeight: 44,
	label: 'Westpac',
};
WBCMultibrandSmallRightLogo.propTypes = propTypes;
