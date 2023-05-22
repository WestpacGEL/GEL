import type { HTMLAttributes, ReactNode } from 'react';

export type FlexiCellProps = {
	/**
	 * Adds an border radius and a border
	 */
	withBorder?: boolean;
	/**
	 * Renders an element on the left
	 */
	before?: ReactNode;
	/**
	 * Renders an element on the right
	 */
	after?: ReactNode;
	/**
	 * Define if it is going to truncate the text
	 */
	truncateText?: boolean;
	/**
	 * the middle content of FlexiCell
	 */
	children?: ReactNode;
	/**
	 * The native tag that flexicell will be rendered
	 */
	tag?: keyof JSX.IntrinsicElements;
	/**
	 * href in case it is an "a" tag
	 */
	href?: string;
} & HTMLAttributes<HTMLOrSVGElement>;
