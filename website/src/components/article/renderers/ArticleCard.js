/** @jsx jsx */

import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { Cell } from '@westpac/grid';
import { ArrowRightIcon } from '@westpac/icon';
import { useLayoutContext, useIndexContext } from './Providers';

export const ArticleCard = ({ article }) => {
	if (!article) return null;

	const {
		TYPE,
		GEL: { COLORS },
	} = useBrand();
	const mq = useMediaQuery();

	const imageSrc =
		article.cardImage?.publicUrl ||
		'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=30';
	const title = article.cardTitle || 'Default Title';
	const description = article.cardDescription || 'Default Description';
	const anchorURL = article.url ? `/articles${article.url}` : '#';

	const layoutContext = useLayoutContext();
	const indexContext = useIndexContext();

	const index = indexContext ? indexContext.index : 0;
	const { layout } = layoutContext;

	const aspectRatioMap = {
		four: ['1092/563', '708/559'],
		six: '1092/563',
		eight: ['1092/563', '484/185'],
	};
	let width = [12, 4];
	let aspect = 'four';

	if (layout.length === 2) {
		const sum = layout.reduce((acc, val) => acc + val, 0);
		if (sum === 2) {
			width = [12, 6];
			aspect = 'six';
		} else if (sum === 3 && layout[index] == 2) {
			width = [12, 8];
			aspect = 'eight';
		}
	}

	return (
		<Cell width={width}>
			<a
				href={anchorURL}
				css={{
					height: '100%',
					display: 'flex',
					flexDirection: 'column',
					textDecoration: 'none',
					':hover img': {
						transition: 'border-radius 0.3s cubic-bezier(0.13, 0.00, 0.11, 1.00)',
						borderRadius: 200,
					},
				}}
			>
				<img
					css={mq({
						width: '100%',
						aspectRatio: aspectRatioMap[aspect],
						objectFit: 'cover',
						transition: 'border-radius 0.2s cubic-bezier(0.13, 0.00, 0.11, 1.00)', // mouse out
					})}
					src={imageSrc}
					alt={''}
				/>
				<div
					css={mq({
						paddingTop: ['1.5rem', '2.4375rem'],
						paddingLeft: '0.375rem',
						borderRight: `solid ${COLORS.border}`,
						borderRightWidth: [0, 1],
						flexGrow: 1,
						display: 'flex',
						flexDirection: 'column',
					})}
				>
					<h4
						css={{
							margin: '0 0 0.75rem 0',
							fontFamily: '"graphik",' + TYPE.bodyFont.fontFamily,
							fontSize: '1rem',
							textTransform: 'uppercase',
							lineHeight: 1.12,
						}}
					>
						{title}
					</h4>
					<p
						css={{
							margin: '0 1.5rem 0.75rem 0',
							fontSize: '1rem',
							fontFamily: '"graphik",' + TYPE.bodyFont.fontFamily,
							lineHeight: 1.5,
						}}
					>
						{description}
					</p>
					<ArrowRightIcon
						color={COLORS.icon}
						css={mq({
							display: 'block',
							marginLeft: 'auto',
							marginRight: [0, '0.375rem'],
							marginTop: 'auto',
						})}
						aria-hidden={true}
					/>
				</div>
			</a>
		</Cell>
	);
};
