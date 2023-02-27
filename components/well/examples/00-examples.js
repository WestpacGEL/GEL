import { GEL, jsx } from '@westpac/core';
import { Well } from '@westpac/well';
import { blenderWell } from '../src/overrides/well';

// Well tag as a component example
const WellTag = ({ children, ...rest }) => (
	<aside {...rest}>
		<span>{children}</span>
	</aside>
);

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<h2>Default</h2>

			<h3>Default</h3>
			<Well>Look, I'm in a well.</Well>

			<h3>Nested</h3>
			<Well>
				I am outside
				<Well>I am inside</Well>
			</Well>

			<hr />

			<h2>Custom tag</h2>

			<h3>
				Tag as <code>&lt;article&gt;</code>
			</h3>
			<Well tag="article">Look, I'm in a well.</Well>

			<h3>
				Nested tag as <code>&lt;section&gt;</code>
			</h3>
			<Well tag="section">
				I am outside
				<Well>I am inside</Well>
			</Well>

			<h3>
				Tag as <code>&lt;aside&gt;</code> with child <code>&lt;span&gt;</code>, passed as a
				component
			</h3>
			<Well tag={WellTag}>Look, I'm in a well.</Well>
		</GEL>
	);
}

export default Example;
