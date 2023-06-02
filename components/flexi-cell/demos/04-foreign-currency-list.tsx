import { GEL, useBrand } from '@westpac/core';
import { FlexiCell } from '@westpac/flexi-cell';
import { InfoIcon } from '@westpac/icon';
import { Fragment } from 'react';

const MOCK_PAYEES = [
	{
		title: 'Recently Paid',
		id: 'recently-paid',
		payees: [
			{
				initials: 'AJ',
				name: 'Andrew Jones',
				paidAt: 'Fri 5 Aug',
				number: '10864567891 BANK OF ANTARCTICA, ANTARCTICA NFBKAS33XXX',
			},
			{
				initials: 'JW',
				name: 'Joss Wight',
				paidAt: 'Mon 1 Aug',
				number: '10864567891 LLOYDS OF LONDON, DEVON NFBKAS33XXX',
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
				number: '10864567891 BANK OF AMERICA, NEW YORK NFBKAS33XXX',
				paidAt: undefined,
			},
			{
				initials: 'AC',
				name: 'Alice Cartwright',
				number: '10864567891 BANK OF AMERICA, NEW YORK NFBKAS33XXX',
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
				number: '10864567891 BANK OF CUBA, HAVANA NFBKAS33XXX',
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
						{payees.map(({ name, paidAt, number }) => {
							return (
								<FlexiCell
									tag={paidAt ? 'a' : 'div'}
									href="#"
									body
									key={name}
									before={
										<FlexiCell.Adornment align="top">
											<svg
												width="30"
												height="24"
												viewBox="0 0 640 480"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path d="M0 0H640V480H0V0Z" fill="white" />
												<path d="M0 0H213.3V480H0V0Z" fill="#002654" />
												<path d="M426.7 0H640V480H426.7V0Z" fill="#CE1126" />
											</svg>
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
