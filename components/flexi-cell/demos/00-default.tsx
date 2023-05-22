import { GEL, useBrand } from '@westpac/core';
import { FlexiCell } from '@westpac/flexi-cell';
import { InfoIcon } from '@westpac/icon';
import { Heading } from '@westpac/heading';
import { Circle } from '@westpac/circle';
import { Button } from '@westpac/button';

function Example({ brand }: { brand: object | ((...args: unknown[]) => unknown) }) {
	return (
		<GEL brand={brand}>
			<ExampleChildren />
		</GEL>
	);
}

function ExampleChildren() {
	const { COLORS } = useBrand();
	return (
		<div
			css={{
				display: 'flex',
				flexDirection: 'column',
				gap: '1rem',
				background: '#f3f3f3',
				padding: '2rem',
			}}
		>
			<FlexiCell
				tag="a"
				href="#"
				withBorder
				after={
					<FlexiCell.Adornment align="top">
						<FlexiCell.Label tag="h3">$9,999.99</FlexiCell.Label>
						<FlexiCell.Hint>avail $9,999.99</FlexiCell.Hint>
					</FlexiCell.Adornment>
				}
			>
				<FlexiCell.Label tag="h3">Credit card</FlexiCell.Label>
				<FlexiCell.Hint>Card ending in 1234</FlexiCell.Hint>
			</FlexiCell>

			<FlexiCell
				tag="a"
				withBorder
				href="loko"
				after={
					<FlexiCell.Adornment align="top">
						<FlexiCell.Label tag="h3">$9,999.99</FlexiCell.Label>
					</FlexiCell.Adornment>
				}
			>
				<FlexiCell.Label tag="h3">Account</FlexiCell.Label>
				<FlexiCell.Hint>032-123 12345678</FlexiCell.Hint>
			</FlexiCell>

			<FlexiCell
				tag="a"
				withBorder
				href="loko"
				before={
					<Circle background={COLORS.primary} css={{ color: 'white' }}>
						B
					</Circle>
				}
				after={
					<FlexiCell.Adornment align="center">
						<FlexiCell.Hint css={{ color: COLORS.muted }}>Fri 5 Aug</FlexiCell.Hint>
					</FlexiCell.Adornment>
				}
			>
				<Heading tag="h3" size={8} css={{ fontWeight: 'normal' }}>
					Payee
				</Heading>
				<small css={{ color: COLORS.muted }}>Payee details</small>
			</FlexiCell>

			<FlexiCell
				withBorder
				before={
					<Circle background={COLORS.muted} css={{ color: 'white' }}>
						WW
					</Circle>
				}
				after={
					<FlexiCell.Adornment align="center">
						{/* @ts-ignore */}
						<Button look="link" href="/somewhere" iconBefore={InfoIcon} />
					</FlexiCell.Adornment>
				}
			>
				<a href="#" css={{ color: 'inherit', textDecoration: 'inherit' }}>
					<Heading tag="h3" size={8} css={{ fontWeight: 'normal' }}>
						Payee
					</Heading>
					<small css={{ color: COLORS.muted }}>Payee details</small>
				</a>
			</FlexiCell>

			<FlexiCell
				withBorder
				before={<div>Flag</div>}
				after={
					<FlexiCell.Adornment align="center">
						{/* @ts-ignore */}
						<Button look="link" href="/somewhere" iconBefore={InfoIcon} />
					</FlexiCell.Adornment>
				}
			>
				<a href="#" css={{ color: 'inherit', textDecoration: 'inherit' }}>
					<Heading tag="h3" size={8} css={{ fontWeight: 'normal' }}>
						Payee
					</Heading>
					<small css={{ color: COLORS.muted }}>Payee details</small>
				</a>
			</FlexiCell>
			<FlexiCell tag="a" withBorder href="loko" before={<div>Flag</div>}>
				<Heading tag="h3" size={8} css={{ fontWeight: 'normal' }}>
					List item
				</Heading>
			</FlexiCell>
			<FlexiCell tag="a" withBorder href="loko">
				<Heading tag="h3" size={8} css={{ fontWeight: 'normal' }}>
					List item
				</Heading>
			</FlexiCell>
		</div>
	);
}

export default Example;
