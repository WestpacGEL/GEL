import { GEL } from '@westpac/core';
import { render, screen } from '@testing-library/react';
import { Fork, Content } from '@westpac/fork';
import { overridesTest } from '../../../../helpers/tests/overrides-test.js';
import { nestingTest } from '../../../../helpers/tests/nesting-test.js';
import userEvent from '@testing-library/user-event';
import { ErrorBoundary } from '../../../../helpers/tests/error-boundary';
import wbc from '@westpac/wbc';
import { ForkContent } from '../../src/ForkContent';

const Wrapper = (props: any) => <div css={{ padding: '2rem 0' }} {...props} />;

overridesTest({
	name: 'fork',
	overrides: ['ForkContent'],
	styles: { ForkContent: { display: 'block' } },
	Component: (props: any) => (
		<Fork name="test-fork">
			<Content text="Fork A" {...props}>
				<Wrapper>Fork A content</Wrapper>
			</Content>
			<ForkContent text="Fork B" {...props}>
				<Wrapper>Fork B content</Wrapper>
			</ForkContent>
		</Fork>
	),
});

nestingTest({
	name: 'forkContent',
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

// Component specific tests
describe('ForkContent component', () => {
	function SimpleForkContent(props: any) {
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

	test('should get rendered', () => {
		render(<SimpleForkContent />);
		expect(screen.getByText('Fork A content')).toBeInTheDocument();
		expect(screen.getByText('Fork B content')).toBeInTheDocument();
	});

	test('should display content of selected option', async () => {
		render(<SimpleForkContent />);
		const user = userEvent.setup();
		const forkAcontent = screen.getByText('Fork A content');
		const forkBcontent = screen.getByText('Fork B content');
		expect(forkAcontent).not.toBeVisible();
		expect(forkBcontent).not.toBeVisible();
		await user.click(screen.getByLabelText('Fork A'));
		expect(forkAcontent).toBeVisible();
		expect(forkBcontent).not.toBeVisible();
		await user.click(screen.getByLabelText('Fork B'));
		expect(forkBcontent).toBeVisible();
		expect(forkAcontent).not.toBeVisible();
	});

	test('should error when not nested inside a Fork component', () => {
		const Wrapper = () => (
			<GEL brand={wbc}>
				<Content text="Fork A" data-testid="test-component" />
			</GEL>
		);

		render(<Wrapper />, { wrapper: ErrorBoundary });
		expect(
			screen.queryByText(/<Content\/> components should be wrapped in a <Fork>./i)
		).toBeInTheDocument();
	});
});
