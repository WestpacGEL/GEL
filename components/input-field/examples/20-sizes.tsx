import { GEL } from '@westpac/core';
import { InputField, Input, InputBefore, InputAfter } from '@westpac/input-field';
import { Button } from '@westpac/button';
import { VisibilityIcon, SearchIcon } from '@westpac/icon';
import { Fragment } from 'react';
import { Select } from '@westpac/text-input';
import { Sizes } from '../src/components/InputField';

function Example({ brand }: { brand: object | ((...args: unknown[]) => unknown) }) {
	const sizes: Sizes[] = ['small', 'medium', 'large', 'xlarge'];
	return (
		<GEL brand={brand}>
			{sizes.map((size) => (
				<Fragment key={size}>
					<h3>{size.charAt(0).toUpperCase() + size.slice(1)}</h3>
					<InputField label="Text" size={size}>
						<InputBefore>$AUD</InputBefore>
						<Input />
						<InputAfter>Text</InputAfter>
					</InputField>

					<InputField label="Icon" size={size}>
						<InputBefore icon={SearchIcon} />
						<Input />
						<InputAfter icon={SearchIcon} />
					</InputField>

					<InputField label="Icon button" size={size}>
						<InputBefore inset>
							<Button
								size={size}
								look="link"
								iconColor="grey"
								iconAfter={VisibilityIcon}
								iconSize="small"
							/>
						</InputBefore>
						<Input />
						<InputAfter inset>
							<Button
								size={size}
								look="link"
								iconColor="grey"
								iconAfter={VisibilityIcon}
								iconSize="small"
							/>
						</InputAfter>
					</InputField>

					<InputField label="Button" size={size}>
						<InputBefore>
							<Button size={size}>Check</Button>
						</InputBefore>
						<Input />
						<InputAfter>
							<Button size={size}>Check</Button>
						</InputAfter>
					</InputField>

					<InputField label="Select " size={size}>
						<InputBefore>
							<Select size={size} invalid={false} inline={false}>
								<option>Select</option>
								<option>Yearly</option>
								<option>Monthly</option>
								<option>Weekly</option>
							</Select>
						</InputBefore>
						<Input />
						<InputAfter>
							<Select size={size} invalid={false} inline={false}>
								<option>Select</option>
								<option>Yearly</option>
								<option>Monthly</option>
								<option>Weekly</option>
							</Select>
						</InputAfter>
					</InputField>
				</Fragment>
			))}
		</GEL>
	);
}

export default Example;
