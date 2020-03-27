/** @jsx jsx */

import { Fragment, useState, useEffect } from 'react'; // Needed for within Keystone
import { FieldContainer, FieldLabel, FieldInput } from '@arch-ui/fields';
import { inputStyles } from '@arch-ui/input';
import { jsx, useBrand } from '@westpac/core';
import { useMutation } from '@apollo/react-hooks';

import gql from 'graphql-tag';

const UPLOAD_IMAGE = gql`
	mutation name($data: ImageCreateInput!) {
		createImage(data: $data) {
			id
			image {
				id
				filename
				publicUrl
				encoding
				path
			}
			caption
		}
	}
`;

export const Image = {
	editor: ({ value, onChange }) => {
		const [image, setImage] = useState(value.image);
		const [caption, setCaption] = useState(value.caption);

		useEffect(() => {
			onChange({
				caption,
				image,
			});
		}, [caption, image]);

		let [uploadImage] = useMutation(UPLOAD_IMAGE);

		return (
			<Fragment>
				<FieldContainer>
					<FieldLabel htmlFor={'image'} field={{ label: 'Image', config: {} }} />
					<FieldInput>
						<input
							css={inputStyles}
							type="file"
							id="image"
							onChange={async e => {
								const { data } = await uploadImage({
									variables: { data: { image: e.target.files[0] } },
								});
								setImage(data.createImage.image.publicUrl);
							}}
						/>
					</FieldInput>
				</FieldContainer>
				<FieldContainer>
					<FieldLabel htmlFor={'image-caption'} field={{ label: 'Caption', config: {} }} />
					<FieldInput>
						<input
							css={inputStyles}
							type="text"
							id="image-caption"
							value={caption}
							onChange={e => {
								setCaption(e.target.value);
							}}
						/>
					</FieldInput>
				</FieldContainer>
			</Fragment>
		);
	},
	component: ({ caption, image }) => {
		const { SPACING } = useBrand();

		const figureStyles = {
			margin: 0,
			marginBottom: SPACING(2),
		};

		const imageStyles = {
			maxWidth: '100%',
			marginBottom: SPACING(2),
		};

		const captionStyle = {
			padding: `${SPACING(2)} 0`,
		};

		return (
			<figure css={{ ...figureStyles, paddingRight: SPACING(3) }}>
				<img css={imageStyles} src={image} />
				<figcaption css={captionStyle}>{caption}</figcaption>
			</figure>
		);
	},
};
