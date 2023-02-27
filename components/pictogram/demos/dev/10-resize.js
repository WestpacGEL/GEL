import { jsx } from '@westpac/core';
import { DriversLicencePictogram } from '@westpac/pictogram';
import { Playground } from '../../../../website/src/components/playground/macro';
import { Title, Hr } from '../../../../helpers/demos';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Title>Resize by width</Title>
			<DriversLicencePictogram width={100} />

			<Title>Responsive width resize</Title>
			<DriversLicencePictogram width={[75, 100, 125, 150]} />

			<Hr />

			<Title>Resize by height</Title>
			<DriversLicencePictogram height={100} />

			<Title>Responsive height resize</Title>
			<DriversLicencePictogram height={[75, 100, 125, 150]} />
		</Playground>
	);
};

export default Demo;
