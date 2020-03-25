/** @jsx jsx */
import { jsx } from '@westpac/core';
import React from 'react';
import HeaderImageRight from './symbols/WbcBackgroundRightSvg';
import HeaderImageLeft from './symbols/WbcBackgroundLeftSvg';
import StgHeaderBackground from './symbols/StgBackgroundSvg';
import BsaHeaderBackgroundSvg from './symbols/BsaBackgroundSvg';

const HomePageHeaderImage = ({ brand }) => {
	const WestpacImage = () => (
		<div
			css={{
				position: 'absolute',
				zIndex: 1,
				right: 0,
				bottom: 0,
				top: 0,
			}}
		>
			<HeaderImageRight height={'100%'} />
		</div>
	);

	const StGeorgeImage = () => (
		<div
			css={{
				position: 'absolute',
				left: 0,
				bottom: -10,
				zIndex: 1,
			}}
		>
			<StgHeaderBackground height={'600px'} />
		</div>
	);

	const BankSaImage = () => (
		<div
			css={{
				position: 'absolute',
				zIndex: 1,
				right: 0,
				bottom: -100,
			}}
		>
			<BsaHeaderBackgroundSvg height={'400px'} />
		</div>
	);

	const BRAND_HEADERS = {
		WBC: {
			headerImage: WestpacImage,
		},
		WBG: {
			headerImage: WestpacImage,
		},
		STG: {
			headerImage: StGeorgeImage,
		},
		BSA: {
			headerImage: BankSaImage,
		},
		BOM: {
			headerImage: null,
		},
		BTFG: {
			headerImage: null,
		},
	};
	const HeaderImage = BRAND_HEADERS[brand].headerImage;

	return HeaderImage ? <HeaderImage /> : null;
};

export default HomePageHeaderImage;
