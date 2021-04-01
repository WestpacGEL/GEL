/** @jsx jsx */
import { jsx, useMediaQuery } from '@westpac/core';
import React from 'react';
import { StgBackgroundSvg, BsaBackgroundSvg, RamsBackgroundSvg } from '../symbols';

const HomePageHeaderImage = ({ brand: BRAND, ...rest }) => {
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
					width: '100%',
					height: 'auto',
				}}
			/>
		</div>
	);
	const RAMSImage = (props) => (
		<div
			css={mq({
				top: -250,
				left: -190,
				height: 477,
			})}
			{...props}
		>
			<RamsBackgroundSvg
				css={{
					width: 'auto',
					height: '100%',
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
		RAMS: null, //RAMSImage,
	};
	const HeaderImage = BRAND_HEADERS[BRAND.code];

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
