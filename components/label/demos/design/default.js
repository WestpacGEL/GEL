/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Label } from '@westpac/label';
import { Playground } from '../../../../website/src/components/playground/macro';

export default ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<p>
				<Label value="Default" />
			</p>
			<p>
				<Label look="primary" value="Primary" /> <Label look="hero" value="Hero" />{' '}
				<Label look="neutral" value="Neutral" /> <Label look="faint" value="Faint" />
			</p>
			<p>
				<Label look="success" value="Success" /> <Label look="info" value="Information" />{' '}
				<Label look="warning" value="Warning" /> <Label look="danger" value="Danger" />
			</p>
		</Playground>
	);
};
