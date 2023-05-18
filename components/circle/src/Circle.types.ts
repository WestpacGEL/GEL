import { CSSProperties } from '@emotion/react/node_modules/@emotion/serialize';
import { HTMLAttributes, ReactNode } from 'react';

type IntrinsicElementsCustom = {
	a: JSX.IntrinsicElements['a'];
};

export type CircleProps<Tag extends keyof JSX.IntrinsicElements = keyof JSX.IntrinsicElements> = {
	tag?: Tag;
	href?: string;
	background?: string;
	children?: ReactNode;
	size?: CSSProperties['width'] | CSSProperties['height'];
} & HTMLAttributes<HTMLOrSVGElement>;
