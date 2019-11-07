/** @jsx jsx */

import { forwardRef } from 'react';
import { GEL, jsx } from '@westpac/core';
import { Tooltip } from '@westpac/tooltip';

const Wrapper = forwardRef((props, ref) => <abbr ref={ref} {...props} />);

function Example({ brand }) {
	const overwritesWithTokens = { ...brand };

	overwritesWithTokens['@westpac/tooltip'] = {
		tooltipCSS: {
			backgroundColor: 'palevioletred',

			'::after': { borderTopColor: 'palevioletred' },
		},
		Wrapper,
	};

	return (
		<GEL brand={overwritesWithTokens}>
			<h3>In text</h3>
			<p>
				This is a <Tooltip text="This is a tooltip">random</Tooltip> sentence.
			</p>
		</GEL>
	);
}

export default Example;
