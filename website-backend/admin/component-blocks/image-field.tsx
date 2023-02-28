import { jsx } from '@keystone-ui/core';
import { gql, useMutation } from '@keystone-6/core/admin-ui/apollo';
import { Button } from '@keystone-ui/button';
import { FieldContainer, FieldLabel } from '@keystone-ui/fields';
import { FormField } from '@keystone-6/fields-document/component-blocks';
import { useMemo } from 'react';

export function imageField({
	label,
}: {
	label: string;
}): FormField<{ kind: 'uploading' } | string | { kind: 'empty' }, undefined> {
	const UPLOAD_IMAGE = gql`
		mutation ($data: ImageCreateInput!) {
			createImage(data: $data) {
				id
				image {
					publicUrl
				}
			}
		}
	`;
	return {
		kind: 'form',
		options: undefined,
		defaultValue: { kind: 'empty' },
		Input({ autoFocus, forceValidation, onChange, value }) {
			const [mutate] = useMutation(UPLOAD_IMAGE);
			const onRemoveImage = () => {
				onChange({ kind: 'empty' });
			};
			const inputKey = useMemo(
				() => Math.random(),
				// eslint-disable-next-line react-hooks/exhaustive-deps
				[value]
			);
			return (
				<FieldContainer>
					<FieldLabel>{label}</FieldLabel>
					{typeof value === 'string' && <img alt="" height="100px" src={value} />}
					<input
						disabled={typeof value === 'object' && value.kind === 'uploading'}
						key={inputKey}
						type="file"
						autoFocus={autoFocus}
						onChange={async (e) => {
							if (!e.target.files?.length) return;
							onChange({ kind: 'uploading' });
							const { data } = await mutate({
								variables: { data: { image: e.target.files[0] } },
							});
							onChange(data.createImage.image.publicUrl);
						}}
					/>
					{forceValidation && (
						<span
							css={{
								color: 'red',
							}}
						>
							Please upload an image
						</span>
					)}
					<Button onClick={onRemoveImage}>Remove</Button>
				</FieldContainer>
			);
		},
		validate(val) {
			return typeof val === 'string';
		},
	};
}
