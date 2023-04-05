import React from 'react';
import { getColors } from '../_utils';
import { Pictogram } from '../Pictogram';

export const SecurePictogram = ({
	mode,
	viewBoxWidth = 78,
	viewBoxHeight = 78,
	assistiveText = 'Secure',
	copyrightYear = '2021',
	...rest
}) => {
	const { outline, highlight } = getColors(mode);

	return (
		<Pictogram
			pictogram="SecurePictogram"
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
					d="M40.115 40.343a3.115 3.115 0 1 0-4.792 2.622v2.649a1.677 1.677 0 0 0 3.355 0v-2.65a3.108 3.108 0 0 0 1.437-2.621"
				/>
				<path
					fill={outline}
					d="M31.061 30.879c0-3.461 2.664-6.277 5.938-6.277 3.276 0 5.94 2.816 5.94 6.277v.786H31.062v-.786zm15.297 3.286v11.887a4.308 4.308 0 0 1-4.302 4.303h-10.11a4.309 4.309 0 0 1-4.304-4.303V34.165h18.716zm-17.796-2.5h-3.42v14.387a6.81 6.81 0 0 0 6.803 6.803h10.11a6.81 6.81 0 0 0 6.803-6.803V31.665H45.44v-.786c0-4.84-3.786-8.777-8.44-8.777s-8.439 3.937-8.439 8.777v.786z"
				/>
				<path
					fill={outline}
					d="M61.126 35.491c0 14.786-10.432 28.462-24.312 31.944C22.932 63.953 12.5 50.276 12.5 35.491V19.683l24.314-10.94 24.312 10.94v15.808zM57.92 15.498L36.814 6 10 18.066v17.425c0 7.274 2.358 14.296 6.345 20.138l.047.068a35.796 35.796 0 0 0 .823 1.154c3.159 4.25 7.204 7.795 11.837 10.246a42.523 42.523 0 0 0 10.97 4.326l.291.07.291-.07c15.12-3.625 26.521-18.435 26.521-34.449V19.551l-9.205-4.053z"
				/>
			</g>
		</Pictogram>
	);
};

SecurePictogram.propTypes = Pictogram.propTypes;
