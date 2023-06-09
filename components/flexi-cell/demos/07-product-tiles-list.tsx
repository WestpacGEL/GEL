import { GEL, useBrand, useMediaQuery } from '@westpac/core';
import { FlexiCell } from '@westpac/flexi-cell';
import { TickCircleIcon } from '@westpac/icon';
import { GiftPictogram } from '@westpac/pictogram';
import { useMemo } from 'react';

const MOCK_PROMOS = [
	{
		title: 'This is talking about the bonus',
		subtitle: 'This is more about the bonus and all the other exciting things about this.',
	},
	{
		title: 'This is a longer heading talking all about the bonus this one wraps',
		subtitle: 'This is more about the bonus',
	},
	{
		title: 'This is talking about the bonus',
		subtitle: 'This is more about the bonus and all the other exciting things about this.',
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
	const mq = useMediaQuery();
	const css = useMemo(
		() =>
			mq({
				display: 'flex',
				flexDirection: ['column', 'row'],
				gap: SPACING(2),
			}),
		[SPACING, mq]
	);
	return (
		<div css={{ display: 'flex', flexDirection: 'column', gap: SPACING(2) }}>
			{MOCK_PROMOS.map(({ title, subtitle }) => (
				<FlexiCell
					tag="a"
					href="#"
					withBorder
					withArrow
					body
					key={title}
					after={<TickCircleIcon color={COLORS.success} />}
				>
					<div css={css}>
						<GiftPictogram mode="duo" css={{ width: '24px', height: '24px' }} />
						<div css={{ display: 'flex', flexDirection: 'column', gap: SPACING(1) }}>
							<FlexiCell.Label fontWeight="500" tag="h4">
								{title}
							</FlexiCell.Label>
							<FlexiCell.Hint>{subtitle}</FlexiCell.Hint>
						</div>
					</div>
				</FlexiCell>
			))}
		</div>
	);
}

export default Example;
