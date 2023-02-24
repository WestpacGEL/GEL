import React from 'react';
import { getColors } from '../_utils';
import { Pictogram } from '../Pictogram';

export const ArrowsPassingPictogram = ({ mode, ...rest }) => {
	const { outline, highlight } = getColors(mode);

	return (
		<Pictogram pictogram="ArrowsPassingPictogram" mode={mode} {...rest}>
			<g fill="none" fillRule="evenodd">
				<path
					fill={outline}
					d="M38.268 68.037C21.854 68.037 8.5 54.683 8.5 38.27S21.854 8.502 38.268 8.502c16.413 0 29.768 13.353 29.768 29.767S54.68 68.037 38.268 68.037m27.169-47.142C59.697 11.947 49.666 6 38.267 6 20.477 6 6 20.475 6 38.268a32.08 32.08 0 0 0 6.266 19.078C18.006 66.3 28.039 72.25 39.443 72.25c17.792 0 32.266-14.475 32.266-32.267a32.095 32.095 0 0 0-6.272-19.088"
				/>
				<path
					fill={highlight}
					d="M56.102 29.595L48.507 22l-2.12 2.121 5.084 5.086H21.365v3h30.107l-5.086 5.085 2.121 2.121 7.594-7.593c.614-.615.614-1.61.001-2.224m.095 16.599H26.091l5.085-5.085-2.122-2.121-7.593 7.595a1.57 1.57 0 0 0 0 2.223l7.593 7.594 2.122-2.121-5.085-5.085h30.106v-3z"
				/>
			</g>
		</Pictogram>
	);
};

ArrowsPassingPictogram.defaultProps = {
	...Pictogram?.defaultProps,
	viewBoxWidth: 78,
	viewBoxHeight: 78,
	assistiveText: 'Arrows pointing left and right',
	copyrightYear: '2021',
};
ArrowsPassingPictogram.propTypes = Pictogram.propTypes;
