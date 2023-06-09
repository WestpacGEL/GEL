import { GEL, useBrand } from '@westpac/core';
import { FlexiCell } from '@westpac/flexi-cell';
import { InfoIcon } from '@westpac/icon';
import { Fragment } from 'react';

const MOCK_COUNTRIES = [
	{
		title: 'Popular',
		id: 'popular',
		payees: [
			{
				code: 'IN',
				name: 'India',
			},
			{
				code: 'UK',
				name: 'United Kingdom',
			},
			{
				code: 'USA',
				name: 'United States',
			},
		],
	},
	{
		title: 'A',
		id: 'a',
		payees: [
			{
				code: 'AI',
				name: 'Ascension Islands',
			},
			{
				code: 'AN',
				name: 'Andorra',
			},
			{
				code: 'UA',
				name: 'United Arab Emirates',
			},
			{
				code: 'AF',
				name: 'Afghanistan',
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
			{MOCK_COUNTRIES.map(({ title, id, payees }) => (
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
						{payees.map(({ name }) => {
							return (
								<FlexiCell
									tag="a"
									href="#"
									withBorder
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
								>
									<FlexiCell.Label fontWeight="500" tag="h4">
										{name}
									</FlexiCell.Label>
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
