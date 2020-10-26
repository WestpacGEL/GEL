/** @jsx jsx */
import { jsx, useBrand } from '@westpac/core';
import { Svg } from './Svg';

export const TruckSvg = ({
	width,
	height = 'auto',
	highlightColor,
	highlightOutlineColor,
	outlineColor,
	...rest
}) => {
	const { COLORS } = useBrand();

	highlightColor = highlightColor || COLORS.primary;
	highlightOutlineColor = highlightOutlineColor || COLORS.text;
	outlineColor = outlineColor || COLORS.borderDark;

	return (
		<Svg viewBox="0 0 90 90" width={90} height={90} css={{ width, height }} {...rest}>
			<title>Truck</title>
			<g fill="none" fillRule="evenodd">
				<path
					d="M59 73H34m-18 0h-4.75a.25.25 0 01-.25-.25v-11.5a.25.25 0 01.25-.25h43.749L55 25h10.75l.02.002L66 25c9.105 0 16.537 7.362 16.98 16.614.013.03.02.064.02.1V72.75a.25.25 0 01-.25.25H77m6-8.083a6 6 0 110-11.834M66.5 33H63v14h12v-5.646a.104.104 0 00-.01-.047c-.217-4.54-3.801-8.17-8.238-8.303L66.5 33z"
					stroke={outlineColor}
					strokeWidth={2}
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M25 65a9 9 0 110 18 9 9 0 010-18zm43 0a9 9 0 110 18 9 9 0 010-18z"
					stroke={highlightOutlineColor}
					strokeWidth={2}
					fill={highlightColor}
					strokeLinejoin="round"
				/>
				<path
					d="M38.75 6c.086 0 .17.009.25.025l.122-.019L39.25 6h15.5c.69 0 1.25.56 1.25 1.25v11.5c0 .043-.002.086-.006.128l-.02.12c.017.081.026.166.026.252v11.5c0 .043-.002.086-.006.128l-.02.12c.017.081.026.166.026.252v13.5c0 .043-.002.086-.006.128l-.02.12c.017.081.026.166.026.252v15.5c0 .69-.56 1.25-1.25 1.25H7.25C6.56 62 6 61.44 6 60.75v-15.5c0-.086.009-.17.025-.252l-.019-.12L6 44.75v-13.5c0-.086.009-.17.025-.252l-.019-.12L6 30.75v-11.5c0-.69.56-1.25 1.25-1.25H22V7.25c0-.647.492-1.18 1.122-1.244L23.25 6zM54 46H8v14h46V46zm0-14H8v12h46V32zM22 20H8v10h14V20zm16 0H24v10h14V20zm16 0H40v10h14V20zM38 8H24v10h14V8zm16 0H40v10h14V8z"
					fill={outlineColor}
				/>
				<path
					d="M29 13h4m12 0h4M13 25h4m28 0h4M30 38h4m-4 15h4m-5-28h4"
					stroke={highlightOutlineColor}
					strokeWidth={2}
					strokeLinecap="round"
				/>
			</g>
		</Svg>
	);
};
