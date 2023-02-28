import { jsx } from '@westpac/core';
import { Badge } from '@westpac/badge';
import { Playground } from '../../../../website/src/components/playground/macro';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<p>
				<Badge look="danger" value="Danger" /> <Badge look="warning" value="Warning" />{' '}
				<Badge look="success" value="Success" /> <Badge look="info" value="Info" />{' '}
			</p>
			<p>
				<Badge look="primary" value="Primary" /> <Badge look="hero" value="Hero" />{' '}
				<Badge look="neutral" value="Neutral" /> <Badge look="faint" value="Faint" />
			</p>
		</Playground>
	);
};

export default Demo;
