import { GEL } from '@westpac/core';
import { render, screen } from '@testing-library/react';
import { Fork, Content } from '@westpac/fork';
import { overridesTest } from '../../../../helpers/tests/overrides-test.js';
import { nestingTest } from '../../../../helpers/tests/nesting-test.js';
import userEvent from '@testing-library/user-event';
import wbc from '@westpac/wbc';

const Wrapper = (props: any) => <div css={{ padding: '2rem 0' }} {...props} />;

overridesTest({
	name: 'fork',
	overrides: ['Fork'],
	Component: (props: any) => (
		<Fork name="test-fork" defaultValue={1} {...props}>
			<Content text="Fork A">
				<Wrapper>Fork A content</Wrapper>
			</Content>
			<Content text="Fork B">
				<Wrapper>Fork B content</Wrapper>
			</Content>
		</Fork>
	),
});

nestingTest({
	name: 'fork',
	Component: (props: any) => (
		<Fork name="test-fork" defaultValue={1} {...props}>
			<Content text="Fork A">
				<Wrapper>Fork A content</Wrapper>
			</Content>
			<Content text="Fork B">
				<Wrapper>Fork B content</Wrapper>
				<Wrapper />
			</Content>
		</Fork>
	),
});

// Component specific tests
describe('Fork component', () => {
	function SimpleFork(props: any) {
		return (
			<GEL brand={wbc}>
				<Fork {...props}>
					<Content text="Fork A">
						<Wrapper>Fork A content</Wrapper>
					</Content>
					<Content text="Fork B">
						<Wrapper>Fork B content</Wrapper>
					</Content>
				</Fork>
			</GEL>
		);
	}

	test('It should render Fork', () => {
		const { container } = render(<SimpleFork />);
		expect(container).toBeInTheDocument();
	});

	test('should render label text of supplied options', () => {
		render(<SimpleFork />);
		expect(screen.getByLabelText('Fork A')).toBeInTheDocument();
		expect(screen.getByLabelText('Fork B')).toBeInTheDocument();
	});

	test('should display content of selected option', async () => {
		render(<SimpleFork />);
		const user = userEvent.setup();
		const content1 = screen.getByText('Fork A content');
		const content2 = screen.getByText('Fork B content');
		expect(content1).not.toBeVisible();
		expect(content2).not.toBeVisible();
		await user.click(screen.getByLabelText('Fork A'));
		expect(content1).toBeVisible();
		expect(content2).not.toBeVisible();
		await user.click(screen.getByLabelText('Fork B'));
		expect(content2).toBeVisible();
		expect(content1).not.toBeVisible();
	});
});
