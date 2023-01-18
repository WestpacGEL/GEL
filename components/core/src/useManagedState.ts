import { useCallback, useRef, useState } from 'react';

import { devWarning } from './devWarning';

export function useManagedState<TValue = any, TOnChange = (value: any, event: Event) => any>(
	controlledValue: TValue,
	defaultValue?: TValue,
	onChange?: TOnChange
) {
	const { current: isControlled } = useRef(controlledValue !== undefined);
	const [internalValue, setInternalValue] = useState(defaultValue);

	// warn consumers when their component is switching from controlled to uncontrolled and vice versa
	devWarning(
		isControlled && controlledValue === undefined,
		'A component is changing from controlled to uncontrolled. Check the `value` prop being passed in.'
	);
	devWarning(
		!isControlled && controlledValue !== undefined,
		'A component is changing from uncontrolled to controlled. Check the `value` prop being passed in.'
	);

	// handle value changes (both internal, and controlled)
	const setValue = useCallback(
		(value: TValue, event: Event) => {
			if (typeof onChange === 'function') {
				onChange(value, event);
			}

			setInternalValue(value);
		},
		[onChange]
	);

	// determine which value to pass on
	const value = controlledValue !== undefined ? controlledValue : internalValue;

	return [value, setValue];
}
