/** @jsx jsx */
import React, { Suspense, Fragment } from 'react';
import { jsx, useBrand } from '@westpac/core';
import { Body } from '@westpac/body';
import { Heading } from '@westpac/heading';
import { useRouter } from 'next/router';
import Select from '@arch-ui/select';
import { FieldContainer, FieldLabel, FieldInput } from '@arch-ui/fields';
import { CheckboxPrimitive } from '@arch-ui/controls';
import { Input } from '@arch-ui/input';
import preval from 'preval.macro';
import importCodeExamples from '../utils/babel-dynamic-code-block-import.macro';
import { VisionFilter } from '../src/components/a11y-filter';
import { Container, Grid, Cell } from '@westpac/grid';
import { blocksContainerStyle, blocksGridStyle } from '../src/components/_utils';

let data = preval`
const fs = require('fs');
const path = require('path');
const DEMO_FOLDER = 'demos';

let componentsDir = path.join(__dirname, '..', '..', 'components');
let packageDirectories = fs.readdirSync(componentsDir);
let examples = [];

function findDemos(dir, packageName) {
	fs.readdirSync(dir).forEach((file) => {
	  const fullPath = path.join(dir, file);
	  if (fs.lstatSync(fullPath).isDirectory()) {
		findDemos(fullPath, packageName);
	  } else if (fs.lstatSync(fullPath).isFile() && path.extname(fullPath) === '.js' && !file.startsWith('.') && !file.startsWith('_')) {
		const trimPath = fullPath.match(/(demos.*)/)[1];
		examples.push(path.join(packageName, trimPath));
	  }
	});
}

packageDirectories.forEach(pkg => {
	const pkgFile = path.join(componentsDir, pkg, 'package.json');
	if (fs.existsSync(pkgFile)) {
		const packageJSON = require(pkgFile);
		const packageName = packageJSON.name;
		const demoPath = path.join(componentsDir, pkg, DEMO_FOLDER);
		if(fs.existsSync(demoPath) && fs.lstatSync(demoPath).isDirectory()) {
			findDemos(demoPath, packageName);
		}
	}
});

module.exports = examples;
`;

const options = data.map(o => ({ label: o, value: o }));
const codeExamples = importCodeExamples(data);
let valueCache = new Map();
let promiseCache = new Map();

const levelOptions = [
	{ label: 'H1', value: 'h1' },
	{ label: 'H2', value: 'h2' },
	{ label: 'H3', value: 'h3' },
	{ label: 'H4', value: 'h4' },
	{ label: 'H5', value: 'h5' },
	{ label: 'H6', value: 'h6' },
];

const sizeOptions = [
	{ label: '1', value: 1 },
	{ label: '2', value: 2 },
	{ label: '3', value: 3 },
	{ label: '4', value: 4 },
	{ label: '5', value: 5 },
	{ label: '6', value: 6 },
	{ label: '7', value: 7 },
	{ label: '8', value: 8 },
	{ label: '9', value: 9 },
];

