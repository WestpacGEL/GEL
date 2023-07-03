import { Badge } from '@westpac/badge';
import { Circle } from '@westpac/circle';
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
	{
		title: 'This is a longer heading talking all about the bonus this one wraps.',
		subtitle: 'This is more about the bonus',
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
	const { SPACING } = useBrand();
	return (
		<div
			css={{
				display: 'flex',
				flexDirection: 'column',
				gap: SPACING(2),
			}}
		>
			{MOCK_PROMOS.map(({ title, subtitle, stars }) => {
				return (
					<FlexiCell
						tag="a"
						href="#"
						key={title}
						withBorder
						body
						before={
							<FlexiCell.Adornment align="center">
								<Circle size="70px">Target</Circle>
							</FlexiCell.Adornment>
						}
						badge={
							<Badge
								css={{ display: 'block' }}
								look="hero"
								value={stars ? '✭' : 'Corner flag'}
								aria-hidden={stars ?? 'true'}
							/>
						}
					>
						<small>MYER</small>
						<FlexiCell.Label fontWeight="500" tag="h4">
							{title}
						</FlexiCell.Label>
						<FlexiCell.Hint>{subtitle}</FlexiCell.Hint>
						<div css={{ display: 'flex', gap: SPACING(2), marginTop: SPACING(2) }}>
							<Badge look="primary" value="Badge1" />
							<Badge look="primary" value="Badge2" />
						</div>
					</FlexiCell>
				);
			})}
		</div>
	);
}

export default Example;
