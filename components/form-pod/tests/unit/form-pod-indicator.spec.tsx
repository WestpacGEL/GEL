import { render } from '@testing-library/react';
import { GEL } from '@westpac/core';
import wbc from '@westpac/wbc';
import { Indicator } from '@westpac/form-pod';

import { overridesTest } from '../../../../helpers/tests/overrides-test';
import { nestingTest } from '../../../../helpers/tests/nesting-test';
import { FormPodIndicatorProps } from '../../src/FormPodIndicator';

overridesTest({
	name: 'form-pod',
	overrides: ['Indicator', 'IndicatorText', 'IndicatorIcon'],
	Component: (props: any) => {
		const TestIcon = () => <svg data-testid="test-icon" />;
		return <Indicator icon={TestIcon} {...props} />;
	},
});

nestingTest({
	name: 'form-pod',
	Component: (props: any) => <Indicator {...props} />,
});

const SimpleFormPodIndicator = (props: any) => (
	<GEL brand={wbc}>
		<Indicator {...props} />
	</GEL>
);

describe('FormPodIndicator component', () => {
	const defaultProps: FormPodIndicatorProps = {
		text: 'Saving',
	};

	it('renders default text', () => {
		const { getByText } = render(<SimpleFormPodIndicator {...defaultProps} />);
		expect(getByText(/saving/i)).toBeInTheDocument();
	});

	it('renders custom text', () => {
		const { getByText } = render(<SimpleFormPodIndicator text="Submitting" />);
		expect(getByText(/submitting/i)).toBeInTheDocument();
	});

	it('renders custom icon', () => {
		const CustomIcon = () => <svg data-testid="custom-icon" />;
		const { getByTestId } = render(<SimpleFormPodIndicator icon={CustomIcon} {...defaultProps} />);
		expect(getByTestId(/custom-icon/i)).toBeInTheDocument();
	});

	it('applies custom styles', () => {
		const customStyles = {
			backgroundColor: 'red',
		};

		const { getByTestId } = render(
			<SimpleFormPodIndicator
				{...defaultProps}
				data-testid="form-pod-indicator"
				overrides={{ Indicator: { styles: () => customStyles } }}
			/>
		);

		expect(getByTestId('form-pod-indicator')).toHaveStyle('background-color: red');
	});
});
