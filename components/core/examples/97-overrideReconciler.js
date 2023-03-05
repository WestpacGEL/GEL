import { GEL, jsx, overrideReconciler } from '@westpac/core';
import { Code } from './_utils';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<h2>General merge</h2>
			<Code>{`overrideReconciler(
	{ a: { one: 1 } },   // defaultOverrides
	{ b: { two: 2 } },   // tokenOverrides
	{ c: { three: 3 } }, // brandOverrides
	{ a: { four: 4 } }   // componentOverrides
);`}</Code>
			=&gt;
			<Code>
				{JSON.stringify(
					overrideReconciler(
						{ a: { one: 1 } },
						{ b: { two: 2 } },
						{ c: { three: 3 } },
						{ a: { four: 4 } }
					)
				)}
			</Code>
			<hr />
			<h2>Style function merge</h2>
			<Code>{`overrideReconciler(
	{ a: { styles: () => ({ a: 1, b: 1 }) } },
	{ a: { styles: style => ({ a: 2 + '' + style.a, b: 2 + '' + style.b }) } },
	{ a: { styles: style => ({ a: 3 + '' + style.a, b: 3 + '' + style.b }) } },
	{ a: { styles: style => ({ a: 4 + '' + style.a, b: 4 + '' + style.b }) } }
).a.styles();`}</Code>
			=&gt;
			<Code>
				{JSON.stringify(
					overrideReconciler(
						{ a: { styles: () => ({ a: 1, b: 1 }) } },
						{ a: { styles: (style) => ({ a: 2 + '' + style.a, b: 2 + '' + style.b }) } },
						{ a: { styles: (style) => ({ a: 3 + '' + style.a, b: 3 + '' + style.b }) } },
						{ a: { styles: (style) => ({ a: 4 + '' + style.a, b: 4 + '' + style.b }) } }
					).a.styles()
				)}
			</Code>
			<hr />
			<Code>{`overrideReconciler(
	{ a: { styles: () => ({ a: 1, b: 1 }) } },
	undefined,
	undefined,
	{ a: { styles: style => ({ a: 4 + '' + style.a, b: 4 + '' + style.b }) } }
).a.styles();`}</Code>
			=&gt;
			<Code>
				{JSON.stringify(
					overrideReconciler({ a: { styles: () => ({ a: 1, b: 1 }) } }, undefined, undefined, {
						a: { styles: (style) => ({ a: 4 + '' + style.a, b: 4 + '' + style.b }) },
					}).a.styles()
				)}
			</Code>
			<h2>SubComponent Style function merge</h2>
			<Code>
				{`overrideReconciler(
	{ Test: { styles: styles => ({ ...styles, a: 1 }) } },
	{ Test: { styles: styles => ({ ...styles, b: 1 }) } },
	{ Test: { styles: styles => ({ ...styles, c: 1 }) } },
	{ Test: { styles: styles => ({ ...styles, d: 1 }) } }
).Test.styles();
			`}
			</Code>
			=&gt;
			<Code>
				{JSON.stringify(
					overrideReconciler(
						{ Test: { styles: (styles) => ({ ...styles, a: 1 }) } },
						{ Test: { styles: (styles) => ({ ...styles, b: 1 }) } },
						{ Test: { styles: (styles) => ({ ...styles, c: 1 }) } },
						{ Test: { styles: (styles) => ({ ...styles, d: 1 }) } }
					).Test.styles()
				)}
			</Code>
		</GEL>
	);
}

export default Example;
