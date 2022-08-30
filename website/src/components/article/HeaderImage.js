/** @jsx jsx */

import { jsx, useMediaQuery } from '@westpac/core';
import { Cell } from '@westpac/grid';

// temp
import { BASE_URL } from '../../config';
// <SingleImage type="hero" src={article.pageImage?.publicUrl} />
// need to use src = src || unsplash

export const HeaderImage = ({ src, ...props }) => {
	const mq = useMediaQuery();
	return (
		<Cell width={12} css={mq({ marginBottom: ['2.625rem', '3.375rem'] })}>
			<img src={`${BASE_URL}/images/lego.png`} css={{ width: '100%', height: 'auto' }} {...props} />
		</Cell>
	);
};
