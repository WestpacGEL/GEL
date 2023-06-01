import type { HTMLAttributes, ReactNode } from 'react';

export type FlexiCellAdornmentProps = {
	align?: 'center' | 'top' | 'bottom';
	children?: ReactNode;
	tag?: keyof JSX.IntrinsicElements;
} & HTMLAttributes<HTMLOrSVGElement>;
