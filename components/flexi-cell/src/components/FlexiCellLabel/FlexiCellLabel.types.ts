import type { CSSProperties, HTMLAttributes, ReactNode } from 'react';

export type FlexiCellLabelProps = {
	/**
	 * Define if it is going to truncate the text
	 */
	truncateText?: boolean;
	fontWeight?: CSSProperties['fontWeight'];
	children?: ReactNode;
	tag?: keyof JSX.IntrinsicElements;
} & HTMLAttributes<HTMLOrSVGElement>;
