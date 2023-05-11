import { render } from '@testing-library/react';
import { GEL } from '@westpac/core';
import wbc from '@westpac/wbc';
import { PanelFooter } from '@westpac/form-pod';

import { overridesTest } from '../../../../helpers/tests/overrides-test';
import { nestingTest } from '../../../../helpers/tests/nesting-test';
import { FormPodPanelFooterProps } from '../../src/FormPodPanelFooter';

overridesTest({
	name: 'form-pod',
	overrides: ['Footer', 'FooterItem'],
	Component: (props: any) => {
		const LeftItem = <div>Left Item</div>;
		const RightItem = <div>Right Item</div>;
		return <PanelFooter left={LeftItem} right={RightItem} {...props} />;
	},
});

nestingTest({
	name: 'form-pod',
	Component: (props: any) => <PanelFooter {...props} />,
});

const SimpleFormPodPanelFooter = (props: any) => (
	<GEL brand={wbc}>
		<PanelFooter {...props} />
	</GEL>
);

describe('FormPodPanelFooter component', () => {
	const defaultProps: FormPodPanelFooterProps = {
		left: <div>Left Component</div>,
		right: <div>Right Component</div>,
	};

	it('renders left and right components', () => {
		const { getByText } = render(<SimpleFormPodPanelFooter {...defaultProps} />);

		expect(getByText(/left component/i)).toBeInTheDocument();
		expect(getByText(/right component/i)).toBeInTheDocument();
	});
});
