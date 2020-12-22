/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';
import { forwardRef, useState } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import { useSpring, animated } from 'react-spring';
import useMeasure from 'react-use-measure';
import { ExpandMoreIcon, ExpandLessIcon } from '@westpac/icon';
import { Button } from '@westpac/button';
import { ButtonDropdown, useButtonDropdownContext } from '@westpac/button-dropdown';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { BASE_URL } from '../../config';
import { useBrandSwitcher } from '../providers/brand-switcher';
import { useSidebar } from '../providers/sidebar';
import {
	BOMMultibrandLargeLogo,
	BOMShieldLogo,
	BSAMultibrandLargeLogo,
	BSAStackedLogo,
	STGMultibrandLargeLogo,
	STGDragonLogo,
	WBCMultibrandLargeLogo,
	WBCLogo,
	WBGMultibrandLargeLogo,
	WBGLogo,
	RAMSMultibrandLargeLogo,
	RAMSLogo,
} from '@westpac/symbol';

export const brandsMap = {
	WBC: {
		logo: <WBCMultibrandLargeLogo />,
		smallLogo: <WBCLogo height={18} />,
	},
	STG: {
		logo: <STGMultibrandLargeLogo />,
		smallLogo: <STGDragonLogo height={38} css={{ marginRight: -12 }} />,
	},
	BOM: {
		logo: <BOMMultibrandLargeLogo />,
		smallLogo: <BOMShieldLogo height={39} css={{ marginRight: 9 }} />,
	},
	BSA: {
		logo: <BSAMultibrandLargeLogo />,
		smallLogo: <BSAStackedLogo height={46} css={{ marginRight: 8 }} />,
	},
	WBG: {
		logo: <WBGMultibrandLargeLogo />,
		smallLogo: <WBGLogo width={70} css={{ marginRight: -8 }} />,
	},
	RAMS: {
		logo: <RAMSMultibrandLargeLogo />,
		smallLogo: <RAMSLogo width={70} css={{ marginRight: -8 }} />,
	},
};

const ButtonIconOverride = ({ icon: Icon, left, right, color, state: _, ...rest }) => {
	const { COLORS } = useBrand();
	return (
		<span
			css={{
				borderLeft: `1px solid ${COLORS.border}`,
				height: '100%',
				display: 'flex',
				alignItems: 'center',
				marginLeft: '0.4em',
			}}
		>
			<Icon color="primary" {...rest} />
		</span>
	);
};

const ButtonOverride = forwardRef(({ state, children, ...rest }, ref) => {
	const {
		state: { open },
	} = useButtonDropdownContext();

	return (
		<Button
			ref={ref}
			look="unstyled"
			size="large"
			iconAfter={open ? ExpandLessIcon : ExpandMoreIcon}
			block
			justify
			overrides={{
				Icon: {
					component: ButtonIconOverride,
					styles: (styles) => ({
						...styles,
						marginLeft: '1.5rem',
					}),
				},
			}}
			{...rest}
		>
			{children}
		</Button>
	);
});

const PanelOverride = forwardRef(({ state: { open }, children, ...rest }, ref) => {
	const [measureRef, { height }] = useMeasure({ polyfill: ResizeObserver });

	const animate = useSpring({
		to: {
			height: !open ? 0 : height,
		},
	});

	return (
		<animated.div
			style={animate}
			css={{
				position: 'absolute',
				zIndex: 1,
				left: 0,
				right: 0,
				overflow: 'hidden',
				backgroundColor: '#fff',
				boxShadow: '0 2px 5px rgba(0,0,0,0.26)',
			}}
			aria-hidden={!open}
		>
			<div ref={measureRef}>
				<div ref={ref} {...rest}>
					{children}
				</div>
			</div>
		</animated.div>
	);
});

export const BrandSwitcher = () => {
	const brandName = useRouter().query.b || '';
	const { brands, brand, setBrand } = useBrandSwitcher();
	const [open, setOpen] = useState(false);
	const { isScrolled } = useSidebar();
	const { SPACING, COLORS, PACKS, TYPE } = useBrand();
	const logo = brandsMap[brand].logo;

	const OptionButton = ({ brand, active, ...rest }) => {
		const handleClick = (brand) => {
			setOpen(false);
			setBrand(brand);
		};

		return (
			<button
				type="button"
				onClick={() => handleClick(brand)}
				css={{
					appearance: 'none',
					whiteSpace: 'nowrap',
					cursor: 'pointer',
					lineHeight: 1.5,
					touchAction: 'manipulation',
					userSelect: 'none',
					boxSizing: 'border-box',
					backgroundColor: 'transparent',
					border: 0,
					fontSize: '0.875rem',
					color: active ? COLORS.primary : COLORS.text,
					display: 'flex',
					width: '100%',
					alignItems: 'center',
					justifyContent: 'space-between',
					height: '3.75rem',
					padding: '10px 18px 10px 18px',
					...(active && TYPE.bodyFont[700]),
					':hover, :focus': {
						backgroundColor: COLORS.background,
					},
					':focus': {
						outlineOffset: `-${PACKS.focus.outlineWidth}`,
					},
				}}
				{...rest}
			/>
		);
	};

	const BrandList = (props) => {
		return (
			//a11y: as we're using `list-style:none` CSS, we need `role="list"` for VoiceOver to announce this as a list (see https://unfetteredthoughts.net/2017/09/26/voiceover-and-list-style-type-none/)
			<ul role="list" css={{ paddingLeft: 0, listStyle: 'none', margin: 0 }} {...props}>
				{Object.entries(brandsMap).map(([key, val]) => (
					<li key={key} css={{ borderTop: `1px solid ${COLORS.border}` }}>
						<OptionButton brand={key} active={brandName === key}>
							<span css={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
								{brands[key].BRAND.name}
							</span>
							<div css={{ marginLeft: '0.4em' }}>{val.smallLogo}</div>
						</OptionButton>
					</li>
				))}
			</ul>
		);
	};

	const handleClick = () => {
		setOpen(!open);
	};

	return (
		<div
			css={{
				borderBottom: !isScrolled && `1px solid ${COLORS.border}`,
				boxShadow: isScrolled && '0 2px 5px rgba(0,0,0,0.26)',
				position: 'relative',
				zIndex: 1, //ensure shadow is above nav list item with :hover bg effect
				transition: 'box-shadow 0.2s',
			}}
		>
			<Link href={'/'} as={`${BASE_URL}?b=${brandName}`} passHref>
				<a
					css={{
						display: 'flex',
						alignItems: 'center',
						height: 90,
						paddingLeft: SPACING(3),
						paddingRight: SPACING(3),
						background: '#fff',
						':focus': {
							outlineOffset: `-${PACKS.focus.outlineWidth}`,
						},
					}}
				>
					{logo}
				</a>
			</Link>
			<ButtonDropdown
				open={open}
				block
				text="Change brand"
				dropdown={false}
				onClick={handleClick}
				overrides={{
					Button: {
						component: ButtonOverride,
						styles: () => ({
							position: 'relative',
							zIndex: 2,
							padding: '0 1.5rem 0 1.125rem',
							height: '4.125rem',
							fontSize: '0.875rem',
							backgroundColor: '#fff',

							':focus': {
								outlineOffset: `-${PACKS.focus.outlineWidth}`,
							},
						}),
					},
					Panel: {
						component: PanelOverride,
						styles: () => ({
							backgroundColor: '#fff',
						}),
					},
				}}
			>
				<BrandList />
			</ButtonDropdown>
		</div>
	);
};
