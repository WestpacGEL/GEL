/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@keystone-ui/core';
import { component, fields, NotEditable } from '@keystone-6/fields-document/component-blocks';
import { imageField } from './image-field';

export const image = component({
	component: ({ caption, image, alt }) => (
		<NotEditable>
			{typeof image.value === 'string' && <img src={image.value} alt={alt.value} />}
			<figcaption>{caption.value}</figcaption>
		</NotEditable>
	),
	props: {
		image: imageField({ label: 'Image' }),
		alt: fields.text({ label: 'image alt text' }),
		caption: fields.text({ label: 'image caption' }),
	},
	label: 'Image',
});
