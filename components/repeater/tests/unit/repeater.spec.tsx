import { useId } from 'react';
import { GEL } from '@westpac/core';
import { render } from '@testing-library/react';
import { screen, within } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { Repeater } from '@westpac/repeater';
import wbc from '@westpac/wbc';
import { overridesTest } from '../../../../helpers/tests/overrides-test.js';
import { nestingTest } from '../../../../helpers/tests/nesting-test.js';
import { RepeaterProps } from '../../src/Repeater';

// TODO: Include RemoveBtn in overrides test - it cannot render until user clicks AddBtn, thus untestable for override
overridesTest({
	name: 'repeater',
	overrides: ['Repeater', 'List', 'Item', 'ItemIndex', 'Content', 'Footer', 'AddBtn'],
	Component: (props: RepeaterProps) => (
		<Repeater separator {...props}>
			<span>Item content</span>
		</Repeater>
	),
});

// another default test to check that the component errors when outside of GEL and renders when inside
nestingTest({
	name: 'repeater',
	Component: (props: RepeaterProps) => (
		<Repeater {...props}>
			<span>Item content</span>
		</Repeater>
	),
});

// Component specific tests
describe('Repeater component', () => {
	const Repeat = (props: any) => {
		const id = useId();
		return (
			<div id={id} css={{ marginBottom: '2rem' }} {...props}>
				Repeater
			</div>
		);
	};
	const SimpleRepeater = () => (
		<GEL brand={wbc}>
			<Repeater>
				<Repeat />
			</Repeater>
		</GEL>
	);

	// Implement a mock URL API. The Repeater uses the generateId module that calls URL methods not implemented in jest-dom.
	global.URL = {
		createObjectURL: () => new Blob(),
		revokeObjectURL: () => {},
	};

	test('it should render Simple Repeater', () => {
		const { container } = render(<SimpleRepeater />);
		expect(container).toBeInTheDocument();
	});

	test('it should render the RemoveBtn after user clicks BtnAdd', async () => {
		render(<SimpleRepeater />);
		const addBtn = screen.getByRole('button', { name: 'Add another item' });
		expect(addBtn).toBeInTheDocument();
		const user = userEvent.setup();
		expect(screen.queryAllByRole('button', { name: /Remove/i })).toHaveLength(0);
		await user.click(addBtn);
		const removeBtns = screen.queryAllByRole('button', { name: /Remove/i });
		expect(removeBtns).toHaveLength(2);
		expect(removeBtns[0]).toBeInTheDocument();
		expect(removeBtns[1]).toBeInTheDocument();
		await user.click(removeBtns[0]);
		expect(screen.queryAllByRole('button', { name: /Remove/i })).toHaveLength(0);
	});

	test('it should show icon inside RemoveBtn and BtnAdd respectively', async () => {
		render(<SimpleRepeater />);
		const addBtn = screen.getByRole('button', { name: 'Add another item' });
		expect(
			within(addBtn).getByText(
				'Copyright © 2020 by Westpac Banking Corporation. All rights reserved.'
			)
		).toBeInTheDocument();
		const user = userEvent.setup();
		await user.click(addBtn);
		const removeBtns = screen.queryAllByRole('button', { name: /Remove/i });
		expect(
			within(removeBtns[0]).getByText(
				'Copyright © 2020 by Westpac Banking Corporation. All rights reserved.'
			)
		).toBeInTheDocument();
	});
});
