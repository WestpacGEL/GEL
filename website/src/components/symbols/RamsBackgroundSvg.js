/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Svg } from './Svg';

export const RamsBackgroundSvg = (props) => {
	return (
		<Svg viewBox="0 0 447 447" width={447} height={447} {...props}>
			<title>RAMS background image</title>
			<defs>
				<linearGradient
					x1="26.834%"
					y1="16.167%"
					x2="78.251%"
					y2="91.259%"
					id="RamsBackgroundSvg-a"
				>
					<stop stopColor="#0092CD" offset="0%" />
					<stop stopColor="#007CBE" offset="42%" />
					<stop stopColor="#007CBE" offset="46%" />
					<stop stopColor="#007ABB" offset="62%" />
					<stop stopColor="#0072B1" offset="73%" />
					<stop stopColor="#0066A1" offset="83%" />
					<stop stopColor="#00558B" offset="93%" />
					<stop stopColor="#004373" offset="100%" />
				</linearGradient>
				<linearGradient
					x1="34.935%"
					y1="27.673%"
					x2="76.122%"
					y2="62.788%"
					id="RamsBackgroundSvg-b"
				>
					<stop stopColor="#006DA6" offset="0%" />
					<stop stopColor="#0080C2" offset="47%" />
					<stop stopColor="#009DE2" offset="67%" />
					<stop stopColor="#24BCEE" offset="100%" />
				</linearGradient>
				<linearGradient x1="0%" y1="49.999%" x2="100.002%" y2="49.999%" id="RamsBackgroundSvg-c">
					<stop stopColor="#24BCEE" stopOpacity="0" offset="0%" />
					<stop stopColor="#29BCE2" stopOpacity=".06" offset="9%" />
					<stop stopColor="#37BBC3" stopOpacity=".21" offset="24%" />
					<stop stopColor="#4EBB90" stopOpacity=".47" offset="43%" />
					<stop stopColor="#78C339" offset="66%" />
					<stop stopColor="#78C339" offset="78%" />
					<stop stopColor="#006DA6" offset="100%" />
				</linearGradient>
			</defs>
			<g fill="none">
				<circle fill="url(#RamsBackgroundSvg-a)" cx="223.55" cy="223.55" r="223.387" />
				<path
					d="M444.713 191.924a199.034 199.034 0 01-20.009 86.04c-50.691 104.45-181.782 145.446-292.8 91.57-75.86-36.82-122.73-108.424-128.618-183.41A225.312 225.312 0 00.162 223.55c0 123.372 100.015 223.387 223.388 223.387 123.372 0 223.387-100.015 223.387-223.387 0-10.581-.74-21.15-2.224-31.626z"
					fill="url(#RamsBackgroundSvg-b)"
				/>
				<path
					d="M3.286 186.124c5.888 74.986 52.758 146.59 128.608 183.41 111.019 53.876 242.11 12.88 292.801-91.57a200.605 200.605 0 004.778-10.622 200.925 200.925 0 01-11.42 19.785c-21.508 32.809-52.188 58.454-88.722 74.169-35.668 15.339-75.518 20.736-115.24 15.609h-.015a232.192 232.192 0 01-50.52-12.431 240.5 240.5 0 01-95.241-64.628 231.054 231.054 0 01-33.518-48.662c-15.272-29.761-23.613-62.145-24.444-94.531a221.904 221.904 0 00-7.067 29.471z"
					fill="url(#RamsBackgroundSvg-c)"
				/>
			</g>
		</Svg>
	);
};
