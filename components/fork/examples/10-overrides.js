import { GEL, jsx } from '@westpac/core';
import { Fork, Content } from '@westpac/fork';

const Wrapper = (props) => <div css={{ padding: '2rem 0' }} {...props} />;

function Example({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/fork'] = {
		ForkContent: {
			styles: (styles) => ({
				...styles,
				marginTop: '1rem',
				border: '2px solid red',
			}),
		},
	};
	return (
		<GEL brand={overridesWithTokens}>
			<h2>With overrides applied</h2>
			<Fork>
				<Content text="Fork A">
					<Wrapper>Fork A content</Wrapper>
				</Content>
				<Content text="Fork B">
					<Wrapper>Fork B content</Wrapper>
				</Content>
			</Fork>

			<h2>With overrides and component overrides</h2>
			<Fork
				overrides={{
					ForkContent: {
						styles: (styles) => ({
							...styles,
							marginTop: '1rem',
							border: '2px dashed palevioletred',
						}),
					},
				}}
			>
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
