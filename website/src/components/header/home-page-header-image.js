/** @jsx jsx */
import { jsx, useMediaQuery } from '@westpac/core';
import React from 'react';
import { StgBackgroundSvg, BsaBackgroundSvg } from '../symbols';

const HomePageHeaderImage = ({ brand, ...rest }) => {
	const mq = useMediaQuery();

	const STGImage = (props) => (
		<div
			css={{
				bottom: 0,
				left: 0,
				width: 1202,
			}}
			{...props}
		>
			<StgBackgroundSvg
				css={{
					display: 'block',
					width: '100%',
					height: 'auto',
				}}
			/>
		</div>
	);
	const BSAImage = (props) => (
		<div
			css={mq({
				bottom: 0,
				right: 0,
				width: 1016,
			})}
			{...props}
		>
			<BsaBackgroundSvg
				css={{
					display: 'block',
					width: '100%',
					height: 'auto',
				}}
			/>
		</div>
	);

	const BRAND_HEADERS = {
		WBC: null,
		WBG: null,
		STG: STGImage,
		BSA: BSAImage,
		BOM: null,
		BTFG: null,
		RAMS: null,
	};
	const HeaderImage = BRAND_HEADERS[brand];

	return HeaderImage ? (
		<HeaderImage
			css={mq({
				display: ['none', null, 'block'],
				position: 'absolute',
				zIndex: 0,
			})}
			{...rest}
		/>
	) : null;
};

export default HomePageHeaderImage;
