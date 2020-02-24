/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { Form, Field } from '@westpac/form';
import { Button } from '@westpac/button';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<h2>Field</h2>
			<Form validateOn="submit" onSubmit={data => console.log(data)}>
				<Field
					id="example"
					fieldType="text"
					name="example"
					label="Simple Input Field"
					hint="I'm a hint"
					minLength="2"
					required
				/>
				<Field
					id="regex"
					fieldType="text"
					name="regex"
					label="Regex Validation"
					hint="Should be in form {regex: /<regex>/, message: error message}"
					validate={{ regex: /[a-z]/i, message: 'Only letters are allowed!!' }}
					required
				/>
				<Field
					id="function"
					fieldType="text"
					name="function"
					label="Function Validation"
					hint="Function will receive the value and should return an error message or undefined"
					validate={value => (/[0-9]/.test(value) ? undefined : 'Only numbers are allowed!!')}
				/>
				<Field
					id="validateArr"
					fieldType="text"
					name="validateArr"
					label="Multiple validations"
					hint="Pass an array containing regex objects and functions"
					validate={[
						{ regex: /[a-z]/i, message: 'Only letters are allowed!!' },
						value => (/[A-Z]/.test(value) ? undefined : 'Must be in uppercase'),
					]}
				/>
				<Field
					id="select"
					fieldType="select"
					name="select"
					label="Select Field"
					hint="This is a select field"
					required
					data={[
						{ label: 'Select a value', value: '' },
						{ label: 'Value 1', value: 'Select 1' },
						{ label: 'Value 2', value: 'Select 2' },
						{ label: 'Value 3', value: 'Select 3' },
					]}
				/>
				<Field
					id="checkbox"
					fieldType="checkbox"
					name="checkbox"
					label="Checkbox Field"
					hint="This is a checkbox field"
					data={[
						{ value: 'Checkbox1', text: 'Option 1' },
						{ value: 'Checkbox2', text: 'Option 2' },
						{ value: 'Checkbox3', text: 'Option 3' },
					]}
				/>
				<Field
					id="radio"
					fieldType="radio"
					name="radio"
					label="Radio Field"
					hint="This is a radio field"
					data={[
						{ value: 'Radio1', text: 'Option 1' },
						{ value: 'Radio2', text: 'Option 2' },
						{ value: 'Radio3', text: 'Option 3' },
					]}
				/>
				<Button type="submit">Submit</Button>
			</Form>
		</GEL>
	);
}

export default Example;
