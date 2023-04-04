import React from 'react';
import { getColors } from '../_utils';
import { Pictogram } from '../Pictogram';

export const ArrowRightPictogram = ({
	mode,
	viewBoxWidth = 78,
	viewBoxHeight = 78,
	assistiveText = 'Arrow right',
	copyrightYear = '2021',
	...rest
}) => {
	const { outline, highlight } = getColors(mode);

	return (
		<Pictogram
			pictogram="ArrowRightPictogram"
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
					d="M39.457 27.045l9.401 9.08-26.606.465.062 3.5 26.606-.465-9.08 9.403 2.398 2.316 11.283-11.686a2.637 2.637 0 0 0-.065-3.727L41.772 24.646l-2.315 2.399z"
				/>
				<path
					fill={outline}
					d="M38.268 68.037C21.854 68.037 8.5 54.683 8.5 38.27S21.854 8.502 38.268 8.502c16.413 0 29.767 13.353 29.767 29.767S54.681 68.037 38.268 68.037m27.168-47.142C59.696 11.947 49.666 6 38.268 6 20.476 6 6 20.475 6 38.268c0 7.133 2.331 13.73 6.266 19.078C18.006 66.3 28.039 72.25 39.442 72.25c17.792 0 32.267-14.475 32.267-32.267a32.09 32.09 0 0 0-6.273-19.088"
				/>
			</g>
		</Pictogram>
	);
};

ArrowRightPictogram.propTypes = Pictogram.propTypes;
