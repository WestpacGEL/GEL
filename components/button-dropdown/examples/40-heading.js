import { GEL, jsx } from '@westpac/core';
import { ButtonDropdown, Heading } from '@westpac/button-dropdown';

// Heading tag as a component example
const HeadingTag = ({ children, ...rest }) => (
	<h2 {...rest}>
		<span>{children}</span>
	</h2>
);

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<h2>Default heading</h2>

			<h3>Single heading</h3>
			<ButtonDropdown text="Default Dropdown">
				<Heading>Dropdown heading</Heading>
				<p>Example dropdown content...</p>
			</ButtonDropdown>

			<h3>Multiple headings</h3>
			<ButtonDropdown text="Default Dropdown">
				<Heading>Dropdown heading #1</Heading>
				<p>Example dropdown content...</p>
				<Heading>Dropdown heading #2</Heading>
				<p>Example dropdown content...</p>
			</ButtonDropdown>

			<hr />

			<h2>Custom heading tag</h2>

			<h3>
				Tag as <code>&lt;h4&gt;</code>
			</h3>
			<ButtonDropdown text="Default Dropdown">
				<Heading tag="h4">Dropdown heading</Heading>
				<p>Example dropdown content...</p>
			</ButtonDropdown>

			<h3>
				Tag as <code>&lt;h2&gt;</code> with child <code>&lt;span&gt;</code>, passed as a component
			</h3>
			<ButtonDropdown text="Default Dropdown">
				<Heading tag={HeadingTag}>Dropdown heading</Heading>
				<p>Example dropdown content...</p>
			</ButtonDropdown>
		</GEL>
	);
}

export default Example;
