/** @jsx jsx */

import { GEL, jsx, overrideReconciler } from '@westpac/core';
import { Code } from './_utils';

import { Intopia } from '../../../helpers/example/components/Intopia.js';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<Intopia ignore />
			<h2>General merge</h2>
			<Code>{`overrideReconciler(
	{ a: 1 }, // defaultOverrides
	{ b: 2 }, // tokenOverrides
	{ c: 3 }, // brandOverrides
	{ a: 4 }, // componentOverrides
	{}        // state
);`}</Code>
			=>
			<Code>{JSON.stringify(overrideReconciler({ a: 1 }, { b: 2 }, { c: 3 }, { a: 4 }, {}))}</Code>
			<hr />
			<h2>Style function merge</h2>
			<Code>{`overrideReconciler(
	{ styles: () => ({ a: 1, b: 1 }) },
	{ styles: style => ({ a: 2 + '' + style.a, b: 2 + '' + style.b }) },
	{ styles: style => ({ a: 3 + '' + style.a, b: 3 + '' + style.b }) },
	{ styles: style => ({ a: 4 + '' + style.a, b: 4 + '' + style.b }) },
	{}
);`}</Code>
			=>
			<Code>
				{JSON.stringify(
					overrideReconciler(
						{ styles: () => ({ a: 1, b: 1 }) },
						{ styles: style => ({ a: 2 + '' + style.a, b: 2 + '' + style.b }) },
						{ styles: style => ({ a: 3 + '' + style.a, b: 3 + '' + style.b }) },
						{ styles: style => ({ a: 4 + '' + style.a, b: 4 + '' + style.b }) },
						{}
					)
				)}
			</Code>
			<hr />
			<Code>{`overrideReconciler(
	{ styles: () => ({ a: 1, b: 1 }) },
	{},
	{},
	{ styles: style => ({ a: 4 + '' + style.a, b: 4 + '' + style.b }) },
	{}
);`}</Code>
			=>
			<Code>
				{JSON.stringify(
					overrideReconciler(
						{ styles: () => ({ a: 1, b: 1 }) },
						{},
						{},
						{ styles: style => ({ a: 4 + '' + style.a, b: 4 + '' + style.b }) },
						{}
					)
				)}
			</Code>
			<h2>SubComponent Style function merge</h2>
			<Code>
				{`overrideReconciler(
	{ subComponent: { Test: { styles: styles => ({ ...styles, a: 1 }) } } },
	{ subComponent: { Test: { styles: styles => ({ ...styles, b: 1 }) } } },
	{ subComponent: { Test: { styles: styles => ({ ...styles, c: 1 }) } } },
	{ subComponent: { Test: { styles: styles => ({ ...styles, d: 1 }) } } },
	{}
);
			`}
			</Code>
			=>
			<Code>
				{JSON.stringify(
					overrideReconciler(
						{ subComponent: { Test: { styles: styles => ({ ...styles, a: 1 }) } } },
						{ subComponent: { Test: { styles: styles => ({ ...styles, b: 1 }) } } },
						{ subComponent: { Test: { styles: styles => ({ ...styles, c: 1 }) } } },
						{ subComponent: { Test: { styles: styles => ({ ...styles, d: 1 }) } } },
						{}
					)
				)}
			</Code>
		</GEL>
	);
}

export default Example;
