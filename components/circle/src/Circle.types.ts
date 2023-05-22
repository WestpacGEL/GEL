import { CSSProperties } from '@emotion/react/node_modules/@emotion/serialize';
import { HTMLAttributes, ReactNode } from 'react';

type IntrinsicElementsCustom = {
	a: JSX.IntrinsicElements['a'];
};

export type CircleProps<Tag extends keyof JSX.IntrinsicElements = keyof JSX.IntrinsicElements> = {
	/**
	 * The native tag that flexicell will be rendered
	 */
	tag?: Tag;
	/**
	 * href in case it is an "a" tag
	 */
	href?: string;
	/**
	 * Adds a background color
	 */
	background?: string;
	/**
	 * JSX element to be render inside of circle
	 */
	children?: ReactNode;
	/**
	 * Size of the circle
	 */
	size?: CSSProperties['width'] | CSSProperties['height'];
} & HTMLAttributes<HTMLOrSVGElement>;