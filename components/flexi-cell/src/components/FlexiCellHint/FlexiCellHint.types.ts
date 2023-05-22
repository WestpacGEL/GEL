import type { HTMLAttributes, ReactNode } from 'react';

export type FlexiCellHintProps = {
	/**
	 * Define if it is going to truncate the text
	 */
	truncateText?: boolean;
	children?: ReactNode;
	tag?: keyof JSX.IntrinsicElements;
} & HTMLAttributes<HTMLOrSVGElement>;
