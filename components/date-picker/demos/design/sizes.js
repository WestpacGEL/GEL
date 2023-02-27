import { jsx } from '@westpac/core';
import { DatePicker } from '@westpac/date-picker';
import { Playground } from '../../../../website/src/components/playground/macro';
import { Title, Hr } from '../../../../helpers/demos';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Title>Small</Title>
			<DatePicker name="example-small" size="small" />

			<Hr />

			<Title>Medium (default)</Title>
			<DatePicker name="example-medium" size="medium" />

			<Hr />

			<Title>Large</Title>
			<DatePicker name="example-large" size="large" />

			<Hr />

			<Title>XLarge</Title>
			<DatePicker name="example-xlarge" size="xlarge" />
		</Playground>
	);
};

export default Demo;
