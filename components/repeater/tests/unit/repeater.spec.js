import { useId } from 'react';
import { GEL } from '@westpac/core';
import { render } from '@testing-library/react';
import { Repeater } from '@westpac/repeater';
import wbc from '@westpac/wbc';

// Component specific tests
describe('Repeater component', () => {
	const Repeat = (props) => {
		const id = useId();
		return (
			<div id={id} css={{ marginBottom: '2rem' }} {...props}>
				Repeater
			</div>
		);
	};
	const SimpleRepeater = () => (
		<GEL brand={wbc}>
			<Repeater>
				<Repeat />
			</Repeater>
		</GEL>
	);

	test('It should render Simple Repeater', () => {
		global.URL = {
			createObjectURL: () => new Blob(),
			revokeObjectURL: () => {},
		};
		const { container } = render(<SimpleRepeater />);
		expect(container).toBeInTheDocument();
	});
});
