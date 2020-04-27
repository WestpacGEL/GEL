/** @jsx jsx */
import React, { useEffect, useState, useRef } from 'react';
import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { Heading } from '@westpac/heading';
import { Button } from '@westpac/button';
import { HamburgerMenuIcon } from '@westpac/icon';
import HeaderImage from './component-page-header-image';

import { useSidebar } from '../providers/sidebar';
import { brandHeaderColors } from '../_utils';

const MenuIcon = ({ hasScrolled }) => {
	const { BRAND, COLORS } = useBrand();
	const mq = useMediaQuery();
	const { setIsOpen } = useSidebar();

	const Icon = () => <HamburgerMenuIcon color={BRAND === 'STG' ? COLORS.text : '#fff'} />;

	return (
		<Button
			onClick={() => setIsOpen(status => !status)}
			look="link"
			iconBefore={Icon}
			overrides={{
				Button: {
					styles: styles => ({
						...styles,
						justifySelf: 'start',
						gridRowStart: 1,
						marginRight: '0.75rem',
						...mq({
							alignSelf: hasScrolled ? 'center' : ['center', null, 'auto'],
							marginTop: hasScrolled ? 0 : [0, null, '1.3125rem'],
							marginLeft: hasScrolled ? 0 : [0, null, '-0.75rem'],
							display: ['inline-flex', null, null, null, 'none'],
						})[0],
					}),
				},
			}}
		/>
	);
};

const PageHeader = ({ name, version }) => {
	const { COLORS, BRAND, LAYOUT } = useBrand();
	const mq = useMediaQuery();
	const [hasScrolled, setHasScrolled] = useState(false);
	const header = useRef(null);

	useEffect(() => {
		const main = header.current.parentElement;
		const scrollHandler = () => {
			if (main.scrollTop >= 65) {
				setHasScrolled(true);
			} else {
				setHasScrolled(false);
			}
		};

		main.addEventListener('scroll', scrollHandler);
		return () => {
			main.removeEventListener('scroll', scrollHandler);
		};
	});

	const backgroundColor = brandHeaderColors[BRAND](COLORS);

	return (
		<div
			ref={header}
			css={mq({
				flex: 'none',
				position: 'sticky',
				top: ['0px', null, '-162px'], // 228 - 66 = height to stick
				zIndex: 5,
				display: 'flex',
				height: ['66px', null, '228px'],
				background: backgroundColor,
				overflow: 'hidden',
			})}
		>
			<HeaderImage brand={BRAND} />
			<div
				css={mq({
					alignSelf: 'flex-end',
					display: 'grid',
					gridTemplateRows: hasScrolled ? '1fr' : ['1fr', null, '1fr 1fr 1fr'],
					height: hasScrolled ? '66px' : ['66px', null, '228px'],
					padding: hasScrolled ? '0 1.3125rem' : ['0 1.3125rem', null, '0 2.25rem'],
					color: BRAND === 'STG' ? COLORS.text : '#fff',
					transition: 'height 0s',
				})}
			>
				<MenuIcon hasScrolled={hasScrolled} />
				<Heading
					size={hasScrolled ? 7 : 1}
					overrides={{
						Heading: {
							styles: styles => ({
								...styles,
								alignSelf: 'center',
								textTransform: 'capitalize',
								[`@media (max-width: ${LAYOUT.breakpoints.md}px)`]: {
									fontSize: '18px !important',
								},
								fontWeight: 500,
								transition: 'font-size, 0.2s ease',
								...mq({
									gridRowStart: hasScrolled ? 1 : [1, null, 2],
								})[0],
							}),
						},
					}}
				>
					{name}
				</Heading>
				{version && (
					<span
						css={mq({
							alignSelf: hasScrolled ? 'center' : ['center', null, 'start'],
							fontSize: '16px',
							gridRowStart: hasScrolled ? 1 : [1, null, 3],
							marginLeft: hasScrolled ? '0.375rem' : ['0.375rem', null, 0],
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
	);
};

export default PageHeader;
