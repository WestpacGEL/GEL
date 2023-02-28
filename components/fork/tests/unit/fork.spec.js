import { GEL } from '@westpac/core';
import { render } from '@testing-library/react';
import { Fork, Content } from '@westpac/fork';
import wbc from '@westpac/wbc';

// Component specific tests
describe('Fork component', () => {
	const Wrapper = (props) => <div css={{ padding: '2rem 0' }} {...props} />;
	const SimpleFork = () => (
		<GEL brand={wbc}>
			<Fork>
				<Content text="Fork A">
					<Wrapper>Fork A content</Wrapper>
				</Content>
				<Content text="Fork B">
					<Wrapper>Fork B content</Wrapper>
				</Content>
			</Fork>
		</GEL>
	);

	test('It should render Fork', () => {
		render(<SimpleFork />);
	});
});
