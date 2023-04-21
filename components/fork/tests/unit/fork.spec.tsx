import { GEL } from '@westpac/core';
import { render, screen, fireEvent } from '@testing-library/react';
import { Fork, Content } from '@westpac/fork';
import { overridesTest } from '../../../../helpers/tests/overrides-test.js';
import { nestingTest } from '../../../../helpers/tests/nesting-test.js';
import userEvent from '@testing-library/user-event';
import wbc from '@westpac/wbc';

const Wrapper = (props: any) => <div css={{ padding: '2rem 0' }} {...props} />;

overridesTest({
	name: 'fork', // the name has to be the package name without '@westpac/' scope
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
				<Fork {...props}>{props.children}</Fork>
			</GEL>
		);
	}

	test('should get rendered', () => {
		const { container } = render(<SimpleFork />);
		expect(container).toBeInTheDocument();
	});

	test('should render label text of supplied options', () => {
		render(
			<SimpleFork>
				<Content text="Fork A" />
				<Content text="Fork B" />
			</SimpleFork>
		);
		expect(screen.getByLabelText('Fork A')).toBeInTheDocument();
		expect(screen.getByLabelText('Fork B')).toBeInTheDocument();
	});

	test('should call onChange event handler', () => {
		const handleChange = jest.fn(() => {});
		render(
			<SimpleFork onChange={handleChange}>
				<Content text="Fork A" />
			</SimpleFork>
		);
		const option1 = screen.getByLabelText('Fork A');
		fireEvent.click(option1);
		expect(handleChange).toHaveBeenCalledTimes(1);
	});
});
