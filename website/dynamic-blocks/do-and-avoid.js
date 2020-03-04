/** @jsx jsx */
import { jsx } from '@westpac/core';
import React from 'react'; // Needed for within Keystone
import { FieldContainer, FieldLabel, FieldInput } from '@arch-ui/fields';
import { inputStyles } from '@arch-ui/input';

export const DoAndAvoid = {
	editor: ({ value, onChange }) => {
		const { dos, avoid } = {
			dos: { text: '', value: '' },
			avoid: { text: '', value: '' },
			...(value || {}),
		};

		const update = object =>
			onChange({
				dos: { ...dos, ...object.dos },
				avoid: { ...avoid, ...object.avoid },
			});

		return (
			<>
				<FieldContainer>
					<FieldLabel htmlFor={'do-image'} field={{ label: 'Do Image (url)', config: {} }} />
					<FieldInput>
						<input
							css={inputStyles}
							type="text"
							id="do-image"
							value={dos.image}
							onChange={e => {
								update({
									dos: {
										image: e.target.value,
									},
								});
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
							value={dos.text}
							onChange={e => {
								update({
									dos: {
										text: e.target.value,
									},
								});
							}}
						/>
					</FieldInput>
				</FieldContainer>
				<FieldContainer>
					<FieldLabel htmlFor={'avoid-image'} field={{ label: 'Avoid Image (url)', config: {} }} />
					<FieldInput>
						<input
							css={inputStyles}
							type="text"
							id="avoid-image"
							value={avoid.image}
							onChange={e => {
								update({
									avoid: {
										image: e.target.value,
									},
								});
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
							value={avoid.text}
							onChange={e => {
								update({
									avoid: {
										text: e.target.value,
									},
								});
							}}
						/>
					</FieldInput>
				</FieldContainer>
			</>
		);
	},
	component: ({ dos, avoid }) => {
		const dodontFigure = {
			flexBasis: '50%',
		};
		const dodontImage = {
			maxWidth: '100%',
		};

		const dontText = {
			color: 'red',
		};

		const doText = {
			color: 'green',
		};

		return (
			<div css={{ display: 'flex', width: '100%' }}>
				<figure css={dodontFigure}>
					<img css={dodontImage} src={props.dos.image} />
					<figcaption>
						<span css={doText}>Do</span> - {props.dos.text}
					</figcaption>
				</figure>
				<figure css={dodontFigure}>
					<img css={dodontImage} src={props.avoid.image} />
					<figcaption>
						<span css={dontText}>Avoid</span> - {props.avoid.text}
					</figcaption>
				</figure>
			</div>
		);
	},
};
