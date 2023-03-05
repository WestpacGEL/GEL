import { jsx } from '@westpac/core';
import { Button } from '@westpac/button';
import { Playground } from '../../../../website/src/components/playground/macro';
import { Title, Hr } from '../../../../helpers/demos';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Title>Default</Title>
			<Button>Default standard</Button> <Button soft>Default soft</Button>
			<Hr />
			<Title>Standard</Title>
			<Button look="primary">Primary standard</Button> <Button look="hero">Hero standard</Button>{' '}
			<Button look="faint">Faint standard</Button> <Button look="link">Link</Button>{' '}
			<Button look="unstyled">Unstyled</Button>
			<Hr />
			<Title>Soft</Title>
			<Button look="primary" soft>
				Primary soft
			</Button>{' '}
			<Button look="hero" soft>
				Hero soft
			</Button>{' '}
			<Button look="faint" soft>
				Faint soft
			</Button>
		</Playground>
	);
};

export default Demo;
