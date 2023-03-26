import { jsx } from '@westpac/core';
import { TextInputWithButton } from '@westpac/text-input';
import { Playground } from '../../../../website/src/components/playground/macro';
import { Title } from '../../../../helpers/demos';

import { UmbrellaIcon } from '@westpac/icon';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Title>Default</Title>
			<TextInputWithButton btnIcon={UmbrellaIcon} />
		</Playground>
	);
};

export default Demo;
