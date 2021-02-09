import React from 'react';
import { propTypes, defaultProps, Pictogram, getColors } from '../Pictogram';

export const BusinessPersonPictogram = ({ mode, ...rest }) => {
	const { outline, highlight } = getColors(mode);

	return (
		<Pictogram pictogram="BusinessPersonPictogram" mode={mode} {...rest}>
			<g fill="none" fillRule="evenodd">
				<path
					fill={highlight}
					d="M58.4887,67.1731 L48.2197,67.1731 C48.0557,67.1731 47.9237,67.0401 47.9237,66.8761 L47.9237,61.1941 C47.9237,61.0301 48.0557,60.8971 48.2197,60.8971 L58.4887,60.8971 C58.6527,60.8971 58.7847,61.0301 58.7847,61.1941 L58.7847,66.8761 C58.7847,67.0401 58.6527,67.1731 58.4887,67.1731"
				/>
				<path
					fill={outline}
					d="M8.871,70.1267 L10.271,61.0667 L10.294,60.9357 C10.755,58.2777 12.569,55.9927 15.146,54.8217 C16.77,54.0857 19.838,52.6847 22.78,51.2977 L32.383,60.9017 C32.775,61.2937 33.41,61.2937 33.802,60.9017 L37.253,57.4497 L40.712,60.9087 C41.1,61.2957 41.728,61.2957 42.117,60.9087 L51.684,51.3397 L52.02,51.4967 C54.773,52.7697 57.551,54.0187 59.07,54.6977 C61.654,55.8527 63.481,58.1277 63.959,60.7887 L65.433,69.9657 L8.871,70.1267 Z M30.571,46.1827 C31.157,45.1267 31.479,43.9487 31.629,42.7887 C33.303,43.9227 35.2,44.6407 37.338,44.6407 C39.302,44.6407 41.042,44.0877 42.581,43.1867 C42.846,44.7307 43.39,46.0147 44.185,47.0247 C44.185,47.0247 44.535,47.4417 45.276,48.0077 L37.253,56.0307 L29.046,47.8227 C30.174,46.8807 30.571,46.1827 30.571,46.1827 L30.571,46.1827 Z M24.604,27.3237 C37.866,23.9337 42.405,13.7417 42.405,13.7417 C44.46,19.1657 47.873,23.1077 50.014,25.2107 C49.985,26.4777 49.766,27.7357 49.36,28.9417 C47.879,33.3507 44.079,42.1407 37.338,42.1407 C29.965,42.1407 25.637,30.4707 24.604,27.3237 L24.604,27.3237 Z M69.221,60.0407 L69.191,59.8697 C68.535,56.1527 66.017,52.9757 62.455,51.3717 C59.8,50.1757 53.024,47.9577 49.61,46.2207 C47.984,45.3937 46.87,44.3267 46.163,43.3637 C51.028,44.7357 54.175,44.3487 55.599,42.1967 C58.165,38.3177 58.499,31.8107 56.599,22.6757 C55.195,12.3347 47.248,4.0007 36.947,4.0007 C26.646,4.0007 18.748,13.3957 17.295,22.6757 C15.493,31.7097 15.827,38.2167 18.295,42.1967 C19.761,44.5597 23.385,44.7117 29.166,42.6567 C28.96,44.0137 28.455,45.4387 27.289,46.2777 C27.136,46.3887 26.97,46.4897 26.793,46.5807 C23.356,48.3397 16.813,51.3307 14.16,52.5347 C10.828,54.0467 8.479,57.0237 7.88,60.4857 L6,72.6237 L55.445,72.4837 L71.227,72.4837 L69.221,60.0407 Z"
				/>
			</g>
		</Pictogram>
	);
};

BusinessPersonPictogram.defaultProps = {
	...defaultProps,
	viewBoxWidth: 78,
	viewBoxHeight: 78,
	assistiveText: 'Business person',
	copyrightYear: '2020',
};
BusinessPersonPictogram.propTypes = propTypes;
