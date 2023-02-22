import { jsx } from '@westpac/core';
import { Button } from '@westpac/button';
import { Playground } from '../../../../website/src/components/playground/macro';
import { Title, Hr } from '../../../../helpers/demos';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Title>Block</Title>
			<Button block>Block-level button</Button>
			<Hr />
			<Title>Responsive block</Title>
			<Button block={[true, false, true, false]}>Responsive block button</Button>
			<br />
			<br />
			<Button block={[true, null, false]}>Responsive block button</Button>
		</Playground>
	);
};

export default Demo;
