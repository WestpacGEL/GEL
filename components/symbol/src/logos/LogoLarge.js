import React from 'react';
import { useTheme } from '@westpac/core';
import { propTypes, defaultProps } from '../Symbol';

import { BOMLogoLarge as BOM } from './multibrand/BOMLogoLarge';
import { BSALogoLarge as BSA } from './multibrand/BSALogoLarge';
import { BTFGLogoLarge as BTFG } from './multibrand/BTFGLogoLarge';
import { STGLogoLarge as STG } from './multibrand/STGLogoLarge';
import { WBCLogoLarge as WBC } from './multibrand/WBCLogoLarge';
import { WBGLogoLarge as WBG } from './multibrand/WBGLogoLarge';

const BRANDS = { BOM, BSA, BTFG, STG, WBC, WBG };

export const LogoLarge = props => {
	const { BRAND } = useTheme();
	const Logo = BRANDS[BRAND];

	return <Logo {...props} />;
};

LogoLarge.defaultProps = {
	...defaultProps,
	viewBoxWidth: 180,
	viewBoxHeight: 65,
};
LogoLarge.propTypes = propTypes;
