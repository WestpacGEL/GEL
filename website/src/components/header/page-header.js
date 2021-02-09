/** @jsx jsx */
import React, { useEffect, useState, useRef } from 'react';
import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { Heading, BrandHeading } from '@westpac/heading';
import { Button } from '@westpac/button';
import { VisuallyHidden } from '@westpac/a11y';
import throttle from 'lodash.throttle';

import { MenuButton } from './menu-button';
import HeaderImage from './component-page-header-image';
import { usePageContext } from '../providers/pageContext';
import { scrollMap, brandHeaderStyling } from '../_utils';

const GridIndicator = () => {
	const mq = useMediaQuery();
	const { SPACING } = useBrand();
	const { showGrid, setShowGrid } = usePageContext();

	return (
		<div
			css={{
				position: 'fixed',
				display: 'flex',
				alignItems: 'center',
				top: SPACING(2),
				right: SPACING(2),
				color: '#fff',
				fontWeight: 'bold',
			}}
		>
			<VisuallyHidden>Breakpoint:</VisuallyHidden>
			<span css={mq({ display: ['none', null, 'inline-block', 'none'] })}>SM</span>
			<span css={mq({ display: ['none', null, null, 'inline-block', 'none'] })}>MD</span>
			<span css={mq({ display: ['none', null, null, null, 'inline-block'] })}>LG</span>
			<Button
				look="unstyled"
				size="large"
				onClick={() => setShowGrid(!showGrid)}
				aria-hidden="true"
				css={mq({
					display: ['none', null, 'inline-block'],
					padding: SPACING(1),
					backgroundColor: 'transparent',
				})}
			>
				<div css={{ display: 'flex', justifyContent: 'center', height: 24, width: 24 }}>
					{[...new Array(4)].map((_, index) => (
						<div
							key={index}
							css={{
								height: '100%',
								width: 4,
								backgroundColor: 'rgba(255, 255, 255, 0.3)',

								'& + &': {
									marginLeft: 2,
								},
							}}
						/>
					))}
				</div>
			</Button>
		</div>
	);
};

const PageHeaderHeading = ({ hasScrolledLarge, ...rest }) => {
	const { BRAND } = useBrand();

	return BRAND.code === 'WBC' ? (
		<BrandHeading tag="h1" size={[7, null, !hasScrolledLarge ? 2 : null]} uppercase {...rest} />
	) : (
		<Heading tag="h1" size={[8, null, !hasScrolledLarge ? 3 : null]} {...rest} />
	);
};

const PageHeader = ({ name }) => {
	const { COLORS, BRAND, SPACING } = useBrand();
	const mq = useMediaQuery();
	const [hasScrolledSmall, setHasScrolledSmall] = useState(false);
	const [hasScrolledLarge, setHasScrolledLarge] = useState(false);
	const header = useRef(null);

	useEffect(() => {
		const setHeader = () => {
			const scroll = window.scrollY;

			setHasScrolledSmall(scroll > scrollMap.small);
			setHasScrolledLarge(scroll >= scrollMap.large);
		};
		setHeader();

		const scrollHandler = throttle(setHeader, 10);

		window.addEventListener('scroll', scrollHandler);
		return () => {
			window.removeEventListener('scroll', scrollHandler);
		};
	}, []);

	return (
		<header
			ref={header}
			css={mq({
				flex: 'none',
				position: 'sticky',
				top: [0, null, -162], // 228 - 66 = height to stick
				zIndex: 5,
				display: 'flex',
				height: [66, null, 228],
				overflow: 'hidden',
				...brandHeaderStyling[BRAND.code](COLORS),
			})}
		>
			<HeaderImage brand={BRAND} />
			<div
				css={mq({
					display: 'flex',
					alignItems: 'flex-end', //align bottom
				})}
			>
				<MenuButton
					css={mq({
						position: 'fixed',
						zIndex: 1,
						top: 0,
						left: [0, null, SPACING(2)],
						display: [null, null, null, null, 'none'],
					})}
				/>
				<div
					css={mq({
						display: ['flex', null],
						alignItems: ['center', null],
						opacity: [null, null, hasScrolledSmall && !hasScrolledLarge ? 0 : 1],
						marginLeft: [
							SPACING(8),
							null,
							!hasScrolledLarge ? SPACING(6) : SPACING(10),
							null,
							!hasScrolledLarge ? SPACING(6) : SPACING(4),
						],
						marginBottom: [null, null, !hasScrolledLarge && SPACING(7)],
						height: [66, null],
						transition: [
							null,
							null,
							!(hasScrolledSmall && !hasScrolledLarge) && 'opacity 0.2s ease',
						],
						willChange: 'opacity',
					})}
				>
					<PageHeaderHeading hasScrolledLarge={hasScrolledLarge}>{name}</PageHeaderHeading>
				</div>
			</div>
			<GridIndicator />
		</header>
	);
};

export default PageHeader;
