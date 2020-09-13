import React from 'react';
import { propTypes, defaultProps, Pictogram, colourMap } from '../Pictogram';
import { useBrand } from '@westpac/core';

export const MedicareCardPictogram = ({ mode, ...rest }) => {
	const { COLORS } = useBrand();
	const { outline, highlight } = colourMap(COLORS)[mode];

	return (
		<Pictogram pictogram="MedicareCardPictogram" mode={mode} {...rest}>
			<g fill="none" fillRule="evenodd">
				<path
					fill={highlight}
					d="M61.7393491,31.4076903 L35.368215,31.4076903 L37.9187119,24.363236 C38.2569101,23.4293763 39.1438827,22.8070805 40.1371144,22.8070805 L66.5082485,22.8070805 L63.9577516,29.8515348 C63.619276,30.785672 62.7325808,31.4076903 61.7393491,31.4076903"
				/>
				<path
					fill={outline}
					fillRule="nonzero"
					d="M69.2852755,13.5 C72.598984,13.5 75.2852755,16.1862915 75.2852755,19.5 L75.2852755,19.5 L75.2852755,57.3857093 C75.2852755,60.6994178 72.598984,63.3857093 69.2852755,63.3857093 L69.2852755,63.3857093 L8.5,63.3857093 C5.1862915,63.3857093 2.5,60.6994178 2.5,57.3857093 L2.5,57.3857093 L2.5,19.5 C2.5,16.1862915 5.1862915,13.5 8.5,13.5 L8.5,13.5 Z M69.2852755,17.5 L8.5,17.5 C7.3954305,17.5 6.5,18.3954305 6.5,19.5 L6.5,19.5 L6.5,57.3857093 C6.5,58.4902788 7.3954305,59.3857093 8.5,59.3857093 L8.5,59.3857093 L69.2852755,59.3857093 C70.389845,59.3857093 71.2852755,58.4902788 71.2852755,57.3857093 L71.2852755,57.3857093 L71.2852755,19.5 C71.2852755,18.3954305 70.389845,17.5 69.2852755,17.5 L69.2852755,17.5 Z M67,50 L67,54 L42,54 L42,50 L67,50 Z M53,38 L53,42 L11,42 L11,38 L53,38 Z"
				/>
			</g>
		</Pictogram>
	);
};

MedicareCardPictogram.defaultProps = {
	...defaultProps,
	viewBoxWidth: 78,
	viewBoxHeight: 78,
	assistiveText: 'Medicare card',
};
MedicareCardPictogram.propTypes = propTypes;
