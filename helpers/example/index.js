import React from 'react';
import ReactDom from 'react-dom';

const examples = process.env.EXAMPLES;
const packageName = process.env.PACKAGE_NAME;

const Example = ({ filename }) => {
	const Component = require(`../../packages/${packageName}/examples/${filename}`).default;
	return (
		<Component />
	);
};

const App = () => (
	<div>
		<h1>Examples</h1>
		<ul>
			{examples.map(eg => (
				<li key={eg.absolutePath}>{eg.filename}</li>
			))}
		</ul>

		<div>
			<Example {...examples[0]} />
		</div>

	</div>
);

ReactDom.render(
	<App />,
	document.getElementById('root'),
);
