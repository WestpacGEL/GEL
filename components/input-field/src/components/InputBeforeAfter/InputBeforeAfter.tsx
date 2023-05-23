import { useEffect } from 'react';
import { InputAddOn, AddOnType } from '../AddOns';
import { useInputFieldContext, Composition } from '../InputField';
import { InputBeforeAfterProps } from './InputBeforeAfter.types';

export const InputBefore = ({ inset, icon, ...props }: InputBeforeAfterProps) => {
	const { setComposition } = useInputFieldContext();

	useEffect(() => {
		setComposition((state: Composition) => ({
			...state,
			before: inset || icon ? AddOnType.Inset : AddOnType.Default,
		}));
	}, [inset, icon, setComposition]);

	return <InputAddOn position="before" inset={inset} icon={icon} {...props} />;
};

InputBefore.displayName = 'InputBefore';

export const InputAfter = ({ inset, icon, ...props }: InputBeforeAfterProps) => {
	const { setComposition } = useInputFieldContext();

	useEffect(() => {
		setComposition((state: Composition) => ({
			...state,
			after: inset || icon ? AddOnType.Inset : AddOnType.Default,
		}));
	}, [inset, icon, setComposition]);

	return <InputAddOn position="after" inset={inset} icon={icon} {...props} />;
};

InputAfter.displayName = 'InputAfter';
