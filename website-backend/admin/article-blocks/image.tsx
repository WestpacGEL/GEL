/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@keystone-ui/core';
import { component, fields, NotEditable } from '@keystone-6/fields-document/component-blocks';
import { useBrand, GEL, useMediaQuery } from '@westpac/core';
import brand from '@westpac/wbc';
import { Cell } from '@westpac/grid';
import { imageField } from '../component-blocks/image-field';

const sizeOptions = [
	// { label: 'Hero', value: 'hero' },
	{ label: 'Body Wide', value: 'bodyWide' },
	{ label: 'Body', value: 'body' },
] as const;

export const Image = ({
	image,
	alt,
	caption,
	size,
	reducedSpacing,
	context,
}: {
	image: string;
	alt: string;
	caption: string;
	size: string;
	reducedSpacing: boolean;
	context: string;
}) => {
	const mq = useMediaQuery();
	const { COLORS, TYPE } = useBrand();

	const sizeMap: { [type: string]: any } = {
		hero: { width: 12 },
		bodyWide: { width: [12, 10], left: [1, 2] },
		body: { width: [12, 10, null, 8], left: [1, 2, null, 3] },
	};
	const srcURL = image || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=30';
	// src={srcURL}
	return (
		<Cell {...sizeMap[size]} css={mq({ marginBottom: ['2.625rem', '3.375rem'] })}>
			<figure css={{ margin: 0, pointerEvents: context === 'admin' ? 'none' : undefined }}>
				<img
					src={`/design-system/images/lego.png`}
					alt={alt}
					css={{ width: '100%', height: 'auto' }}
				/>
				{caption && (
					<figcaption
						css={{
							marginTop: '0.75rem',
							fontFamily: '"graphik",' + TYPE.bodyFont.fontFamily,
							fontSize: '0.875rem',
							color: COLORS.muted,
							lineHeight: 1.07,
						}}
					>
						{caption}
					</figcaption>
				)}
			</figure>
		</Cell>
	);
};

export const image = component({
	preview: ({ fields: { caption, image, alt, size, reducedSpacing } }) => (
		<NotEditable>
			<GEL brand={brand}>
				<Image
					caption={caption.value}
					image={typeof image.value === 'string' ? image.value : ''}
					alt={alt.value}
					size={size.value}
					reducedSpacing={reducedSpacing.value}
					context="admin"
				/>
			</GEL>
		</NotEditable>
	),
	schema: {
		// image: imageField({ label: 'Image' }),
		image: fields.text({ label: 'TEMP image text' }), // temp for dev testing since we dont support local image upload
		alt: fields.text({ label: 'Alt text' }),
		caption: fields.text({ label: 'Caption' }),
		size: fields.select({
			defaultValue: 'body',
			label: 'Size',
			options: sizeOptions,
		}),
		reducedSpacing: fields.checkbox({ label: 'Reduced bottom spacing' }),
	},
	label: 'Image',
});
