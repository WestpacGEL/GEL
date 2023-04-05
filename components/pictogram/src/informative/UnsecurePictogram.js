import React from 'react';
import { getColors } from '../_utils';
import { Pictogram } from '../Pictogram';

export const UnsecurePictogram = ({
	mode,
	viewBoxWidth = 78,
	viewBoxHeight = 78,
	assistiveText = 'Unsecure',
	copyrightYear = '2021',
	...rest
}) => {
	const { outline, highlight } = getColors(mode);

	return (
		<Pictogram
			pictogram="UnsecurePictogram"
			mode={mode}
			viewBoxWidth={viewBoxWidth}
			viewBoxHeight={viewBoxHeight}
			assistiveText={assistiveText}
			copyrightYear={copyrightYear}
			{...rest}
		>
			<g fill="none" fillRule="evenodd">
				<polygon
					fill={highlight}
					points="46.982 30.009 44.893 27.92 36.813 36 28.733 27.92 26.644 30.009 34.724 38.089 26.644 46.169 28.733 48.258 36.813 40.178 44.893 48.258 46.982 46.169 38.902 38.089"
				/>
				<path
					fill={outline}
					d="M61.126 35.491c0 14.786-10.432 28.462-24.312 31.944C22.932 63.953 12.5 50.276 12.5 35.491V19.683l24.313-10.94 24.312 10.94v15.808zM36.814 6.001L10 18.065V35.49c0 7.274 2.169 14.549 7.16 21.287.02.025.037.05.056.073 3.158 4.25 7.204 7.795 11.836 10.246a42.537 42.537 0 0 0 10.97 4.326l.29.07.292-.07c15.12-3.625 26.52-18.435 26.52-34.449V19.551l-30.31-13.55z"
				/>
			</g>
		</Pictogram>
	);
};

UnsecurePictogram.propTypes = Pictogram.propTypes;
