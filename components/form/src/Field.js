/** @jsx jsx */

import { TextInput, Select } from '@westpac/text-input';
import { FormCheck } from '@westpac/form-check';
import { jsx } from '@westpac/core';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

import { validator } from './_utils/validator';
import { ErrorMessage } from './ErrorMessage';
import { FormGroup } from './FormGroup';
import { FormLabel } from './FormLabel';
import { useFormContext } from './Form';
import { Hint } from './Hint';

export const Field = ({ id, fieldType, name, label, hint, validate, data, ...props }) => {
	const { formState, ...context } = useFormContext(); // dont know if i like this destructure
	// need to handle regular html5 stuff i.e. required, type etc.
	// am probably going to remove this and have it stored in the form context and have that act as the single source of truth
	// will add the validator to it and do it all there
	// but doing it here for now to test the concept

	// initialise the field value
	useEffect(() => {
		if (formState && !formState[name]) {
			// is there a better way to do above

			// should also allow for a value here. really need to fix my naming conventions

			context.dispatch({ type: 'SET_VALUE', name });
		}

		// add validators to
		if (validate) {
			context.dispatch({ type: 'SET_VALIDATE', name, validate });
		}
	}, []);

	const handleChange = (event, ...rest) => {
		if (fieldType === 'checkbox') {
			console.log(event.target.value);
			const [value, selected] = rest;
			if (!selected) {
				context.dispatch({ type: 'UPDATE_VALUE', name, value: [...formState.values[name], value] });
			} else {
				context.dispatch({
					type: 'UPDATE_VALUE',
					name,
					value: formState.values[name].filter(item => item !== value),
				});
			}
		} else {
			context.dispatch({ type: 'UPDATE_VALUE', name, value: event.target.value });
		}
	};

	const handleBlur = event => {
		let errors = [];

		if (validate) {
			errors.push(...validator(validate, event.target.value));
		}

		// check for html5 validation
		if (!event.target.checkValidity()) {
			errors.push(event.target.validationMessage);
		}

		if (errors.length) {
			context.dispatch({ type: 'SET_ERROR', name, errors });
		} else {
			context.dispatch({ type: 'CLEAR_ERROR', name });
		}
	};

	return (
		<FormGroup>
			<FormLabel htmlFor={id}>{label}</FormLabel>
			{hint && <Hint>{hint}</Hint>}
			{formState.errors[name] &&
				formState.errors[name].map((error, i) => error && <ErrorMessage key={i} message={error} />)}

			{fieldType === 'text' && (
				<TextInput
					id={id}
					name={name}
					value={formState.values[name] ? formState.values[name] : ''} // there is probably a better way to do this, cant have undefined here initially
					onChange={handleChange}
					onBlur={context.validateOn === 'blur' ? handleBlur : undefined}
					invalid={!!formState.errors[name]}
					{...props}
				/>
			)}

			{fieldType === 'select' && (
				<Select
					id={id}
					name={name}
					data={data}
					value={formState.values[name] ? formState.values[name] : ''}
					onChange={handleChange}
					{...props}
				/>
			)}

			{/* I should combine the below
				FormCheck needs some fixing...
				really need to pass a value to these components for them to work well with Form
			*/}
			{fieldType === 'checkbox' && (
				<FormCheck id={id} name={name} data={data} onChange={handleChange} />
			)}

			{fieldType === 'radio' && (
				<FormCheck type="radio" id={id} name={name} data={data} onChange={handleChange} />
			)}
		</FormGroup>
	);
};
