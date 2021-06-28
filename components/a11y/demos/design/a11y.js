/** @jsx jsx */

import { jsx } from '@westpac/core';
import { VisuallyHidden, SkipLink } from '@westpac/a11y';
import { Playground } from '../../../../website/src/components/playground/macro';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<VisuallyHidden>This is screen reader only text</VisuallyHidden>
			<SkipLink>This is screen reader only text (visible when foccused)</SkipLink>
		</Playground>
	);
};

export default Demo;
