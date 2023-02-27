import React from 'react';
import { getColors } from '../_utils';
import { Pictogram } from '../Pictogram';

export const Number1Pictogram = ({ mode, ...rest }) => {
	const { outline, highlight } = getColors(mode);

	return (
		<Pictogram pictogram="Number1Pictogram" mode={mode} {...rest}>
			<g fill="none" fillRule="evenodd">
				<path
					fill={highlight}
					d="M42.762 52.16h-5.35V31.994c-1.956 1.828-4.26 3.18-6.914 4.056v-4.857c1.397-.457 2.914-1.323 4.552-2.598 1.638-1.277 2.761-2.765 3.37-4.466h4.342V52.16z"
				/>
				<path
					fill={outline}
					d="M38.268 68.037C21.855 68.037 8.5 54.683 8.5 38.269S21.855 8.502 38.268 8.502s29.768 13.353 29.768 29.767-13.355 29.768-29.768 29.768m27.17-47.142C59.697 11.947 49.666 6 38.268 6 20.476 6 6 20.475 6 38.268c0 7.133 2.331 13.73 6.266 19.078C18.006 66.3 28.039 72.25 39.443 72.25c17.792 0 32.266-14.475 32.266-32.267a32.101 32.101 0 0 0-6.271-19.088"
				/>
			</g>
		</Pictogram>
	);
};

Number1Pictogram.defaultProps = {
	...Pictogram?.defaultProps,
	viewBoxWidth: 78,
	viewBoxHeight: 78,
	assistiveText: 'Number 1',
	copyrightYear: '2021',
};
Number1Pictogram.propTypes = Pictogram.propTypes;
