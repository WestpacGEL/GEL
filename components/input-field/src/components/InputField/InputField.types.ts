import { ReactNode, Dispatch, SetStateAction } from 'react';

// export type Composition = {
// 	before: string | null;
// 	after: string | null;
// };

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
	label?: string;
	hideLabel?: boolean;
	hint?: ReactNode;
	errorMessage?: string | string[];
	supportingText?: ReactNode;
	size?: Sizes;
	children: ReactNode;
	instanceId?: string;
};
