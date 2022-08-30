/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';
import { Cell } from '@westpac/grid';
import { List as GELList } from '@westpac/list';

export const List = (props) => {
	const {
		GEL: { COLORS },
	} = useBrand();
	return (
		<Cell width={[12, 10, 8]} left={[1, 2, null, 3]}>
			<GELList
				overrides={{
					List: {
						styles: (styles, { type }) => ({
							...styles,
							'> li::before': {
								...(type === 'bullet' && { backgroundColor: COLORS.icon }),
								borderColor: COLORS.icon,
							},
						}),
					},
				}}
				{...props}
			/>
		</Cell>
	);
};
