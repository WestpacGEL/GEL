/** @jsx jsx */

import { jsx } from '@westpac/core';

export const DotSubscribeLogo = (props) => {
	return (
		<svg
			width="84"
			height="84"
			viewBox="0 0 84 84"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			role="img"
			focusable="false"
			{...props}
		>
			<circle cx="42" cy="42" r="41.5" fill="white" stroke="#CFD8DC" />
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M54.8134 30.6793C55.5066 31.3726 55.5066 32.4924 54.8134 33.1857L51.5605 36.4386L44.8948 29.7728L48.1477 26.5199C48.8409 25.8267 49.9607 25.8267 50.654 26.5199L54.8134 30.6793ZM28.6667 46.0009V52.6667H35.3324L49.6586 38.3405L42.9928 31.6748L28.6667 46.0009ZM26 55.3333H58V58H26V55.3333Z"
				fill="#1976D2"
			/>
		</svg>
	);
};
