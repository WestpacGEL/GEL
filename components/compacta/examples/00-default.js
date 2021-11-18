/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { useState } from 'react';
import { Compacta } from '@westpac/compacta';
import { Form, FormGroup, Field } from '@westpac/form';
import { TextInput } from '@westpac/text-input';

function Example({ brand }) {
	const [inputs, setInputs] = useState({});

	const handleChange = (e) => {
		setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	return (
		<GEL brand={brand}>
			<h3>Default</h3>
			<Compacta>
				{({ id, setPrimaryTitle, setSecondaryTitle, setTertiaryTitle }) => (
					<Form spacing="large">
						<FormGroup>
							<Field label="Primary" hint="Primary title text">
								<TextInput
									name={`input-primary-${id}`}
									value={inputs[`input-primary-${id}`] || ''}
									onChange={(e) => {
										handleChange(e);
										setPrimaryTitle(e.target.value);
									}}
									width={30}
								/>
							</Field>
						</FormGroup>
						<FormGroup>
							<Field label="Secondary" hint="Secondary title text">
								<TextInput
									name={`input-secondary-${id}`}
									value={inputs[`input-secondary-${id}`] || ''}
									onChange={(e) => {
										handleChange(e);
										setSecondaryTitle(e.target.value);
									}}
									width={30}
								/>
							</Field>
						</FormGroup>
						<FormGroup>
							<Field label="Tertiary" hint="Tertiary title text">
								<TextInput
									name={`input-tertiary-${id}`}
									value={inputs[`input-tertiary-${id}`] || ''}
									onChange={(e) => {
										handleChange(e);
										setTertiaryTitle(e.target.value);
									}}
									width={30}
								/>
							</Field>
						</FormGroup>
					</Form>
				)}
			</Compacta>
		</GEL>
	);
}

export default Example;
