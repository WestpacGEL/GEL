import { GEL } from '@westpac/core';
import { render } from '@testing-library/react';
import { FormSectionImg } from '@westpac/form';
import wbc from '@westpac/wbc';
import { overridesTest } from '../../../../helpers/tests/overrides-test.js';
import { nestingTest } from '../../../../helpers/tests/nesting-test.js';

overridesTest({
	name: 'form',
	overrides: ['FormSectionImg'],
	Component: (props) => <FormSectionImg {...props} />,
});

nestingTest({
	name: 'form',
	Component: () => <FormSectionImg src="test" />,
});

function SimpleFormSectionImg(props) {
	return (
		<GEL brand={wbc}>
			<FormSectionImg {...props} />
		</GEL>
	);
}

describe('FormSectionImg component', () => {
	// Below text works by searching for alt-text for img
	test('should render FormSectionImg', () => {
		const { getByAltText } = render(<SimpleFormSectionImg src="test" />);
		expect(getByAltText(/Form section image/)).toBeInTheDocument();
	});

	test('should override default alt text', () => {
		const { getByRole } = render(<SimpleFormSectionImg alt="test override" src="test" />);
		const img = getByRole('img');
		expect(img).not.toHaveAttribute('alt', 'Form section img');
		expect(img).toHaveAttribute('alt', 'test override');
	});

	test('should have correct src passed in', () => {
		const { getByRole } = render(<SimpleFormSectionImg src="test/src" />);
		expect(getByRole('img')).toHaveAttribute('src', 'test/src');
	});
});
