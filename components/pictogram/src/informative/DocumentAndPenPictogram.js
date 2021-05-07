import React from 'react';
import { getColors } from '../_utils';
import { propTypes, defaultProps, Pictogram } from '../Pictogram';

export const DocumentAndPenPictogram = ({ mode, ...rest }) => {
	const { outline, highlight } = getColors(mode);

	return (
		<Pictogram pictogram="DocumentAndPenPictogram" mode={mode} {...rest}>
			<g fill="none" fillRule="evenodd">
				<polygon
					fill={highlight}
					points="15.655 19.999 47.317 19.999 47.317 16.999 15.655 16.999"
				/>
				<polygon
					fill={highlight}
					points="15.655 28.298 47.317 28.298 47.317 25.298 15.655 25.298"
				/>
				<polygon
					fill={highlight}
					points="15.655 36.594 35.682 36.594 35.682 33.594 15.655 33.594"
				/>
				<path
					fill={outline}
					d="M41.556 57.24l-6.204-6.203 25.822-25.821 6.204 6.203L41.556 57.24zm-6.463 2.044l-1.891-1.892 1.177-3.793 4.573 4.573-3.86 1.112zm-22.005 9.149A3.593 3.593 0 0 1 9.5 64.845V9.579h43.972v19.726L33.185 49.592c-.24.242-.421.54-.525.867l-4.13 13.296 13.534-3.901c.323-.103.62-.284.862-.526l10.546-10.546v14.536c.153 3.136 1.183 4.42 2.98 5.115H13.088zm56.274-35.54c.813-.813.83-2.117.04-2.907l-6.872-6.873a2.012 2.012 0 0 0-1.49-.58 2.1 2.1 0 0 0-1.417.622l-3.651 3.65V7H7v57.767a6.095 6.095 0 0 0 6.088 6.088h42.884l4.146-.01a4.25 4.25 0 0 0 4.248-4.248V56.479h-8.394V46.283l13.39-13.39z"
				/>
			</g>
		</Pictogram>
	);
};

DocumentAndPenPictogram.defaultProps = {
	...defaultProps,
	viewBoxWidth: 78,
	viewBoxHeight: 78,
	assistiveText: 'Document and pen',
	copyrightYear: '2021',
};
DocumentAndPenPictogram.propTypes = propTypes;
