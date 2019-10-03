import React from 'react';
import { propTypes, defaultProps, Symbol } from '../../Symbol';

export const BOMLogoSmallCenter = props => (
	<Symbol {...props}>
		<g fill="none" fillRule="evenodd">
			<polygon fill="#685AC0" points="48 16.001 54.5 9.501 48 3.001" />
			<polygon fill="#A094FC" points="48.001 3.001 54.501 9.501 61 3.001" />
			<polygon fill="#685AC0" points="61 16.001 61 3.001 54.5 9.502" />
			<polygon fill="#20024E" points="48.001 16.001 61 16.001 54.5 9.501" />
			<polygon fill="#C2BFEB" points="61 3.001 61 16.001 67.5 9.501" />
			<polygon fill="#685AC0" points="74 3.001 61 3.001 67.5 9.501" />
			<polygon fill="#20024E" points="74 16 74 3 67.5 9.502" />
			<polygon fill="#685AC0" points="61.001 16.001 74 16.001 67.499 9.501" />
			<polygon fill="#C2BFEB" points="61 16.001 61 29.001 67.5 22.501" />
			<polygon fill="#A094FC" points="74 16 61 16.001 67.5 22.501" />
			<polygon fill="#685AC0" points="74 29 74 16 67.5 22.502" />
			<polygon fill="#20024E" points="61.001 29.001 74 29 67.499 22.501" />
			<polygon fill="#685AC0" points="48 29.001 54.5 22.5 48 16" />
			<polygon fill="#C2BFEB" points="48.001 16.001 54.501 22.501 61 16.001" />
			<polygon fill="#20024E" points="61 29.001 61 16.001 54.5 22.502" />
			<polygon fill="#A094FC" points="48.001 29.001 61 29.001 54.5 22.5" />
			<polygon fill="#C2BFEB" points="61 42 67.501 35.501 61 29.001" />
			<polygon fill="#685AC0" points="74 29 61 29 67.5 35.501" />
			<polygon fill="#C2BFEB" points="48 29 54.501 35.501 61 29" />
			<polygon fill="#20024E" points="54.5 35.502 61 42 61 29.001" />
		</g>
	</Symbol>
);

BOMLogoSmallCenter.defaultProps = {
	...defaultProps,
	viewBoxWidth: 122,
	viewBoxHeight: 44,
	label: 'Bank of Melbourne',
};
BOMLogoSmallCenter.propTypes = propTypes;
