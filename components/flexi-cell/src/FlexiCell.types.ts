import type { HTMLAttributes, ReactNode } from 'react';

export type FlexiCellProps = {
	withBorder?: boolean;
	before?: ReactNode;
	after?: ReactNode;
	truncateText?: boolean;
	children?: ReactNode;
	tag?: keyof JSX.IntrinsicElements;
	href?: string;
} & HTMLAttributes<HTMLOrSVGElement>;
