import type { HTMLAttributes, ReactNode } from 'react';

export type FlexiCellLabelProps = {
	children?: ReactNode;
	tag?: keyof JSX.IntrinsicElements;
} & HTMLAttributes<HTMLOrSVGElement>;
