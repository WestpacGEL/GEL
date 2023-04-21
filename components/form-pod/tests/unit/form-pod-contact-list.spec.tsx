import { render } from '@testing-library/react';
import { GEL } from '@westpac/core';
import wbc from '@westpac/wbc';
import { ContactList } from '@westpac/form-pod';

import { overridesTest } from '../../../../helpers/tests/overrides-test';
import { nestingTest } from '../../../../helpers/tests/nesting-test';
import { FormPodContactListProps } from '../../src/FormPodContactList';

overridesTest({
	name: 'form-pod',
	overrides: ['ContactList', 'ContactListItem', 'ItemLink', 'ItemText'],
	Component: (props: any) => {
		const contactItems = [
			{
				icon: () => <span data-testid="test-icon">Test Icon</span>,
				text: '1300 888 888',
				url: 'tel:1300888888',
				onClick: () => {},
			},
		];

		return <ContactList items={contactItems} {...props} />;
	},
});

nestingTest({
	name: 'form-pod',
	Component: (props: any) => <ContactList {...props} />,
});

const SimpleFormPodContactList = (props: any) => (
	<GEL brand={wbc}>
		<ContactList {...props} />
	</GEL>
);

describe('FormPodContactList component', () => {
	const mockProps: FormPodContactListProps = {
		items: [
			{
				icon: jest.fn(),
				iconColor: '#ffffff',
				text: 'Contact 1',
				url: 'https://example.com/contact1',
				onClick: jest.fn(),
			},
			{
				icon: jest.fn(),
				iconColor: '#000000',
				text: 'Contact 2',
				url: 'https://example.com/contact2',
				onClick: jest.fn(),
			},
		],
	};

	it('should render contact items with correct text', () => {
		const { getAllByText } = render(<SimpleFormPodContactList {...mockProps} />);
		const contact1Text = getAllByText(/contact 1/i)[0];
		const contact2Text = getAllByText(/contact 2/i)[0];
		expect(contact1Text).toBeInTheDocument();
		expect(contact2Text).toBeInTheDocument();
	});

	it('should render contact items with correct links', () => {
		const { getAllByRole } = render(<SimpleFormPodContactList {...mockProps} />);
		const contact1Link = getAllByRole('link', { name: /contact 1/i })[0];
		const contact2Link = getAllByRole('link', { name: /contact 2/i })[0];
		expect(contact1Link).toHaveAttribute('href', 'https://example.com/contact1');
		expect(contact2Link).toHaveAttribute('href', 'https://example.com/contact2');
	});

	it('should call onClick handler when a contact item is clicked', () => {
		const { getAllByRole } = render(<SimpleFormPodContactList {...mockProps} />);
		const contact1Link = getAllByRole('link', { name: /contact 1/i })[0];
		const contact2Link = getAllByRole('link', { name: /contact 2/i })[0];

		contact1Link.click();
		contact2Link.click();

		if (mockProps.items) {
			expect(mockProps.items[0].onClick).toHaveBeenCalled();
			expect(mockProps.items[1].onClick).toHaveBeenCalled();
		}
	});
});
