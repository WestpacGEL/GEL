import React from 'react';
import { propTypes, defaultProps, Symbol } from '../../Symbol';

export const BOMMultibrandSmallRightLogo = props => (
	<Symbol {...props}>
		<g fill="none" fillRule="evenodd">
			<polygon fill="#685AC0" points="96 16.001 102.5 9.501 96 3.001" />
			<polygon fill="#A094FC" points="96.001 3.001 102.501 9.501 109 3.001" />
			<polygon fill="#685AC0" points="109 16.001 109 3.001 102.5 9.502" />
			<polygon fill="#20024E" points="96.001 16.001 109 16.001 102.5 9.501" />
			<polygon fill="#C2BFEB" points="109 3.001 109 16.001 115.5 9.501" />
			<polygon fill="#685AC0" points="122 3.001 109 3.001 115.5 9.501" />
			<polygon fill="#20024E" points="122 16 122 3 115.5 9.502" />
			<polygon fill="#685AC0" points="109.001 16.001 122 16.001 115.499 9.501" />
			<polygon fill="#C2BFEB" points="109 16.001 109 29.001 115.5 22.501" />
			<polygon fill="#A094FC" points="122 16 109 16.001 115.5 22.501" />
			<polygon fill="#685AC0" points="122 29 122 16 115.5 22.502" />
			<polygon fill="#20024E" points="109.001 29.001 122 29 115.499 22.501" />
			<polygon fill="#685AC0" points="96 29.001 102.5 22.5 96 16" />
			<polygon fill="#C2BFEB" points="96.001 16.001 102.501 22.501 109 16.001" />
			<polygon fill="#20024E" points="109 29.001 109 16.001 102.5 22.502" />
			<polygon fill="#A094FC" points="96.001 29.001 109 29.001 102.5 22.5" />
			<polygon fill="#C2BFEB" points="109 42 115.501 35.501 109 29.001" />
			<polygon fill="#685AC0" points="122 29 109 29 115.5 35.501" />
			<polygon fill="#C2BFEB" points="96 29 102.501 35.501 109 29" />
			<polygon fill="#20024E" points="102.5 35.502 109 42 109 29.001" />
		</g>
	</Symbol>
);

BOMMultibrandSmallRightLogo.defaultProps = {
	...defaultProps,
	viewBoxWidth: 122,
	viewBoxHeight: 44,
	label: 'Bank of Melbourne',
};
BOMMultibrandSmallRightLogo.propTypes = propTypes;
