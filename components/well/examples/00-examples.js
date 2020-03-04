/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Well } from '@westpac/well';

import { Intopia } from '../../../helpers/example/components/Intopia.js';
import { Playground } from '../../../website/src/components/playground/macro';

// Well tag as a component example
const WellTag = ({ children, ...rest }) => (
	<aside {...rest}>
		<span>{children}</span>
	</aside>
);

export default ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Intopia />

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
				Tag as <code>&lt;aside&gt;</code> with child <code>&lt;span&gt;</code>, rendered as a
				component
			</h3>
			<Well tag={WellTag}>Look, I'm in a well.</Well>
		</Playground>
	);
};
