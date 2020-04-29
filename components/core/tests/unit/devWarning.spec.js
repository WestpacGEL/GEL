import React from 'react';

import { devWarning } from '@westpac/core';

// Component specific tests
describe('devWarning', () => {
	const OLD_ENV = process.env.NODE_ENV;

	beforeEach(() => {
		jest.resetModules();
		process.env.NODE_ENV = OLD_ENV;
	});

	test('Logs message in development when condition is true', () => {
		process.env.NODE_ENV = 'development';
		console.error = jest.fn();

		const msg = 'This message should be logged';
		devWarning(true, msg);

		expect(console.error).toHaveBeenCalledTimes(1);
		expect(console.error).toHaveBeenCalledWith(expect.stringContaining(msg));
	});

	test(`Doesn't log message in development when condition is false`, () => {
		process.env.NODE_ENV = 'development';
		console.error = jest.fn();

		const msg = 'This message should not be logged';
		devWarning(false, msg);

		expect(console.error).toHaveBeenCalledTimes(0);
	});

	test(`Doesn't log message in production when condition is true`, () => {
		process.env.NODE_ENV = 'production';
		console.error = jest.fn();

		const msg = 'This message should not be logged';
		devWarning(true, msg);

		expect(console.error).toHaveBeenCalledTimes(0);
	});

	test(`Doesn't log message in production when condition is false`, () => {
		process.env.NODE_ENV = 'production';
		console.error = jest.fn();

		const msg = 'This message should not be logged';
		devWarning(false, msg);

		expect(console.error).toHaveBeenCalledTimes(0);
	});
});
