/** @jsx jsx */

import { jsx } from '@westpac/core';
import { SkipLink } from '@westpac/a11y';
import { Playground } from '../../../../website/src/components/playground/macro';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<p>
				<em>
					Note: The link found below this message is visually hidden until focused, but will be
					announced by screen readers
				</em>
			</p>
			<SkipLink href="#content">This is screen reader only text (visible when focused)</SkipLink>
		</Playground>
	);
};

export default Demo;
