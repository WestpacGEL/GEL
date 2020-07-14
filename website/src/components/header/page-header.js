/** @jsx jsx */
import React, { Fragment, useEffect, useState, useRef } from 'react';
import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { Heading } from '@westpac/heading';
import { Button } from '@westpac/button';
import { HamburgerMenuIcon } from '@westpac/icon';
import HeaderImage from './component-page-header-image';

import { useSidebar } from '../providers/sidebar';
import { usePageContext } from '../providers/pageContext';
import { brandHeaderStyling, gridlyIconColors } from '../_utils';

const MenuButton = () => {
	const { BRAND, COLORS } = useBrand();
	const mq = useMediaQuery();
	const { setIsOpen } = useSidebar();

	const Icon = () => <HamburgerMenuIcon color={BRAND === 'STG' ? COLORS.text : '#fff'} />;

	return (
		<Button
			look="link"
			size="xlarge"
			onClick={() => setIsOpen((status) => !status)}
			iconBefore={Icon}
			overrides={{
				Button: {
					styles: (styles) => ({
						...styles,
						position: 'fixed',
						top: '0.5625rem',
						left: '1.5rem',
						...mq({ display: [null, null, null, null, 'none'] })[0],
					}),
				},
			}}
		/>
	);
};

const GridIndicator = () => {
	const { BRAND } = useBrand();
	const mq = useMediaQuery();
	const { showGrid, setShowGrid } = usePageContext();

	const ButtonContentWrapper = ({ children, ...rest }) => <Fragment>{children}</Fragment>;

	return (
		<div
			css={{
				position: 'fixed',
				display: 'flex',
				alignItems: 'center',
				top: '0.5625rem',
				right: '1.5rem',
				color: '#fff',
			}}
		>
			<span css={mq({ display: ['inline-block', 'none'] })}>xs</span>
			<span css={mq({ display: ['none', 'inline-block', 'none'] })}>xsl</span>
			<span css={mq({ display: ['none', null, 'inline-block', 'none'] })}>sm</span>
			<span css={mq({ display: ['none', null, null, 'inline-block', 'none'] })}>md</span>
			<span css={mq({ display: ['none', null, null, null, 'inline-block'] })}>lg</span>
			<Button
				look="link"
				size="xlarge"
				onClick={() => setShowGrid(!showGrid)}
				overrides={{
					Button: {
						styles: (styles) => ({
							...styles,
							marginLeft: '0.375rem',
						}),
					},
					Content: {
						component: ButtonContentWrapper,
					},
				}}
			>
				<div css={{ display: 'flex', justifyContent: 'center', height: 24, width: 24 }}>
					{[...new Array(4)].map((_, index) => (
						<div
							key={index}
							css={{
								height: '100%',
								width: 4,
								backgroundColor: gridlyIconColors[BRAND],

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

const PageHeader = ({ name, version }) => {
	const { COLORS, BRAND } = useBrand();
	const mq = useMediaQuery();
	const [hasScroll, setHasScroll] = useState(false);
	const [hasScrolledSmall, setHasScrolledSmall] = useState(false);
	const [hasScrolledLarge, setHasScrolledLarge] = useState(false);
	const header = useRef(null);

	useEffect(() => {
		const main = header.current.parentElement;

		const scrollHandler = () => {
			setHasScroll(main.scrollTop > 5 ? true : false);
			setHasScrolledSmall(main.scrollTop > 46 ? true : false);
			setHasScrolledLarge(main.scrollTop >= 162 ? true : false);
		};

		main.addEventListener('scroll', scrollHandler);
		return () => {
			main.removeEventListener('scroll', scrollHandler);
		};
	});

	return (
		<div
			ref={header}
			css={mq({
				flex: 'none',
				position: 'sticky',
				top: [0, null, -162], // 228 - 66 = height to stick
				zIndex: 5,
				display: 'flex',
				height: [66, null, 228],
				overflow: 'hidden',
				...brandHeaderStyling[BRAND](COLORS),
			})}
		>
			<HeaderImage brand={BRAND} />
			<div
				css={mq({
					display: 'flex',
					alignItems: 'flex-end', //align bottom
					color: BRAND === 'STG' ? COLORS.text : '#fff',
				})}
			>
				<MenuButton />
				{/* TODO: ref https://vimeo.com/424713409/9846f61c26 */}
				<div
					css={mq({
						opacity: [null, null, hasScrolledSmall && !hasScrolledLarge ? 0 : 1],
						marginLeft: ['3.75rem', null, !hasScrolledLarge && '2.25rem', null, '2.25rem'],
						marginBottom: ['1.25rem', null, !hasScrolledLarge && '3.375rem'],
						transition: [
							null,
							null,
							!(hasScrolledSmall && !hasScrolledLarge) && 'opacity 0.2s ease',
						],
						willChange: 'opacity',
					})}
				>
					<Heading tag="h1" size={[8, null, !hasScrolledLarge ? 3 : null]}>
						{name}
						{version && (
							<span
								css={mq({
									fontSize: '1rem',
									fontWeight: 'normal',
									marginTop: !hasScrolledLarge && '0.75rem',
									marginLeft: ['0.375rem', null, !hasScrolledLarge && 0],
									display: [null, null, !hasScrolledLarge && 'block'],
								})}
							>
								<span
									css={mq({
										textTransform: ['lowercase', null, !hasScrolledLarge && 'capitalize'],
									})}
								>
									V
								</span>
								<span css={mq({ display: ['none', null, !hasScrolledLarge && 'inline'] })}>
									ersion{' '}
								</span>
								{version}
							</span>
						)}
					</Heading>
				</div>
			</div>
			<GridIndicator />
		</div>
	);
};

export default PageHeader;
