import { GEL } from '@westpac/core';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Sidebar } from '@westpac/sidebar';
import wbc from '@westpac/wbc';
import { overridesTest } from '../../../../helpers/tests/overrides-test';
import { nestingTest } from '../../../../helpers/tests/nesting-test';
import { SidebarProps } from '../../src/Sidebar';

overridesTest({
	name: 'sidebar',
	overrides: [
		'Sidebar',
		'SidebarHeading',
		'CloseBtn',
		'Content',
		'ContentHeader',
		'ContentInner',
		'Header',
		'HeaderRight',
		'HeaderLeft',
		'HeaderBtn',
		'Backdrop',
	],
	Component: (props: SidebarProps) => <Sidebar {...props}></Sidebar>,
});

nestingTest({
	name: 'sidebar',
	Component: (props: SidebarProps) => <Sidebar {...props}></Sidebar>,
});

// Component specific tests
describe('Sidebar component', () => {
	const SimpleSidebar = (props: SidebarProps) => (
		<GEL brand={wbc}>
			<Sidebar heading="Sidebar heading" contentHeading="Sidebar content heading" {...props}>
				<p>Sidebar content</p>
			</Sidebar>
		</GEL>
	);

	test('should render sidebar heading, content heading & content', () => {
		render(<SimpleSidebar />);
		expect(screen.getByText('Sidebar heading')).toBeInTheDocument();
		expect(screen.getByText('Sidebar content heading')).toBeInTheDocument();
		expect(screen.getByText(/^Sidebar content$/i)).toBeInTheDocument();
		expect(screen.getByRole('button', { name: 'Show sidebar' })).toBeInTheDocument();
	});

	test('should toggle between rendering of "Show sidebar" & "Close" buttons when they are clicked', async () => {
		render(<SimpleSidebar />);
		const user = userEvent.setup();
		expect(screen.getByRole('button', { name: 'Show sidebar' })).toBeInTheDocument();
		expect(screen.queryByRole('button', { name: 'Close' })).toBeNull();
		await user.click(screen.getByRole('button', { name: 'Show sidebar' }));
		expect(screen.queryByRole('button', { name: 'Show sidebar' })).toBeNull();
		expect(screen.getByRole('button', { name: 'Close' })).toBeInTheDocument();
		await user.click(screen.getByRole('button', { name: 'Close' }));
		expect(screen.getByRole('button', { name: 'Show sidebar' })).toBeInTheDocument();
		expect(screen.queryByRole('button', { name: 'Close' })).toBeNull();
	});

	test('should close an open sidebar when ESC key is pressed', () => {
		render(<SimpleSidebar />);
		fireEvent.click(screen.getByRole('button', { name: 'Show sidebar' }));
		expect(screen.queryByRole('button', { name: 'Show sidebar' })).toBeNull();
		expect(screen.getByRole('button', { name: 'Close' })).toBeInTheDocument();
		fireEvent.keyDown(screen.getByRole('button', { name: 'Close' }), {
			key: 'Escape',
			code: 'Escape',
		});
		expect(screen.queryByRole('button', { name: 'Close' })).toBeNull();
		expect(screen.queryByRole('button', { name: 'Show sidebar' })).toBeInTheDocument();
	});
});
