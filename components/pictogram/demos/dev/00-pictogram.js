import { jsx } from '@westpac/core';
import { DesktopComputerPictogram } from '@westpac/pictogram';
import { Playground } from '../../../../website/src/components/playground/macro';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<DesktopComputerPictogram />
		</Playground>
	);
};

export default Demo;
