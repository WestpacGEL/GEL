import React from 'react';
import { propTypes, defaultProps, Symbol } from './Symbol';

export const WBCMultibrandSmallLogo = (props) => (
	<Symbol symbol="WBCMultibrandSmallLogo" {...props}>
		<path
			fill="#DA1710"
			d="M33.515 30.778l5.128-15.703C39.368 12.677 40.598 12 42.478 12H52c-.748.301-1.243 2.206-1.243 2.206l-4.598 15.771C45.628 31.957 43.97 33 42.092 33H32c.723-.13 1.516-2.222 1.516-2.222zm-15.033 0S19.275 32.87 20 33H9.908c-1.881 0-3.538-1.043-4.068-3.023l-4.596-15.77S.748 12.3 0 12h9.52c1.879 0 3.108.677 3.836 3.075l5.126 15.703zM20.5 33V12h11v21h-11z"
			fillRule="evenodd"
		/>
	</Symbol>
);

WBCMultibrandSmallLogo.defaultProps = {
	...defaultProps,
	viewBoxWidth: 122,
	viewBoxHeight: 44,
	offset: [null, 35, 70],
	assistiveText: 'Westpac',
	copyrightYear: '2020',
};
WBCMultibrandSmallLogo.propTypes = propTypes;
