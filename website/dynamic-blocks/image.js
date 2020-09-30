/** @jsx jsx */

import { Fragment, useState, useEffect } from 'react'; // Needed for within Keystone
import { FieldContainer, FieldLabel, FieldInput } from '@arch-ui/fields';
import { CheckboxPrimitive } from '@arch-ui/controls';
import { inputStyles } from '@arch-ui/input';
import { jsx, useBrand } from '@westpac/core';
import { useMutation } from '@apollo/react-hooks';
import { LoadingIndicator } from '@arch-ui/loading';
import { Cell } from '@westpac/grid';

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
		const [removeMargin, setRemoveMargin] = useState(value.removeMargin);

		useEffect(() => {
			onChange({
				caption,
				image,
				removeMargin,
			});
		}, [caption, image, removeMargin]);

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
							onChange={async (e) => {
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
							onChange={(e) => {
								setCaption(e.target.value);
							}}
						/>
					</FieldInput>
				</FieldContainer>
				<FieldContainer css={{ marginRight: 42 }}>
					<label css={{ display: 'flex', margin: '10px 20px 0 0' }}>
						<CheckboxPrimitive
							checked={removeMargin}
							tabIndex="0"
							onChange={(e) => setRemoveMargin(e.target.checked)}
						/>
						<span>Remove top margin</span>
					</label>
				</FieldContainer>
			</Fragment>
		);
	},
	component: ({ caption, image, removeMargin = false, context }) => {
		const { SPACING } = useBrand();

		return (
			<Cell width={12}>
				<figure
					css={{
						margin: removeMargin ? '0 0 30px' : '30px 0',
						pointerEvents: context === 'admin' ? 'none' : undefined,
					}}
				>
					<img css={{ width: '100%', height: '100%' }} src={image} />
					<figcaption css={{ padding: `${SPACING(2)} 0` }}>{caption}</figcaption>
				</figure>
			</Cell>
		);
	},
};
