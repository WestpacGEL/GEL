import { GEL, useBrand } from '@westpac/core';
import { FlexiCell } from '@westpac/flexi-cell';
import { InfoIcon } from '@westpac/icon';

const MOCK_PAYEES = [
	{
		title: 'Recently Paid',
		id: 'recently-paid',
		payees: [
			{
				initials: 'AJ',
				name: 'Andrew Jones',
				paidAt: 'Fri 5 Aug',
				number: '123-986 463846',
			},
			{
				initials: 'JW',
				name: 'Joss Wight',
				paidAt: 'Mon 1 Aug',
				number: '098-567 465352',
			},
		],
	},
	{
		title: 'A',
		id: 'a',
		payees: [
			{
				initials: 'AO',
				name: 'Active OOSH',
				number: '857-434 856383',
				paidAt: undefined,
			},
			{
				initials: 'AC',
				name: 'Alice Cartwright',
				number: '950-456 345363',
				paidAt: undefined,
			},
		],
	},
	{
		title: 'B',
		id: 'b',
		payees: [
			{
				initials: 'BN',
				name: 'Benjamin North',
				number: '098-123 745362',
				paidAt: undefined,
			},
		],
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
			{MOCK_PAYEES.map(({ title, id, payees }) => (
				<div key={id} css={{ display: 'flex', flexDirection: 'column', gap: SPACING(3) }}>
					<h3
						css={{
							margin: 0,
							fontWeight: 'normal',
							borderBottom: `solid 1px ${COLORS.border}`,
							paddingBottom: SPACING(1),
						}}
					>
						{title}
					</h3>
					<div css={{ display: 'flex', flexDirection: 'column', gap: SPACING(3) }}>
						{payees.map(({ name, initials, paidAt, number }) => {
							return (
								<FlexiCell
									tag={paidAt ? 'a' : 'div'}
									href="#"
									key={name}
									body
									before={
										<FlexiCell.Adornment align="top">
											<FlexiCell.Circle background={COLORS.muted} css={{ color: 'white' }}>
												{initials}
											</FlexiCell.Circle>
										</FlexiCell.Adornment>
									}
									after={
										<FlexiCell.Adornment align="center">
											{paidAt ? (
												<FlexiCell.Hint tag="h4">{paidAt}</FlexiCell.Hint>
											) : (
												// @ts-ignore
												<FlexiCell.Button href="/somewhere" iconBefore={InfoIcon} />
											)}
										</FlexiCell.Adornment>
									}
								>
									{paidAt ? (
										<>
											<FlexiCell.Label fontWeight="500" tag="h4">
												{name}
											</FlexiCell.Label>
											<FlexiCell.Hint>{number}</FlexiCell.Hint>
										</>
									) : (
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
											<FlexiCell.Label fontWeight="500" tag="h4">
												{name}
											</FlexiCell.Label>
											<FlexiCell.Hint>{number}</FlexiCell.Hint>
										</a>
									)}
								</FlexiCell>
							);
						})}
					</div>
				</div>
			))}
		</div>
	);
}

export default Example;
