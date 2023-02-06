import React from 'react';
import { render } from '@testing-library/react';
import { overridesTest } from '../../../../helpers/tests/overrides-test.js';

import { Breadcrumb, Crumb } from '@westpac/breadcrumb';
import { GEL } from '@westpac/core';
import wbc from '@westpac/wbc';

const DEFAULT_DATA = [
	{ href: 'http://google.com/', text: 'Google' },
	{ href: '#/', text: 'Home' },
	{ href: '#/personal-banking/', text: 'Personal' },
	{ href: '#/credit-cards/', text: 'Credit cards' },
];

overridesTest({
	name: 'breadcrumb', // the name has to be the package name without '@westpac/' scope
	overrides: ['Breadcrumb', 'List'], // every single override root key
	Component: (props) => <Breadcrumb data={DEFAULT_DATA} {...props} />, // the component with all components rendered
});

const SimpleBreadcrumb = (props) => (
	<GEL brand={wbc}>
		<Breadcrumb {...props} />
	</GEL>
);

// Component specific tests
describe('Autocomplete component', () => {
	test('The assistiveText should insert aria-label to a nav tag', async () => {
		const assistiveText = 'Page transitions and the such';
		const { container } = render(
			<SimpleBreadcrumb data={DEFAULT_DATA} assistiveText={assistiveText} />
		);
		expect(!!container.querySelector(`[aria-label="${assistiveText}"]`)).toBe(true);
	});

	test('The quantity of options in the DOM should be the same as the array passed as an input', async () => {
		const { container } = render(<SimpleBreadcrumb data={DEFAULT_DATA} />);
		expect(container.querySelector('nav > ol').children.length).toBe(DEFAULT_DATA.length);
	});

	test('The children should contain links according to the data passed: Data driven', async () => {
		const { container } = render(<SimpleBreadcrumb data={DEFAULT_DATA} />);
		const links = container.querySelectorAll('nav > ol > li a');
		links.forEach((link, index) => {
			expect(link.href.replace('http://localhost/', '')).toBe(DEFAULT_DATA[index].href);
		});
	});

	test('The children should contain links according to the data passed: Declarative', async () => {
		const { container } = render(
			<SimpleBreadcrumb>
				{DEFAULT_DATA.map((data) => (
					<Crumb key={data.href} {...data} />
				))}
			</SimpleBreadcrumb>
		);
		const links = container.querySelectorAll('nav > ol > li a');
		links.forEach((link, index) => {
			expect(link.href.replace('http://localhost/', '')).toBe(DEFAULT_DATA[index].href);
		});
	});
});
