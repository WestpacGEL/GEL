import { jsx } from '@westpac/core';

const BackToGelSvg = (props) => {
	return (
		<svg
			viewBox="0 0 299 90"
			width="299"
			height="90"
			css={{ display: 'inline-block', lineHeight: 1, verticalAlign: 'middle' }}
			role="img"
			focusable="false"
			{...props}
		>
			<title>Back to GEL</title>
			<g fill="none" fillRule="evenodd">
				<path
					d="M43.847 39.524c3.469 0 6.547 1.58 6.834 5.398h-4.166c-.206-1.375-1.088-2.094-2.647-2.094-2.074 0-3.326 1.602-3.326 4.25v.163c0 2.381.883 4.229 3.428 4.229 2.052 0 2.832-1.047 2.914-2.218h-2.75v-2.934h6.896v1.806c0 3.735-2.442 6.548-7.183 6.548-4.988 0-7.697-3.1-7.697-7.492v-.164c0-4.475 3.284-7.492 7.697-7.492zm18.554.226v3.243H56.45v2.524h4.741v2.997h-4.74v2.668h6.28v3.243H52.262V39.75h10.14zm5.83 0v11.412h5.542v3.263h-9.77V39.75h4.228z"
					fill="currentColor"
				/>
				<path d="M15.824 47l6.588 6.588L21 55l-8-8 8-8 1.412 1.412z" fill="currentColor" />
			</g>
		</svg>
	);
};

export default BackToGelSvg;
