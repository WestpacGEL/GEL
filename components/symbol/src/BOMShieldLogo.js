import React from 'react';
import { propTypes, Symbol } from './Symbol';

export const BOMShieldLogo = ({
	align = 'left',
	assistiveText = 'Bank of Melbourne',
	copyrightYear = '2020',
	viewBoxWidth = 26,
	viewBoxHeight = 39,
	...props
}) => (
	<Symbol
		symbol="BOMShieldLogo"
		align={align}
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		viewBoxWidth={viewBoxWidth}
		viewBoxHeight={viewBoxHeight}
		{...props}
	>
		<polygon points="0 0 0 13 6.5 6.5 " fill="#685AC0" />
		<polygon points="13 0 0 0 6.5 6.5 " fill="#A094FC" />
		<polygon points="13 13 13 0 6.5 6.5 " fill="#685AC0" />
		<polygon points="0 13 13 13 6.5 6.5 " fill="#20024E" />
		<polygon points="13 0 13 13 19.5 6.5 " fill="#C2BFEB" />
		<polygon points="26 0 13 0 19.5 6.5 " fill="#685AC0" />
		<polygon points="26 13 26 0 19.5 6.5 " fill="#20024E" />
		<polygon points="13 13 26 13 19.5 6.5 " fill="#685AC0" />
		<polygon points="13 13 13 26 19.5 19.5 " fill="#C2BFEB" />
		<polygon points="26 13 13 13 19.5 19.5 " fill="#A094FC" />
		<polygon points="26 26 26 13 19.5 19.5 " fill="#685AC0" />
		<polygon points="13 26 26 26 19.5 19.5 " fill="#20024E" />
		<polygon points="0 13 0 26 6.5 19.5 " fill="#685AC0" />
		<polygon points="13 13 0 13 6.5 19.5 " fill="#C2BFEB" />
		<polygon points="13 26 13 13 6.5 19.5 " fill="#20024E" />
		<polygon points="0 26 13 26 6.5 19.5 " fill="#A094FC" />
		<polygon points="13 26 13 39 19.5 32.5 " fill="#C2BFEB" />
		<polygon points="26 26 13 26 19.5 32.5 " fill="#685AC0" />
		<polygon points="13 26 0 26 6.5 32.5 " fill="#C2BFEB" />
		<polygon points="13 39 13 26 6.5 32.5 " fill="#20024E" />
	</Symbol>
);

BOMShieldLogo.propTypes = propTypes;
