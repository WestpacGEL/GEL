import { GEL } from '@westpac/core';
import { Autocomplete } from '@westpac/autocomplete';

function Example({ brand }) {
	const options = [
		{ value: 'bench press', label: 'Bench Press' },
		{ value: 'squat', label: 'Squat' },
		{ value: 'deadlift', label: 'Deadlift' },
	];
	return (
		<GEL brand={brand}>
			<h2>Sizes</h2>
			<h4>Small</h4>
			<Autocomplete size="small" options={options} />
			<h4>Medium</h4>
			<Autocomplete size="medium" options={options} />
			<h4>Large</h4>
			<Autocomplete size="large" options={options} />
			<h4>XLarge</h4>
			<Autocomplete size="xlarge" options={options} />
		</GEL>
	);
}

export default Example;
