import { jsx } from '@westpac/core';
import { WalkIcon, AndroidIcon, FaceHappyIcon, HeadsetIcon, WatchIcon } from '@westpac/icon';
import { Playground } from '../../../../website/src/components/playground/macro';
import { Title } from '../../../../helpers/demos';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Title>All sizes</Title>
			<FaceHappyIcon size="xsmall" /> <WalkIcon size="small" /> <WatchIcon size="medium" />{' '}
			<HeadsetIcon size="large" /> <AndroidIcon size="xlarge" />
			<Title>Responsive</Title>
			<AndroidIcon size={['small', 'medium', 'large', 'xlarge']} />
		</Playground>
	);
};

export default Demo;
