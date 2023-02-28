import { jsx } from '@westpac/core';
import { Button } from '@westpac/button';
import { Playground } from '../../../../website/src/components/playground/macro';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
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
