import { useState } from 'react';
import { GEL } from '@westpac/core';
import { render } from '@testing-library/react';
import { Compacta } from '@westpac/compacta';
import { Form, FormGroup, Field } from '@westpac/form';
import { TextInput } from '@westpac/text-input';
import wbc from '@westpac/wbc';

// Component specific tests
describe('Compacta component', () => {
	const SimpleCompacta = () => {
		const [inputs, setInputs] = useState({});

		const handleChange = (e) => {
			setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
		};
		return (
			<GEL brand={wbc}>
				<Compacta data-cy="default-compacta">
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
	};

	test('It should render Compacta', () => {
		const { container } = render(<SimpleCompacta />);
		expect(container).toBeInTheDocument();
	});
});
