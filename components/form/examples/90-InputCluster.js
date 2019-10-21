import React from 'react';
import { Form, FormGroup, InputCluster, Item, FormLabel } from '../src';
import { TextInput } from '@westpac/text-input';

export default () => (
	<>
		<h2>Default instance (no styling props)</h2>
		<Form>
			<FormGroup>
				<InputCluster>
					<Item>
						<FormLabel htmlFor="example-1" sublabel>
							This is a sub-label
						</FormLabel>
						<TextInput />
					</Item>
					<Item>
						<FormLabel htmlFor="example-2" sublabel>
							This is a sub-label
						</FormLabel>
						<TextInput />
					</Item>
				</InputCluster>
			</FormGroup>
		</Form>

		<hr />

		<h2>Horizontal mode</h2>
		<p>Note: Will wrap when available space is limited, but a vertical gap is not provided.</p>

		<Form>
			<FormGroup>
				<InputCluster horizontal>
					<Item>
						<FormLabel htmlFor="example-3" sublabel>
							This is a sub-label
						</FormLabel>
						<TextInput />
					</Item>
					<Item>
						<FormLabel htmlFor="example-4" sublabel>
							This is a sub-label
						</FormLabel>
						<TextInput />
					</Item>
				</InputCluster>
			</FormGroup>
		</Form>
	</>
);
