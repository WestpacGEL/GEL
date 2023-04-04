import React from 'react';
import { getColors } from '../_utils';
import { Pictogram } from '../Pictogram';

export const DollarSignPictogram = ({
	mode,
	viewBoxWidth = 78,
	viewBoxHeight = 78,
	assistiveText = 'Dollar sign',
	copyrightYear = '2020',
	...rest
}) => {
	const { outline, highlight } = getColors(mode);

	return (
		<Pictogram
			pictogram="DollarSignPictogram"
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
					d="M38.2678,68.0367 C21.8538,68.0367 8.4998,54.6827 8.4998,38.2687 C8.4998,21.8547 21.8538,8.5017 38.2678,8.5017 C54.6808,8.5017 68.0348,21.8547 68.0348,38.2687 C68.0348,54.6827 54.6808,68.0367 38.2678,68.0367 M65.4368,20.8947 C59.6958,11.9467 49.6658,5.9997 38.2678,5.9997 C20.4758,5.9997 5.9998,20.4747 5.9998,38.2677 C5.9998,45.4007 8.3308,51.9977 12.2658,57.3457 C18.0058,66.2997 28.0388,72.2497 39.4418,72.2497 C57.2338,72.2497 71.7088,57.7747 71.7088,39.9827 C71.7088,32.8447 69.3748,26.2447 65.4368,20.8947"
				/>
				<path
					fill={highlight}
					d="M42.0295,46.857 C41.5525,47.419 40.9585,47.807 40.2555,48.035 L40.2555,40.927 C41.1095,41.242 41.7565,41.649 42.1725,42.159 C42.6755,42.776 42.9265,43.511 42.9265,44.364 C42.9265,45.319 42.6275,46.149 42.0295,46.857 M35.0775,33.068 C34.6705,32.489 34.4665,31.861 34.4665,31.187 C34.4665,30.448 34.6895,29.774 35.1345,29.162 C35.5315,28.618 36.0575,28.223 36.6975,27.961 L36.6975,34.357 C35.9905,34.016 35.4445,33.59 35.0775,33.068 M45.9445,38.607 C44.9065,37.372 43.0035,36.356 40.2555,35.551 L40.2555,28.248 C41.1555,28.828 41.7465,29.724 41.9905,30.977 L46.8225,30.346 C46.4915,28.437 45.7285,26.913 44.5315,25.773 C43.4495,24.743 42.0125,24.1 40.2555,23.803 L40.2555,21.81 L39.6995,21.81 L36.9305,21.81 L36.6975,21.81 L36.6975,23.741 C34.6205,23.993 32.9365,24.788 31.6685,26.155 C30.3505,27.574 29.6925,29.328 29.6925,31.416 C29.6925,33.479 30.2745,35.233 31.4395,36.677 C32.5665,38.077 34.3235,39.128 36.6975,39.841 L36.6975,47.784 C36.1025,47.45 35.5545,46.966 35.0585,46.313 C34.4985,45.574 34.1165,44.695 33.9125,43.677 L28.9275,44.211 C29.3105,46.72 30.1885,48.662 31.5635,50.037 C32.8875,51.361 34.6055,52.158 36.6975,52.455 L36.6975,55.976 L36.9305,55.976 L39.6995,55.976 L40.2555,55.976 L40.2555,52.305 C42.4705,51.889 44.2275,50.96 45.5145,49.502 C46.9085,47.923 47.6065,45.982 47.6065,43.677 C47.6065,41.614 47.0515,39.924 45.9445,38.607"
				/>
			</g>
		</Pictogram>
	);
};

DollarSignPictogram.propTypes = Pictogram.propTypes;
