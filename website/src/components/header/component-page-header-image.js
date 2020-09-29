/** @jsx jsx */

import { jsx, useMediaQuery } from '@westpac/core';
import React from 'react';
import { WbcBackgroundSvg, StgBackgroundSvg, BsaBackgroundSvg } from '../symbols';

const ComponentPageHeaderImage = ({ brand, ...rest }) => {
	const mq = useMediaQuery();

	const WBCImage = (props) => (
		<div
			css={mq({
				top: 0,
				bottom: 0,
				right: 0,
				width: 'auto',
			})}
			{...props}
		>
			<WbcBackgroundSvg
				css={{
					display: 'block',
					width: 'auto',
					height: '100%',
				}}
			/>
		</div>
	);

	const StGeorgeImage = (props) => (
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
					display: 'block',
					width: 'auto',
					height: '100%',
				}}
			/>
		</div>
	);
	const BankSAImage = (props) => (
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
					display: 'block',
					width: 'auto',
					height: '100%',
				}}
			/>
		</div>
	);

	const BRAND_HEADERS = {
		WBC: WBCImage,
		WBG: null,
		STG: StGeorgeImage,
		BSA: BankSAImage,
		BOM: null,
		BTFG: null,
	};
	const HeaderImage = BRAND_HEADERS[brand];

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
