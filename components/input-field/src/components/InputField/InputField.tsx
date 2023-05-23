import { createContext, useContext, useMemo, useId, useState, useEffect, ReactNode } from 'react';
import { FormLabel, Hint, ErrorMessage } from '@westpac/form';
import { SupportingText } from '../SupportingText';
import { InputFieldProps, InputFieldContextType, Composition } from './InputField.types';

// -----------------------------------------------------
// Notes/To Do
// -----------------------------------------------------
/*
- Need to figure out how to nicely pass id and aria-describedby to non <Input /> input components, context hook probably...
- I'm going to have to add a prop to button to take iconSize since it should always be size small 
- Remaining broken types
Changesets
- button
	- iconSize prop
- form
	- updated hint props
*/

const InputFieldContext = createContext<InputFieldContextType>({} as InputFieldContextType);

export const useInputFieldContext = () => {
	const context = useContext(InputFieldContext) || {};

	if (!context) {
		throw new Error('<Input<x>/> components should be wrapped in a <InputField>.');
	}

	return context;
};

const InputFieldWrapper = ({ children, ...props }: { children: ReactNode }) => (
	<div css={{ marginBottom: '1.875rem' }} {...props}>
		{children}
	</div>
);

const InputWrapper = ({ children, ...props }: { children: ReactNode }) => (
	<div css={{ position: 'relative', display: 'flex' }} {...props}>
		{children}
	</div>
);

export const InputField = ({
	label,
	hideLabel,
	hint,
	errorMessage,
	supportingText,
	size = 'medium',
	children,
	instanceId,
	...props
}: InputFieldProps) => {
	const _id = useId();
	const id = useMemo(() => instanceId || `gel-field-${_id}`, [_id, instanceId]);
	const [ariaDescribedByValue, setAriaDescribedByValue] = useState<string>('');
	const [composition, setComposition] = useState<Composition>({
		before: null,
		after: null,
	});

	useEffect(() => {
		const arr = [
			...(errorMessage ? [`${id}-error`] : []),
			...(hint ? [`${id}-hint`] : []),
			...(supportingText ? [`${id}-supportingText`] : []),
		];
		setAriaDescribedByValue(arr.join(' '));
	}, [id, hint, errorMessage, supportingText]);

	return (
		<InputFieldContext.Provider
			value={{ id, ariaDescribedByValue, composition, setComposition, size }}
		>
			<InputFieldWrapper {...props}>
				{label && (
					<FormLabel htmlFor={id} srOnly={hideLabel}>
						{label}
					</FormLabel>
				)}
				{hint && <Hint id={`${id}-hint`}>{hint}</Hint>}
				{errorMessage && <ErrorMessage id={`${id}-error`} message={errorMessage} />}
				<InputWrapper>{children}</InputWrapper>
				{supportingText && (
					<SupportingText id={`${id}-supportMessage`}>{supportingText}</SupportingText>
				)}
			</InputFieldWrapper>
		</InputFieldContext.Provider>
	);
};
