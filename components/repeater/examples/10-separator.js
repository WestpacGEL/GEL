import { GEL, jsx } from '@westpac/core';
import { useId } from 'react';
import { Repeater } from '@westpac/repeater';
import { Field } from '@westpac/form';
import { TextInput } from '@westpac/text-input';

const Repeat = (props) => {
	const id = useId();
	return (
		<Field id={id} label="Label" hint="Hint text" {...props}>
			<TextInput width={30} />
		</Field>
	);
};

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<Repeater separator>
				<Repeat />
			</Repeater>
		</GEL>
	);
}

export default Example;
