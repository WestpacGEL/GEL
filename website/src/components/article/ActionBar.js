/** @jsx jsx */

import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { useState, forwardRef, useRef, useEffect } from 'react';
import { ButtonDropdown, useButtonDropdownContext } from '@westpac/button-dropdown';
import { ArrowRightIcon, ExpandMoreIcon, ExpandLessIcon } from '@westpac/icon';
import { Button } from '@westpac/button';
import ResizeObserver from 'resize-observer-polyfill';
import { useSpring, animated } from '@react-spring/web';
import useMeasure from 'react-use-measure';
import { GELLogo } from './logos';
import { brandsMap, DotLogo } from './_utils';
import { Container } from './Grid';
import { StickyHeader } from './StickyHeader';

const ButtonIconOverride = ({ icon: Icon, left, right, color, state: _, ...rest }) => {
	const {
		GEL: { COLORS },
	} = useBrand();
	return <Icon color={COLORS.icon} {...rest} />;
};

const ButtonDropdownOverride = ({ state: _, ...props }) => {
	const { LAYOUT } = useBrand();
	return (
		<div
			css={{
				[`@media (min-width: ${LAYOUT.breakpoints.sm}px)`]: { display: 'none' },
			}}
			{...props}
		/>
	);
};

const ButtonOverride = forwardRef(({ closed, setClosed, state: _, children, ...rest }, ref) => {
	const {
		state: { isOpen },
	} = useButtonDropdownContext();

	return (
		<Button
			ref={ref}
			look="unstyled"
			size="large"
			iconAfter={isOpen ? ExpandLessIcon : ExpandMoreIcon}
			block
			overrides={{
				Icon: {
					component: ButtonIconOverride,
					styles: (styles) => ({
						...styles,
						marginLeft: '1rem',
					}),
				},
			}}
			{...rest}
		>
			<GELLogo css={{ marginRight: '0.625rem' }} />
			{children}
		</Button>
	);
});

const PanelOverride = forwardRef(({ state: { isOpen, setClosed }, children, ...rest }, ref) => {
	const [measureRef, { height }] = useMeasure({ polyfill: ResizeObserver });

	const animate = useSpring({
		to: {
			height: !isOpen ? 0 : height,
		},
		onStart: () => {
			setClosed(false);
		},
		onRest: () => {
			setClosed(!isOpen);
		},
	});

	return (
		<animated.div ref={ref} style={animate} aria-hidden={!isOpen} {...rest}>
			<div ref={measureRef}>{children}</div>
		</animated.div>
	);
});

const BrandListItem = ({ link, children, ...props }) => {
	const {
		GEL: { COLORS },
	} = useBrand();
	const mq = useMediaQuery();

	return (
		<li
			css={{
				':last-of-type a': {
					borderBottom: 'none',
				},
			}}
			{...props}
		>
			<a
				href={link}
				css={mq({
					display: 'block',
					height: '3.75rem',
					fontSize: '0.875rem',
					color: COLORS.text,
					textDecoration: 'none',
					margin: ['0 1.5rem', '0 1.875rem'],
					borderBottom: `1px solid ${COLORS.border}`,
					transition: 'background-color 0.2s',
				})}
			>
				<span
					css={{
						height: '100%',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						position: 'relative',
						zIndex: 1,
						paddingLeft: '0.375rem',
						':hover, :focus': {
							backgroundColor: COLORS.hover,
						},
					}}
				>
					{children}
				</span>
			</a>
		</li>
	);
};

const ActionBarDropdown = (props) => {
	const [isOpen, setIsOpen] = useState(false);
	const [closed, setClosed] = useState(true);
	const mq = useMediaQuery();
	const handleClick = () => {
		setIsOpen((currentState) => !currentState);
	};

	return (
		<ButtonDropdown
			open={isOpen}
			block
			text="Design System"
			dropdown={false}
			onClick={handleClick}
			closed={closed}
			setClosed={setClosed}
			overrides={{
				ButtonDropdown: {
					component: ButtonDropdownOverride,
				},
				Button: {
					component: ButtonOverride,
					styles: () =>
						mq({
							position: 'relative',
							zIndex: 2,
							padding: ['0 1.5rem 0.75rem', '0 1.875rem 0.75rem'],
							height: '4.125rem',
							fontSize: '1rem',
							backgroundColor: '#fff',
							justifyContent: 'flex-start',
							alignItems: 'flex-end',
							':focus': {
								outlineOffset: `-2px !important`,
							},
						}),
				},
				Panel: {
					component: PanelOverride,
					styles: (_, { closed }) =>
						mq({
							visibility: closed ? 'hidden' : 'visible',
							position: 'absolute',
							zIndex: 1,
							top: '100%',
							left: 0,
							right: 0,
							overflow: 'hidden',
							backgroundColor: '#fff',
							padding: ['0.75rem 0 1.5rem', '0.75rem 0 1.875rem'],
							boxShadow: '0 8px 8px rgba(0,0,0,0.24)',
						}),
				},
			}}
			{...props}
		>
			<ul role="list" css={{ paddingLeft: 0, listStyle: 'none', margin: 0 }}>
				{Object.entries(brandsMap).map(([key, val]) => (
					<BrandListItem key={key} link={`/design-system?b=${key}`}>
						{val.name}
						{val.logo}
					</BrandListItem>
				))}
			</ul>
		</ButtonDropdown>
	);
};

const ActionBarLogo = ({ href, ...props }) => {
	return (
		<a href={href}>
			<DotLogo css={{ height: 72, width: 72, marginRight: 12 }} {...props} />
		</a>
	);
};

const ActionBarDesktop = () => {
	const {
		LAYOUT,
		TYPE,
		GEL: { COLORS },
	} = useBrand();
	const mq = useMediaQuery();
	return (
		<Container
			css={{
				display: 'flex',
				alignItems: 'flex-end',
				height: '6.375rem',
				backgroundColor: '#fff',
				paddingBottom: '0.75rem',
				[`@media (max-width: ${LAYOUT.breakpoints.sm - 1}px)`]: { display: 'none' },
			}}
		>
			<div
				css={{
					height: '100%',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'flex-end',

					borderRight: `1px solid ${COLORS.border}`,
					marginRight: '1.5rem',
				}}
			>
				<GELLogo css={{ marginBottom: '0.75rem' }} />
				<p
					css={{
						margin: '0 0 0.375rem',
						display: 'flex',
						alignItems: 'flex-end',
						fontSize: '1rem',
						fontFamily: '"graphik",' + TYPE.bodyFont.fontFamily,
					}}
				>
					Design System
					<ArrowRightIcon css={mq({ margin: [null, null, '0 0.75rem 0 0', '0 1rem 0 0.75rem'] })} />
				</p>
			</div>
			<ul
				role="list"
				css={{
					display: 'flex',
					paddingLeft: 0,
					listStyle: 'none',
					margin: 0,
				}}
			>
				{Object.entries(brandsMap).map(([key, val]) => (
					<li key={key}>
						<ActionBarLogo
							href={`/design-system?b=${key}`}
							logo={val?.dot?.logo}
							size={val?.dot?.size?.actionBar}
						/>
					</li>
				))}
			</ul>
		</Container>
	);
};

export const ActionBar = (props) => {
	const mq = useMediaQuery();
	return (
		<StickyHeader>
			<div css={mq({ height: [66, null, 102] })} {...props}>
				<ActionBarDropdown />
				<ActionBarDesktop />
			</div>
		</StickyHeader>
	);
};
