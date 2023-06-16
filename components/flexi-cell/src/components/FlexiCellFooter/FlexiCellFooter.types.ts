import type { HTMLAttributes, ReactNode } from 'react';

export type FlexiCellFooterProps = {
	/**
	 * Children attributes
	 */
	children: ReactNode;
	/**
	 * Component tag
	 */
	tag?: keyof JSX.IntrinsicElements;
} & HTMLAttributes<HTMLOrSVGElement>;
