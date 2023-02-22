import { GEL, jsx } from '@westpac/core';
import { Form, FormGroup, InputCluster, Item, FormLabel } from '@westpac/form';
import { TextInput } from '@westpac/text-input';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<h2>Default instance (no styling props)</h2>
			<Form>
				<FormGroup>
					<InputCluster>
						<Item>
							<FormLabel htmlFor="example-1" subLabel>
								This is a sub-label
							</FormLabel>
							<TextInput />
						</Item>
						<Item>
							<FormLabel htmlFor="example-2" subLabel>
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
							<FormLabel htmlFor="example-3" subLabel>
								This is a sub-label
							</FormLabel>
							<TextInput />
						</Item>
						<Item>
							<FormLabel htmlFor="example-4" subLabel>
								This is a sub-label
							</FormLabel>
							<TextInput />
						</Item>
					</InputCluster>
				</FormGroup>
			</Form>
		</GEL>
	);
}

export default Example;
