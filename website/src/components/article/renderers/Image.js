/** @jsx jsx */

import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { Cell } from '@westpac/grid';
import { useLayoutContext, useIndexContext } from './Providers';

export const Image = ({ src, size, caption, alt = '', reducedSpacing, ...props }) => {
	const mq = useMediaQuery();
	const {
		TYPE,
		GEL: { COLORS },
	} = useBrand();

	const layoutContext = useLayoutContext();
	const indexContext = useIndexContext();

	const index = indexContext ? indexContext.index : 0;
	let layout = 'single';

	if (layoutContext) {
		const items = layoutContext.layout.reduce((a, b) => a + b, 0);
		layout = 'double';
		console.log(items);
		// layout = items === 2 ? 'double' : 'triple';
	}

	// const layout = layoutContext ? 'double' : 'single';
	// console.log(layoutContext && layoutContext.layout);

	// need to work out the widths at body and bodywide?
	// body only max spans 8 and bodyWide spans 10 which are not divisible by 3...
	const sizeMap = {
		single: {
			bodyWide: { width: [12, 10], left: [[1, 2]] },
			body: { width: [12, 10, null, 8], left: [[1, 2, null, 3]] },
		},
		double: {
			bodyWide: {
				width: [12, 5],
				left: [
					[1, 2],
					[1, 7],
				],
			},
			body: {
				width: [12, 5, null, 4],
				left: [
					[1, 2, null, 3],
					[1, 7],
				],
			},
		},
		triple: {
			bodyWide: {
				width: [12, 4],
				left: [[1, 2], [1, 6], []],
			},
			body: {},
		},
	};

	let marginBottom = ['2.625rem', '3.375rem'];

	if (layout == 'double' || layout == 'triple') {
		if (index === 0) {
			marginBottom = ['1.5rem', '3.375rem'];
		}

		if (reducedSpacing) {
			marginBottom = ['1.5rem', '1.875rem'];
		}
	}

	return (
		<Cell
			width={sizeMap[layout][size].width}
			left={sizeMap[layout][size].left[index]}
			css={mq({ marginBottom: marginBottom })}
		>
			<figure css={{ margin: 0 }}>
				<img src={src} css={{ width: '100%', height: 'auto' }} alt={alt} {...props} />
				{caption && (
					<figcaption
						css={{
							marginTop: '0.75rem',
							fontFamily: '"graphik",' + TYPE.bodyFont.fontFamily,
							fontSize: '0.875rem',
							color: COLORS.muted,
							lineHeight: 1.07,
						}}
					>
						{caption}
					</figcaption>
				)}
			</figure>
		</Cell>
	);
};
