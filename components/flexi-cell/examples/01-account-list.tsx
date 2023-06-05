import { GEL, useBrand } from '@westpac/core';
import { FlexiCell } from '@westpac/flexi-cell';

const MOCK_ACCOUNTS = [
	{
		title: 'Cash',
		id: 'cash',
		accounts: [
			{
				name: 'Westpac Choice',
				amount: '$1,234.99',
				number: '732-123 746587',
			},
			{
				name: 'Offset account for loan',
				amount: '$20,000.00',
				number: '732-123 123456',
			},
		],
	},
	{
		title: 'Foreign currency',
		id: 'foreign-currency',
		accounts: [
			{
				name: 'US Dollar Currency Account',
				amount: '$3,957.57',
				number: '123-456 1234567',
			},
			{
				name: 'British pound Currency Account',
				amount: '$9,999,999,999.99',
				number: '123-456 1234567',
			},
		],
	},
	{
		title: 'Credit cards',
		id: 'credit-cards',
		accounts: [
			{
				name: 'Altitude Black World Mastercard',
				amount: '-$3,957.57',
				number: 'Card ending in 1234',
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
	const { SPACING } = useBrand();
	return (
		<div
			css={{
				display: 'flex',
				flexDirection: 'column',
				gap: SPACING(2),
			}}
		>
			{MOCK_ACCOUNTS.map(({ title, id, accounts }) => (
				<div key={id} css={{ display: 'flex', flexDirection: 'column', gap: SPACING(3) }}>
					<h3 css={{ margin: 0, fontWeight: 'normal' }}>{title}</h3>
					<div css={{ display: 'flex', flexDirection: 'column', gap: SPACING(2) }}>
						{accounts.map(({ name, amount, number }) => (
							<FlexiCell
								tag="a"
								href="#"
								body
								withBorder
								key={name}
								after={
									<FlexiCell.Adornment align="top">
										<FlexiCell.Label fontWeight="600" tag="h4">
											{amount}
										</FlexiCell.Label>
										<FlexiCell.Hint>available</FlexiCell.Hint>
									</FlexiCell.Adornment>
								}
							>
								<FlexiCell.Label fontWeight="500" tag="h4">
									{name}
								</FlexiCell.Label>
								<FlexiCell.Hint>{number}</FlexiCell.Hint>
							</FlexiCell>
						))}
					</div>
				</div>
			))}
		</div>
	);
}

export default Example;
