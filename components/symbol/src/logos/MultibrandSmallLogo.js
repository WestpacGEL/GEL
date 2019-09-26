import React from 'react';
import { useTheme } from '@westpac/core';
import { propTypes, defaultProps } from '../Symbol';

import { BOMMultibrandSmallLogo as BOM } from './multibrand/BOMMultibrandSmallLogo';
import { BSAMultibrandSmallLogo as BSA } from './multibrand/BSAMultibrandSmallLogo';
import { BTFGMultibrandSmallLogo as BTFG } from './multibrand/BTFGMultibrandSmallLogo';
import { STGMultibrandSmallLogo as STG } from './multibrand/STGMultibrandSmallLogo';
import { WBCMultibrandSmallLogo as WBC } from './multibrand/WBCMultibrandSmallLogo';
import { WBGMultibrandSmallLogo as WBG } from './multibrand/WBGMultibrandSmallLogo';

const BRANDS = { BOM, BSA, BTFG, STG, WBC, WBG };

export const MultibrandSmallLogo = props => {
	const { BRAND } = useTheme();
	const Logo = BRANDS[BRAND];

	return <Logo {...props} />;
};

MultibrandSmallLogo.defaultProps = {
	...defaultProps,
	viewBoxWidth: 122,
	viewBoxHeight: 44,
};
MultibrandSmallLogo.propTypes = propTypes;
