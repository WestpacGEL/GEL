import { ReactNode } from 'react';
import { IconProps } from '@westpac/icon';

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
	icon?: (props: Omit<IconProps, 'icon'>) => JSX.Element;
	/**
	 * Icon component props
	 */
	iconProps?: Omit<IconProps, 'icon'>;
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
