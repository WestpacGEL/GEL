import { jsx } from '@westpac/core';
import { MastercardAcceptedSymbol } from '@westpac/symbol';
import { Playground } from '../../../../website/src/components/playground/macro';
import { Title, Hr } from '../../../../helpers/demos';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Title>Resize by width</Title>
			<MastercardAcceptedSymbol width={100} />

			<Title>Responsive width resize</Title>
			<MastercardAcceptedSymbol width={[100, 150, 200, 250]} />

			<Hr />

			<Title>Resize by height</Title>
			<MastercardAcceptedSymbol height={100} />

			<Title>Responsive height resize</Title>
			<MastercardAcceptedSymbol height={[100, 150, 200, 250]} />
		</Playground>
	);
};

export default Demo;
