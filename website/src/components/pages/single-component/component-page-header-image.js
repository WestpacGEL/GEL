/** @jsx jsx */
import { jsx } from '@westpac/core';
import React from 'react';
import HeaderImageRight from '../../symbols/WbcBackgroundRightSvg';
import HeaderImageLeft from '../../symbols/WbcBackgroundLeftSvg';
import StgHeaderBackground from '../../symbols/StgBackgroundSvg';
import BsaHeaderBackgroundSvg from '../../symbols/BsaBackgroundSvg';

const ComponentPageHeaderImage = ({ brand }) => {
	const WestpacImage = () => (
		<>
			<div
				css={{
					position: 'absolute',
					left: 0,
					bottom: 0,
					top: 50,
					zIndex: -1,
				}}
			>
				<HeaderImageLeft height={'200px'} />
			</div>

			<div
				css={{
					position: 'absolute',
					zIndex: -1,
					right: 0,
					bottom: 0,
					top: 50,
				}}
			>
				<HeaderImageRight height={'200px'} />
			</div>
		</>
	);

	const StGeorgeImage = () => (
		<div
			css={{
				position: 'absolute',
				left: 0,
				bottom: 0,
				top: -80,
				zIndex: -1,
			}}
		>
			<StgHeaderBackground height={'600px'} />
		</div>
	);

	const BankSaImage = () => (
		<div
			css={{
				position: 'absolute',
				zIndex: -1,
				right: 0,
				bottom: 0,
				top: -45,
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

export default ComponentPageHeaderImage;
