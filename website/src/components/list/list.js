import { jsx } from '@westpac/core';
import { List as GELList } from '@westpac/list';
import { Body } from '../body';
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
	cross: {
		'::before': {
			top: '0.625rem',
		},
	},
};

const ListOverride = ({ state: { type }, ...rest }) => (
	<Body tag={type === 'ordered' ? 'ol' : 'ul'} {...rest} />
);

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
