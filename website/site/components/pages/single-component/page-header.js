/** @jsx jsx */
import { jsx, useBrand } from '@westpac/core';
import { Container } from '@westpac/grid';
import { Heading } from '@westpac/heading';
import { HamburgerMenuIcon } from '@westpac/icon';

import { useSidebar } from '../../providers/sidebar';

export const PageHeader = ({ name, version }) => {
	const { COLORS, SPACING } = useBrand();
	return (
		<section
			css={{
				background: COLORS.primary,
				color: COLORS.light,
				paddingTop: SPACING(12),
				paddingBottom: SPACING(8),
			}}
		>
			<MenuIcon />
			<Container>
				<Heading size={1} css={{ textTransform: 'capitalize' }}>
					{name}
				</Heading>
				<span>Version {version}</span>
			</Container>
		</section>
	);
};

const MenuIcon = () => {
	const { setIsOpen } = useSidebar();
	const { COLORS, SPACING } = useBrand();
	return (
		<button
			css={{
				position: 'absolute',
				top: 0,
				left: 0,
				margin: SPACING(2),
				background: 'none',
				border: 'none',
				cursor: 'pointer',
				'@media only screen and (min-width: 840px)': {
					display: 'none',
				},
			}}
			onClick={() => setIsOpen(status => !status)}
		>
			<HamburgerMenuIcon color={COLORS.light} />
		</button>
	);
};
