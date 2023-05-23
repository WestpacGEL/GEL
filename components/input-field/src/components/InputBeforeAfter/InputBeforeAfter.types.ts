import { ReactElement, ReactNode } from 'react';

export type InputBeforeAfterProps = {
	inset?: boolean;
	icon?: (...args: unknown[]) => ReactElement;
	children?: ReactNode;
};
