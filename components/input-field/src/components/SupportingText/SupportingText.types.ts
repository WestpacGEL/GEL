import { HTMLAttributes, ReactNode } from 'react';

export type SupportingTextProps = {
	id?: string;
	children: ReactNode;
} & HTMLAttributes<HTMLElement>; // double check this...
