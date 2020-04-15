/** @jsx jsx */
import { jsx } from '@westpac/core';

export const StopwatchSvg = ({
	size = 90,
	highlightColor = '#D5002B',
	highlightOutlineColor = '#2D373E',
	outlineColor = '#8C9296',
}) => {
	return (
		<svg width={size} height={size} viewBox="0 0 90 90">
			<g fill="none" fillRule="evenodd">
				<path
					d="M50 6a1 1 0 011 1v8a1 1 0 01-1 1h-3v5h-4v-5h-3a1 1 0 01-1-1V7a1 1 0 011-1h10zM19.313 17.11a1 1 0 011.41.123l3.856 4.596a1 1 0 01-.123 1.41l-1.788 1.5 2.571 3.063-2.553 2.143-2.572-3.064-1.787 1.5a1 1 0 01-1.409-.124l-3.856-4.596a1 1 0 01.123-1.409l6.128-5.142z"
					fill={outlineColor}
				/>
				<circle
					stroke={outlineColor}
					strokeWidth={2}
					fill="none"
					strokeLinejoin="round"
					cx={45}
					cy={52}
					r={31}
				/>
				<path
					d="M45 26v3m13 .483l-1.5 2.598M67.517 39l-2.598 1.5M71 52h-3m-.483 13l-2.598-1.5M58 74.517l-1.5-2.598M45 78v-3m-13-.483l1.5-2.598M22.483 65l2.598-1.5M19 52h3m.483-13l2.598 1.5M32 29.483l1.5 2.598"
					stroke={highlightOutlineColor}
					strokeWidth={2}
					strokeLinecap="round"
				/>
				<circle fill={highlightOutlineColor} cx={45} cy={52} r={2} />
				<path
					d="M45 57a5 5 0 100-10 5 5 0 000 10zm0-24v14"
					stroke={highlightColor}
					strokeWidth={2}
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</g>
		</svg>
	);
};
