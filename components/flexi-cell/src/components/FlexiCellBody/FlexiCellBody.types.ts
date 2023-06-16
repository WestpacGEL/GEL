import type { HTMLAttributes, ReactNode } from 'react';

export type BaseFlexiCellBodyProps = {
	/**
	 * Children attributes
	 */
	children: ReactNode;
	/**
	 * Component tag
	 */
	tag?: keyof JSX.IntrinsicElements;
	/**
	 * href value
	 */
	href?: string;
} & HTMLAttributes<HTMLOrSVGElement>;

type FlexiCellBodyAsLinkProps = {
	/**
	 * The native tag that the circle will be rendered as
	 */
	tag: 'a';
	/**
	 * The href for the link
	 */
	href: string;
};

type CircleAsAllOtherTagsProps<Tag> = {
	tag?: Tag;
	href?: never;
};

type ElementKeysWithoutA = keyof Omit<JSX.IntrinsicElements, 'a'>;

export type FlexiCellBodyProps<Tag extends ElementKeysWithoutA = ElementKeysWithoutA> = (
	| FlexiCellBodyAsLinkProps
	| CircleAsAllOtherTagsProps<Tag>
) &
	BaseFlexiCellBodyProps;
