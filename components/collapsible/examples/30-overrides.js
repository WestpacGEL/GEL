import { GEL, jsx, useBrand } from '@westpac/core';
import { Collapsible } from '@westpac/collapsible';

const content =
	'Hello vivamus sagittis lacus vel augue laoreet rutrum faucibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
	'Nesciunt laboriosam, mollitia magnam ad magni consequuntur hic et quos optio corrupti praesentium veniam aspernatur minima aperiam ut quas, ' +
	'possimus non architecto. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut animi velit in? Suscipit nostrum itaque voluptatibus ' +
	'dolorem qui soluta nobis modi officia incidunt eos dolores atque, unde error delectus officiis.';

function Example({ brand }) {
	const overridesWithTokens = { ...brand };

	const { SPACING } = useBrand();

	overridesWithTokens['@westpac/collapsible'] = {
		Collapsible: {
			styles: (styles) => ({
				...styles,
				border: '1px dashed #ccc',
				padding: '2px',
			}),
		},
		Content: {
			styles: (styles) => ({
				...styles,
				border: '1px dashed #ccc',
				padding: SPACING(4),
			}),
		},
	};

	return (
		<GEL brand={overridesWithTokens}>
			<h2>With overrides applied</h2>
			<Collapsible text="Toggle collapsible">{content}</Collapsible>
			<div style={{ marginTop: '40rem' }} />
			<Collapsible text="Toggle collapsible">{content}</Collapsible>

			<hr />

			<h2>With overrides and component overrides</h2>
			<Collapsible
				text="Toggle collapsible"
				overrides={{
					Content: { styles: (styles) => ({ ...styles, border: '2px dotted red' }) },
				}}
			>
				{content}
			</Collapsible>
		</GEL>
	);
}

export default Example;
