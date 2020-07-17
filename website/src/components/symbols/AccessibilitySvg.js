/** @jsx jsx */
import { jsx } from '@westpac/core';
import { Svg } from './Svg';

export const AccessibilitySvg = ({
	width,
	height = 'auto',
	highlightColor = '#D5002B',
	highlightOutlineColor = '#2D373E',
	outlineColor = '#8C9296',
	...rest
}) => {
	return (
		<Svg viewBox="0 0 90 90" width={90} height={90} css={{ width, height }} {...rest}>
			<title>Accessibility</title>
			<g fill="none" fillRule="evenodd">
				<path
					d="M75.975 23.502a5 5 0 01-4.478 5.473L55 30.625V48.29L63.8 78.606l.06.223a5.005 5.005 0 01-3.467 5.973l-.224.059-.217.046a5.004 5.004 0 01-5.755-3.513L46.246 54 45 54l-1.246-.001-7.952 27.395a5.004 5.004 0 01-5.755 3.513l-.218-.046-.223-.06a5.005 5.005 0 01-3.467-5.972l.06-.223 8.8-30.318V30.625l-16.497-1.65a5 5 0 01-4.494-5.256l.017-.217a5 5 0 015.224-4.496l.248.019L39.208 21h11.584l19.71-1.975.248-.019a5 5 0 015.225 4.496z"
					fill="none"
				/>
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
					stroke={outlineColor}
					strokeWidth={2}
					fill="none"
					strokeLinejoin="round"
					cx={45}
					cy={13}
					r={6}
				/>
			</g>
		</Svg>
	);
};
