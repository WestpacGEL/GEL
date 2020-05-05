/** @jsx jsx */
import { jsx, useBrand } from '@westpac/core';
import React from 'react';
import { WbcBackgroundRightSvg, StgBackgroundSvg, BsaBackgroundSvg } from '../symbols';

const HomePageHeaderImage = ({ brand }) => {
	const { LAYOUT } = useBrand();
	const WestpacImage = () => (
		<div
			css={{
				position: 'absolute',
				zIndex: 0,
				right: 0,
				bottom: 0,
				top: 0,
				[`@media (max-width: ${LAYOUT.breakpoints.sm - 1}px)`]: {
					display: 'none',
				},
			}}
		>
			<WbcBackgroundRightSvg height={'629px'} />
		</div>
	);

	const StGeorgeImage = () => (
		<div
			css={{
				position: 'absolute',
				left: -3200,
				bottom: -120,
				zIndex: 0,
				[`@media (max-width: ${LAYOUT.breakpoints.sm - 1}px)`]: {
					display: 'none',
				},
			}}
		>
			<StgBackgroundSvg height={'2000px'} />
		</div>
	);

	const BankSaImage = () => (
		<div
			css={{
				position: 'absolute',
				zIndex: 1,
				right: 0,
				bottom: -130,
				[`@media (max-width: ${LAYOUT.breakpoints.sm - 1}px)`]: {
					display: 'none',
				},
			}}
		>
			<BsaBackgroundSvg height={'720px'} />
		</div>
	);

	const BRAND_HEADERS = {
		WBC: {
			headerImage: WestpacImage,
		},
		WBG: {
			headerImage: null,
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
