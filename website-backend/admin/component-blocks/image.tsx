/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@keystone-ui/core';
import { component, fields } from '@keystone-6/fields-document/component-blocks';
import { imageField } from './image-field';

export const image = component({
	component: ({ imageCaption, image, imageAlt }) => (
		<div>
			{typeof image.value === 'string' && <img src={image.value} alt={imageAlt.value} />}
			<figcaption>{imageCaption.value}</figcaption>
		</div>
	),
	props: {
		image: imageField({ label: 'Image' }),
		imageAlt: fields.text({ label: 'image alt text' }),
		imageCaption: fields.text({ label: 'image caption' }),
	},
	label: 'Image',
});
