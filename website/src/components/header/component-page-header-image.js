import { jsx, useMediaQuery } from '@westpac/core';
import React from 'react';
import {
	WbcBackgroundSvg,
	StgBackgroundSvg,
	BsaBackgroundSvg,
	RamsBackgroundSvg,
} from '../symbols';

const ComponentPageHeaderImage = ({ brand: BRAND, ...rest }) => {
	const mq = useMediaQuery();

	const WBCImage = (props) => (
		<div
			css={mq({
				top: 0,
				bottom: 0,
				right: 0,
			})}
			{...props}
		>
			<WbcBackgroundSvg
				css={{
					width: 'auto',
					height: '100%',
					display: 'block',
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
					width: 'auto',
					height: '100%',
					display: 'block',
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
					width: 'auto',
					height: '100%',
					display: 'block',
				}}
			/>
		</div>
	);
	const RAMSImage = (props) => (
		<div
			css={mq({
				bottom: -56,
				right: -241,
				height: 482,
				transform: 'scaleX(-1)', //flip horizontally
			})}
			{...props}
		>
			<RamsBackgroundSvg
				css={{
					width: 'auto',
					height: '100%',
					display: 'block',
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
			css={{
				position: 'absolute',
				zIndex: -1,
			}}
			{...rest}
		/>
	) : null;
};

export default ComponentPageHeaderImage;
