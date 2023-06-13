import { CSSProperties } from '@emotion/react/node_modules/@emotion/serialize';
import { HTMLAttributes, ReactNode } from 'react';

type BaseCircleProps = {
	/**
	 * Adds a background color
	 */
	background?: CSSProperties['backgroundColor'];
	/**
	 * JSX element to be render inside of circle
	 */
	children?: ReactNode;
	/**
	 * Size of the circle
	 */
	size?: CSSProperties['width'] | CSSProperties['height'];
} & HTMLAttributes<HTMLOrSVGElement>;

type CircleAsLinkProps = {
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

export type CircleProps<
	Tag extends keyof Omit<JSX.IntrinsicElements, 'a'> = keyof Omit<JSX.IntrinsicElements, 'a'>
> = (CircleAsLinkProps | CircleAsAllOtherTagsProps<Tag>) & BaseCircleProps;
