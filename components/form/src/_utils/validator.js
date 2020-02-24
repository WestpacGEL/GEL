import { asArray } from '@westpac/core';

export const validator = (validate, value) => {
	const validateArr = asArray(validate);
	const errors = [];
	validateArr.forEach(validation => {
		let error = null;
		if (typeof validation === 'object') {
			error = !validation.regex.test(value) && validation.message;
		} else if (typeof validation === 'function') {
			error = validation(value);
		}

		if (error) errors.push(error);
	});

	return errors;
};
