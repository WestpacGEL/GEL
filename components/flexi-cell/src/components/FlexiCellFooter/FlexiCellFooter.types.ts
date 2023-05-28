import type { HTMLAttributes, ReactNode } from 'react';

export type FlexiCellFooterProps = {
	children?: ReactNode;
	tag?: keyof JSX.IntrinsicElements;
} & HTMLAttributes<HTMLOrSVGElement>;
