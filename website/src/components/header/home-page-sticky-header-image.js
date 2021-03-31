/** @jsx jsx */
import { jsx, useMediaQuery } from '@westpac/core';
import React from 'react';
import {
	WbcBackgroundSvg,
	StgBackgroundSvg,
	BsaBackgroundSvg,
	RamsBackgroundSvg,
} from '../symbols';

const HomePageStickyHeaderImage = ({ brand: BRAND, hide, ...rest }) => {
	const mq = useMediaQuery();

	const WBCImage = (props) => (
		<div
			css={mq({
				top: [0, null, 'auto'],
				bottom: 0,
				right: 0,
				height: [null, null, 228],
			})}
			{...props}
		>
			<WbcBackgroundSvg
				css={{
					width: 'auto',
					height: '100%',
				}}
			/>
		</div>
	);
	const STGImage = (props) => (
		<div
			css={mq({
				bottom: 0,
				left: 0,
				width: [601, 1202],
			})}
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
				width: [508, 1016],
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
				top: [-122, null, -250],
				bottom: [-25, null, 'auto'],
				left: [null, null, -190],
				right: [-106, null, 'auto'],
				height: [213, null, 477],
				transform: ['scaleX(-1)', null, 'none'], //flip horizontally
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
		WBC: WBCImage,
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
				position: 'absolute',
				zIndex: 0,
				display: [null, null, hide && 'none'],
			})}
			{...rest}
		/>
	) : null;
};

export default HomePageStickyHeaderImage;
