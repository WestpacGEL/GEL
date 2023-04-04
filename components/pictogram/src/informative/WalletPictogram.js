import React from 'react';
import { getColors } from '../_utils';
import { Pictogram } from '../Pictogram';

export const WalletPictogram = ({
	mode,
	viewBoxWidth = 78,
	viewBoxHeight = 78,
	assistiveText = 'Wallet',
	copyrightYear = '2020',
	...rest
}) => {
	const { outline, highlight } = getColors(mode);

	return (
		<Pictogram
			pictogram="WalletPictogram"
			mode={mode}
			viewBoxWidth={viewBoxWidth}
			viewBoxHeight={viewBoxHeight}
			assistiveText={assistiveText}
			copyrightYear={copyrightYear}
			{...rest}
		>
			<g fill="none" fillRule="evenodd">
				<path
					fill={outline}
					d="M68.8052,65.865 L11.0882,65.865 C9.1102,65.865 7.5002,64.255 7.5002,62.277 L7.5002,25.487 L7.5002,21.893 L7.5002,18.949 C8.1712,20.682 9.50878906,21.893 11.4362,21.893 L68.8052,21.893 L68.8052,65.865 Z M53.3662,19.393 L53.3662,11 L9.2482,11 C6.9022,11 5.0002,12.902 5.0002,15.248 L5.0002,19.393 L5.0002,21.347 L5.0002,62.277 C5.0002,65.634 7.7312,68.365 11.0882,68.365 L71.3052,68.365 L71.3052,19.393 L53.3662,19.393 Z"
				/>
				<path
					fill={highlight}
					d="M73.1484,32.6428 C73.7014,32.6428 74.1484,33.0908 74.1484,33.6428 L74.1484,53.6428 C74.1484,54.1948 73.7014,54.6428 73.1484,54.6428 L56.1484,54.6428 C56.0014,54.6428 55.8604,54.6108 55.7344,54.5538 C50.3274,53.8588 46.1484,49.2388 46.1484,43.6428 C46.1484,38.0468 50.3274,33.4268 55.7344,32.7328 C55.8604,32.6748 56.0014,32.6428 56.1484,32.6428 L73.1484,32.6428 Z M56.6484,39.1428 C54.1634,39.1428 52.1484,41.1578 52.1484,43.6428 C52.1484,46.1278 54.1634,48.1428 56.6484,48.1428 C59.1334,48.1428 61.1484,46.1278 61.1484,43.6428 C61.1484,41.1578 59.1334,39.1428 56.6484,39.1428 L56.6484,39.1428 Z"
				/>
			</g>
		</Pictogram>
	);
};

WalletPictogram.propTypes = Pictogram.propTypes;
