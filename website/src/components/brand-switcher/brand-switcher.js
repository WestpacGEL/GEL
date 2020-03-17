/** @jsx jsx */
import { Fragment, useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { jsx, useBrand } from '@westpac/core';
import {
	BOMLogo,
	BSALogo,
	BTFGLogo,
	STGLogo,
	WBCLogo,
	WBGLogo,
	BOMShieldLogo,
	BSAStackedLogo,
	BTFGStackedLogo,
	STGDragonLogo,
} from '@westpac/symbol';
import { ExpandMoreIcon, ExpandLessIcon } from '@westpac/Icon';

import { useBrandSwitcher } from '../providers/brand-switcher';

export const BrandSwitcher = () => {
	const brandName = useRouter().query.b || '';
	const { brands, brand, setBrand } = useBrandSwitcher();
	const { SPACING, COLORS } = useBrand();
	const [isOpen, toggleIsOpen] = useState(false);
	const wrapperRef = useRef(null);

	function handleClickOutside(event) {
		if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
			toggleIsOpen(false);
		}
	}

	useEffect(() => {
		// Bind the event listener
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			// Unbind the event listener on clean up
			document.removeEventListener('mousedown', handleClickOutside);
		};
	});

	const brandsMap = {
		BOM: {
			logo: BOMLogo,
			label: 'Bank of Melbourne',
			smallLogo: BOMShieldLogo,
		},
		BSA: {
			logo: BSALogo,
			label: 'Bank of South Australia',
			smallLogo: BSAStackedLogo,
		},
		BTFG: {
			logo: BTFGLogo,
			label: 'BT Financial Group',
			smallLogo: BTFGStackedLogo,
		},
		STG: {
			logo: STGLogo,
			label: 'St. George',
			smallLogo: STGDragonLogo,
		},
		WBC: {
			logo: WBCLogo,
			label: 'Westpac',
			smallLogo: WBCLogo,
		},
		WBG: {
			logo: WBGLogo,
			label: 'Westpac Group',
			smallLogo: WBCLogo,
		},
	};

	const Logo = brandsMap[brand].logo;

	return (
		<Fragment>
			<div css={{ height: 35, padding: SPACING(2) }}>
				<Link href={`/?b=${brandName}`}>
					<a>
						<Logo />
					</a>
				</Link>
			</div>

			<div
				ref={wrapperRef}
				onClick={() => toggleIsOpen(!isOpen)}
				css={{
					position: 'relative',
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-between',
					borderBottom: `1px solid ${COLORS.border}`,
					marginBottom: '1rem',
					alignItems: 'base',
					cursor: 'pointer',
				}}
			>
				<div css={{ padding: '0.75rem', alignSelf: 'flex-end' }}>Change brand</div>
				<div
					css={{
						padding: '0.75rem',
						borderLeft: `1px solid ${COLORS.border}`,
						alignSelf: 'flex-end',
					}}
				>
					{isOpen ? (
						<ExpandLessIcon
							css={{
								':hover': {
									color: COLORS.primary,
								},
							}}
						/>
					) : (
						<ExpandMoreIcon
							css={{
								':hover': {
									color: COLORS.primary,
								},
							}}
						/>
					)}
				</div>
				<div
					css={{
						display: 'flex',
						flexDirection: 'column',
						fontSize: '0.8125rem',
						position: 'absolute',
						top: '100%',
						width: '100%',
						backgroundColor: 'white',
						boxShadow: '0px 6px 7px -1px rgba(186,186,186,0.8)',
					}}
				>
					{isOpen &&
						Object.keys(brandsMap).map(b => {
							const isChecked = brand === b;
							const BrandLogo = brandsMap[b].smallLogo;
							return (
								<div
									onClick={() => {
										setBrand(b);
										toggleIsOpen(!isOpen);
									}}
									css={{
										display: 'flex',
										justifyContent: 'space-between',
										alignItems: 'center',
										borderTop: '1px solid',
										borderTopColor: 'rgba(0, 0, 0, 0.1)',
										boxSizing: 'border-box',
										color: '#1F252C',
										cursor: 'pointer',
										flex: 1,
										fontWeight: 500,
										padding: '0.75rem',
										textAlign: 'center',
										backgroundColor: isChecked ? '#eee' : 'none',
										':hover': {
											backgroundColor: COLORS.focus,
										},
									}}
								>
									<div
										key={b}
										css={{
											height: '2rem',
											display: 'flex',
											alignItems: 'center',
										}}
									>
										{brandsMap[b].label}
									</div>
									<BrandLogo width="20px" />
								</div>
							);
						})}
				</div>
			</div>
		</Fragment>
	);
};
