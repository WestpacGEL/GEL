import { GEL, jsx } from '@westpac/core';
import { useId } from 'react';
import { Repeater } from '@westpac/repeater';
import { Form, FormGroup, Field } from '@westpac/form';
import { TextInput } from '@westpac/text-input';

const Repeat = (props) => {
	const id = useId();
	return (
		<Form spacing="large" id={id} {...props}>
			<FormGroup>
				<Field label="Label" hint="Hint text">
					<TextInput width={30} />
				</Field>
			</FormGroup>
		</Form>
	);
};

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<div css={{ maxWidth: '30rem' }}>
				<Repeater>
					<Repeat />
				</Repeater>
			</div>
		</GEL>
	);
}

export default Example;
