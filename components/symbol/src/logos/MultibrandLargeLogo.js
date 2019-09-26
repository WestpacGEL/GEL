import React from 'react';
import { useTheme } from '@westpac/core';
import { propTypes, defaultProps } from '../Symbol';

import { BOMMultibrandLargeLogo as BOM } from './multibrand/BOMMultibrandLargeLogo';
import { BSAMultibrandLargeLogo as BSA } from './multibrand/BSAMultibrandLargeLogo';
import { BTFGMultibrandLargeLogo as BTFG } from './multibrand/BTFGMultibrandLargeLogo';
import { STGMultibrandLargeLogo as STG } from './multibrand/STGMultibrandLargeLogo';
import { WBCMultibrandLargeLogo as WBC } from './multibrand/WBCMultibrandLargeLogo';
import { WBGMultibrandLargeLogo as WBG } from './multibrand/WBGMultibrandLargeLogo';

const BRANDS = { BOM, BSA, BTFG, STG, WBC, WBG };

export const MultibrandLargeLogo = props => {
	const { BRAND } = useTheme();
	const Logo = BRANDS[BRAND];

	return <Logo {...props} />;
};

MultibrandLargeLogo.defaultProps = {
	...defaultProps,
	viewBoxWidth: 180,
	viewBoxHeight: 65,
};
MultibrandLargeLogo.propTypes = propTypes;
