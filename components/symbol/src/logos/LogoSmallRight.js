import React from 'react';
import { useTheme } from '@westpac/core';
import { propTypes, defaultProps } from '../Symbol';

import { BOMLogoSmallRight as BOM } from './multibrand/BOMLogoSmallRight';
import { BSALogoSmallRight as BSA } from './multibrand/BSALogoSmallRight';
import { BTFGLogoSmallRight as BTFG } from './multibrand/BTFGLogoSmallRight';
import { STGLogoSmallRight as STG } from './multibrand/STGLogoSmallRight';
import { WBCLogoSmallRight as WBC } from './multibrand/WBCLogoSmallRight';
import { WBGLogoSmallRight as WBG } from './multibrand/WBGLogoSmallRight';

const BRANDS = { BOM, BSA, BTFG, STG, WBC, WBG };

export const LogoSmallRight = props => {
	const { BRAND } = useTheme();
	const Logo = BRANDS[BRAND];

	return <Logo {...props} />;
};

LogoSmallRight.defaultProps = {
	...defaultProps,
	viewBoxWidth: 122,
	viewBoxHeight: 44,
};
LogoSmallRight.propTypes = propTypes;
