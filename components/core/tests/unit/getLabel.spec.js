import React from 'react';

import { getLabel, cleanClassName } from '@westpac/core';

// Component specific tests
describe('getLabel', () => {
	test('Generate a label with a prefix alone', () => {
		const result = getLabel('prefix');
		expect(result).toBe('prefix');
	});

	test('Generate a label from a string prop', () => {
		const result = getLabel('prefix', { a: 'string with spaces and 2 numbers!' });
		expect(result).toBe('prefix-a_string_with_spaces_and_2_numbers');

		const result2 = getLabel('prefix', { a: '' });
		expect(result2).toBe('prefix');
	});

	test('Generate a label from a number prop', () => {
		const result = getLabel('prefix', { a: -55 });
		expect(result).toBe('prefix-a__55');
	});

	test('Generate a label from a function prop', () => {
		const result = getLabel('prefix', { a: function funcName() {} });
		expect(result).toBe('prefix-funcName');

		const funcName2 = () => {};
		funcName2.displayName = 'funcName2';
		const result2 = getLabel('prefix', { a: funcName2 });
		expect(result2).toBe('prefix-funcName2');
	});

	test('Generate a label from a anonymous function prop', () => {
		const result = getLabel('prefix', { a: function () {}, b: () => {} });
		expect(result).toBe('prefix-a-b');
	});

	test('Generate a label from a boolean prop', () => {
		const result = getLabel('prefix', { a: true });
		expect(result).toBe('prefix-a');

		const result2 = getLabel('prefix', { a: false });
		expect(result2).toBe('prefix');
	});

	test('Generate a label from an array prop', () => {
		const result = getLabel('prefix', { a: ['one', true] });
		expect(result).toBe('prefix-a_one_true');
	});

	test('Generate a label from an object prop', () => {
		const result = getLabel('prefix', { a: { b: 1, c: 'some-string', d: true } });
		expect(result).toBe('prefix-a_b_1_c_some_string_d_true');
	});

	test('Generate a label and ignore undefined values', () => {
		const result = getLabel('prefix', { a: undefined, b: null, c: 'c' });
		expect(result).toBe('prefix-b_null-c_c');
	});

	test('Generate a label alphabetically sorted', () => {
		const result = getLabel('prefix', { b: 'b', a: 'a', z: 'z' });
		expect(result).toBe('prefix-a_a-b_b-z_z');
	});
});

describe('cleanClassName', () => {
	test('Replace all spaces', () => {
		expect(cleanClassName('there are a bunch of spaces')).toBe('there_are_a_bunch_of_spaces');
	});

	test('Replace all dots', () => {
		expect(cleanClassName(`lot's.of.them. dots...`)).toBe('lots_of_them__dots___');
	});

	test('Strip all unwanted characters', () => {
		expect(cleanClassName('text@#!$%^“ø∆√ç≈ß')).toBe('text');
	});

	test('Remove numbers from start', () => {
		expect(cleanClassName('5129836123865text555')).toBe('text555');
	});
});
