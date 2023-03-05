import { GEL, jsx, styleReconciler, getModifier } from '@westpac/core';
import { Code } from './_utils';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<h2>Get modifier prop</h2>
			<Code>{`getModifier({look: 'primary', size: 'medium'}, {look: 'hero', size: 'medium'})`}</Code>
			=&gt;
			<Code>
				{JSON.stringify(
					getModifier({ look: 'primary', size: 'medium' }, { look: 'hero', size: 'medium' })
				)}
			</Code>
			<h2>Deep diff between 2 style objects</h2>
			<Code>{`styleReconciler(    
    {
        color: 'red',
        border: '1px solid black',
        ':hover': { color: 'blue', borderColor: 'orange' },
    },
    {
        color: 'red',
        border: '1px solid blue',
        ':hover': { color: 'purple', borderColor: 'orange' },
    })`}</Code>
			=&gt;
			<Code>
				{JSON.stringify(
					styleReconciler(
						{
							color: 'red',
							border: '1px solid black',
							':hover': { color: 'blue', borderColor: 'orange' },
						},
						{
							color: 'red',
							border: '1px solid blue',
							':hover': { color: 'purple', borderColor: 'orange' },
						}
					)
				)}
			</Code>
		</GEL>
	);
}

export default Example;
