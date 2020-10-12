/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { InputGroup, Before, After } from '@westpac/input-group';
import { blenderTextInput, blenderSelect } from '@westpac/text-input';

import { blenderText } from '../src/overrides/text';
import { blenderTextInput as blenderGroupTextInput } from '../src/overrides/textInput';
import { blenderButton as blenderGroupButton } from '../src/overrides/button';
import { blenderSelect as blenderGroupSelect } from '../src/overrides/select';

function Example({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/input-group'] = {
		Text: {
			styles: blenderText.styles,
		},
		TextInput: {
			component: ({ invalid, ...props }) => <input {...props} />,
			styles: blenderGroupTextInput.styles,
		},
		// Button: {
		// 	component: (props) => <button {...props} />,
		// 	styles: blenderGroupButton.styles,
		// },
		Select: {
			component: (props) => <select {...props} />,
			styles: blenderGroupSelect.styles,
		},
	};

	const sizes = ['small', 'medium', 'large', 'xlarge'];

	return (
		<GEL brand={overridesWithTokens}>
			{sizes.map((size) => (
				<InputGroup name="TEXT" label="TEXT" size={size}>
					<After inputType="text" data="TEXT" />
				</InputGroup>
			))}
		</GEL>
	);
}

export default Example;
