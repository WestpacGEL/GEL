import React from 'react';
import { getColors } from '../_utils';
import { Pictogram } from '../Pictogram';

export const MedicareCardPictogram = ({
	mode,
	viewBoxWidth = 78,
	viewBoxHeight = 78,
	assistiveText = 'Medicare card',
	copyrightYear = '2020',
	...rest
}) => {
	const { outline, highlight } = getColors(mode);

	return (
		<Pictogram
			pictogram="MedicareCardPictogram"
			mode={mode}
			viewBoxWidth={viewBoxWidth}
			viewBoxHeight={viewBoxHeight}
			assistiveText={assistiveText}
			copyrightYear={copyrightYear}
			{...rest}
		>
			<g fill="none" fillRule="evenodd">
				<path
					fill={highlight}
					d="M59.9678,30.8779 L35.4078,30.8779 L37.7828,24.3259 C38.0988,23.4569 38.9238,22.8779 39.8498,22.8779 L64.4068,22.8779 L62.0318,29.4309 C61.7178,30.2989 60.8928,30.8779 59.9678,30.8779"
				/>
				<polygon fill={outline} points="17.385 44.555 50.385 44.555 50.385 41.555 17.385 41.555" />
				<polygon fill={outline} points="10.385 51.544 46.385 51.544 46.385 48.544 10.385 48.544" />
				<path
					fill={outline}
					d="M68.9307,56.3857 C68.9307,57.6737 67.8827,58.7207 66.5957,58.7207 L8.8347,58.7207 C7.5477,58.7207 6.4997,57.6737 6.4997,56.3857 L6.4997,19.8347 C6.4997,18.5477 7.5477,17.4997 8.8347,17.4997 L66.5957,17.4997 C67.8827,17.4997 68.9307,18.5477 68.9307,19.8347 L68.9307,56.3857 Z M73.3007,19.6017 C71.5547,17.0367 68.7847,15.5127 68.7847,15.5127 C68.7847,15.5127 68.7767,15.5327 68.7727,15.5417 C68.1157,15.2067 67.3827,14.9997 66.5957,14.9997 L8.8347,14.9997 C6.1687,14.9997 3.9997,17.1687 3.9997,19.8347 L3.9997,56.3857 C3.9997,57.0577 4.1397,57.6977 4.3887,58.2807 C4.4177,58.4727 4.5307,58.7317 4.7727,59.0907 C6.5167,61.6717 9.3077,63.2067 9.3077,63.2067 C9.3077,63.2067 9.3137,63.1917 9.3157,63.1877 C10.0047,63.5667 10.7847,63.8027 11.6257,63.8027 L69.3857,63.8027 C72.0517,63.8027 74.2207,61.6337 74.2207,58.9677 L74.2207,22.4167 C74.2207,21.3647 73.8737,20.3967 73.3007,19.6017 L73.3007,19.6017 Z"
				/>
			</g>
		</Pictogram>
	);
};

MedicareCardPictogram.propTypes = Pictogram.propTypes;
