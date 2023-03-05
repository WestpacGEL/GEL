import { jsx } from '@westpac/core';
import { Fragment, useEffect, useState } from 'react';
import { Heading as WestpacHeading } from '@westpac/heading';
import Select from '@arch-ui/select';
import { FieldContainer, FieldLabel, FieldInput } from '@arch-ui/fields';
import { inputStyles } from '@arch-ui/input';

export const Heading = {
	editor: ({ value, onChange }) => {
		const [level, setLevel] = useState(value.level);
		const [text, setText] = useState(value.text);

		useEffect(() => {
			onChange({
				level,
				text,
			});
		}, [text, level, onChange]);

		const options = [
			{ label: 'H2', value: 'h2' },
			{ label: 'H3', value: 'h3' },
			{ label: 'H4', value: 'h4' },
		];

		const selectedOption = options.find((o) => o.value === level);

		return (
			<Fragment>
				<FieldContainer>
					<FieldLabel htmlFor={'heading-text'} field={{ label: 'Heading', config: {} }} />
					<FieldInput>
						<input
							css={inputStyles}
							type="text"
							id="heading-text"
							value={text}
							onChange={(e) => setText(e.target.value)}
						/>
					</FieldInput>
				</FieldContainer>
				<FieldContainer>
					<FieldLabel htmlFor={'heading-level'} field={{ label: 'Text', config: {} }} />
					<Select
						id="heading-level"
						options={options}
						value={selectedOption}
						onChange={({ value }) => setLevel(value)}
					/>
				</FieldContainer>
			</Fragment>
		);
	},

	component: ({ text, level }) => {
		return (
			<WestpacHeading tag={level} size={6}>
				{text}
			</WestpacHeading>
		);
	},
};
