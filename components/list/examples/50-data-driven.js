/** @jsx jsx */

import { jsx } from '@westpac/core';
import { List, Item } from '@westpac/list';
import { GithubIcon, HouseIcon } from '@westpac/icon';
import { Fragment } from 'react';

import { Intopia } from '../../../helpers/example/components/Intopia.js';
import { Playground } from '../../../website/site/components/playground/macro';

function Example({ context }) {
	return (
		<Playground context={context}>
			<Intopia />

			<h2>Flat</h2>
			<List
				data={[
					'Styled bullet list - primary',
					'Styled bullet list - primary',
					'Styled bullet list - primary',
				]}
			/>

			<br />
			<hr />
			<br />

			<h2>Nested</h2>
			<List
				data={[
					'Styled bullet list',
					'Styled bullet list',
					'Styled bullet list',
					[
						'Styled bullet list - nested',
						'Styled bullet list - nested',
						'Styled bullet list - nested',
					],
				]}
			/>

			<br />
			<hr />
			<br />

			<h2>Nested with attributes</h2>
			<List
				data={[
					'Styled bullet list - primary',
					{
						text: 'Styled bullet list - with icon',
						type: 'icon',
						icon: GithubIcon,
					},
					'Styled bullet list - primary',
					[
						'Styled bullet list - nested',
						'Styled bullet list - nested',
						'Styled bullet list - nested',
						{
							type: 'icon',
							icon: HouseIcon,
							items: [
								'Icon list',
								<Fragment>
									Icon list <GithubIcon />
								</Fragment>,
								'Icon list',
							],
						},
					],
				]}
			/>
		</Playground>
	);
}

export default Example;
