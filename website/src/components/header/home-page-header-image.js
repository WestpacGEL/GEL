/** @jsx jsx */
import { jsx, useMediaQuery } from '@westpac/core';
import React from 'react';
import { WbcBackgroundRightSvg, StgBackgroundSvg, BsaBackgroundSvg } from '../symbols';

const HomePageHeaderImage = ({ brand, ...rest }) => {
	const mq = useMediaQuery();

	const WestpacImage = (props) => (
		<div
			css={{
				top: 0,
				bottom: 0,
				right: 0,
			}}
			{...props}
		>
			<WbcBackgroundRightSvg
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
			css={{
				bottom: 0,
				left: 0,
				width: 1200,
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
	const BankSaImage = (props) => (
		<div
			css={mq({
				bottom: 0,
				right: 0,
				width: [420, null, 890, 1115, 1014],
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
				display: ['none', null, 'block'],
				position: 'absolute',
				zIndex: 0,
			})}
			{...rest}
		/>
	) : null;
};

export default HomePageHeaderImage;
