import React from 'react';
import { getColors } from '../_utils';
import { Pictogram } from '../Pictogram';

export const FootballPictogram = ({
	mode,
	viewBoxWidth = 78,
	viewBoxHeight = 78,
	assistiveText = 'Football',
	copyrightYear = '2021',
	...rest
}) => {
	const { outline, highlight } = getColors(mode);

	return (
		<Pictogram
			pictogram="FootballPictogram"
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
					points="30.763 51.597 23.688 44.522 25.809 42.401 32.884 49.476"
				/>
				<polygon
					fill={highlight}
					points="35.442 46.919 28.367 39.844 30.488 37.723 37.563 44.798"
				/>
				<polygon fill={highlight} points="40.121 42.24 33.046 35.165 35.167 33.044 42.242 40.119" />
				<polygon fill={highlight} points="44.8 37.562 37.724 30.487 39.846 28.366 46.92 35.441" />
				<polygon
					fill={highlight}
					points="49.478 32.883 42.403 25.808 44.524 23.687 51.599 30.762"
				/>
				<path
					fill={outline}
					d="M65.841 30.134c-1.896 7.66-6.68 15.618-13.469 22.408-6.79 6.79-14.748 11.573-22.407 13.469-6.87 1.7-12.704.87-16.604-2.318l11.846-11.846-1.768-1.768-11.845 11.846c-3.18-3.901-4.007-9.729-2.309-16.593 1.896-7.66 6.68-15.617 13.47-22.408C31.974 13.704 42.989 8.57 51.736 8.57c3.695 0 6.977.931 9.555 2.844L49.585 23.121l1.767 1.767 11.795-11.794c3.496 3.895 4.459 9.908 2.694 17.04M59.462 7.393c-4.089-1.675-9.163-1.855-14.82-.455-8.095 2.003-16.468 7.02-23.574 14.128-7.108 7.107-12.125 15.48-14.129 23.575-2.059 8.319-.707 15.386 3.807 19.899.222.222.464.419.699.626.012.013 4.272 3.749 8.358 5.234 2.135.776 4.504 1.153 7.029 1.153 9.478-.001 21.145-5.335 30.821-15.011 7.108-7.107 12.126-15.48 14.128-23.575 2.053-8.296.713-15.346-3.77-19.861-3.146-3.169-5.246-4.36-8.549-5.713z"
				/>
			</g>
		</Pictogram>
	);
};

FootballPictogram.propTypes = Pictogram.propTypes;
