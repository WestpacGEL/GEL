import React from 'react';

import { asArray } from '@westpac/core';

// Component specific tests
describe('asArray', () => {
	test('Converts a string to array', () => {
		expect(asArray('string')).toStrictEqual(['string']);
	});

	test('Converts a number to array', () => {
		expect(asArray(55)).toStrictEqual([55]);
	});

	test('Leaves array as is', () => {
		expect(asArray(['array'])).toStrictEqual(['array']);
	});
});
