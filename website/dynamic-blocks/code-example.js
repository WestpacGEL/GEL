/** @jsx jsx */

import { CheckboxPrimitive } from '@arch-ui/controls';
import React, { Suspense, Fragment } from 'react';
import Select from '@arch-ui/select';

import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { Cell } from '@westpac/grid';

import { data, codeExamples } from './dynamic-blocks-demos';

const options = data.map((o) => ({ label: o, value: o }));
let valueCache = new Map();
let promiseCache = new Map();

function ShowCodeBlock({ showCode, showDemo, loadCodeBlock, context }) {
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
	return <CodeBlock context={context} showCode={showCode} showDemo={false} />;
}

export const CodeExample = {
	editor: ({ value, onChange }) => {
		const currentValue = {
			codeExample: null,
			showCode: false,
			showDemo: false,
			// below are deprecated
			level: 'h2',
			size: 6,
			heading: '',
			addSubText: false,
			subText: '',
			addTableContent: false,
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
				<div css={{ display: 'flex' }}>
					<label css={{ display: 'flex', margin: '10px 20px 0 0' }}>
						<CheckboxPrimitive
							checked={currentValue.showCode}
							tabIndex="0"
							onChange={({ target }) => {
								update({ showCode: target.checked });
							}}
						/>
						<span>Show code</span>
					</label>
				</div>
			</Fragment>
		);
	},
	component: ({
		codeExample,
		showCode,
		showDemo = false,
		context,
		heading = '',
		size = 6,
		level = 'h2',
		addTableContent = false,
		subText = '',
	}) => {
		if (typeof window === 'undefined') {
			return <p>Loading...</p>;
		}
		const mq = useMediaQuery();
		const { SPACING } = useBrand();
		const loadCodeBlock = codeExamples[codeExample];
		return (
			// <Cell
			// 	width={12}
			// 	css={mq({
			// 		marginTop: [SPACING(1), null, SPACING(2)],
			// 		marginBottom: [SPACING(5), null, null, null, SPACING(8)],
			// 		height: 'auto',
			// 		':last-child': { marginBottom: 0 },
			// 	})}
			// >
			<Suspense fallback={<p>Loading...</p>}>
				{loadCodeBlock && typeof window !== 'undefined' ? (
					<ShowCodeBlock
						loadCodeBlock={loadCodeBlock}
						context={context}
						showCode={showCode}
						showDemo={showDemo}
					/>
				) : (
					'Example not found.'
				)}
			</Suspense>
			// </Cell>
		);
	},
};
