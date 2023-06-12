import { CircleProps } from '@westpac/circle';

export type FlexiCellCircleProps<
	Tag extends keyof Omit<JSX.IntrinsicElements, 'a'> = keyof Omit<JSX.IntrinsicElements, 'a'>
> = CircleProps<Tag>;
