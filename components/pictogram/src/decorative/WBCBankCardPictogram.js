import React from 'react';
import { Pictogram } from '../Pictogram';

export const WBCBankCardPictogram = ({
	assistiveText = 'Bank card',
	copyrightYear = '2020',
	mode,
	viewBoxHeight = 200,
	viewBoxWidth = 200,
	...props
}) => {
	return (
		<Pictogram
			pictogram="WBCBankCardPictogram"
			assistiveText={assistiveText}
			copyrightYear={copyrightYear}
			mode={mode}
			viewBoxHeight={viewBoxHeight}
			viewBoxWidth={viewBoxWidth}
			{...props}
		>
			<path fill="#ffd8f7" d="M31.98 48h16.01v8H31.98z" />
			<circle cx="160" cy="176" r="8" fill="#ffd8f7" />
			<path
				fill="#1f1c4f"
				d="M159.113 49.297l7.314-7.152 2.447 2.502-7.314 7.153zM146.033 40.447l4.43-9.221 3.155 1.516-4.43 9.22zM168.402 62.112l9.32-4.218 1.444 3.188-9.32 4.218zM32.04 134.25h-6.3v-6.3h-3.5v6.3h-6.3v3.5h6.3v6.3h3.5v-6.3h6.3v-3.5z"
			/>
			<circle cx="19.97" cy="180" r="4" fill="#1f1c4f" />
			<path
				d="M57.7 144.41l81.18-23.81c4.48-1.32 7.23-5.38 6.15-9.08l-15.72-53.6c-1.09-3.7-5.6-5.64-10.09-4.32L38.05 77.41c-4.48 1.31-7.24 5.38-6.15 9.08l15.72 53.6c1.08 3.7 5.6 5.63 10.08 4.32z"
				fill="#da1710"
				fillRule="evenodd"
			/>
			<path fill="#da1710" d="M63.99 23.71h24v8h-24z" />
			<path
				d="M162.77 84l-8.25-1.35-78-12.94a10.8 10.8 0 00-1.69-.14c-3.69 0-7 2-8.1 5v.09c0 .17-.11.34-.15.52l-.44 1.77-13.7 55.37c-.95 3.82 2.09 7.55 6.77 8.33L144 154.71c.3 0 .59.08.88.11h1.94l.52-.06.3-.06.48-.1.3-.07.45-.13.3-.1.44-.17.26-.11.46-.23.21-.1c.22-.12.43-.25.64-.38a6 6 0 00.57-.42l.18-.15.36-.32.19-.19c.1-.1.2-.21.29-.32a1.68 1.68 0 00.18-.21l.26-.34.15-.23c.08-.12.15-.24.22-.37l.13-.23c.07-.14.13-.28.19-.43l.09-.2a5.53 5.53 0 00.2-.66l12.9-52.12 1.26-4.12a7 7 0 00-5.58-9z"
				fill="#1f1b4f"
				fillRule="evenodd"
			/>
			<path
				d="M56.84 132.19a5.08 5.08 0 003.42 2l82.91 13.74a6 6 0 001.12.1c2.37 0 4.47-1.25 4.88-2.9l13.43-54.31a2.32 2.32 0 00-.36-1.89 5.11 5.11 0 00-3.42-2L75.9 73.21a6.84 6.84 0 00-1.11-.1c-2.38 0-4.48 1.25-4.89 2.9L56.47 130.3a2.29 2.29 0 00.37 1.89z"
				fill="#fff"
				fillRule="evenodd"
			/>
			<path
				d="M158.82 87l-12.73-2.11-18 29.45c-4.69 8.11-13.64 11.2-22.7 9.67l-45.48-7.67-3.47 14a2.33 2.33 0 000 .91 9.79 9.79 0 003.29 2.85l.53.11 82.91 13.74a6 6 0 001.12.1c2.37 0 4.47-1.25 4.88-2.9l13.43-54.33a2.32 2.32 0 00-.36-1.89 5.11 5.11 0 00-3.42-1.93z"
				fill="#e8e8ed"
				fillRule="evenodd"
			/>
			<path
				d="M101.28 87.61L73.7 83.32a.69.69 0 01-.55-.89l1.39-5.88a.86.86 0 01.93-.67L103 80.17a.72.72 0 01.56.9L102.2 87a.84.84 0 01-.92.61z"
				fill="#ff3ddb"
				fillRule="evenodd"
			/>
			<circle cx="135.78" cy="133.93" r="7.94" fill="#da1710" />
		</Pictogram>
	);
};

WBCBankCardPictogram.propTypes = Pictogram.propTypes;