function ShowCodeBlock({ loadCodeBlock, context }) {
	let promise = promiseCache.get(loadCodeBlock);
	if (!promise) {
		promise = loadCodeBlock().then(mod => {
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
	'This tool allows you to see as others do. Select a filter from the list to see this component as it would appear to someone with a vision impairment.';

export const VisionFilters = {
	editor: ({ value, onChange }) => {
		const currentValue = {
			codeExample: null,
			level: 'h2',
			size: 5,
			heading: 'Colour impairments',
			subText: content,
			addTableContent: true,
			editHeader: false,
			...(value || {}),
		};

		const update = changes =>
			onChange({
				...currentValue,
				...changes,
			});

		return (
			<Fragment>
				<FieldContainer>
					<label css={{ display: 'flex', margin: '10px 20px 0 0' }}>
						<CheckboxPrimitive
							checked={currentValue.editHeader}
							tabIndex="0"
							onChange={({ target }) => update({ editHeader: target.checked })}
						/>
						<span>Edit header</span>
					</label>
				</FieldContainer>
				{currentValue.editHeader && (
					<Fragment>
						<FieldContainer>
							<FieldLabel htmlFor={'heading-text'} field={{ label: 'Heading Text', config: {} }} />
							<FieldInput>
								<Input
									id="heading-text"
									value={currentValue.heading}
									onChange={e => update({ heading: e.target.value })}
								/>
							</FieldInput>
						</FieldContainer>
						<FieldContainer>
							<FieldLabel
								htmlFor={'heading-level'}
								field={{ label: 'Heading Level', config: {} }}
							/>
							<Select
								id="heading-level"
								placeholder="Select a heading level"
								options={levelOptions}
								value={levelOptions.find(o => o.value === currentValue.level)}
								onChange={({ value }) => update({ level: value })}
							/>
						</FieldContainer>
						<FieldContainer>
							<FieldLabel htmlFor={'heading-size'} field={{ label: 'Heading Size', config: {} }} />
							<Select
								id="heading-size"
								placeholder="Select a heading size"
								options={sizeOptions}
								value={sizeOptions.find(o => o.value === currentValue.size)}
								onChange={({ value }) => update({ size: value })}
							/>
						</FieldContainer>
						<FieldContainer>
							<label css={{ display: 'flex', margin: '10px 20px 0 0' }}>
								<CheckboxPrimitive
									checked={currentValue.addTableContent}
									tabIndex="0"
									onChange={({ target }) => update({ addTableContent: target.checked })}
								/>
								<span>Include in table of contents</span>
							</label>
						</FieldContainer>
						<FieldContainer>
							<FieldLabel htmlFor={'heading-subtext'} field={{ label: 'Sub Text', config: {} }} />
							<Input
								id={'heading-subtext'}
								isMultiline
								value={currentValue.subText}
								onChange={e => update({ subText: e.target.value })}
							/>
						</FieldContainer>
					</Fragment>
				)}
				<Select
					isSearchable={true}
					placeholder="Select a code example"
					options={options}
					value={options.find(o => o.value === currentValue.codeExample)}
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
		size = 5,
		level = 'h2',
		addTableContent = true,
		subText = '',
	}) => {
		if (typeof window === 'undefined') {
			return <p>Loading...</p>;
		}

		const id = heading.replace(/ /g, '-').toLowerCase();
		const loadCodeBlock = codeExamples[codeExample];
		const router = useRouter();
		const href = '/accessibility';
		const { SPACING } = useBrand();

		const handleClick = e => {
			e.preventDefault();
			const brandName = router.query.b || '';
			router.push(`${href}?b=${brandName}`);
		};

		return (
			<Container css={blocksContainerStyle}>
				<Grid columns={12} css={blocksGridStyle}>
					<Cell width={[12, 12, 12, 10, 10]} left={[1, 1, 1, 2, 2]}>
						<Heading
							id={id}
							tabIndex="-1"
							tag={level}
							size={size}
							{...(addTableContent && { 'data-toc': true })}
							overrides={{
								Heading: {
									styles: styles => ({
										...styles,
										scrollMarginTop: '75px',
									}),
								},
							}}
						>
							{heading}
						</Heading>
						<Body>
							<p css={{ margin: `${SPACING(4)} 0 !important` }}>
								{subText} Read more about these vision impairments on our{' '}
								<a href={href} onClick={handleClick}>
									Accessibility
								</a>{' '}
								page.
							</p>
						</Body>
						<Suspense fallback={<p>Loading...</p>}>
							{loadCodeBlock && typeof window !== 'undefined' ? (
								<ShowCodeBlock loadCodeBlock={loadCodeBlock} context={context} />
							) : (
								'Example not found.'
							)}
						</Suspense>
					</Cell>
				</Grid>
			</Container>
		);
	},
};
