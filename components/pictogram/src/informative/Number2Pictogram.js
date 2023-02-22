import React from 'react';
import { getColors } from '../_utils';
import { defaultProps, Pictogram } from '../Pictogram';

export const Number2Pictogram = ({ mode, ...rest }) => {
	const { outline, highlight } = getColors(mode);

	return (
		<Pictogram pictogram="Number2Pictogram" mode={mode} {...rest}>
			<g fill="none" fillRule="evenodd">
				<path
					fill={highlight}
					d="M47.237 46.492v4.971H28.479c.203-1.879.813-3.659 1.828-5.342 1.016-1.682 3.022-3.913 6.018-6.693 2.412-2.248 3.89-3.77 4.437-4.57.737-1.105 1.104-2.197 1.104-3.276 0-1.194-.32-2.11-.961-2.752-.641-.64-1.527-.96-2.656-.96-1.117 0-2.006.335-2.666 1.008-.66.673-1.041 1.79-1.143 3.351l-5.332-.533c.317-2.945 1.315-5.058 2.99-6.34 1.676-1.283 3.77-1.925 6.284-1.925 2.755 0 4.919.743 6.494 2.23 1.574 1.483 2.36 3.331 2.36 5.54a9.685 9.685 0 0 1-.675 3.59c-.451 1.136-1.166 2.326-2.142 3.57-.65.825-1.817 2.013-3.504 3.561-1.69 1.55-2.758 2.578-3.21 3.086a9.23 9.23 0 0 0-1.095 1.484h10.627z"
				/>
				<path
					fill={outline}
					d="M38.268 68.037C21.855 68.037 8.5 54.683 8.5 38.269S21.855 8.502 38.268 8.502s29.768 13.353 29.768 29.767-13.355 29.768-29.768 29.768m27.17-47.142C59.697 11.947 49.666 6 38.268 6 20.476 6 6 20.474 6 38.267a32.088 32.088 0 0 0 6.266 19.079C18.006 66.3 28.039 72.25 39.443 72.25c17.792 0 32.266-14.475 32.266-32.267a32.101 32.101 0 0 0-6.271-19.088"
				/>
			</g>
		</Pictogram>
	);
};

Number2Pictogram.defaultProps = {
	...defaultProps,
	viewBoxWidth: 78,
	viewBoxHeight: 78,
	assistiveText: 'Number 2',
	copyrightYear: '2021',
};
Number2Pictogram.propTypes = Pictogram.propTypes;
