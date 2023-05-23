import { ReactNode, ReactElement } from 'react';

export type AddOnProps = {
	position: 'before' | 'after';
	children: ReactNode;
};

export type InputAddOnProps = {
	position: 'before' | 'after';
	icon?: (...args: unknown[]) => ReactElement;
	inset?: boolean;
	children?: ReactNode;
};

export enum AddOnType {
	Inset = 'inset',
	Default = 'default',
}
