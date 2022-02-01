/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@keystone-ui/core';
import { component, fields, NotEditable } from '@keystone-6/fields-document/component-blocks';
import { useBrand, GEL } from '@westpac/core';
import brand from '@westpac/wbc';
import { Cell } from '@westpac/grid';
import { imageField } from './image-field';
import { Body } from '../../../website/src/components/body';

const Image = ({
	image,
	alt,
	caption,
	context,
}: {
	image: string;
	alt: string;
	caption: string;
	context: string;
}) => {
	const { SPACING, PACKS, COLORS } = useBrand();
	return (
		<Cell width={12}>
			<figure
				css={{
					margin: `${SPACING(5)} 0`,
					pointerEvents: context === 'admin' ? 'none' : undefined,
				}}
			>
				<img css={{ display: 'block', width: '100%', height: 'auto' }} src={image} alt={alt} />
				<Body
					tag="figcaption"
					css={{
						marginTop: SPACING(2),
					}}
					overrides={{
						Body: {
							styles: (styles: any) => ({
								...styles,
								...PACKS.typeScale.bodyFont[10],
								color: COLORS.muted,
							}),
						},
					}}
				>
					{caption}
				</Body>
			</figure>
		</Cell>
	);
};

export const image = component({
	component: ({ caption, image, alt }) => (
		<NotEditable>
			<GEL brand={brand}>
				<Image
					caption={caption.value}
					image={typeof image.value === 'string' ? image.value : ''}
					alt={alt.value}
					context="admin"
				/>
			</GEL>
		</NotEditable>
	),
	props: {
		image: imageField({ label: 'Image' }),
		alt: fields.text({ label: 'image alt text' }),
		caption: fields.text({ label: 'image caption' }),
	},
	label: 'Image',
});
