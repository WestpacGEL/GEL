import React from 'react';
import { getColors } from '../_utils';
import { propTypes, defaultProps, Pictogram } from '../Pictogram';

export const TaxDocumentPictogram = ({ mode, ...rest }) => {
	const { outline, highlight } = getColors(mode);

	return (
		<Pictogram pictogram="TaxDocumentPictogram" mode={mode} {...rest}>
			<g fill="none" fillRule="evenodd">
				<path
					fill={outline}
					d="M56.472 68.433H16.087a3.593 3.593 0 0 1-3.588-3.588V9.58h43.973v53.74c.152 3.135 1.182 4.42 2.98 5.114h-2.98zm2.5-11.954V7H10v57.767a6.096 6.096 0 0 0 6.088 6.088l47.03-.01a4.25 4.25 0 0 0 4.248-4.248V56.48h-8.393z"
				/>
				<polygon fill={outline} points="18.655 42.92 50.317 42.92 50.317 39.92 18.655 39.92" />
				<polygon fill={outline} points="18.655 51.218 50.317 51.218 50.317 48.218 18.655 48.218" />
				<polygon fill={outline} points="18.655 59.515 38.682 59.515 38.682 56.515 18.655 56.515" />
				<polygon
					fill={highlight}
					points="15.889 19.516 19.737 19.516 19.737 30.289 22.854 30.289 22.854 19.516 26.693 19.516 26.693 16.823 15.889 16.823"
				/>
				<path
					fill={highlight}
					d="M34.964 24.66h-2.637l1.305-3.8 1.332 3.8zm.175-7.837h-2.962L27.225 30.29h3.16l1.01-2.945h4.54l1.069 2.945h3.226l-5.031-13.305-.06-.16z"
				/>
				<polygon
					fill={highlight}
					points="49.006 23.368 52.964 16.823 49.511 16.823 47.248 20.743 44.938 16.823 41.459 16.823 45.403 23.273 41.066 30.289 44.618 30.289 47.2 26.037 49.774 30.289 53.348 30.289"
				/>
			</g>
		</Pictogram>
	);
};

TaxDocumentPictogram.defaultProps = {
	...defaultProps,
	viewBoxWidth: 78,
	viewBoxHeight: 78,
	assistiveText: 'Tax document',
	copyrightYear: '2021',
};
TaxDocumentPictogram.propTypes = propTypes;
