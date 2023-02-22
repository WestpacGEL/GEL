import { jsx, useBrand } from '@westpac/core';
import { useState } from 'react';
import { Form } from '@westpac/form';
import { Container } from './_utils';
import { Playground } from '../../../../website/src/components/playground/macro';
import { TaxFileNumberPattern } from './tax-file-number';

const Demo = ({ context, showCode, showDemo }) => {
	const [value, setValue] = useState();
	const { BRAND } = useBrand();

	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Container>
				<Form spacing="large">
					<TaxFileNumberPattern showPrevious />
				</Form>
			</Container>
		</Playground>
	);
};

export default Demo;
