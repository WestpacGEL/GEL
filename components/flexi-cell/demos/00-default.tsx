import { GEL, useBrand, useMediaQuery } from '@westpac/core';
import { FlexiCell } from '@westpac/flexi-cell';
import { InfoIcon } from '@westpac/icon';
import { Heading } from '@westpac/heading';
import { Circle } from '@westpac/circle';
import { Badge } from '@westpac/badge';
import { Button } from '@westpac/button';
import { GiftPictogram } from '@westpac/pictogram';
import { ArrowRightIcon } from '@westpac/icon';

function Example({ brand }: { brand: object | ((...args: unknown[]) => unknown) }) {
	return (
		<GEL brand={brand}>
			<ExampleChildren />
		</GEL>
	);
}

function ExampleChildren() {
	const { COLORS } = useBrand();
	const mq = useMediaQuery();
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
				body
				after={
					<FlexiCell.Adornment align="top">
						<FlexiCell.Label fontWeight="600" tag="h3">
							$9,999.99
						</FlexiCell.Label>
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
				href="#"
				body
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
				href="#"
				body
				before={
					<FlexiCell.Circle background={COLORS.primary} css={{ color: 'white' }}>
						B
					</FlexiCell.Circle>
				}
				after={
					<FlexiCell.Adornment align="center">
						<FlexiCell.Hint css={{ color: COLORS.muted }}>Fri 5 Aug</FlexiCell.Hint>
					</FlexiCell.Adornment>
				}
			>
				<FlexiCell.Label tag="h3" fontWeight="500">
					Payee
				</FlexiCell.Label>
				<small css={{ color: COLORS.muted }}>Payee details</small>
			</FlexiCell>

			<FlexiCell
				body
				before={
					<FlexiCell.Circle background={COLORS.muted} css={{ color: 'white' }}>
						WW
					</FlexiCell.Circle>
				}
				after={
					<FlexiCell.Adornment align="center">
						{/* @ts-ignore */}
						<FlexiCell.Button href="/somewhere" iconBefore={InfoIcon} />
					</FlexiCell.Adornment>
				}
			>
				<a
					href="#"
					css={{
						color: 'inherit',
						textDecoration: 'inherit',
						':hover .flexi-cell-label': {
							color: COLORS.link,
						},
					}}
				>
					<FlexiCell.Label fontWeight="500" tag="h3">
						Payee
					</FlexiCell.Label>
					<small css={{ color: COLORS.muted }}>Payee details</small>
				</a>
			</FlexiCell>

			<FlexiCell
				body
				before={<div>Flag</div>}
				after={
					<FlexiCell.Adornment align="center">
						{/* @ts-ignore */}
						<FlexiCell.Button href="/somewhere" iconBefore={InfoIcon} />
					</FlexiCell.Adornment>
				}
			>
				<a
					href="#"
					css={{
						color: 'inherit',
						textDecoration: 'inherit',
						':hover .flexi-cell-label': {
							color: COLORS.link,
						},
					}}
				>
					<FlexiCell.Label tag="h3" css={{ fontWeight: 'normal' }}>
						Payee
					</FlexiCell.Label>
					<small css={{ color: COLORS.muted }}>Payee details</small>
				</a>
			</FlexiCell>
			<FlexiCell body tag="a" withBorder href="#" before={<div>Flag</div>}>
				<FlexiCell.Label tag="h3" css={{ fontWeight: 'normal' }}>
					List item
				</FlexiCell.Label>
			</FlexiCell>
			<FlexiCell body tag="a" withBorder href="#">
				<FlexiCell.Label tag="h3" css={{ fontWeight: 'normal' }}>
					List item
				</FlexiCell.Label>
			</FlexiCell>

			<FlexiCell
				tag="a"
				href="#"
				withBorder
				body
				after={
					<FlexiCell.Adornment align="top">
						<ArrowRightIcon color={COLORS.link} />
					</FlexiCell.Adornment>
				}
			>
				<div
					css={mq({
						display: 'flex',
						flexDirection: ['column', 'row'],
					})}
				>
					<GiftPictogram mode="duo" css={{ width: '50px', height: '50px' }} />
					<div>
						<Heading tag="h3" size={8}>
							Westpac specials and product offers
						</Heading>
						<FlexiCell.Hint>
							Discounts and cashback from select merchants & product offers from Westpac
						</FlexiCell.Hint>
					</div>
				</div>
			</FlexiCell>

			<h3>Flexi cell with an image</h3>
			<FlexiCell tag="a" href="#" withBorder body>
				<img
					src="https://images.unsplash.com/photo-1657299170950-87e5b0eaf77c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
					alt="Food"
					css={{ width: '100%', display: 'block', marginBottom: '0.75rem' }}
				/>
				<FlexiCell.Label css={{ marginBottom: '0.5rem' }}>MYER</FlexiCell.Label>
				<FlexiCell.Label tag="h3" fontWeight="600">
					Westpac specials and product offers
				</FlexiCell.Label>
			</FlexiCell>
			<h3>Sticky footer example</h3>
			<div css={{ display: 'flex', gap: '1rem' }}>
				{[
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quae possimus, nam nobis cumque ullam et harum, magni quam distinctio, corporis sunt saepe maxime quod. Sapiente voluptatibus sint dicta tenetur.',
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quae possimus, nam nobis cumque ullam et harum, magni quam distinctio, corporis sunt saepe.',
					'Lorem ipsum dolor sit amet',
				].map((title) => (
					<FlexiCell
						withBorder
						key={title}
						badge={<Badge css={{ display: 'block' }} look="primary" value="Badge" />}
					>
						<FlexiCell.Body>
							<img
								src="https://images.unsplash.com/photo-1657299170950-87e5b0eaf77c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
								alt="Food"
								css={{ width: '100%', display: 'block', marginBottom: '0.75rem' }}
							/>
							<FlexiCell.Label css={{ marginBottom: '0.5rem' }}>MYER</FlexiCell.Label>
							<Heading tag="h3" size={8}>
								{title}
							</Heading>
						</FlexiCell.Body>
						<FlexiCell.Footer>
							<Button size="small" soft>
								Share
							</Button>
						</FlexiCell.Footer>
					</FlexiCell>
				))}
			</div>
		</div>
	);
}

export default Example;
