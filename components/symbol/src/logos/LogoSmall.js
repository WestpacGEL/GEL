import React from 'react';
import { useTheme } from '@westpac/core';
import { propTypes, defaultProps } from '../Symbol';

import { BOMLogoSmall as BOM } from './multibrand/BOMLogoSmall';
import { BSALogoSmall as BSA } from './multibrand/BSALogoSmall';
import { BTFGLogoSmall as BTFG } from './multibrand/BTFGLogoSmall';
import { STGLogoSmall as STG } from './multibrand/STGLogoSmall';
import { WBCLogoSmall as WBC } from './multibrand/WBCLogoSmall';
import { WBGLogoSmall as WBG } from './multibrand/WBGLogoSmall';

const BRANDS = { BOM, BSA, BTFG, STG, WBC, WBG };

export const LogoSmall = props => {
	const { BRAND } = useTheme();
	const Logo = BRANDS[BRAND];

	return <Logo {...props} />;
};

LogoSmall.defaultProps = {
	...defaultProps,
	viewBoxWidth: 122,
	viewBoxHeight: 44,
};
LogoSmall.propTypes = propTypes;
