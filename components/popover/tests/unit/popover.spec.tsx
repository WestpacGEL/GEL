import { GEL } from '@westpac/core';
import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Popover } from '@westpac/popover';
import wbc from '@westpac/wbc';

import { overridesTest } from '../../../../helpers/tests/overrides-test';
import { nestingTest } from '../../../../helpers/tests/nesting-test';
import { PopoverProps } from '../../src/Popover';

const TEST_CONTENT =
	'Hello vivamus sagittis lacus vel augue laoreet rutrum faucibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
	'Nesciunt laboriosam, mollitia magnam ad magni consequuntur hic et quos optio corrupti praesentium veniam aspernatur minima aperiam ut quas, ' +
	'possimus non architecto. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut animi velit in? Suscipit nostrum itaque voluptatibus ' +
	'dolorem qui soluta nobis modi officia incidunt eos dolores atque, unde error delectus officiis.';

overridesTest({
	name: 'popover',
	// TODO: @westpac/heading attributes are not being passed
	overrides: ['Popover', 'Panel', 'Body', 'CloseBtn'],
	Component: ({ heading, content, open, ...rest }: PopoverProps) => (
		<Popover heading="Popover Heading" content={TEST_CONTENT} open={true} {...rest}>
			Click me
		</Popover>
	),
});

nestingTest({
	name: 'popover',
	Component: ({ heading, content, open, ...rest }: PopoverProps) => (
		<Popover heading="Popover Heading" content={TEST_CONTENT} open={true} {...rest}>
			Click me
		</Popover>
	),
});

// Popover specific tests
describe('Popover component', () => {
	const defaultProps = {
		content: TEST_CONTENT,
		children: 'Click me',
	};

	const WbcPopover = (props: PopoverProps) => (
		<GEL brand={wbc}>
			<Popover {...props} />
		</GEL>
	);

	it('should render the popover content when the trigger is clicked', () => {
		const { getByText } = render(<WbcPopover {...defaultProps} />);

		expect(getByText(TEST_CONTENT)).not.toBeVisible();

		const trigger = getByText(/click me/i);
		userEvent.click(trigger);

		expect(getByText(TEST_CONTENT)).toBeInTheDocument();
	});

	it('should call the onClick prop when the trigger is clicked', async () => {
		const onClick = jest.fn();
		const { getByText } = render(<WbcPopover {...defaultProps} onClick={onClick} />);

		const trigger = getByText(/click me/i);
		await userEvent.click(trigger);

		expect(onClick).toHaveBeenCalled();
	});

	it('should render the provided heading', () => {
		const heading = 'Popover heading';
		const { getByText } = render(<WbcPopover {...defaultProps} heading={heading} />);

		const headingElement = getByText(heading);
		expect(headingElement).toBeInTheDocument();
		expect(headingElement.tagName).toBe('H4');
	});
});
