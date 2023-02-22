import { jsx, useBrand } from '@westpac/core';
import { Body } from '@westpac/body';

export const Title = ({ children, ...rest }) => {
	const { COLORS, PACKS } = useBrand();
	return (
		<Body
			tag="p"
			overrides={{
				Body: {
					styles: (styles) => ({
						marginTop: 0,
						...PACKS.typeScale.bodyFont[10],
						color: COLORS.muted,
					}),
				},
			}}
			{...rest}
		>
			<em>{children}</em>
		</Body>
	);
};
