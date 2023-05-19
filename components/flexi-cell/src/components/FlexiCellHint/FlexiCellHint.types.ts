import type { HTMLAttributes, ReactNode } from 'react';

export type FlexiCellHintProps = {
	children?: ReactNode;
	tag?: keyof JSX.IntrinsicElements;
} & HTMLAttributes<HTMLOrSVGElement>;
