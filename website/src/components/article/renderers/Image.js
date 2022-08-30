/** @jsx jsx */

import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { Cell } from '@westpac/grid';
import { useLayoutContext, useIndexContext } from './Providers';
// temp
import { BASE_URL } from '../../../config';

export const Image = ({ src, size, caption, alt, reducedSpacing, ...props }) => {
	const mq = useMediaQuery();
	const {
		TYPE,
		GEL: { COLORS },
	} = useBrand();

	const layoutContext = useLayoutContext();
	const indexContext = useIndexContext();

	const index = indexContext ? indexContext.index : 0;
	const layout = layoutContext ? 'double' : 'single';

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
	};

	// TO DO: confirm spacing of this
	let marginBottom = ['2.625rem', '3.375rem'];

	if (layout == 'double') {
		if (index === 0) {
			['1.5rem', '3.375rem'];
		}

		if (reducedSpacing) {
			marginBottom = ['1.375rem', '1.875rem'];
		}
	}

	const srcURL = src || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=30';
	// src={srcURL}

	return (
		<Cell
			width={sizeMap[layout][size].width}
			left={sizeMap[layout][size].left[index]}
			css={mq({ marginBottom: marginBottom })}
		>
			<figure css={{ margin: 0 }}>
				<img
					src={`${BASE_URL}/images/lego.png`}
					css={{ width: '100%', height: 'auto' }}
					alt={alt}
					{...props}
				/>
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
