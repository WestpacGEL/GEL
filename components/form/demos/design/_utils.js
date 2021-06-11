/** @jsx jsx */

import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { Heading } from '@westpac/heading';

export const Link = ({ spacing, ...props }) => {
	const { COLORS } = useBrand();
	return (
		<a
			href="#"
			css={{
				color: COLORS.primary,
				...(spacing && { display: 'inline-block', marginBottom: '1rem' }),
			}}
			{...props}
		/>
	);
};

export const Container = (props) => {
	const mq = useMediaQuery();

	return <div css={mq({ width: ['100%', null, '60%'] })} {...props} />;
};

export const FormHeading = ({ spacing, ...props }) => {
	const { COLORS } = useBrand();
	return (
		<Heading
			tag="h3"
			size={8}
			overrides={{
				Heading: {
					styles: (styles) => ({
						...styles,
						marginBottom: spacing === 'small' ? '0.5rem' : '1rem',
						color: COLORS.hero,
					}),
				},
			}}
			{...props}
		/>
	);
};
