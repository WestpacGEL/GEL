import { GEL } from '@westpac/core';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ProgressBar } from '@westpac/progress-bar';
import wbc from '@westpac/wbc';

import { overridesTest } from '../../../../helpers/tests/overrides-test';
import { nestingTest } from '../../../../helpers/tests/nesting-test';
import { ProgressBarProps } from '../../src/ProgressBar';

// TODO: add changeset

overridesTest({
	name: 'progress-bar',
	overrides: ['ProgressBar', 'Bar', 'Text'],
	Component: ({ value, ...rest }: ProgressBarProps) => <ProgressBar value={20} {...rest} />,
});

nestingTest({
	name: 'progress-bar',
	Component: ({ value, ...rest }: ProgressBarProps) => <ProgressBar value={20} {...rest} />,
});

describe('ProgressBar component', () => {
	const WBCProgressBar = (props: ProgressBarProps) => (
		<GEL brand={wbc}>
			<ProgressBar {...props} />
		</GEL>
	);

	it('renders progress bar with default props', () => {
		const { container } = render(<WBCProgressBar />);
		expect(container).toBeInTheDocument();
	});

	it('renders progress bar with custom props', () => {
		const customProps: ProgressBarProps = {
			value: 75,
			look: 'skinny',
			noLabel: true,
		};

		const { container, queryByText } = render(<WBCProgressBar {...customProps} />);
		expect(container).toBeInTheDocument();
		expect(queryByText(`${customProps.value}%`)).not.toBeInTheDocument();
	});

	it('renders progress bar with label', () => {
		const customProps: ProgressBarProps = {
			value: 50,
		};

		const { queryByText } = render(<WBCProgressBar {...customProps} />);
		expect(queryByText(`${customProps.value}%`)).toBeInTheDocument();
	});
});
