import React from 'react';
import { getColors } from '../_utils';
import { Pictogram } from '../Pictogram';

export const FaceUnhappyPictogram = ({ mode, ...rest }) => {
	const { outline, highlight } = getColors(mode);

	return (
		<Pictogram pictogram="FaceUnhappyPictogram" mode={mode} {...rest}>
			<g fill="none" fillRule="evenodd">
				<path
					fill={outline}
					d="M38.268 68.037C21.854 68.037 8.5 54.683 8.5 38.27S21.854 8.502 38.268 8.502c16.413 0 29.768 13.353 29.768 29.767S54.68 68.037 38.268 68.037m27.169-47.142C59.697 11.947 49.666 6 38.267 6 20.477 6 6 20.475 6 38.268a32.08 32.08 0 0 0 6.266 19.078C18.006 66.3 28.039 72.25 39.443 72.25c17.792 0 32.266-14.476 32.266-32.267a32.095 32.095 0 0 0-6.272-19.088"
				/>
				<path
					fill={highlight}
					d="M24.514 53.959L22 52.322c.22-.337 5.483-8.257 16.33-8.322 10.863.065 16.126 7.985 16.345 8.322l-2.515 1.633c-.184-.277-4.647-6.899-13.83-6.955-9.168.056-13.63 6.678-13.816 6.959"
				/>
				<path
					fill={outline}
					d="M29.224 31.67a3.08 3.08 0 1 1-6.16 0 3.08 3.08 0 0 1 6.16 0m23.998 0a3.08 3.08 0 1 1-6.162 0 3.08 3.08 0 0 1 6.162 0"
				/>
			</g>
		</Pictogram>
	);
};

FaceUnhappyPictogram.defaultProps = {
	...Pictogram?.defaultProps,
	viewBoxWidth: 78,
	viewBoxHeight: 78,
	assistiveText: 'Face looking unhappy',
	copyrightYear: '2021',
};
FaceUnhappyPictogram.propTypes = Pictogram.propTypes;
