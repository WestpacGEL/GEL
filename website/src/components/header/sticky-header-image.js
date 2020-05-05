/** @jsx jsx */
import { jsx, useBrand } from '@westpac/core';
import React from 'react';
import { WbcBackgroundRightSvg, StgBackgroundSvg, BsaBackgroundSvg } from '../symbols';

const StickyHeaderImage = ({ brand, hide }) => {
	const { LAYOUT } = useBrand();
	const WestpacImage = () => (
		<div
			css={{
				position: 'absolute',
				zIndex: 0,
				right: 0,
				top: 0,
				display: hide ? 'none' : 'block',
				[`@media (max-width: ${LAYOUT.breakpoints.sm - 1}px)`]: {
					display: 'block',
				},
				[`@media (min-width: ${LAYOUT.breakpoints.xl}px)`]: {
					right: '300px',
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
				zIndex: -1,
				display: hide ? 'none' : 'block',
				[`@media (max-width: ${LAYOUT.breakpoints.sm - 1}px)`]: {
					display: 'block',
				},
				[`@media (min-width: ${LAYOUT.breakpoints.xl}px)`]: {
					right: '483px',
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
				display: hide ? 'none' : 'block',
				[`@media (max-width: ${LAYOUT.breakpoints.sm - 1}px)`]: {
					display: 'block',
				},
				[`@media (min-width: ${LAYOUT.breakpoints.xl}px)`]: {
					right: '373px',
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

export default StickyHeaderImage;
