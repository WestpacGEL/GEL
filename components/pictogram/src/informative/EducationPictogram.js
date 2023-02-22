import React from 'react';
import { getColors } from '../_utils';
import { defaultProps, Pictogram } from '../Pictogram';

export const EducationPictogram = ({ mode, ...rest }) => {
	const { outline, highlight } = getColors(mode);

	return (
		<Pictogram pictogram="EducationPictogram" mode={mode} {...rest}>
			<g fill="none" fillRule="evenodd">
				<path
					fill={highlight}
					d="M62.64 22.584c-5.59-.42-13.53-.284-20.12 2.649v-3c6.59-2.933 14.53-3.069 20.12-2.649v3zm0 8.883c-5.59-.421-13.53-.285-20.12 2.649v-3c6.59-2.934 14.53-3.07 20.12-2.65v3zm0 8.883c-5.59-.42-13.53-.285-20.12 2.648v-3c6.59-2.933 14.53-3.069 20.12-2.649v3zm0 8.881c-5.59-.42-13.53-.284-20.12 2.649v-3c6.59-2.933 14.53-3.069 20.12-2.649v3z"
				/>
				<path
					fill={outline}
					d="M67.553 56.169c-4.723-.81-19.258-2.607-29.288 3.582V19.507c9.435-6.934 25.21-4.76 29.288-4.05V56.17zM35.765 59.75c-5.719-3.527-12.898-4.46-18.889-4.46a63.2 63.2 0 0 0-10.399.879V15.456c4.076-.712 19.851-2.885 29.288 4.05V59.75zM70.27 13.709c-.149-.186-.346-.4-1.186-.583-.84-.184-20.28-4.22-32.063 4.208C25.24 8.919 5.823 13.027 4.983 13.21L4 13.424v45.32l.013.002c.003.27.082.533.248.748l1.63 2.111c.293.38.781.559 1.251.457l.746-.163c.194-.043 19.468-4.12 30.305 3.886.274.205.683.31.925.31s.48 0 .711-.007c.233-.007.56-.123.8-.3 10.841-8.005 30.108-3.93 30.302-3.887l1.517.33V16.86c0-.287-.098-.564-.277-.787l-1.9-2.364z"
				/>
			</g>
		</Pictogram>
	);
};

EducationPictogram.defaultProps = {
	...defaultProps,
	viewBoxWidth: 78,
	viewBoxHeight: 78,
	assistiveText: 'Education',
	copyrightYear: '2021',
};
EducationPictogram.propTypes = Pictogram.propTypes;
