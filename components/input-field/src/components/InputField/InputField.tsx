import PropTypes from 'prop-types';
import { createContext, useContext, useMemo, useId, useState, useEffect, ReactNode } from 'react';
import { FormLabel, Hint, ErrorMessage } from '@westpac/form';
import { SupportingText } from '../SupportingText';
import { InputFieldProps, InputFieldContextType, Composition } from './InputField.types';

const InputFieldContext = createContext<InputFieldContextType | null>(null);

export const useInputFieldContext = () => {
	const context = useContext(InputFieldContext);

	if (!context) {
		throw new Error('Input<x> components should be wrapped in a InputField.');
	}

	return context;
};

const Fieldset = ({ children, ...props }: { children: ReactNode }) => (
	<fieldset css={{ border: 'none', margin: 0, padding: 0 }} {...props}>
		{children}
	</fieldset>
);

const InputFieldWrapper = ({
	isFieldset,
	children,
	...props
}: {
	isFieldset: boolean;
	children: ReactNode;
}) => {
	const Wrapper = isFieldset ? Fieldset : 'div';
	return (
		<Wrapper css={{ marginBottom: '1.875rem' }} {...props}>
			{children}
		</Wrapper>
	);
};

const InputWrapper = ({ children, ...props }: { children: ReactNode }) => (
	<div css={{ position: 'relative', display: 'flex' }} {...props}>
		{children}
	</div>
);

export const InputField = ({
	label,
	hideLabel,
	size = 'medium',
	hint,
	errorMessage,
	supportingText,
	children,
	instanceId,
	isFieldset = false,
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
			...(composition.before ? [`${id}-text-before`] : []),
			...(composition.after ? [`${id}-text-after`] : []),
			...(supportingText ? [`${id}-supporting-text`] : []),
		];
		setAriaDescribedByValue(arr.join(' '));
	}, [id, hint, errorMessage, supportingText, composition]);

	return (
		<InputFieldContext.Provider
			value={{ id, ariaDescribedByValue, composition, setComposition, size }}
		>
			<InputFieldWrapper isFieldset={isFieldset} {...props}>
				{label && (
					<FormLabel
						srOnly={hideLabel}
						tag={isFieldset ? 'legend' : 'label'}
						{...(!isFieldset && { htmlFor: id })}
					>
						{label}
					</FormLabel>
				)}
				{hint && <Hint id={`${id}-hint`}>{hint}</Hint>}
				{errorMessage && <ErrorMessage id={`${id}-error`} message={errorMessage} />}
				<InputWrapper>{children}</InputWrapper>
				{supportingText && (
					<SupportingText id={`${id}-supporting-text`}>{supportingText}</SupportingText>
				)}
			</InputFieldWrapper>
		</InputFieldContext.Provider>
	);
};

Fieldset.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn prop-types"  |
	// ----------------------------------------------------------------------
	children: PropTypes.node,
};

InputFieldWrapper.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn prop-types"  |
	// ----------------------------------------------------------------------
	children: PropTypes.node,
	isFieldset: PropTypes.bool.isRequired,
};

InputWrapper.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn prop-types"  |
	// ----------------------------------------------------------------------
	children: PropTypes.node,
};

InputField.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn prop-types"  |
	// ----------------------------------------------------------------------
	/**
	 * children
	 */
	children: PropTypes.node,
	/**
	 * Error message text
	 */
	errorMessage: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.string]),
	/**
	 * Visually hide label
	 */
	hideLabel: PropTypes.bool,
	/**
	 * Hint text
	 */
	hint: PropTypes.node,
	/**
	 * Define an id for internal elements
	 */
	instanceId: PropTypes.string,
	/**
	 * Whether the inputs are a related set. If you need to read the value of multiple inputs, setting this to true helps screen reader users understand the relationship between the inputs.
	 */
	isFieldset: PropTypes.bool,
	/**
	 * Label text
	 */
	label: PropTypes.string,
	/**
	 * Size for Before/After/Input child components
	 */
	size: PropTypes.oneOf(['large', 'medium', 'small', 'xlarge']),
	/**
	 * Supporting text
	 */
	supportingText: PropTypes.node,
};
