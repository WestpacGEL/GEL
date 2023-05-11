import { GEL } from '@westpac/core';
import { render } from '@testing-library/react';
import { ChitChat } from '@westpac/form';
import wbc from '@westpac/wbc';
import { overridesTest } from '../../../../helpers/tests/overrides-test.js';
import { nestingTest } from '../../../../helpers/tests/nesting-test.js';

overridesTest({
	name: 'form',
	overrides: ['ChitChat'],
	Component: (props) => <ChitChat {...props}>Test</ChitChat>,
});

nestingTest({
	name: 'form',
	Component: (props) => <ChitChat>{props.children}</ChitChat>,
});

function SimpleChitChat(props) {
	return (
		<GEL brand={wbc}>
			<ChitChat>{props.children}</ChitChat>
		</GEL>
	);
}

describe('ChitChat component', () => {
	test('should render ChitChat', () => {
		const { container } = render(<SimpleChitChat />);
		expect(container).toBeInTheDocument();
	});

	test('should render ChitChat component with correct text', () => {
		const { getByText } = render(<SimpleChitChat>Test ChitChat</SimpleChitChat>);
		expect(getByText(/Test ChitChat/)).toBeInTheDocument();
	});
});
