/** @jsx jsx */
import { jsx, useBrand } from '@westpac/core';
import { Body } from '@westpac/body';

export const RichText = (props) => {
	const { PACKS } = useBrand();

	return (
		<Body
			overrides={{
				Body: {
					styles: (styles) => ({
						...styles,
						h2: {
							...PACKS.typeScale.bodyFont[5],
							margin: '0 0 1.125rem',
						},
						h3: {
							...PACKS.typeScale.bodyFont[7],
							margin: '0 0 1.125rem',
						},
						p: {
							...PACKS.typeScale.bodyFont[8],
							margin: '0 0 0.75rem !important',
							lineHeight: 2,
						},
					}),
				},
			}}
			{...props}
		/>
	);
};
