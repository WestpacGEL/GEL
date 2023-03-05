import { jsx } from '@westpac/core';
import { Button } from '@westpac/button';
import { ArrowLeftIcon, ArrowRightIcon } from '@westpac/icon';
import { Playground } from '../../../../website/src/components/playground/macro';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Button iconBefore={ArrowLeftIcon}>Icon before</Button>{' '}
			<Button iconAfter={ArrowRightIcon}>Icon after</Button>
		</Playground>
	);
};

export default Demo;
