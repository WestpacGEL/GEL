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

export const DoAndAvoid = {
	editor: ({ value, onChange }) => {
		const [doImage, setDoImage] = useState(value.doImage);
		const [dontImage, setDontImage] = useState(value.dontImage);
		const [doText, setDoText] = useState(value.doText);
		const [dontText, setDontText] = useState(value.dontText);

		useEffect(() => {
			onChange({
				doImage,
				dontImage,
				doText,
				dontText,
			});
		}, [doText, doImage, dontImage, dontText]);

		let [uploadImage] = useMutation(UPLOAD_IMAGE);

		return (
			<Fragment>
				<FieldContainer>
					<FieldLabel htmlFor={'do-image'} field={{ label: 'Do Image', config: {} }} />
					<FieldInput>
						<input
							css={inputStyles}
							type="file"
							id="do-image"
							onChange={async e => {
								const { data } = await uploadImage({
									variables: { data: { image: e.target.files[0] } },
								});
								setDoImage(data.createImage.image.publicUrl);
							}}
						/>
					</FieldInput>
				</FieldContainer>
				<FieldContainer>
					<FieldLabel htmlFor={'do-text'} field={{ label: 'Do Text', config: {} }} />
					<FieldInput>
						<input
							css={inputStyles}
							type="text"
							id="do-text"
							value={doText}
							onChange={async e => {
								setDoText(e.target.value);
							}}
						/>
					</FieldInput>
				</FieldContainer>
				<FieldContainer>
					<FieldLabel htmlFor={'avoid-image'} field={{ label: 'Avoid Image', config: {} }} />
					<FieldInput>
						<input
							css={inputStyles}
							type="file"
							id="avoid-image"
							onChange={async e => {
								const { data } = await uploadImage({
									variables: { data: { image: e.target.files[0] } },
								});
								setDontImage(data.createImage.image.publicUrl);
							}}
						/>
					</FieldInput>
				</FieldContainer>
				<FieldContainer>
					<FieldLabel htmlFor={'avoid-text'} field={{ label: 'Avoid Text', config: {} }} />
					<FieldInput>
						<input
							css={inputStyles}
							type="text"
							id="avoid-text"
							value={dontText}
							onChange={e => {
								setDontText(e.target.value);
							}}
						/>
					</FieldInput>
				</FieldContainer>
			</Fragment>
		);
	},
	component: ({ dontImage, dontText, doImage, doText }) => {
		const { COLORS, SPACING, LAYOUT } = useBrand();

		const dodontFigure = {
			margin: 0,
			flexBasis: '50%',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'start',
			justifyContent: 'flex-end',
			marginBottom: SPACING(2),
		};
		const dodontImage = {
			maxWidth: '100%',
			width: '100%',
			marginBottom: SPACING(2),
		};

		const captionStyle = {
			padding: `${SPACING(2)} 0`,
		};

		const dontStyle = {
			color: COLORS.danger,
			fontWeight: 'bold',
		};

		const doStyle = {
			color: COLORS.success,
			fontWeight: 'bold',
		};

		return (
			<div
				css={{
					display: 'flex',
					alignItems: 'stretch',
					width: '100%',
					justifyContent: 'space-between',
					[`@media (max-width: ${LAYOUT.breakpoints.sm}px)`]: {
						flexDirection: 'column',
					},
				}}
			>
				<figure css={{ ...dodontFigure, paddingRight: SPACING(3) }}>
					<div>
						<img css={dodontImage} src={doImage} />
					</div>
					<figcaption css={captionStyle}>
						<span css={doStyle}>Do</span> - {doText}
					</figcaption>
				</figure>
				<figure css={dodontFigure}>
					<div>
						<img css={dodontImage} src={dontImage} />
					</div>
					<figcaption css={captionStyle}>
						<span css={dontStyle}>Avoid</span> - {dontText}
					</figcaption>
				</figure>
			</div>
		);
	},
};
