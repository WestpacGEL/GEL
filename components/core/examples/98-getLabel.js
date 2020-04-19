/** @jsx jsx */

import { GEL, jsx, getLabel } from '@westpac/core';
import { createElement } from 'react';
import { Code } from './_utils';

import { Intopia } from '../../../helpers/example/components/Intopia.js';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<Intopia ignore />
			<h2>Labels with strings</h2>
			<Code>{`getLabel('prefix', { look: 'primary', label: 'new label' })`}</Code>
			=>
			<Code>
				{JSON.stringify(
					getLabel('prefix', { look: 'primary', label: '1brand new label.with.dots' })
				)}
			</Code>
			<hr />
			<h2>Labels with booleans</h2>
			<Code>{`getLabel('prefix', { dismissable: true, soft: true })`}</Code>
			=>
			<Code>{JSON.stringify(getLabel('prefix', { dismissable: true, soft: true }))}</Code>
			<hr />
			<h2>Labels with nodes</h2>
			<Code>{`getLabel('prefix',{ icon: function IconWorld() { return createElement('div', null, 'Hello world') } })`}</Code>
			=>
			<Code>
				{JSON.stringify(
					getLabel('prefix', {
						icon: function IconWorld() {
							return createElement('div', null, 'Hello world');
						},
					})
				)}
			</Code>
		</GEL>
	);
}

export default Example;
