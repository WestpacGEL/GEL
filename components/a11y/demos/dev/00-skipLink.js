/** @jsx jsx */

import { jsx } from '@westpac/core';
import { SkipLink } from '@westpac/a11y';
import { Playground } from '../../../../website/src/components/playground/macro';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<h2>Screen reader skip link</h2>
			<p>Note: The example link below is visibility hidden until focused.</p>
			<SkipLink href="#content">This is screen reader only text (visible when focused)</SkipLink>
		</Playground>
	);
};

export default Demo;
