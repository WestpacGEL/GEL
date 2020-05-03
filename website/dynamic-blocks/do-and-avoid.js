/** @jsx jsx */

import { Fragment, useState, useEffect } from 'react'; // Needed for within Keystone
import { FieldContainer, FieldLabel, FieldInput } from '@arch-ui/fields';
import { inputStyles } from '@arch-ui/input';
import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { useMutation } from '@apollo/react-hooks';
import { LoadingIndicator } from '@arch-ui/loading';
import { Container, Grid, Cell } from '@westpac/grid';
import { blocksGridStyle, blocksContainerStyle } from '../src/components/_utils';

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
		const [doImageUploadState, setDoImageUploadState] = useState(null);
		const [dontImageUploadState, setDontImageUploadState] = useState(null);

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
					{doImageUploadState && (
						<p css={inputStyles}>
							<LoadingIndicator />
						</p>
					)}
					<FieldInput>
						<input
							disabled={doImageUploadState !== null || dontImageUploadState !== null}
							css={inputStyles}
							style={{ display: doImageUploadState ? 'none' : undefined }}
							type="file"
							id="do-image"
							onChange={async e => {
								setDoImageUploadState('uploading');
								const { data } = await uploadImage({
									variables: { data: { image: e.target.files[0] } },
								});
								setDoImage(data.createImage.image.publicUrl);
								setDoImageUploadState(null);
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
					{dontImageUploadState && (
						<p css={inputStyles}>
							<LoadingIndicator />
						</p>
					)}
					<FieldInput>
						<input
							disabled={doImageUploadState !== null || dontImageUploadState !== null}
							css={inputStyles}
							style={{ display: dontImageUploadState ? 'none' : undefined }}
							type="file"
							id="avoid-image"
							onChange={async e => {
								setDontImageUploadState('uploading');
								const { data } = await uploadImage({
									variables: { data: { image: e.target.files[0] } },
								});
								setDontImage(data.createImage.image.publicUrl);
								setDontImageUploadState(null);
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
		const mq = useMediaQuery();

		const dodontFigure = {
			margin: 0,
			flexBasis: '50%',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'start',
			justifyContent: 'flex-start',
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
			<Container css={blocksContainerStyle}>
				<Grid columns={12} css={blocksGridStyle}>
					<Cell width={[12, 12, 12, 10, 10]} left={[1, 1, 1, 2, 2]}>
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
							<figure css={mq({ ...dodontFigure, paddingRight: [null, null, SPACING(3)] })}>
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
					</Cell>
				</Grid>
			</Container>
		);
	},
};
