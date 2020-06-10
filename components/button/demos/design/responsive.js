/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Button } from '@westpac/button';

import { Playground } from '../../../../website/src/components/playground/macro';
import { Title, Hr } from '../../../../helpers/demos';

export default ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Title>Medium (default) button but Extra large for MD breakpoints and wider</Title>
			<Button look="primary" size={['medium', null, null, 'xlarge']}>
				btn-xlarge-md
			</Button>
			<Hr />
			<Title>Small button but Large for MD breakpoint and wider</Title>
			<Button look="primary" size={['small', null, null, 'large']}>
				btn-small btn-large-md
			</Button>
			<Hr />
			<Title>Extra large button for XS breakpoint only</Title>
			<Button look="primary" size={['xlarge', 'medium']}>
				btn-xlarge-xs-only
			</Button>
			<Hr />
			<Title>Block button for MD or wider</Title>
			<Button look="primary" block={[null, null, null, true]}>
				btn-block-md
			</Button>
			<Hr />
			<Title>Block button for XS breakpoint only</Title>
			<Button look="primary" block={[true, false]}>
				btn-block-xs-only
			</Button>
			<Hr />
			<Title>Block and Large button for XS breakpoint only</Title>
			<Button look="primary" size={['large', 'medium']} block={[true, false]}>
				btn-large-xs-only btn-block-xs-only
			</Button>
		</Playground>
	);
};
