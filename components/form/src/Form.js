/** @jsx jsx */

import { createContext, useContext, useState, useReducer, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { jsx } from '@westpac/core';

import { validator } from './_utils/validator';

// ==============================
// Context and consumer hook
// ==============================

const FormContext = createContext();

export const useFormContext = () => useContext(FormContext);

// ==============================
// Component
// ==============================
// why would there be a need for anything else but a form tag...
// should handle onChange, onReset
// might need to do some event persist stuff?

export const Form = ({ onSubmit, validateOn, size, spacing, inline, tag: Tag, ...props }) => {
	const formRef = useRef();

	const initialState = { values: {}, validators: {}, errors: {} };
	const formReducer = (state, action) => {
		let nextState = { ...state };

		switch (action.type) {
			// ideally want set and update to be the same thing...
			// dont know if i like SET, need to find nice terminology lol Initialise?
			// can probably combine set and update
			case 'SET_VALUE':
				nextState.values[action.name] = '';
				break;
			case 'UPDATE_VALUE':
				nextState.values[action.name] = action.value;
				break;
			case 'CLEAR_VALUES':
				nextState.values = {};
				break;
			case 'SET_VALIDATE':
				nextState.validators[action.name] = action.validate;
				break;
			case 'SET_ERROR':
				nextState.errors[action.name] = action.errors;
				break;
			case 'CLEAR_ERROR':
				delete nextState.errors[action.name];
				break;
			case 'CLEAR_ERRORS':
				nextState.errors = {};
				break;
			default:
				break;
		}

		return nextState;
	};

	const [formState, dispatch] = useReducer(formReducer, initialState);

	const handleSubmit = e => {
		e.preventDefault();
		// run the validation stuff here
		// console.log('validity: ', formRef.current.reportValidity());
		// should renanme validator and validators to something else less confusing
		// const errors = [];

		// const errors = {
		// 	name: [],
		// }

		const errors = {};

		Object.entries(formState.validators).forEach(([key, validators]) => {
			const errorList = validator(validators, formState.values[key]);
			if (errorList.length) {
				errors[key] = errorList;
				// errors.push({ type: 'SET_ERROR', name: key, errors: errorList });
			}
		});

		const formElements = Array.prototype.slice.call(e.target.elements);

		formElements.forEach(element => {
			if (!element.checkValidity()) {
				if (errors[element.name]) {
					errors[element.name].push(element.validationMessage);
				} else {
					errors[element.name] = [element.validationMessage];
				}
			}
		});

		if (Object.entries(errors).length) {
			// this is dirty lol
			// should really just delete the ones without errors but that seems to be more effort for little gain?
			// is this more efficient?
			dispatch({ type: 'CLEAR_ERRORS' });

			Object.entries(errors).forEach(([name, errors]) => {
				dispatch({ type: 'SET_ERROR', name, errors });
			});
		} else {
			onSubmit(formState.values);
			handleReset();
		}
	};

	const handleReset = () => {
		dispatch({ type: 'CLEAR_ERRORS' });
		dispatch({ type: 'CLEAR_VALUES' });
	};

	return (
		<FormContext.Provider value={{ formState, dispatch, validateOn, size, spacing, inline }}>
			{/* should this have a novalidate */}
			<Tag {...props} ref={formRef} onSubmit={handleSubmit} noValidate />
		</FormContext.Provider>
	);
};

// ==============================
// Types
// ==============================

const options = {
	size: ['small', 'medium', 'large', 'xlarge'],
	spacing: ['medium', 'large'],
};

Form.propTypes = {
	/**
	 * Size of children components.
	 *
	 * This prop is available to children components via `FormContext`.
	 */
	size: PropTypes.oneOf(options.size),

	/**
	 * Vertical spacing of children components.
	 *
	 * This prop is available to children components via `FormContext`.
	 */
	spacing: PropTypes.oneOf(options.spacing),

	/**
	 * Inline children mode (SM+).
	 *
	 * This prop is available to children components via `FormContext`.
	 */
	inline: PropTypes.bool,

	/**
	 * Component tag
	 */
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),

	/**
	 * Form children
	 */
	children: PropTypes.node,
};

export const defaultProps = {
	validateOn: 'blur',
	size: 'medium',
	spacing: 'medium',
	inline: false,
	tag: 'form',
};

Form.defaultProps = defaultProps;
