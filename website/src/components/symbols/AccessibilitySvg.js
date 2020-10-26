/** @jsx jsx */
import { jsx, useBrand } from '@westpac/core';
import { Svg } from './Svg';

export const AccessibilitySvg = ({
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
			<title>Accessibility</title>
			<g fill="none" fillRule="evenodd">
				<path
					d="M54.88 51.463l7.961 27.422.052.199a4 4 0 01-2.582 4.695l-.196.062-.2.053a4 4 0 01-4.694-2.583l-.063-.196L46.997 53h-3.994l-8.162 28.115a4 4 0 01-4.757 2.779l-.2-.053a4 4 0 01-2.778-4.757l.053-.2 8.84-30.455v-18.71L18.603 27.98a4 4 0 01.597-7.975l.199.015L39.208 22h11.584l19.81-1.98.199-.015a4 4 0 01.795 7.95l-.198.025-2.786.279"
					stroke={outlineColor}
					strokeWidth={2}
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M58.688 43.524C60.3 42.268 66 36.952 66 32.57 66 28.191 63.833 26 59.5 26S53 31.476 53 31.476 50.37 26 46.5 26 40 28.19 40 32.571s5.7 9.697 7.312 10.953C48.924 44.78 53 49 53 49s4.076-4.22 5.688-5.476z"
					stroke={highlightOutlineColor}
					strokeWidth={2}
					fill={highlightColor}
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<circle
					cx={45}
					cy={13}
					r={6}
					stroke={outlineColor}
					strokeWidth={2}
					fill="none"
					strokeLinejoin="round"
				/>
			</g>
		</Svg>
	);
};
