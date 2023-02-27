import { GEL, jsx } from '@westpac/core';
import { Field } from '@westpac/form';
import { TextInput } from '@westpac/text-input';

const Hint = (props) => (
	<span {...props}>
		I am a hint <a href="#">component</a>
	</span>
);

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<Field label="Text input example" hint="I am a text input">
				<TextInput />
			</Field>
			<br />
			<Field label="Text input with error" hint="I have an error" error="Im an error">
				<TextInput invalid />
			</Field>
			<br />
			<Field label="Text input hint as functional component" hint={Hint}>
				<TextInput />
			</Field>
			<h4>Visually hidden label</h4>
			<br />
			<Field hideLabel label="Hidden label" hint="I have a hidden label">
				<TextInput />
			</Field>
		</GEL>
	);
}

export default Example;
