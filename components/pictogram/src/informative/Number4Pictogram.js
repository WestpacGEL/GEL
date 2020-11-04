import React from 'react';
import { propTypes, defaultProps, Pictogram, colorMap } from '../Pictogram';
import { useBrand } from '@westpac/core';

export const Number4Pictogram = ({ mode, ...rest }) => {
	const { COLORS } = useBrand();
	const { outline, highlight } = colorMap(COLORS)[mode];

	return (
		<Pictogram pictogram="Number4Pictogram" mode={mode} {...rest}>
			<g fill="none" fillRule="evenodd">
				<path
					fill={highlight}
					d="M38.6752,41.5125 L38.6752,31.9725 L32.2582,41.5125 L38.6752,41.5125 Z M38.6752,51.8335 L38.6752,46.2165 L27.2492,46.2165 L27.2492,41.5315 L39.3612,23.8025 L43.8552,23.8025 L43.8552,41.5125 L47.3212,41.5125 L47.3212,46.2165 L43.8552,46.2165 L43.8552,51.8335 L38.6752,51.8335 Z"
				/>
				<path
					fill={outline}
					d="M38.7104,67.9119 C22.2974,67.9119 8.9424,54.5579 8.9424,38.1439 C8.9424,21.7299 22.2974,8.3769 38.7104,8.3769 C55.1234,8.3769 68.4784,21.7299 68.4784,38.1439 C68.4784,54.5579 55.1234,67.9119 38.7104,67.9119 M65.8804,20.7699 C60.1394,11.8219 50.1084,5.8749 38.7104,5.8749 C20.9184,5.8749 6.4424,20.3499 6.4424,38.1429 C6.4424,45.2759 8.7734,51.8729 12.7084,57.2219 C18.4484,66.1749 28.4814,72.1249 39.8854,72.1249 C57.6774,72.1249 72.1514,57.6499 72.1514,39.8579 C72.1514,32.7209 69.8174,26.1199 65.8804,20.7699"
				/>
			</g>
		</Pictogram>
	);
};

Number4Pictogram.defaultProps = {
	...defaultProps,
	viewBoxWidth: 78,
	viewBoxHeight: 78,
	assistiveText: 'Number 4',
	copyrightYear: '2020',
};
Number4Pictogram.propTypes = propTypes;
