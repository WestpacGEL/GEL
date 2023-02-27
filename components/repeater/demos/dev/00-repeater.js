import { jsx } from '@westpac/core';
import { Repeater } from '@westpac/repeater';
import { Playground } from '../../../../website/src/components/playground/macro';

const Repeat = (props) => {
	return (
		<div css={{ marginBottom: '1.875rem' }} {...props}>
			Repeater
		</div>
	);
};

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Repeater>
				<Repeat />
			</Repeater>
		</Playground>
	);
};

export default Demo;
