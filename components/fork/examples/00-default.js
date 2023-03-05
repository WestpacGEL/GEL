import { GEL, jsx } from '@westpac/core';
import { Fork, Content } from '@westpac/fork';

const Wrapper = (props) => <div css={{ padding: '2rem 0' }} {...props} />;

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<h2>Default</h2>
			<Fork>
				<Content text="Fork A">
					<Wrapper>Fork A content</Wrapper>
				</Content>
				<Content text="Fork B">
					<Wrapper>Fork B content</Wrapper>
				</Content>
			</Fork>

			<h2>Look</h2>
			<h3>Hero</h3>
			<Fork look="hero">
				<Content text="Fork A">
					<Wrapper>Fork A content</Wrapper>
				</Content>
				<Content text="Fork B">
					<Wrapper>Fork B content</Wrapper>
				</Content>
			</Fork>

			<h3>Primary</h3>
			<Fork look="primary">
				<Content text="Fork A">
					<Wrapper>Fork A content</Wrapper>
				</Content>
				<Content text="Fork B">
					<Wrapper>Fork B content</Wrapper>
				</Content>
			</Fork>

			<h2>Size</h2>
			<h3>Small</h3>
			<Fork size="small">
				<Content text="Fork A">
					<Wrapper>Fork A content</Wrapper>
				</Content>
				<Content text="Fork B">
					<Wrapper>Fork B content</Wrapper>
				</Content>
			</Fork>

			<h3>Medium</h3>
			<Fork size="medium">
				<Content text="Fork A">
					<Wrapper>Fork A content</Wrapper>
				</Content>
				<Content text="Fork B">
					<Wrapper>Fork B content</Wrapper>
				</Content>
			</Fork>

			<h3>Large</h3>
			<Fork size="large">
				<Content text="Fork A">
					<Wrapper>Fork A content</Wrapper>
				</Content>
				<Content text="Fork B">
					<Wrapper>Fork B content</Wrapper>
				</Content>
			</Fork>

			<h3>Extra Large</h3>
			<Fork size="xlarge">
				<Content text="Fork A">
					<Wrapper>Fork A content</Wrapper>
				</Content>
				<Content text="Fork B">
					<Wrapper>Fork B content</Wrapper>
				</Content>
			</Fork>
		</GEL>
	);
}

export default Example;
