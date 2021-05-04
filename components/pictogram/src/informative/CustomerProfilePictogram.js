import React from 'react';
import { getColors } from '../_utils';
import { propTypes, defaultProps, Pictogram } from '../Pictogram';

export const CustomerProfilePictogram = ({ mode, ...rest }) => {
	const { outline, highlight } = getColors(mode);

	return (
		<Pictogram pictogram="CustomerProfilePictogram" mode={mode} {...rest}>
			<g fill="none" fillRule="evenodd">
				<path
					fill={outline}
					d="M38.268 68.037C21.854 68.037 8.5 54.683 8.5 38.269S21.854 8.502 38.268 8.502c16.413 0 29.767 13.353 29.767 29.767S54.681 68.037 38.268 68.037m27.169-47.142C59.696 11.947 49.666 6 38.268 6 20.476 6 6 20.475 6 38.268c0 7.133 2.331 13.73 6.266 19.079C18.006 66.3 28.039 72.25 39.442 72.25c17.792 0 32.267-14.475 32.267-32.267a32.095 32.095 0 0 0-6.272-19.088"
				/>
				<path
					fill={highlight}
					fillRule="nonzero"
					d="M43.704 41.03c4.501 0 8.202 3.26 8.338 7.282l.004.228v3.253c0 .66-.565 1.173-1.25 1.232l-.13.005H26.34c-.694 0-1.223-.472-1.287-1.108l-.006-.129V48.54c0-4.05 3.617-7.384 8.087-7.506l.254-.004h10.317zm-5.158-20a8.499 8.499 0 0 0-8.5 8.5c0 2.366.972 4.579 2.656 6.173a8.5 8.5 0 1 0 5.843-14.673z"
				/>
			</g>
		</Pictogram>
	);
};

CustomerProfilePictogram.defaultProps = {
	...defaultProps,
	viewBoxWidth: 78,
	viewBoxHeight: 78,
	assistiveText: 'Customer profile',
	copyrightYear: '2021',
};
CustomerProfilePictogram.propTypes = propTypes;
