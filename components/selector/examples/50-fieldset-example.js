/** @jsx jsx */

import { GEL, jsx, useBrand } from '@westpac/core';
import { Selector, Option } from '@westpac/selector';

const Fieldset = (props) => (
	<fieldset css={{ border: 'none', margin: 0, padding: 0, minWidth: 0 }} {...props} />
);

const Legend = (props) => {
	const { PACKS, TYPE, SPACING } = useBrand();

	return (
		<legend
			css={{ ...PACKS.typeScale.bodyFont[8], ...TYPE.bodyFont[500], marginBottom: SPACING(4) }}
			{...props}
		/>
	);
};
function Example({ brand }) {
	const { COLORS } = useBrand();

	return (
		<GEL brand={brand}>
			<h2>Default</h2>
			<p css={{ color: COLORS.muted, fontStyle: 'italic' }}>
				Note: The following examples illustrate the HTML markup required for this component to be
				accessible. Fieldset and legend styling is not provided by this component.
			</p>

			<Fieldset>
				<Legend>Choose a thing</Legend>

				<Selector name="example-default">
					<Option value="1">Here is a label</Option>
					<Option value="2">Here is a label</Option>
					<Option value="3">Here is a label</Option>
				</Selector>
			</Fieldset>
		</GEL>
	);
}

export default Example;
