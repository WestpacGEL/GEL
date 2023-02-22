import React from 'react';
import { getColors } from '../_utils';
import { defaultProps, Pictogram } from '../Pictogram';

export const HeartPictogram = ({ mode, ...rest }) => {
	const { outline, highlight } = getColors(mode);

	return (
		<Pictogram pictogram="HeartPictogram" mode={mode} {...rest}>
			<g fill="none" fillRule="evenodd">
				<path
					fill={outline}
					d="M38.268 68.037C21.854 68.037 8.5 54.683 8.5 38.269S21.854 8.502 38.268 8.502c16.413 0 29.767 13.353 29.767 29.767S54.681 68.037 38.268 68.037m27.169-47.142C59.696 11.947 49.666 6 38.268 6 20.476 6 6 20.475 6 38.268c0 7.133 2.331 13.73 6.266 19.078C18.006 66.3 28.039 72.25 39.442 72.25c17.792 0 32.267-14.475 32.267-32.267a32.095 32.095 0 0 0-6.272-19.088"
				/>
				<path
					fill={highlight}
					d="M46.548 24c-3.304 0-7.483 1.753-8.548 8.59-1.065-6.837-5.244-8.59-8.55-8.59C23.599 24 19 28.484 19 34.191c0 7.004 6.46 12.71 16.246 21.364l2.751 2.44V58l.003-.003.003.003v-.004l2.75-2.441C50.539 46.9 57 41.195 57 34.19 57 28.484 52.402 24 46.548 24"
				/>
			</g>
		</Pictogram>
	);
};

HeartPictogram.defaultProps = {
	...defaultProps,
	viewBoxWidth: 78,
	viewBoxHeight: 78,
	assistiveText: 'Heart',
	copyrightYear: '2021',
};
HeartPictogram.propTypes = Pictogram.propTypes;
