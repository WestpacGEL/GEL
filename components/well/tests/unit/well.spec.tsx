import { GEL } from '@westpac/core';
import { render } from '@testing-library/react';
import { Well } from '@westpac/well';
import wbc from '@westpac/wbc';

import { overridesTest } from '../../../../helpers/tests/overrides-test';
import { nestingTest } from '../../../../helpers/tests/nesting-test';
import { WellProps } from '../../src/Well';

overridesTest({
	name: 'well',
	overrides: ['Well'],
	Component: ({ tag, ...rest }: WellProps) => (
		<Well tag="div" {...rest}>
			Test Well
		</Well>
	),
});

nestingTest({
	name: 'well',
	Component: ({ tag, ...rest }: WellProps) => (
		<Well tag="div" {...rest}>
			Test Well
		</Well>
	),
});

describe('Well component', () => {
	const WBCWell = (props: WellProps) => (
		<GEL brand={wbc}>
			<Well {...props} />
		</GEL>
	);

	const defaultProps: WellProps = {
		children: 'Test Well',
		tag: 'div',
	};

	it('renders the Well component with default props', () => {
		const { getByText } = render(<WBCWell {...defaultProps} />);
		expect(getByText(/Test Well/i)).toBeInTheDocument();
	});
});
