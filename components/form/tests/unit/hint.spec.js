import { GEL } from '@westpac/core';
import { render } from '@testing-library/react';
import { Hint } from '@westpac/form';
import wbc from '@westpac/wbc';
import { overridesTest } from '../../../../helpers/tests/overrides-test.js';
import { nestingTest } from '../../../../helpers/tests/nesting-test.js';

overridesTest({
	name: 'form',
	overrides: ['Hint'],
	Component: (props) => <Hint {...props} />,
});

nestingTest({
	name: 'form',
	Component: (props) => <Hint>{props.children}</Hint>,
});

function SimpleHint(props) {
	return (
		<GEL brand={wbc}>
			<Hint {...props}>{props.children}</Hint>
		</GEL>
	);
}

describe('Hint component', () => {
	test('should render Hint', () => {
		const { container } = render(<SimpleHint />);
		expect(container).toBeInTheDocument();
	});

	test('should render text child within Hint', () => {
		const { getByText } = render(<SimpleHint>Test hint</SimpleHint>);
		expect(getByText(/Test hint/)).toBeInTheDocument();
	});
});
