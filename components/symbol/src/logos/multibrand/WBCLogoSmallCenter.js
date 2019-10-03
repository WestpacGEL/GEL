import React from 'react';
import { propTypes, defaultProps, Symbol } from '../../Symbol';

export const WBCLogoSmallCenter = props => (
	<Symbol {...props}>
		<path
			fill="#D5002B"
			d="M68.515 30.778l5.128-15.703C74.368 12.677 75.598 12 77.478 12H87c-.748.301-1.243 2.206-1.243 2.206l-4.598 15.771C80.628 31.957 78.97 33 77.092 33H67c.723-.13 1.516-2.222 1.516-2.222zm-15.033 0S54.275 32.87 55 33H44.908c-1.881 0-3.538-1.043-4.068-3.023l-4.596-15.77S35.748 12.3 35 12h9.52c1.879 0 3.108.677 3.836 3.075l5.126 15.703zM55.5 33V12h11v21h-11z"
			fillRule="evenodd"
		/>
	</Symbol>
);

WBCLogoSmallCenter.defaultProps = {
	...defaultProps,
	viewBoxWidth: 122,
	viewBoxHeight: 44,
	label: 'Westpac',
};
WBCLogoSmallCenter.propTypes = propTypes;
