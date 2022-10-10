/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';

import {
	WBCLogo,
	STGDragonLogo,
	BOMShieldLogo,
	RAMSLogo,
	BSAStackedLogo,
	WBGLogo,
} from '@westpac/symbol';
import { RAMSLogo as NewRAMSLogo } from './logos';

export const brandsMap = {
	WBC: {
		name: 'Westpac',
		dot: {
			logo: WBCLogo,
			size: {
				actionBar: {
					width: 45,
				},
				footer: {
					width: [45, null, null, null, 50],
				},
			},
		},
		logo: <WBCLogo height={17} css={{ marginRight: 14 }} aria-hidden="true" />,
	},
	STG: {
		name: 'St.George',
		dot: {
			logo: STGDragonLogo,
			size: {
				actionBar: {
					width: 45,
				},
				footer: {
					width: [45, null, null, null, 50],
				},
			},
		},
		logo: <STGDragonLogo height={38} css={{ marginRight: 3 }} aria-hidden="true" />,
	},
	BOM: {
		name: 'Bank of Melbourne',
		dot: {
			logo: BOMShieldLogo,
			size: {
				actionBar: {
					height: 35,
				},
				footer: {
					height: [35, null, null, null, 40],
				},
			},
		},
		logo: <BOMShieldLogo height={39} css={{ marginRight: 22 }} aria-hidden="true" />,
	},
	BSA: {
		name: 'Bank SA',
		dot: {
			logo: BSAStackedLogo,
			size: {
				actionBar: {
					height: 35,
				},
				footer: {
					height: [35, null, null, null, 40],
				},
			},
		},
		logo: <BSAStackedLogo height={46} css={{ marginRight: 22 }} aria-hidden="true" />,
	},
	WBG: {
		name: 'Westpac Group',
		dot: {
			logo: WBGLogo,
			size: {
				actionBar: {
					width: 50,
				},
				footer: {
					width: [50, null, null, null, 55],
				},
			},
		},
		logo: <WBGLogo width={70} aria-hidden="true" />,
	},
	RAMS: {
		name: 'Rams',
		dot: {
			logo: NewRAMSLogo,
			size: {
				actionBar: {
					width: 45,
				},
				footer: {
					width: [45, null, null, null, 50],
				},
			},
		},
		logo: <RAMSLogo width={55} aria-hidden="true" />,
	},
};

export const DotLogo = ({ logo: Logo, size = {}, ...props }) => {
	const {
		GEL: { COLORS },
	} = useBrand();
	return (
		<span
			css={{
				border: `1px solid ${COLORS.border}`,
				transition: 'all 0.2s cubic-bezier(0.13, 0.00, 0.11, 1.00)', // mouse out
				borderRadius: '50%',
				backgroundColor: '#fff',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				':hover': {
					transition: 'all 0.4s cubic-bezier(0.13, 0.00, 0.11, 1.00)', // mouse over
					border: `4px solid ${COLORS.icon}60`,
					margin: '-3px',
				},
			}}
			{...props}
		>
			<Logo {...size} />
		</span>
	);
};
