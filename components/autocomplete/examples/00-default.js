import { GEL } from '@westpac/core';
import { Autocomplete } from '@westpac/autocomplete';
import { useState } from 'react';

function Example({ brand }) {
	const options = [
		{ value: 'bench press', label: 'Bench Press' },
		{ value: 'squat', label: 'Squat' },
		{ value: 'deadlift', label: 'Deadlift' },
	];
	const [option, setOption] = useState(options[0]);
	const handleChange = (value) => {
		console.log(value);
		setOption(value);
	};

	return (
		<GEL brand={brand}>
			<div data-cy="valid-autocomplete">
				<h2>Default</h2>
				<Autocomplete options={options} />
			</div>
			<h2>Controlled</h2>
			<Autocomplete options={options} value={option} onChange={handleChange} />
			<div data-cy="invalid-autocomplete">
				<h2>Invalid</h2>
				<Autocomplete options={options} invalid />
			</div>
			<h2>Disabled</h2>
			<Autocomplete options={options} isDisabled />
		</GEL>
	);
}

export default Example;
