import React from 'react';
import { getColors } from '../_utils';
import { Pictogram } from '../Pictogram';

export const BankCardPictogram = ({
	mode,
	viewBoxWidth = 78,
	viewBoxHeight = 78,
	assistiveText = 'Bank card',
	copyrightYear = '2020',
	...rest
}) => {
	const { outline, highlight } = getColors(mode);

	return (
		<Pictogram
			pictogram="BankCardPictogram"
			mode={mode}
			viewBoxWidth={viewBoxWidth}
			viewBoxHeight={viewBoxHeight}
			assistiveText={assistiveText}
			copyrightYear={copyrightYear}
			{...rest}
		>
			<g fill="none" fillRule="evenodd">
				<polygon fill={highlight} points="11.385 40.91 44.385 40.91 44.385 37.91 11.385 37.91" />
				<polygon
					fill={highlight}
					points="11.385 47.899 30.371 47.899 30.371 44.899 11.385 44.899"
				/>
				<path
					fill={outline}
					d="M66.5952,57.7207 L8.8352,57.7207 C7.5472,57.7207 6.5002,56.6737 6.5002,55.3857 L6.5002,32.1937 L68.9302,32.1937 L68.9302,55.3857 C68.9302,56.6737 67.8832,57.7207 66.5952,57.7207 M8.8352,16.4997 L66.5952,16.4997 C67.8832,16.4997 68.9302,17.5477 68.9302,18.8347 L68.9302,22.1227 L6.5002,22.1227 L6.5002,18.8347 C6.5002,17.5477 7.5472,16.4997 8.8352,16.4997 M73.2982,18.5987 C71.5522,16.0357 68.7842,14.5127 68.7842,14.5127 C68.7842,14.5127 68.7762,14.5327 68.7732,14.5417 C68.1152,14.2067 67.3822,13.9997 66.5952,13.9997 L8.8352,13.9997 C6.1692,13.9997 4.0002,16.1687 4.0002,18.8347 L4.0002,55.3857 C4.0002,56.0577 4.1392,56.6977 4.3882,57.2797 C4.4172,57.4717 4.5292,57.7307 4.7722,58.0907 C6.5162,60.6717 9.3072,62.2067 9.3072,62.2067 C9.3072,62.2067 9.3132,62.1917 9.3152,62.1877 C10.0052,62.5667 10.7842,62.8027 11.6252,62.8027 L69.3862,62.8027 C72.0522,62.8027 74.2202,60.6337 74.2202,57.9677 L74.2202,21.4167 C74.2202,20.3627 73.8722,19.3937 73.2982,18.5987"
				/>
			</g>
		</Pictogram>
	);
};

BankCardPictogram.propTypes = Pictogram.propTypes;
