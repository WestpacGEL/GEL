import React from 'react';
import { Box } from './_utils';

import { Form, FormGroup, InputCluster, InputClusterItem, FormLabel } from '../src';
import { TextInput } from '../../text-input/src';

export default () => (
	<>
		<h2>Default instance (no styling props)</h2>
		<Form>
			<FormGroup>
				<InputCluster>
					<InputClusterItem>
						<FormLabel htmlFor="example-1" sublabel>
							This is a sub-label
						</FormLabel>
						<TextInput />
					</InputClusterItem>
					<InputClusterItem>
						<FormLabel htmlFor="example-2" sublabel>
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
				<InputCluster horizontal>
					<InputClusterItem>
						<FormLabel htmlFor="example-3" sublabel>
							This is a sub-label
						</FormLabel>
						<TextInput />
					</InputClusterItem>
					<InputClusterItem>
						<FormLabel htmlFor="example-4" sublabel>
							This is a sub-label
						</FormLabel>
						<TextInput />
					</InputClusterItem>
				</InputCluster>
			</FormGroup>
		</Form>
	</>
);
