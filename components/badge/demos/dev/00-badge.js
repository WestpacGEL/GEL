import { jsx } from '@westpac/core';
import { Badge } from '@westpac/badge';
import { Playground } from '../../../../website/src/components/playground/macro';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<p>
				<Badge value="Default" />
			</p>
			<p>
				<Badge look="primary" value="Primary" /> <Badge look="hero" value="Hero" />{' '}
				<Badge look="neutral" value="Neutral" /> <Badge look="faint" value="Faint" />
			</p>
			<p>
				<Badge look="success" value="Success" /> <Badge look="info" value="Info" />{' '}
				<Badge look="warning" value="Warning" /> <Badge look="danger" value="Danger" />
			</p>
		</Playground>
	);
};

export default Demo;
