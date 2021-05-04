import React from 'react';
import { getColors } from '../_utils';
import { propTypes, defaultProps, Pictogram } from '../Pictogram';

export const CompassPictogram = ({ mode, ...rest }) => {
	const { outline, highlight } = getColors(mode);

	return (
		<Pictogram pictogram="CompassPictogram" mode={mode} {...rest}>
			<g fill="none" fillRule="evenodd">
				<path
					fill={highlight}
					d="M37.014 35.276a2.602 2.602 0 1 1 3.681 3.681l2.877 2.878c.021-.02.047-.036.061-.06l10.464-19.502a.295.295 0 0 0-.4-.399l-19.5 10.464c-.026.013-.04.04-.06.06l2.877 2.878z"
				/>
				<path
					fill={outline}
					d="M38.268 68.037C21.854 68.037 8.5 54.683 8.5 38.269S21.854 8.502 38.268 8.502c16.413 0 29.767 13.353 29.767 29.767S54.681 68.037 38.268 68.037m27.17-47.142C59.695 11.947 49.665 6 38.267 6 20.476 6 6 20.475 6 38.268c0 7.133 2.331 13.73 6.266 19.078C18.006 66.3 28.04 72.25 39.442 72.25c17.792 0 32.267-14.475 32.267-32.267a32.095 32.095 0 0 0-6.272-19.088"
				/>
				<path
					fill={outline}
					d="M40.606 14.275a2.416 2.416 0 1 0-4.831.001 2.416 2.416 0 0 0 4.831 0zM38.19 59.396a2.416 2.416 0 1 0 0 4.831 2.416 2.416 0 0 0 0-4.83m23.863-23.543a2.415 2.415 0 1 0 0 4.83 2.415 2.415 0 0 0 0-4.83m-47.779 0a2.415 2.415 0 1 0 0 4.83 2.415 2.415 0 0 0 0-4.83m22.74 3.103a2.604 2.604 0 0 1 0-3.681l-2.878-2.878c-.02.02-.046.036-.06.06l-10.464 19.5a.295.295 0 0 0 .4.4l19.5-10.463c.025-.014.04-.041.061-.06l-2.878-2.878a2.604 2.604 0 0 1-3.68 0"
				/>
			</g>
		</Pictogram>
	);
};

CompassPictogram.defaultProps = {
	...defaultProps,
	viewBoxWidth: 78,
	viewBoxHeight: 78,
	assistiveText: 'Compass',
	copyrightYear: '2021',
};
CompassPictogram.propTypes = propTypes;
