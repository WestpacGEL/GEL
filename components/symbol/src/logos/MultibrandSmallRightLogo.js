import React from 'react';
import { useTheme } from '@westpac/core';
import { propTypes, defaultProps } from '../Symbol';

import { BOMMultibrandSmallRightLogo as BOM } from './multibrand/BOMMultibrandSmallRightLogo';
import { BSAMultibrandSmallRightLogo as BSA } from './multibrand/BSAMultibrandSmallRightLogo';
import { BTFGMultibrandSmallRightLogo as BTFG } from './multibrand/BTFGMultibrandSmallRightLogo';
import { STGMultibrandSmallRightLogo as STG } from './multibrand/STGMultibrandSmallRightLogo';
import { WBCMultibrandSmallRightLogo as WBC } from './multibrand/WBCMultibrandSmallRightLogo';
import { WBGMultibrandSmallRightLogo as WBG } from './multibrand/WBGMultibrandSmallRightLogo';

const BRANDS = { BOM, BSA, BTFG, STG, WBC, WBG };

export const MultibrandSmallRightLogo = props => {
	const { BRAND } = useTheme();
	const Logo = BRANDS[BRAND];

	return <Logo {...props} />;
};

MultibrandSmallRightLogo.defaultProps = {
	...defaultProps,
	viewBoxWidth: 122,
	viewBoxHeight: 44,
};
MultibrandSmallRightLogo.propTypes = propTypes;
