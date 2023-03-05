import React from 'react';
import { getColors } from '../_utils';
import { Pictogram } from '../Pictogram';

export const LoopPictogram = ({ mode, ...rest }) => {
	const { outline, highlight } = getColors(mode);

	return (
		<Pictogram pictogram="LoopPictogram" mode={mode} {...rest}>
			<g fill="none" fillRule="evenodd">
				<path
					fill={outline}
					d="M38.268 68.037C21.854 68.037 8.5 54.683 8.5 38.269S21.854 8.502 38.268 8.502c16.413 0 29.767 13.353 29.767 29.767S54.681 68.037 38.268 68.037m27.169-47.142C59.696 11.947 49.666 6 38.268 6 20.476 6 6 20.475 6 38.268c0 7.133 2.331 13.73 6.266 19.078C18.006 66.3 28.039 72.25 39.442 72.25c17.792 0 32.267-14.475 32.267-32.267a32.095 32.095 0 0 0-6.272-19.088"
				/>
				<path
					fill={highlight}
					fillRule="nonzero"
					d="M39 19c10.217 0 18.5 8.283 18.5 18.5 0 2.564-.523 5.057-1.522 7.358l-.44.988 6.743-2.724 1.136 2.813-10.071 4.068a1.591 1.591 0 0 1-2.01-.748l-.06-.132-4.068-10.069 2.813-1.136 2.724 6.744c.104-.19.208-.394.312-.612A15.497 15.497 0 0 0 54.5 37.5C54.5 28.94 47.56 22 39 22c-1.656 0-3.272.26-4.801.757l-1.176-2.77A18.496 18.496 0 0 1 39 19zm-12.919 8.364l.06.131 4.068 10.07-2.812 1.136-2.724-6.744c-.104.19-.209.393-.312.612a15.497 15.497 0 0 0-1.444 6.55c0 8.56 6.94 15.5 15.5 15.5a15.5 15.5 0 0 0 4.962-.81l1.175 2.767a18.49 18.49 0 0 1-6.137 1.043c-10.217 0-18.5-8.283-18.5-18.5 0-2.564.523-5.057 1.522-7.359l.44-.987-6.743 2.724L14 30.684l10.072-4.068a1.592 1.592 0 0 1 1.938.624l.071.124z"
				/>
			</g>
		</Pictogram>
	);
};

LoopPictogram.defaultProps = {
	...Pictogram?.defaultProps,
	viewBoxWidth: 78,
	viewBoxHeight: 78,
	assistiveText: 'Loop',
	copyrightYear: '2021',
};
LoopPictogram.propTypes = Pictogram.propTypes;
