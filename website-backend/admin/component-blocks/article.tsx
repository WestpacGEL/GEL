/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from '@keystone-ui/core';
import { component, fields, RelationshipData } from '@keystone-6/fields-document/component-blocks';
// @ts-ignore
import { ArrowRightIcon } from '@westpac/icon';
// @ts-ignore
import { COLORS } from '@westpac/wbc/tokens/colors';
import { GEL, useMediaQuery, useBrand } from '@westpac/core';
import brand from '@westpac/wbc';
import { Cell } from '@westpac/grid';

const Article = ({ article }: { article: RelationshipData | null }) => {
	const { TYPE } = useBrand();
	const mq = useMediaQuery();

	if (!article) return null;

	const imgURL =
		article?.data?.pageImage?.publicUrl ||
		'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=30';
	return (
		<Cell>
			<a
				href="#"
				css={{
					height: '100%',
					display: 'flex',
					flexDirection: 'column',
					textDecoration: 'none',
					':hover img': { borderRadius: 200 },
				}}
			>
				<img
					css={{
						flexGrow: 1,
						width: '100%',
						minHeight: '250px',
						objectFit: 'cover',
						transition: 'border-radius 0.2s',
					}}
					src={imgURL}
					alt=""
				/>
				<div
					css={mq({
						paddingTop: ['1.5rem', '2.4375rem'],
						paddingLeft: '0.375rem',
						borderRight: `solid ${COLORS.border}`,
						borderRightWidth: [0, 1],
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
						{article.data?.cardTitle}
					</h4>
					<p
						css={{
							margin: '0 1.5rem 0.75rem 0',
							fontSize: '1rem',
							fontFamily: '"graphik",' + TYPE.bodyFont.fontFamily,
							lineHeight: 1.5,
						}}
					>
						{article.data?.cardDescription}
					</p>
					<ArrowRightIcon
						color={COLORS.icon}
						css={mq({ display: 'block', marginLeft: 'auto', marginRight: [0, '0.375rem'] })}
					/>
				</div>
			</a>
		</Cell>
	);
};

export const article = component({
	preview: (props) => {
		return (
			<GEL brand={brand}>
				<Article article={props.fields.article.value} />
			</GEL>
		);
	},
	schema: {
		article: fields.relationship({
			label: 'Article',
			listKey: 'Article',
			many: false,
			selection: `id url cardTitle cardDescription cardDescriptionSecondary pageImage { id filename publicUrl }`,
		}),
	},
	label: 'Article',
});
