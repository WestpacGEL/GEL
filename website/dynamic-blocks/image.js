/** @jsx jsx */

import { Fragment, useState, useEffect } from 'react'; // Needed for within Keystone
import { FieldContainer, FieldLabel, FieldInput } from '@arch-ui/fields';
import { inputStyles } from '@arch-ui/input';
import { jsx, useBrand } from '@westpac/core';
import { useMutation } from '@apollo/react-hooks';
import { LoadingIndicator } from '@arch-ui/loading';
import { Container, Grid, Cell } from '@westpac/grid';
import { blocksContainerStyle, blocksGridStyle } from '../src/components/_utils';

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
		const [uploadState, setUploadState] = useState(null);
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
					{uploadState && (
						<p css={inputStyles}>
							<LoadingIndicator />
						</p>
					)}
					<FieldInput>
						<input
							disabled={uploadState !== null}
							css={inputStyles}
							style={{ display: uploadState ? 'none' : undefined }}
							type="file"
							id="image"
							onChange={async e => {
								setUploadState('uploading');
								const { data } = await uploadImage({
									variables: { data: { image: e.target.files[0] } },
								});
								setImage(data.createImage.image.publicUrl);
								setUploadState(null);
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
	component: ({ caption, image, context }) => {
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
			<Container css={blocksContainerStyle}>
				<Grid columns={12} css={blocksGridStyle}>
					<Cell width={[12, 12, 12, 10, 10]} left={[1, 1, 1, 2, 2]}>
						<figure
							css={{
								...figureStyles,
								pointerEvents: context === 'admin' ? 'none' : undefined,
							}}
						>
							<img css={imageStyles} src={image} />
							<figcaption css={captionStyle}>{caption}</figcaption>
						</figure>
					</Cell>
				</Grid>
			</Container>
		);
	},
};
