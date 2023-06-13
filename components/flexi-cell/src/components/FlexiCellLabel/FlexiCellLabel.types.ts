import type { CSSProperties, HTMLAttributes, ReactNode } from 'react';

export type FlexiCellLabelProps = {
	/**
	 * Define if it is going to truncate the text
	 */
	truncateText?: boolean;
	/**
	 * Label's font weight
	 */
	fontWeight?: CSSProperties['fontWeight'];
	/**
	 * Children attribute
	 */
	children: ReactNode;
	/**
	 * Component tag
	 */
	tag?: keyof JSX.IntrinsicElements;
} & HTMLAttributes<HTMLOrSVGElement>;
