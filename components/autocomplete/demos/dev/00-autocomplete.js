import { Autocomplete } from '@westpac/autocomplete';
import { Playground } from '../../../../website/src/components/playground/macro';

const Demo = ({ context, showCode, showDemo }) => {
	const options = [
		{ value: 'bench press', label: 'Bench Press' },
		{ value: 'squat', label: 'Squat' },
		{ value: 'deadlift', label: 'Deadlift' },
	];
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Autocomplete options={options} />
		</Playground>
	);
};

export default Demo;
