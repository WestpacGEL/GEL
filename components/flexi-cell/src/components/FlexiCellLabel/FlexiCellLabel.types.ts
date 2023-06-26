import type * as CSS from 'csstype';
import type { HTMLAttributes, ReactNode } from 'react';

export type FlexiCellLabelProps = {
	/**
	 * Define if it is going to truncate the text
	 */
	truncateText?: boolean;
	/**
	 * Label's font weight
	 */
	fontWeight?: CSS.Properties['fontWeight'];
	/**
	 * Children attribute
	 */
	children: ReactNode;
	/**
	 * Component tag
	 */
	tag?: keyof JSX.IntrinsicElements;
} & HTMLAttributes<HTMLOrSVGElement>;
