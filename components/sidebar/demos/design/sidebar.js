import { jsx } from '@westpac/core';
import { Sidebar } from '@westpac/sidebar';
import { Playground } from '../../../../website/src/components/playground/macro';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Sidebar />
		</Playground>
	);
};

export default Demo;
