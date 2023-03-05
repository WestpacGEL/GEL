import { jsx } from '@westpac/core';
import { ButtonDropdown, Heading } from '@westpac/button-dropdown';
import { Playground } from '../../../../website/src/components/playground/macro';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<ButtonDropdown text="Default dropdown" look="primary" soft>
				<p>Example dropdown content...</p>
			</ButtonDropdown>
			<br />
			<br />
			<ButtonDropdown text="Dropdown with headings" look="primary" soft>
				<Heading>Dropdown heading #1</Heading>
				<p>Example dropdown content...</p>
				<Heading>Dropdown heading #2</Heading>
				<p>Example dropdown content...</p>
			</ButtonDropdown>{' '}
		</Playground>
	);
};

export default Demo;
