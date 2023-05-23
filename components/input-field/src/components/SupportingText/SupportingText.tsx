import { useBrand } from '@westpac/core';
import { SupportingTextProps } from './SupportingText.types';

export const SupportingText = ({ id, children, ...props }: SupportingTextProps) => {
	const { COLORS, TYPE } = useBrand();
	return (
		<p
			id={id}
			css={{
				color: COLORS.muted,
				fontSize: '0.75rem',
				margin: '0.375rem 0 0',
				...TYPE.bodyFont[400],
			}}
			{...props}
		>
			{children}
		</p>
	);
};
