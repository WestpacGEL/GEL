/** @jsx jsx */

import { jsx, useMediaQuery } from '@westpac/core';
import { Cell } from '@westpac/grid';

export const HeaderImage = ({ src, ...props }) => {
	const mq = useMediaQuery();
	const imageSrc = src || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=30';
	return (
		<Cell width={12} css={mq({ marginBottom: ['2.625rem', '3.375rem'] })}>
			<img
				src={imageSrc}
				css={{ width: '100%', height: 'auto', display: 'block' }}
				alt=""
				{...props}
			/>
		</Cell>
	);
};
