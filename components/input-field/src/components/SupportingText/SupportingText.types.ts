import { HTMLAttributes, ReactNode } from 'react';

export type SupportingTextProps = {
	/**
	 * Id for supporting text (used for aria-describedy)
	 */
	id?: string;
	/**
	 * Children
	 */
	children: ReactNode;
} & HTMLAttributes<HTMLElement>;
