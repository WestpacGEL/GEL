import { GEL } from '@westpac/core';
import { Fragment } from 'react';
import { Autocomplete } from '@westpac/autocomplete';

const Footer = (props) => (
	<Fragment {...props}>
		Can't find your exercise? <a href="#">Enter it manually</a>
	</Fragment>
);

function Example({ brand }) {
	const options = [
		{ value: 'bench press', label: 'Bench Press' },
		{ value: 'squat', label: 'Squat' },
		{ value: 'deadlift', label: 'Deadlift' },
	];
	return (
		<GEL brand={brand}>
			<Autocomplete footer={Footer} options={options} />
		</GEL>
	);
}

export default Example;
