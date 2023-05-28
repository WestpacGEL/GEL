import type { HTMLAttributes, ReactNode } from 'react';

export type FlexiCellProps = {
	/**
	 * Adds a border radius and a border
	 */
	withBorder?: boolean;
	/**
	 * Injects the FlexiCell.Body inside of the children
	 */
	body?: boolean;
	/**
	 * Renders an element on the top right corner
	 */
	badge?: ReactNode;
	/**
	 * Renders an element on the left
	 */
	before?: ReactNode;
	/**
	 * Renders an element on the right
	 */
	after?: ReactNode;
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
