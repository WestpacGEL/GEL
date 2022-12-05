/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Fragment, useEffect, useState } from 'react';
import { FieldContainer, FieldLabel, FieldInput } from '@arch-ui/fields';
import { LiveProvider, LiveEditor } from 'react-live';
import { Input } from '@arch-ui/input';
import { Cell } from '@westpac/grid';

import editorTheme from '../src/components/playground/theme';

export const CodeSnippet = {
	editor: ({ value, onChange }) => {
		const [code, setCode] = useState(value.code);

		useEffect(() => {
			onChange({
				code,
			});
		}, [code, onChange]);

		return (
			<Fragment>
				<FieldContainer>
					<FieldLabel htmlFor={'code-snippet'} field={{ label: 'Code snippet', config: {} }} />
					<FieldInput>
						<Input
							id={'code-snippet'}
							isMultiline
							value={code}
							onChange={(e) => setCode(e.target.value)}
						/>
					</FieldInput>
				</FieldContainer>
			</Fragment>
		);
	},

	component: ({ code }) => {
		return (
			<Cell width={12}>
				<LiveProvider code={code} theme={editorTheme} disabled>
					<LiveEditor css={{ fontSize: '16px', marginBottom: '0.75rem' }} padding={16} />
				</LiveProvider>
			</Cell>
		);
	},
};
