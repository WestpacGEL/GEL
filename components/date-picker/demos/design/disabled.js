import { jsx } from '@westpac/core';
import { DatePicker } from '@westpac/date-picker';
import { Field } from '@westpac/form';
import { Playground } from '../../../../website/src/components/playground/macro';
import { Title } from '../../../../helpers/demos';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Title>Blocked out dates</Title>
			<Field label="Select date">
				<DatePicker name="example-disabled" disableWeekends />
			</Field>
		</Playground>
	);
};

export default Demo;
