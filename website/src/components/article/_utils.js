/** @jsx jsx */

import { jsx } from '@westpac/core';

import {
	WBCLogo,
	STGDragonLogo,
	BOMShieldLogo,
	RAMSLogo,
	BSAStackedLogo,
	WBGLogo,
} from '@westpac/symbol';
import { DotBOMLogo, DotBSALogo, DotRAMSLogo, DotSTGLogo, DotWBCLogo, DotWBGLogo } from './logos';

export const brandsMap = {
	WBC: {
		name: 'Westpac',
		dotLogo: DotWBCLogo,
		logo: <WBCLogo height={17} css={{ marginRight: 14 }} aria-hidden="true" />,
	},
	STG: {
		name: 'St.George',
		dotLogo: DotSTGLogo,
		logo: <STGDragonLogo height={38} css={{ marginRight: 3 }} aria-hidden="true" />,
	},
	BOM: {
		name: 'Bank of Melbourne',
		dotLogo: DotBOMLogo,
		logo: <BOMShieldLogo height={39} css={{ marginRight: 22 }} aria-hidden="true" />,
	},
	BSA: {
		name: 'Bank SA',
		dotLogo: DotBSALogo,
		logo: <BSAStackedLogo height={46} css={{ marginRight: 22 }} aria-hidden="true" />,
	},
	WBG: {
		name: 'Westpac Group',
		dotLogo: DotWBGLogo,
		logo: <WBGLogo width={70} aria-hidden="true" />,
	},
	RAMS: {
		name: 'Rams',
		dotLogo: DotRAMSLogo,
		logo: <RAMSLogo width={70} aria-hidden="true" />,
	},
};
