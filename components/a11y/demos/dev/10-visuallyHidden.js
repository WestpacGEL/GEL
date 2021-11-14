/** @jsx jsx */

import { jsx } from '@westpac/core';
import { VisuallyHidden } from '@westpac/a11y';
import { Playground } from '../../../../website/src/components/playground/macro';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<p>
				<em>
					Note: The text found below this message is visually hidden, but will be announced by
					screen readers
				</em>
			</p>
			<VisuallyHidden>This is screen reader only text</VisuallyHidden>
		</Playground>
	);
};

export default Demo;
