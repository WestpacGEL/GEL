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
				href="/dsadsa"
				withBorder // add the border and radius
				after={
					<>
						<Heading tag="h3" size={8} css={{ fontWeight: 'normal', textAlign: 'right' }}>
							$9,999.99
						</Heading>
						<small css={{ color: COLORS.muted }}>avail $9,999.99</small>
					</>
				}
			>
				<Heading tag="h3" size={8} css={{ fontWeight: 'normal' }}>
					Credit card
				</Heading>
				<small css={{ color: COLORS.muted }}>Card ending in 1234</small>
			</FlexiCell>

			<FlexiCell
				tag="a"
				withBorder // add the border and radius
				href="loko"
				after={
					<Heading tag="h3" size={8} css={{ fontWeight: 'normal' }}>
						$9,999.99
					</Heading>
				}
			>
				<Heading tag="h3" size={8} css={{ fontWeight: 'normal' }}>
					Account
				</Heading>
				<small css={{ color: COLORS.muted }}>032-123 12345678</small>
			</FlexiCell>

			<FlexiCell
				tag="a"
				withBorder // add the border and radius
				href="loko"
				before={
					<Circle background={COLORS.primary} css={{ color: 'white' }}>
						B
					</Circle>
				}
				after={<small css={{ color: COLORS.muted }}>Fri 5 Aug</small>}
			>
				<Heading tag="h3" size={8} css={{ fontWeight: 'normal' }}>
					Payee
				</Heading>
				<small css={{ color: COLORS.muted }}>Payee details</small>
			</FlexiCell>

			<FlexiCell
				tag="a"
				withBorder // add the border and radius
				href="loko"
				before={
					<Circle background={COLORS.muted} css={{ color: 'white' }}>
						WW
					</Circle>
				}
				after={<Button look="link" href="/somewhere" iconBefore={InfoIcon} />}
			>
				<Heading tag="h3" size={8} css={{ fontWeight: 'normal' }}>
					Payee
				</Heading>
				<small css={{ color: COLORS.muted }}>Payee details</small>
			</FlexiCell>

			<FlexiCell
				tag="a"
				withBorder // add the border and radius
				href="loko"
				before={<div>Flag</div>}
				after={<Button look="link" href="/somewhere" iconBefore={InfoIcon} />}
			>
				<Heading tag="h3" size={8} css={{ fontWeight: 'normal' }}>
					Payee
				</Heading>
				<small css={{ color: COLORS.muted }}>Payee details</small>
			</FlexiCell>
			<FlexiCell
				tag="a"
				withBorder // add the border and radius
				href="loko"
				before={<div>Flag</div>}
			>
				<Heading tag="h3" size={8} css={{ fontWeight: 'normal' }}>
					List item
				</Heading>
			</FlexiCell>
			<FlexiCell
				tag="a"
				withBorder // add the border and radius
				href="loko"
			>
				<Heading tag="h3" size={8} css={{ fontWeight: 'normal' }}>
					List item
				</Heading>
			</FlexiCell>
		</div>
	);
}

export default Example;
