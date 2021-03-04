/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Switch } from '@westpac/switch';
import { Playground } from '../../../../website/src/components/playground/macro';

const AlignWrap = (props) => <div css={{ display: 'flex', alignItems: 'center' }} {...props} />;

export default ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<AlignWrap>
				<Switch name="example-small" label="Small: 30px" size="small" />
				<Switch name="example-medium" label="Medium: 36px" size="medium" />
				<Switch name="example-large" label="Large: 42px" size="large" />
				<Switch name="example-xlarge" label="Extra large: 48px" size="xlarge" />
			</AlignWrap>
		</Playground>
	);
};
