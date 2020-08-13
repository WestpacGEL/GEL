/** @jsx jsx */
import { jsx, useBrand } from '@westpac/core';
import { Body as GELBody } from '@westpac/body';

export const Body = (props) => {
	const { PACKS, TYPE } = useBrand();

	return (
		<GELBody
			overrides={{
				Body: {
					styles: (styles) => ({
						...styles,

						fontSize: '1rem',
						lineHeight: 2,

						'h1, h2, h3, h4, h5, h6': {
							color: 'inherit',
						},
						h2: {
							...PACKS.typeScale.bodyFont[6],
							fontWeight: TYPE.bodyFont.headingWeight,
							margin: '0 0 1.125rem',
						},
						h3: {
							...PACKS.typeScale.bodyFont[8],
							fontWeight: TYPE.bodyFont.headingWeight,
							margin: '0 0 1.125rem',
						},
						p: {
							margin: '0 0 0.75rem !important',
						},
					}),
				},
			}}
			{...props}
		/>
	);
};
