/** @jsx jsx */

import { jsx } from '@westpac/core';
import { VisuallyHidden } from '@westpac/a11y';
import { Playground } from '../../../../website/src/components/playground/macro';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<h2>Screen reader only text below</h2>
			<VisuallyHidden>This is screen reader only text</VisuallyHidden>
		</Playground>
	);
};

export default Demo;
