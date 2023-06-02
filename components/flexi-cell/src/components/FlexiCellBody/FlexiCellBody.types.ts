import type { HTMLAttributes, ReactNode } from 'react';

export type FlexiCellBodyProps = {
	children?: ReactNode;
	tag?: keyof JSX.IntrinsicElements;
	href?: string;
} & HTMLAttributes<HTMLOrSVGElement>;
