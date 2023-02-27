import { jsx } from '@westpac/core';
import { Button } from '@westpac/button';
import { Playground } from '../../../../website/src/components/playground/macro';
import { Title, Hr } from '../../../../helpers/demos';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Title>Sizes</Title>
			<Button size="xlarge">Extra large: 48px</Button> <Button size="large">Large: 42px</Button>{' '}
			<Button size="medium">Medium (default): 36px</Button>{' '}
			<Button size="small">Small: 30px</Button>
			<Hr />
			<Title>Responsive sizing</Title>
			<Button size={['small', 'medium', 'large', 'xlarge']}>Responsive size</Button>
			<br />
			<br />
			<Button size={['small', null, 'xlarge']}>Responsive size</Button>
		</Playground>
	);
};

export default Demo;
