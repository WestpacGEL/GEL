import React from 'react';
import { useTheme } from '@westpac/core';
import { propTypes, defaultProps } from '../Symbol';

import { BOMLogoSmallCenter as BOM } from './multibrand/BOMLogoSmallCenter';
import { BSALogoSmallCenter as BSA } from './multibrand/BSALogoSmallCenter';
import { BTFGLogoSmallCenter as BTFG } from './multibrand/BTFGLogoSmallCenter';
import { STGLogoSmallCenter as STG } from './multibrand/STGLogoSmallCenter';
import { WBCLogoSmallCenter as WBC } from './multibrand/WBCLogoSmallCenter';
import { WBGLogoSmallCenter as WBG } from './multibrand/WBGLogoSmallCenter';

const BRANDS = { BOM, BSA, BTFG, STG, WBC, WBG };

export const LogoSmallCenter = props => {
	const { BRAND } = useTheme();
	const Logo = BRANDS[BRAND];

	return <Logo {...props} />;
};

LogoSmallCenter.defaultProps = {
	...defaultProps,
	viewBoxWidth: 122,
	viewBoxHeight: 44,
};
LogoSmallCenter.propTypes = propTypes;
