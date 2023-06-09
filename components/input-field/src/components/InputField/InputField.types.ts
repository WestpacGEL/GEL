import { ReactNode, Dispatch, SetStateAction } from 'react';

export type Composition = Record<'before' | 'after', string | null>;

export type Sizes = 'small' | 'medium' | 'large' | 'xlarge';

export type InputFieldContextType = {
	id: string;
	ariaDescribedByValue: string;
	composition: Composition;
	setComposition: Dispatch<SetStateAction<Composition>>;
	size: Sizes;
};

export type InputFieldProps = {
	/**
	 * Define an id for internal elements
	 */
	instanceId?: string;
	/**
	 * Label text
	 */
	label?: string;
	/**
	 * Visually hide label
	 */
	hideLabel?: boolean;
	/**
	 * Hint text
	 */
	hint?: ReactNode;
	/**
	 * Error message text
	 */
	errorMessage?: string | string[];
	/**
	 * Supporting text
	 */
	supportingText?: ReactNode;
	/**
	 * Size for Before/After/Input child components
	 */
	size?: Sizes;
	/**
	 * children
	 */
	children: ReactNode;
};
