import React from 'react';
import { getColors } from '../_utils';
import { defaultProps, Pictogram } from '../Pictogram';

export const FingerMotionPictogram = ({ mode, ...rest }) => {
	const { outline, highlight } = getColors(mode);

	return (
		<Pictogram pictogram="FingerMotionPictogram" mode={mode} {...rest}>
			<g fill="none" fillRule="evenodd">
				<path
					fill={highlight}
					d="M53.049 70.83c-1.828 0-3.313-1.494-3.313-3.337 0-1.844 1.485-3.337 3.313-3.337 1.83 0 3.313 1.493 3.313 3.337 0 1.843-1.483 3.337-3.313 3.337zM26.17 73.736h33.337V61.343H26.171v12.393z"
				/>
				<path
					fill={outline}
					d="M56.328 39.204c0 3.081-.955 9.63-2.865 19.65H27.396L12.2 39.68l-.087-.099a2.135 2.135 0 0 1-.613-1.5 2.988 2.988 0 0 1 2.984-2.985h2.364c.292 0 .567.117.772.326l10.422 10.734V5.675c0-.096.08-.175.176-.175h2.84a3.016 3.016 0 0 1 3.011 3.014v20.35h14.868c4.076 0 7.391 3.316 7.391 7.392v2.948zM40.45 26.364V8.514A5.52 5.52 0 0 0 34.936 3h-6.718a2.678 2.678 0 0 0-2.676 2.675v34.318l-6.13-6.314a3.605 3.605 0 0 0-2.564-1.082h-2.364A5.49 5.49 0 0 0 9 38.082c0 1.198.453 2.331 1.28 3.2l15.907 20.071h33.317c2.127-11.308 3.191-18.601 3.191-21.878 0-1.51.004-2.583.013-3.219 0-5.454-4.437-9.892-9.89-9.892h-12.37z"
				/>
			</g>
		</Pictogram>
	);
};

FingerMotionPictogram.defaultProps = {
	...defaultProps,
	viewBoxWidth: 78,
	viewBoxHeight: 78,
	assistiveText: 'Hand with finger raised',
	copyrightYear: '2021',
};
FingerMotionPictogram.propTypes = Pictogram.propTypes;
