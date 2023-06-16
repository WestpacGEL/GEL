import type { HTMLAttributes, ReactNode } from 'react';
import type { StandardLonghandPropertiesHyphenFallback } from 'csstype';

type BaseFlexiCellProps = {
	/**
	 * Adds an arrow on top right
	 */
	withArrow?: boolean;
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
	/**
	 * zIndex for badge
	 */
	badgeZIndex?: StandardLonghandPropertiesHyphenFallback['z-index'];
} & HTMLAttributes<HTMLOrSVGElement>;

type FlexiCellAsLinkProps = {
	/**
	 * The native tag that the circle will be rendered as
	 */
	tag: 'a';
	/**
	 * The href for the link
	 */
	href: string;
};

type FlexiCellAsAllOtherTagsProps<Tag> = {
	tag?: Tag;
	href?: never;
};

export type FlexiCellProps<
	Tag extends keyof Omit<JSX.IntrinsicElements, 'a'> = keyof Omit<JSX.IntrinsicElements, 'a'>
> = (FlexiCellAsLinkProps | FlexiCellAsAllOtherTagsProps<Tag>) & BaseFlexiCellProps;
