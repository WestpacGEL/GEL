import React from 'react';
import { getColors } from '../_utils';
import { propTypes, defaultProps, Pictogram } from '../Pictogram';

export const ArrowDownPictogram = ({ mode, ...rest }) => {
	const { outline, highlight } = getColors(mode);

	return (
		<Pictogram pictogram="ArrowDownPictogram" mode={mode} {...rest}>
			<g fill="none" fillRule="evenodd">
				<path
					fill={outline}
					d="M38.268 68.037C21.854 68.037 8.5 54.683 8.5 38.27S21.854 8.502 38.268 8.502c16.413 0 29.767 13.353 29.767 29.767S54.681 68.037 38.268 68.037m27.168-47.142C59.696 11.947 49.666 6 38.268 6 20.476 6 6 20.475 6 38.268c0 7.133 2.331 13.73 6.266 19.078C18.006 66.3 28.039 72.25 39.442 72.25c17.792 0 32.267-14.475 32.267-32.267a32.09 32.09 0 0 0-6.273-19.088"
				/>
				<path
					fill={highlight}
					d="M49.264 38.438l-9.243 9.241V21.07h-3.5v26.612l-9.243-9.243-2.358 2.356L36.407 52.28a2.637 2.637 0 0 0 3.728 0l11.487-11.486-2.358-2.356z"
				/>
			</g>
		</Pictogram>
	);
};

ArrowDownPictogram.defaultProps = {
	...defaultProps,
	viewBoxWidth: 78,
	viewBoxHeight: 78,
	assistiveText: 'Arrow down',
	copyrightYear: '2021',
};
ArrowDownPictogram.propTypes = propTypes;
