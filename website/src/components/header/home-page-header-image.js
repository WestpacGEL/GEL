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
				display: 'none',
				[`@media (min-width: ${LAYOUT.breakpoints.sm}px)`]: {
					display: 'inline-block',
				},
			}}
		>
			<WbcBackgroundRightSvg height={'100%'} />
		</div>
	);

	const StGeorgeImage = () => (
		<div
			css={{
				position: 'absolute',
				left: 0,
				bottom: -5,
				zIndex: 0,
				display: 'none',
				[`@media (min-width: ${LAYOUT.breakpoints.sm}px)`]: {
					display: 'inline-block',
				},
			}}
		>
			<StgBackgroundSvg height={600} />
		</div>
	);

	const BankSaImage = () => (
		<div
			css={{
				position: 'absolute',
				zIndex: 1,
				right: 0,
				bottom: -100,
				display: 'none',
				[`@media (min-width: ${LAYOUT.breakpoints.sm}px)`]: {
					display: 'inline-block',
				},
			}}
		>
			<BsaBackgroundSvg height={400} />
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
