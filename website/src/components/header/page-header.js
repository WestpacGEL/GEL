/** @jsx jsx */
import React, { useEffect, useState, useRef } from 'react';
import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { Heading } from '@westpac/heading';
import { Button } from '@westpac/button';
import { HamburgerMenuIcon } from '@westpac/icon';
import HeaderImage from './component-page-header-image';

import { useSidebar } from '../providers/sidebar';
import { usePageContext } from '../providers/pageContext';
import { brandHeaderStyling, gridlyIconColors } from '../_utils';

const MenuButton = ({ hasScrolled }) => {
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
						top: '0.625rem',
						left: '0.875rem',
						height: 'auto',
						padding: '0.625rem',
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

	return (
		<div
			css={{
				position: 'fixed',
				display: 'flex',
				alignItems: 'center',
				top: '0.625rem',
				right: '0.75rem',
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
							display: 'flex',
							background: 'transparent',
							border: 'none',
							cursor: 'pointer',
							padding: '0.6875rem',
						}),
					},
				}}
			>
				{[...new Array(4)].map((_, index) => (
					<span
						key={index}
						css={{
							display: 'inline-block',
							height: 24,
							width: 4,
							backgroundColor: gridlyIconColors[BRAND],

							'& + &': {
								marginLeft: 2,
							},
						}}
					/>
				))}
			</Button>
		</div>
	);
};

const PageHeader = ({ name, version }) => {
	const { COLORS, BRAND } = useBrand();
	const mq = useMediaQuery();
	const [hasScroll, setHasScroll] = useState(false);
	const [hasScrolled, setHasScrolled] = useState(false);
	const header = useRef(null);

	useEffect(() => {
		const main = header.current.parentElement;

		const scrollHandler = () => {
			setHasScroll(main.scrollTop >= 6 ? true : false);
			setHasScrolled(main.scrollTop >= 162 ? true : false);
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
				<MenuButton hasScrolled={hasScrolled} />
				{/* TODO: ref https://vimeo.com/424713409/9846f61c26 */}
				<div
					css={mq({
						display: 'flex',
						flexDirection: [null, null, !hasScrolled && 'column'],
						alignItems: ['baseline', null, !hasScrolled && 'normal'],
						marginLeft: ['3.75rem', null, !hasScrolled && '2.25rem'],
						marginBottom: ['1.25rem', null, !hasScrolled && '3.375rem'],
						opacity: [null, null, hasScroll ? (hasScrolled ? 1 : 0) : 1],
						transition: [null, null, 'opacity 0.2s ease'],
					})}
				>
					<Heading
						tag="h1"
						size={[8, null, !hasScrolled && 3]}
						css={{ transition: 'font-size 0.2s ease' }}
					>
						{name}
					</Heading>
					{version && (
						<span
							css={mq({
								fontSize: '1rem',
								marginLeft: ['0.375rem', null, !hasScrolled && 0],
								marginTop: !hasScrolled && '0.75rem',
							})}
						>
							<span
								css={mq({
									textTransform: hasScrolled ? 'lowercase' : ['lowercase', null, 'capitalize'],
								})}
							>
								v
							</span>
							<span css={mq({ display: hasScrolled ? 'none' : ['none', null, 'inline'] })}>
								ersion{' '}
							</span>
							{version}
						</span>
					)}
				</div>
			</div>
			<GridIndicator />
		</div>
	);
};

export default PageHeader;
