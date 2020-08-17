/** @jsx jsx */

import { jsx, CacheProvider } from '@emotion/core';
import { Fragment, createContext, useContext, useState } from 'react';
import createCache from '@emotion/cache';

import { useBrand } from './Brand';
import { reset } from './reset';

const AddGELClassContext = createContext(true);

const label = 'Core';

const AddRootClass = ({ children }) => {
	const addGELClass = useContext(AddGELClassContext);

	let [cache] = useState(() => {
		return createCache({
			stylisPlugins: [
				(context, content, selectors, parent, line, column, length) => {
					if (context === -1 && selectors.length && !selectors[0].includes(label)) {
						console.log(context, content, selectors, parent);
						selectors[0] = `.GEL ${selectors[0]}`;
					}
					return content;
				},
			],
		});
	});
	return <CacheProvider value={cache}>{children}</CacheProvider>;
};

/* 
Note:
This works provided that there is only one GEL wrapper on the page. Our example docs have two... one at App level, one at example level. Override examples needs access to the brand to override it, hence why I'm having issues rearchitecting this. 

Also note that we have a reset (used by `<Core />`) and website layout.js additinally uses a `<Normalize />`. I've commented out these for now. Need to understand why Normalize is needed in addition to our reset in Core.
*/

export const Core = ({ noReset, children }) => {
	const { COLORS, TYPE, PACKS } = useBrand();

	let addGELClass = useContext(AddGELClassContext);

	return (
		<AddGELClassContext.Provider value={false}>
			<div
				className={addGELClass ? 'GEL' : undefined}
				css={{
					label: label,
					lineHeight: 1.428571429,
					color: COLORS.text,
					fontFeatureSettings: '"liga" 1', // Enable OpenType ligatures in IE
					...TYPE.bodyFont[400],
					'& *:focus': {
						...PACKS.focus,
					},
					'& [type="button"]:-moz-focusring, [type="reset"]:-moz-focusring, [type="submit"]:-moz-focusring, button:-moz-focusring': {
						// button:focus because of normalize reset (needs higher specificity)
						...PACKS.focus,
					},
					'& *::selection': {
						backgroundColor: COLORS.tints.primary20,
					},
					'&': {
						...(!noReset && reset),
					},
				}}
			>
				<AddRootClass>{children}</AddRootClass>
			</div>
		</AddGELClassContext.Provider>
	);
};
