import { GEL } from '@westpac/core';
import { Autocomplete } from '@westpac/autocomplete';

function Example({ brand }) {
	const overridesWithTokens = { ...brand };

	overridesWithTokens['@westpac/autocomplete'] = {
		Menu: {
			styles: (styles) => ({
				...styles,
				background: 'palevioletred',
			}),
		},
	};

	const options = [
		{ value: 'bench press', label: 'Bench Press' },
		{ value: 'squat', label: 'Squat' },
		{ value: 'deadlift', label: 'Deadlift' },
	];
	return (
		<GEL brand={overridesWithTokens}>
			<h2>With overrides applied</h2>
			<Autocomplete options={options} />

			<hr />

			<h2>With overrides and component overrides</h2>
			<Autocomplete
				options={options}
				overrides={{
					Menu: {
						styles: (styles) => ({ ...styles, background: 'AliceBlue' }),
					},
				}}
			/>
		</GEL>
	);
}

export default Example;
