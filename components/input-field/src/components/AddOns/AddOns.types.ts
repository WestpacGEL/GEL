import { ReactNode } from 'react';

export type AddOnProps = {
	/**
	 * Position of add on i.e. before or after input
	 */
	position: 'before' | 'after';
	/**
	 * Children
	 */
	children: ReactNode;
};

export type InputAddOnProps = {
	/**
	 * Position of add on i.e. before or after input
	 */
	position: 'before' | 'after';
	/**
	 * Icon to display
	 */
	icon?: (...args: unknown[]) => any;
	/**
	 * Render compononent within input borders
	 */
	inset?: boolean;
	/**
	 * Children
	 */
	children?: ReactNode;
};

export enum AddOnType {
	Inset = 'inset',
	Default = 'default',
}
