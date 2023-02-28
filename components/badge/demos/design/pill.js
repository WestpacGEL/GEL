import { jsx } from '@westpac/core';
import { Badge } from '@westpac/badge';
import { Playground } from '../../../../website/src/components/playground/macro';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<p>
				<Badge look="danger" value="88" type="pill" />{' '}
				<Badge look="warning" value="88" type="pill" />{' '}
				<Badge look="success" value="88" type="pill" /> <Badge look="info" value="88" type="pill" />{' '}
			</p>
			<p>
				<Badge look="primary" value="88" type="pill" /> <Badge look="hero" value="88" type="pill" />{' '}
				<Badge look="neutral" value="88" type="pill" />{' '}
				<Badge look="faint" value="88" type="pill" />
			</p>
		</Playground>
	);
};

export default Demo;
