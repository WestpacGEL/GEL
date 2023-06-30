import { Badge } from '@westpac/badge';
import { GEL, useBrand } from '@westpac/core';
import { FlexiCell } from '@westpac/flexi-cell';

const MOCK_PROMOS = [
	{
		title: 'This is talking about the bonus.',
		subtitle: 'This is more about the bonus and all the other exciting things about this.',
		stars: true,
	},
	{
		title: 'This is a longer heading talking all about the bonus this one wraps.',
		subtitle: 'This is more about the bonus',
		stars: false,
	},
	{
		title: 'This is talking about the bonus.',
		subtitle: 'This is more about the bonus and all the other exciting things about this.',
		stars: false,
	},
];

function Example({ brand }: { brand: object | ((...args: unknown[]) => unknown) }) {
	return (
		<GEL brand={brand}>
			<ExampleChildren />
		</GEL>
	);
}

function ExampleChildren() {
	const { SPACING, COLORS } = useBrand();
	return (
		<div
			css={{
				display: 'flex',
				flexDirection: 'column',
				gap: SPACING(2),
			}}
		>
			<div css={{ display: 'flex', gap: '1rem' }}>
				{MOCK_PROMOS.map(({ title, subtitle }) => (
					<FlexiCell
						withBorder
						key={title}
						badge={<Badge css={{ display: 'block' }} look="hero" value="Badge" />}
					>
						<FlexiCell.Body
							tag="a"
							href="#"
							css={{
								color: 'inherit',
								textDecoration: 'inherit',
								':hover .flexi-cell-label': {
									color: COLORS.link,
								},
							}}
						>
							<img
								src="https://images.unsplash.com/photo-1657299170950-87e5b0eaf77c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
								alt=""
								css={{
									width: '100%',
									height: '63px',
									objectFit: 'cover',
									display: 'block',
								}}
							/>
							<small>MYER</small>
							<FlexiCell.Label fontWeight="500" tag="h4">
								{title}
							</FlexiCell.Label>
							<FlexiCell.Hint>{subtitle}</FlexiCell.Hint>
						</FlexiCell.Body>
						<FlexiCell.Footer>
							<div css={{ display: 'flex', gap: SPACING(2), marginTop: SPACING(2) }}>
								<a href="#">
									<Badge look="primary" value="Badge1" />
								</a>
								<a href="#">
									<Badge look="primary" value="Badge2" />
								</a>
							</div>
						</FlexiCell.Footer>
					</FlexiCell>
				))}
			</div>
		</div>
	);
}

export default Example;
