import { jsx } from '@westpac/core';
import { Switch } from '@westpac/switch';
import { Playground } from '../../../../website/src/components/playground/macro';
import { Title } from '../../../../helpers/demos';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Title>Sizes</Title>
			<Switch name="example-small" label="Small 30px" size="small" />
			<br />
			<br />
			<Switch name="example-medium" label="Medium 36px" size="medium" />
			<br />
			<br />
			<Switch name="example-large" label="Large 42px" size="large" />
			<br />
			<br />
			<Switch name="example-xlarge" label="X Large 48px" size="xlarge" />
			<Title>Reponsive sizing</Title>
			<Switch
				name="example-responsive-2"
				label="Small but Extra large for LG breakpoint"
				size={['small', null, 'xlarge']}
				block
			/>
			<br />
			<Switch
				name="example-responsive-4"
				label="Small for LG breakpoint only"
				size={['medium', null, 'small', 'medium']}
				block
			/>
		</Playground>
	);
};

export default Demo;
