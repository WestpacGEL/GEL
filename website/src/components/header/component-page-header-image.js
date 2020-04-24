/** @jsx jsx */

import { jsx } from '@westpac/core';
import React, { Fragment } from 'react';
import {
	WbcBackgroundRightSvg,
	WbcBackgroundLeftSvg,
	StgBackgroundSvg,
	BsaBackgroundSvg,
} from '../symbols';

const ComponentPageHeaderImage = ({ brand, scrolled }) => {
	const WestpacImage = () => (
		<Fragment>
			<div
				css={{
					position: 'absolute',
					left: 0,
					bottom: 0,
					top: 50,
					zIndex: -1,
				}}
			>
				<WbcBackgroundLeftSvg height={'200px'} />
			</div>

			<div
				css={{
					position: 'absolute',
					zIndex: -1,
					right: scrolled ? '300px' : 0,
					bottom: 0,
					top: 50,
				}}
			>
				<WbcBackgroundRightSvg height={'200px'} />
			</div>
		</Fragment>
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
			<StgBackgroundSvg height={'600px'} />
		</div>
	);

	const BankSaImage = () => (
		<div
			css={{
				position: 'absolute',
				zIndex: -1,
				right: scrolled ? '300px' : 0,
				bottom: 0,
				top: -45,
			}}
		>
			<BsaBackgroundSvg height={'400px'} />
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

export default ComponentPageHeaderImage;
