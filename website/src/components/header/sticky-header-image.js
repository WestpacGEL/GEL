/** @jsx jsx */
import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import React from 'react';
import { WbcBackgroundRightSvg, StgBackgroundSvg, BsaBackgroundSvg } from '../symbols';

const StickyHeaderImage = ({ brand, hide, ...rest }) => {
	const { LAYOUT } = useBrand();
	const mq = useMediaQuery();

	const WestpacImage = (props) => (
		<div
			css={mq({
				top: [0, null, 'auto'],
				bottom: 0,
				right: 0,
				height: [null, null, 658, 633],
			})}
			{...props}
		>
			<WbcBackgroundRightSvg
				css={mq({
					display: 'block',
					width: ['auto', null, 'auto'],
					height: ['100%', null, '100%'],
				})}
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
			<StgBackgroundSvg css={mq({ display: 'block', width: '100%', height: 'auto' })} />
		</div>
	);

	const BankSaImage = (props) => (
		<div
			css={mq({
				bottom: 0,
				right: 0,
				width: [508, 1016],
			})}
			{...props}
		>
			<BsaBackgroundSvg css={mq({ display: 'block', width: '100%', height: 'auto' })} />
		</div>
	);

	const BRAND_HEADERS = {
		WBC: WestpacImage,
		WBG: null,
		STG: StGeorgeImage,
		BSA: BankSaImage,
		BOM: null,
		BTFG: null,
	};
	const HeaderImage = BRAND_HEADERS[brand];

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

export default StickyHeaderImage;
