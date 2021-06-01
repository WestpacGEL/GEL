import React from 'react';
import { propTypes, defaultProps, Symbol } from './Symbol';

export const BOMMultibrandSmallLogo = (props) => (
	<Symbol symbol="BOMMultibrandSmallLogo" {...props}>
		<polygon fill="#685AC0" points="0 16.001 6.5 9.501 0 3.001" />
		<polygon fill="#A094FC" points=".001 3.001 6.501 9.501 13 3.001" />
		<polygon fill="#685AC0" points="13 16.001 13 3.001 6.5 9.502" />
		<polygon fill="#20024E" points=".001 16.001 13 16.001 6.5 9.501" />
		<polygon fill="#C2BFEB" points="13 3.001 13 16.001 19.5 9.501" />
		<polygon fill="#685AC0" points="26 3.001 13 3.001 19.5 9.501" />
		<polygon fill="#20024E" points="26 16 26 3 19.5 9.502" />
		<polygon fill="#685AC0" points="13.001 16.001 26 16.001 19.5 9.501" />
		<polygon fill="#C2BFEB" points="13 16.001 13 29.001 19.5 22.501" />
		<polygon fill="#A094FC" points="26 16 13 16.001 19.5 22.501" />
		<polygon fill="#685AC0" points="26 29 26 16 19.5 22.502" />
		<polygon fill="#20024E" points="13.001 29.001 26 29 19.5 22.501" />
		<polygon fill="#685AC0" points="0 29.001 6.5 22.5 0 16" />
		<polygon fill="#C2BFEB" points=".001 16.001 6.501 22.501 13 16.001" />
		<polygon fill="#20024E" points="13 29.001 13 16.001 6.5 22.502" />
		<polygon fill="#A094FC" points=".001 29.001 13 29.001 6.5 22.5" />
		<polygon fill="#C2BFEB" points="13 42 19.501 35.501 13 29.001" />
		<polygon fill="#685AC0" points="26 29 13 29 19.5 35.501" />
		<polygon fill="#C2BFEB" points="0 29 6.501 35.501 13 29" />
		<polygon fill="#20024E" points="6.5 35.502 13 42 13 29.001" />
	</Symbol>
);

BOMMultibrandSmallLogo.defaultProps = {
	...defaultProps,
	viewBoxWidth: 122,
	viewBoxHeight: 44,
	offset: [null, 48, 96],
	assistiveText: 'Bank of Melbourne',
	copyrightYear: '2020',
};
BOMMultibrandSmallLogo.propTypes = propTypes;
