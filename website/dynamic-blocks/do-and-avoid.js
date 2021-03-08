/** @jsx jsx */

import { Fragment, useState, useEffect } from 'react'; // Needed for within Keystone
import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { Cell } from '@westpac/grid';
import { Body } from '../src/components/body';

import { FieldContainer, FieldLabel, FieldInput } from '@arch-ui/fields';
import { LoadingIndicator } from '@arch-ui/loading';
import { inputStyles } from '@arch-ui/input';

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

const Figure = (props) => (
	<figure
		css={{
			margin: 0,
			flexBasis: '50%',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'start',
			justifyContent: 'flex-start',
		}}
		{...props}
	/>
);

const Figcaption = (props) => {
	const { SPACING, PACKS, COLORS } = useBrand();
	return (
		<Body
			tag="figcaption"
			css={{
				marginTop: SPACING(2),
			}}
			overrides={{
				Body: {
					styles: (styles) => ({
						...styles,
						...PACKS.typeScale.bodyFont[10],
						color: COLORS.muted,
					}),
				},
			}}
			{...props}
		/>
	);
};

const Image = (props) => {
	const mq = useMediaQuery();
	const { SPACING } = useBrand();
	return (
		<img
			css={mq({
				width: '100%',
				height: 'auto',
				marginBottom: SPACING(3),
			})}
			{...props}
		/>
	);
};

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
							onChange={async (e) => {
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
							onChange={async (e) => {
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
							onChange={async (e) => {
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
							onChange={(e) => {
								setDontText(e.target.value);
							}}
						/>
					</FieldInput>
				</FieldContainer>
			</Fragment>
		);
	},
	component: ({ dontImage, dontText, doImage, doText }) => {
		const { COLORS, TYPE } = useBrand();
		const mq = useMediaQuery();

		return (
			<Fragment>
				<Cell
					width={[12, null, 6]}
					css={mq({ marginTop: ['24px', null, null, null, '42px'], height: 'auto' })}
				>
					<Figure>
						<Image src={doImage} />
						<Figcaption>
							<span css={{ color: COLORS.success, ...TYPE.bodyFont[700] }}>Do</span> - {doText}
						</Figcaption>
					</Figure>
				</Cell>
				<Cell
					width={[12, null, 6]}
					css={mq({
						marginTop: ['24px', null, null, null, '42px'],
						marginBottom: ['24px', null, null, null, '42px'],
						height: 'auto',
					})}
				>
					<Figure>
						<Image src={dontImage} />
						<Figcaption>
							<span css={{ color: COLORS.danger, ...TYPE.bodyFont[700] }}>Avoid</span> - {dontText}
						</Figcaption>
					</Figure>
				</Cell>
			</Fragment>
		);
	},
};
