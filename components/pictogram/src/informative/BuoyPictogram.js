import React from 'react';
import { getColors } from '../_utils';
import { Pictogram } from '../Pictogram';

export const BuoyPictogram = ({
	mode,
	viewBoxWidth = 78,
	viewBoxHeight = 78,
	assistiveText = 'Buoy',
	copyrightYear = '2021',
	...rest
}) => {
	const { outline, highlight } = getColors(mode);

	return (
		<Pictogram
			pictogram="BuoyPictogram"
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
					d="M45.287 56.052l3.66 10.003a29.617 29.617 0 0 1-10.679 1.98c-3.608 0-7.068-.645-10.27-1.826l3.59-9.818A18.967 18.967 0 0 0 38 57.5c2.582 0 5.043-.515 7.287-1.448zm-34.8-28.482l9.96 3.644A18.943 18.943 0 0 0 19 38.5c0 2.25.391 4.409 1.109 6.411l-9.798 3.586A29.63 29.63 0 0 1 8.5 38.267c0-3.769.704-7.376 1.987-10.698zm57.548 10.697c0 3.536-.62 6.93-1.756 10.079l-10.275-3.76c.646-1.91.996-3.957.996-6.086 0-2.46-.467-4.81-1.318-6.967l10.423-3.814a29.622 29.622 0 0 1 1.93 10.548zM38.268 8.5c3.697 0 7.239.678 10.508 1.915l-3.807 10.404A18.95 18.95 0 0 0 38 19.5c-2.129 0-4.176.35-6.087.996l-3.744-10.233A29.634 29.634 0 0 1 38.268 8.5z"
				/>
				<path
					fill={outline}
					fillRule="nonzero"
					d="M38 19.5c10.493 0 19 8.507 19 19s-8.507 19-19 19-19-8.507-19-19 8.507-19 19-19zm0 2c-9.389 0-17 7.611-17 17s7.611 17 17 17 17-7.611 17-17-7.611-17-17-17z"
				/>
				<path
					fill={outline}
					d="M38 2a3 3 0 0 1 3 3v1.115c10.258.865 19.16 6.555 24.437 14.78a32.118 32.118 0 0 1 5.961 14.606L72.5 35.5a3 3 0 0 1 0 6h-.826C70.903 58.074 57.569 71.421 41 72.213V73a3 3 0 0 1-5.995.176L35 73v-1.055c-9.538-1.32-17.752-6.828-22.734-14.599a32.093 32.093 0 0 1-6.105-15.845L5 41.5a3 3 0 0 1-.176-5.995L5 35.5h1.118C7.434 20.077 19.645 7.715 35 6.164V5a3 3 0 0 1 3-3zm.268 6.502C21.854 8.502 8.5 21.855 8.5 38.269s13.354 29.768 29.768 29.768c16.413 0 29.767-13.354 29.767-29.768S54.681 8.502 38.268 8.502z"
				/>
			</g>
		</Pictogram>
	);
};

BuoyPictogram.propTypes = Pictogram.propTypes;
