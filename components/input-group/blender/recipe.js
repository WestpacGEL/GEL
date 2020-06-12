import { GEL } from '@westpac/core';
import React, { Fragment } from 'react';

import { InputGroup, Before, After } from '@westpac/input-group';

const sizes = ['small', 'medium', 'large', 'xlarge'];

export function AllStyles({ brand }) {
	return (
		<GEL brand={brand}>
			{sizes.map((size, i) => (
				<Fragment key={i}>
					<InputGroup
						instanceIdPrefix="GEL"
						size={size}
						name="TEXT"
						label="TEXT"
						data={{
							after: { inputType: 'text', data: 'TEXT' },
						}}
					/>
					<InputGroup
						instanceIdPrefix="GEL"
						size={size}
						name="TEXT"
						label="TEXT"
						data={{
							before: { inputType: 'text', data: 'TEXT' },
						}}
					/>
					<InputGroup
						instanceIdPrefix="GEL"
						size={size}
						name="TEXT"
						label="TEXT"
						data={{
							before: { inputType: 'text', data: 'TEXT' },
							after: { inputType: 'text', data: 'TEXT' },
						}}
					/>
					<InputGroup
						instanceIdPrefix="GEL"
						size={size}
						name="TEXT"
						label="TEXT"
						data={{
							after: { inputType: 'button', data: 'TEXT' },
						}}
					/>
					<InputGroup
						instanceIdPrefix="GEL"
						size={size}
						name="TEXT"
						label="TEXT"
						data={{
							before: { inputType: 'button', data: 'TEXT' },
						}}
					/>
					<InputGroup
						instanceIdPrefix="GEL"
						size={size}
						name="TEXT"
						label="TEXT"
						data={{
							before: { inputType: 'button', data: 'TEXT' },
							after: { inputType: 'button', data: 'TEXT' },
						}}
					/>
					<InputGroup
						instanceIdPrefix="GEL"
						size={size}
						look="primary"
						name="TEXT"
						label="TEXT"
						data={{
							after: { inputType: 'button', data: 'TEXT' },
						}}
					/>
					<InputGroup
						instanceIdPrefix="GEL"
						size={size}
						look="primary"
						name="TEXT"
						label="TEXT"
						data={{
							before: { inputType: 'button', data: 'TEXT' },
						}}
					/>
					<InputGroup
						instanceIdPrefix="GEL"
						size={size}
						look="primary"
						name="TEXT"
						label="TEXT"
						data={{
							before: { inputType: 'button', data: 'TEXT' },
							after: { inputType: 'button', data: 'TEXT' },
						}}
					/>
					<InputGroup
						instanceIdPrefix="GEL"
						size={size}
						name="TEXT"
						label="TEXT"
						data={{
							after: {
								inputType: 'select',
								label: 'TEXT',
								data: [
									{ text: 'TEXT', value: '' },
									{ text: 'TEXT', value: '' },
								],
							},
						}}
					/>
					<InputGroup
						instanceIdPrefix="GEL"
						size={size}
						name="TEXT"
						label="TEXT"
						data={{
							before: {
								inputType: 'select',
								label: 'TEXT',
								data: [
									{ text: 'TEXT', value: '' },
									{ text: 'TEXT', value: '' },
								],
							},
						}}
					/>
					<InputGroup
						instanceIdPrefix="GEL"
						size={size}
						name="TEXT"
						label="TEXT"
						data={{
							before: {
								inputType: 'select',
								label: 'TEXT',
								data: [
									{ text: 'TEXT', value: '' },
									{ text: 'TEXT', value: '' },
								],
							},
							after: {
								inputType: 'select',
								label: 'TEXT',
								data: [
									{ text: 'TEXT', value: '' },
									{ text: 'TEXT', value: '' },
								],
							},
						}}
					/>
				</Fragment>
			))}
		</GEL>
	);
}

export function Docs({ brand }) {
	return [
		{
			heading: 'TODO',
			component: () => (
				<GEL brand={brand}>
					<InputGroup
						instanceIdPrefix="GEL"
						name="TEXT"
						label="TEXT"
						data={{
							before: { inputType: 'text', data: 'TEXT' },
							after: { inputType: 'button', data: 'TEXT' },
						}}
					/>
				</GEL>
			),
		},
		{
			heading: 'TODO',
			component: () => (
				<GEL brand={brand}>
					<InputGroup
						instanceIdPrefix="GEL"
						name="TEXT"
						label="TEXT"
						data={{
							before: { inputType: 'button', data: 'TEXT' },
							after: { inputType: 'text', data: 'TEXT' },
						}}
					/>
				</GEL>
			),
		},
		{
			heading: 'TODO',
			component: () => (
				<GEL brand={brand}>
					<InputGroup
						instanceIdPrefix="GEL"
						look="primary"
						name="TEXT"
						label="TEXT"
						data={{
							before: { inputType: 'button', data: 'TEXT' },
							after: { inputType: 'text', data: 'TEXT' },
						}}
					/>
				</GEL>
			),
		},
		{
			heading: 'TODO',
			component: () => (
				<GEL brand={brand}>
					<InputGroup
						instanceIdPrefix="GEL"
						size="small"
						look="primary"
						name="TEXT"
						label="TEXT"
						data={{
							before: { inputType: 'button', data: 'TEXT' },
							after: { inputType: 'text', data: 'TEXT' },
						}}
					/>
				</GEL>
			),
		},
	];
}
