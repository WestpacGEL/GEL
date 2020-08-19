/** @jsx jsx */

import { jsx } from '@westpac/core';
import { List as GELList } from '@westpac/list';
import { Body as ListOverride } from '../body';
import merge from 'lodash.merge';

const listStyleMap = {
	bullet: {
		'::before': {
			top: '0.75rem',
		},
	},
	link: {
		'::before': {
			top: '0.75rem',
		},
	},
	tick: {
		'::before': {
			top: '0.625rem',
		},
	},
};

export const List = (props) => {
	return (
		<GELList
			overrides={{
				List: {
					component: ListOverride,
					styles: (styles, { type }) =>
						merge({}, styles, {
							'> li': {
								// Reposition bullets/ticks etc
								...listStyleMap[type],
							},
						}),
				},
			}}
			{...props}
		/>
	);
};
