/** @jsx jsx */

import React, { Suspense, Fragment } from 'react';
import Select from '@arch-ui/select';

import { jsx } from '@westpac/core';
import { Cell } from '@westpac/grid';
import { VisionFilter } from '../src/components/a11y-filter';

import { data, codeExamples } from './dynamic-blocks-demos';

const options = data.map((o) => ({ label: o, value: o }));
let valueCache = new Map();
let promiseCache = new Map();

function ShowCodeBlock({ loadCodeBlock, context }) {
	let promise = promiseCache.get(loadCodeBlock);
	if (!promise) {
		promise = loadCodeBlock().then((mod) => {
			valueCache.set(loadCodeBlock, mod.default);
		});

		promiseCache.set(loadCodeBlock, promise);
	}

	let CodeBlock = valueCache.get(loadCodeBlock);
	if (!CodeBlock) {
		throw promise;
	}
	return (
		<VisionFilter>
			<CodeBlock context={context} showCode={false} showDemo={false} />
		</VisionFilter>
	);
}

const content =
	'Select a filter from the list to see this component as it would appear to someone with a colour vision impairment.';

export const VisionFilters = {
	editor: ({ value, onChange }) => {
		const currentValue = {
			codeExample: null,
			level: 'h2',
			size: 6,
			heading: 'Vision impairment demonstration',
			subText: content,
			addTableContent: true,
			editHeader: false,
			...(value || {}),
		};

		const update = (changes) =>
			onChange({
				...currentValue,
				...changes,
			});

		return (
			<Fragment>
				<Select
					isSearchable={true}
					placeholder="Select a code example"
					options={options}
					value={options.find((o) => o.value === currentValue.codeExample)}
					onChange={({ value }) => {
						update({ codeExample: value });
					}}
				/>
			</Fragment>
		);
	},
	component: ({
		codeExample,
		context,
		heading = '',
		size = 6,
		level = 'h2',
		addTableContent = true,
		subText = '',
	}) => {
		if (typeof window === 'undefined') {
			return <p>Loading...</p>;
		}

		const loadCodeBlock = codeExamples[codeExample];
		return (
			<Cell width={12}>
				<Suspense fallback={<p>Loading...</p>}>
					{loadCodeBlock && typeof window !== 'undefined' ? (
						<ShowCodeBlock loadCodeBlock={loadCodeBlock} context={context} />
					) : (
						'Example not found.'
					)}
				</Suspense>
			</Cell>
		);
	},
};
