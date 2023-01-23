import { useRef, useState } from 'react';

import { devWarning } from './devWarning';

export function useManagedState<Tvalue>(
	controlledValue: Tvalue,
	defaultValue: Tvalue,
	onChange: (value: any, event: Event) => any
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
	const setValue = (value: Tvalue, event: Event) => {
		if (typeof onChange === 'function') {
			onChange(value, event);
		}

		setInternalValue(value);
	};

	// determine which value to pass on
	const value: Tvalue = controlledValue !== undefined ? controlledValue : internalValue;

	return [value, setValue];
}
