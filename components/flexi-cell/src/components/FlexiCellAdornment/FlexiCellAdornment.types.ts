import type { HTMLAttributes, ReactNode } from 'react';

export type FlexiCellAdornmentProps = {
	/**
	 * Define the alignment of content
	 */
	align?: 'center' | 'top' | 'bottom';
	/**
	 * Children attribute
	 */
	children: ReactNode;
	/**
	 * Component's tag
	 */
	tag?: keyof JSX.IntrinsicElements;
} & HTMLAttributes<HTMLOrSVGElement>;
