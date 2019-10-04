import React from 'react';
import { Form, FormGroup, InputCluster, InputClusterItem, FormLabel } from '../src';
import { TextInput } from '@westpac/text-input';

export default () => (
	<>
		<h2>Default instance (no styling props)</h2>
		<Form>
			<FormGroup>
				<InputCluster>
					<InputClusterItem>
						<FormLabel htmlFor="example-1" isSublabel>
							This is a sub-label
						</FormLabel>
						<TextInput />
					</InputClusterItem>
					<InputClusterItem>
						<FormLabel htmlFor="example-2" isSublabel>
							This is a sub-label
						</FormLabel>
						<TextInput />
					</InputClusterItem>
				</InputCluster>
			</FormGroup>
		</Form>

		<hr />

		<h2>Horizontal mode</h2>
		<p>Note: Will wrap when available space is limited, but a vertical gap is not provided.</p>

		<Form>
			<FormGroup>
				<InputCluster isHorizontal>
					<InputClusterItem>
						<FormLabel htmlFor="example-3" isSublabel>
							This is a sub-label
						</FormLabel>
						<TextInput />
					</InputClusterItem>
					<InputClusterItem>
						<FormLabel htmlFor="example-4" isSublabel>
							This is a sub-label
						</FormLabel>
						<TextInput />
					</InputClusterItem>
				</InputCluster>
			</FormGroup>
		</Form>
	</>
);
