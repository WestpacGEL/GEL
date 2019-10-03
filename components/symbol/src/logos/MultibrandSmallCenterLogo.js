import React from 'react';
import { useTheme } from '@westpac/core';
import { propTypes, defaultProps } from '../Symbol';

import { BOMMultibrandSmallCenterLogo as BOM } from './multibrand/BOMMultibrandSmallCenterLogo';
import { BSAMultibrandSmallCenterLogo as BSA } from './multibrand/BSAMultibrandSmallCenterLogo';
import { BTFGMultibrandSmallCenterLogo as BTFG } from './multibrand/BTFGMultibrandSmallCenterLogo';
import { STGMultibrandSmallCenterLogo as STG } from './multibrand/STGMultibrandSmallCenterLogo';
import { WBCMultibrandSmallCenterLogo as WBC } from './multibrand/WBCMultibrandSmallCenterLogo';
import { WBGMultibrandSmallCenterLogo as WBG } from './multibrand/WBGMultibrandSmallCenterLogo';

const BRANDS = { BOM, BSA, BTFG, STG, WBC, WBG };

export const MultibrandSmallCenterLogo = props => {
	const { BRAND } = useTheme();
	const Logo = BRANDS[BRAND];

	return <Logo {...props} />;
};

MultibrandSmallCenterLogo.defaultProps = {
	...defaultProps,
	viewBoxWidth: 122,
	viewBoxHeight: 44,
};
MultibrandSmallCenterLogo.propTypes = propTypes;
