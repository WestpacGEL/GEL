# Input Group Field

This document outlines a specification for building the Input Group field component for GEL and is based on designs by the Westpac design team.

## Concept

The InputGroupField package contains a flexible primitive component and a set of convenience components. The primitive component is the foundation for all components in this package. It is un-opinionated about the types of its three children and “future-proofs” the component against unknown requirements. Alongside the primitive are convenience components for common use-cases. The exports from this package are:

```tsx
// src/index.ts

export { InputGroupFieldPrimitive } from './InputGroupFieldPrimitive';
export type { InputGroupFieldPrimitiveProps } from './InputGroupFieldPrimitive';
export { TextInputGroupField } from './TextInputGroupField';
```

## Start building

1. Set up the GEL repo locally and create a new branch.
2. In the root of the repo, run these commands:

```sh
# Create the new component then follow the prompts to enter name, description
yarn new input-group-field

# Run the development server for the new component
yarn dev input-group-field
```

1. Now you should be able to see the template running at: [http://localhost:8080/](http://localhost:8080/)

## Component API

```tsx
// src/InputGroupFieldPrimitive.tsx

type InputGroupFieldPrimitiveProps = {
	/** The main, horizontally centered input of the group. */
	children: ReactNode;
	/** The label for the whole group of inputs. */
	groupLabel: string;
	/**
	 * Optionally supply a component to be rendered on the left of the main input.
	 * Note: If interactive, include a visually hidden label for accessibility.
	 */
	addOnBefore?: ReactElement;
	/**
	 * Optionally supply a component to be rendered on the right of the main input.
	 * Note: If interactive, include a visually hidden label for accessibility.
	 */
	addOnAfter?: ReactElement;
	/** The label to use as the `aria-label` for the group. */
	assistiveText?: string;
	/** Inform the user when the input does not meet validation criteria. */
	errorMessage?: string | string[];
	/** Provide information to assist the user in completing a field. */
	hint?: ReactNode;
	/** Optionally supply a suffix to the generated ID. */
	instanceId?: string;
	/** Whether the inputs are a related set. If you need to read the value of multiple inputs, setting this to true helps screen reader users understand the relationship between the inputs. */
	isFieldset?: boolean;
	/** The size of the group, defaults to 'medium'. */
	size?: 'small' | 'medium' | 'large' | 'xlarge';
	/** Give feedback to the user about the state of the input, e.g. character count. */
	supportMessage?: string;
	/** The override API. */
	overrides?: {
		Fieldset?: {
			styles?: (styles: CSSObject) => CSSObject;
			component?: ElementType;
			attributes?: (
				attrs: FieldsetHTMLAttributes<HTMLFieldSetElement>
			) => FieldsetHTMLAttributes<HTMLFieldSetElement>;
		};
	};
};

// src/TextInputGroupField.tsx

type BaseTextInputGroupFieldProps = Omit<
	InputGroupFieldPrimitiveProps,
	'children' | 'overrides'
> & {
	/** Does not accept children. */
	children: never;
	/**
	 * The visually hidden label for the text input.
	 * Note: If there is no add on, this will not be rendered and the label for the text input will be the `groupLabel`.
	 */
	textInputAssistiveText?: string;
	/** Set the max-width of the text input. Unit of measurement is the 'W' character. */
	textInputWidth?: 2 | 3 | 4 | 5 | 10 | 20 | 30;
};

interface TextInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'id'> {
	/** Type of input to use. */
	type: 'text' | 'number' | 'password' | 'search' | 'email' | 'date' | 'time' | 'file' | 'url';
	/** The override API. */
	overrides?: {
		Fieldset?: {
			styles?: (styles: CSSObject) => CSSObject;
			component?: ElementType;
			attributes?: (
				attrs: FieldsetHTMLAttributes<HTMLFieldSetElement>
			) => FieldsetHTMLAttributes<HTMLFieldSetElement>;
		};
		TextInput?: {
			styles?: (styles: CSSObject) => CSSObject;
			component?: ElementType;
			attributes?: (
				attrs: InputHTMLAttributes<HTMLInputElement>
			) => InputHTMLAttributes<HTMLInputElement>;
		};
	};
}

interface TextAreaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'id'> {
	type: 'textarea';
	overrides?: {
		Fieldset?: {
			styles?: (styles: CSSObject) => CSSObject;
			component?: ElementType;
			attributes?: (
				attrs: FieldsetHTMLAttributes<HTMLFieldSetElement>
			) => FieldsetHTMLAttributes<HTMLFieldSetElement>;
		};
		Textarea?: {
			styles?: (styles: CSSObject) => CSSObject;
			component?: ElementType;
			attributes?: (
				attrs: InputHTMLAttributes<HTMLTextAreaElement>
			) => InputHTMLAttributes<HTMLTextAreaElement>;
		};
	};
}

type TextInputGroupFieldProps = BaseTextInputGroupFieldProps & (TextInputProps | TextAreaProps);
```

## Examples

```tsx
// Basic text
<TextInputGroupField
  groupLabel="Name"
  type="text"
/>

// Basic textarea
<TextInputGroupField
  groupLabel="Comments"
  type="textarea"
/>

// Static add on
<TextInputGroupField
  groupLabel="Salary"
  type="text"
  assistiveText="Salary in Australian dollars"
	addOnBefore={<Text>$AUD</Text>}
/>

// Interactive add on (Note: we may need to add a new `look` for the button that includes
// the styles from the TextInputWithButton's button - suggested name: 'addOn')
<TextInputGroupField
  groupLabel="Search"
  type="text"
	addOnBefore={<SearchIcon />}
	addOnAfter={<Button look="unstyled" iconAfter={ClearIcon} assistiveText="Clear input" />}
/>

// Multiple inputs - Fieldset
<TextInputGroupField
  groupLabel="Salary"
  type="text"
  isFieldset={true}
  textInputAssistiveText="Amount in Australian dollars"
	addOnBefore={<Text>$AUD</Text>}
  addOnAfter={
    <Field label="Currency" hideLabel>
      <Select inline={false} invalid={false} size="small" />
    </Field>
  }
/>

// Multi state group (Inline field validation flow from Figma design)
const mockPostAbaNumberAPI = async (abaNumber: string) => {
	const validRes: { status: keyof typeof addOnAfterMap; bank: string; errorMessage?: undefined } = {
		status: 'valid',
		bank: 'Capital One, New Orleans, Louisiana',
	};

	const invalidRes: { status: keyof typeof addOnAfterMap; bank?: undefined; errorMessage: string } =
		{
			status: 'invalid',
			errorMessage: 'Routing number not found',
		};

	// Wait 1000ms to demonstrate the loading state
	await new Promise((r) => setTimeout(r, 1000));

	// Only one valid number for demonstration purposes
	return Promise.resolve(abaNumber === '647453' ? validRes : invalidRes);
};

const [abaNumber, setAbaNumber] = useState('');
const [status, setStatus] = useState<keyof typeof addOnAfterMap>('idle');
const [errorMessage, setErrorMessage] = useState('');
const [supportMessage, setSupportMessage] = useState('');

const onClickCheckBtn = async () => {
	// Set loading status on click
	setStatus('loading');

	// Check the submitted number
	const { status, errorMessage = '', bank = '' } = await mockPostAbaNumberAPI(abaNumber);

	// Update the status based on the result from the API
	setStatus(status);

	// Show appropriate message to the user
	setErrorMessage(errorMessage);
	setSupportMessage(bank);
};

// The different `addOnAfter` elements depending on the current status
const addOnAfterMap = {
	idle: <Button label="Check" look="hero" onClick={onClickCheckBtn} />,
	loading: <RefreshIcon assistiveText="Loading" />,
	invalid: <Button label="Check" look="hero" onClick={onClickCheckBtn} />,
	valid: <TickIcon assistiveText="Number is valid" />,
};

const onChangeTextInput = (event: ChangeEvent<HTMLInputElement>) => {
	const { value } = event.target;
	setAbaNumber(value);

	// Allow the user to check the new number
	setStatus('idle');
};

return (
	<TextInputGroupField
		groupLabel="Enter ABA routing number"
		type="number"
		value={abaNumber}
		hint="For a valid response use: 647453, all other numbers will show the invalid response"
		errorMessage={errorMessage}
		supportMessage={supportMessage}
		onChange={onChangeTextInput}
		addOnAfter={addOnAfterMap[status]}
	/>
);

// Textarea with character count
const [charCountMessage, setCharCountMessage] = useState('250 remaining');

const onChangeTextAreaInput = (event: ChangeEvent<HTMLTextAreaElement>) => {
	const { value } = event.target;

	setCharCountMessage(`${250 - value.length} remaining`);
};

return (
	<TextInputGroupField
		groupLabel="Comments"
		type="textarea"
		onChange={onChangeTextAreaInput}
		supportMessage={charCountMessage}
	/>
);
```

## Accessibility

1. Non-interactive icons should be `aria-hidden="true"` and `pointer-events: none;`
2. When `addOnBefore` and `addOnAfter` are interactive (e.g. a button), they will need to have a focus, pressed, hover states based on the `PACKS` token. This will be handled by the consumer. Icon only buttons will need an `assistiveText` value defined.
3. Multiple inputs will need to be a `fieldset` (controlled by the `isFieldset` prop) with a `legend` as the `groupLabel` OR a container with `role="group"` and `aria-labelledby="<id-of-group-label>"`. Each input will need a `VisuallyHidden` label.
4. If there are no add-ons defined, the `groupLabel` should serve as the label for the main input.

## Unit tests

The unit tests will use existing GEL tech including `jest` and `testing-library`. These aim to cover:

1. Component APIs
2. Logic branches within the components
3. Interactivity

_Some Dos and Don'ts when writing unit tests:_

1. Do only have one assertion per `test` - i.e. one `expect()`
2. Do use `@testing-library/user-event` rather than `fireEvent`
3. Don't use `data-testid`s, use `role` getters e.g. `getByRole`, `queryByRole`, `findByRole` - use [this table of element types and their roles](https://www.w3.org/TR/html-aria/)
4. Don't rely on implementation details (e.g. class name getters) - test from your user's point of view
5. Additional best practices for `testing-library` can be found in [Kent C Dodds blog post: Common mistakes with React testing library](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)

This is the structure of the unit tests. The implementation of the tests (i.e. the body of the callback passed to `test` will need to be filled out during the build of this component):

```tsx
// InputGroupFieldPrimitive.test.tsx

describe('Given an InputGroupFieldPrimitive is rendered', () => {
	describe('when the groupLabel prop is defined', () => {
		describe('when no addOnBefore or addOnAfter are defined', () => {
			test('then the groupLabel text should be the label for the main input', () => {});
		});

		describe('when an addOnBefore is defined', () => {
			test('then the groupLabel text should be the label for the group', () => {});
		});

		describe('when an addOnAfter is defined', () => {
			test('then the groupLabel text should be the label for the group', () => {});
		});
	});

	describe('when the addOnBefore prop is defined with a component', () => {
		test('then that component should be displayed', () => {});

		describe('when the component is interactive', () => {
			test('then that component should be first in the tab order', () => {});
		});
	});

	describe('when the addOnAfter prop is defined with a component', () => {
		test('then that component should be displayed', () => {});

		describe('when the component is interactive', () => {
			test('then that component should be second in the tab order', () => {});
		});
	});

	describe.each([
		[undefined, false],
		[false, false],
		[true, true],
	])('when the isFieldset prop is %s', (propValue: boolean | undefined, isGroup: boolean) => {
		test(`then the container should${isGroup ? '' : ' not'} have a role of group`, () => {});
	});

	describe('when the assistiveText prop is defined', () => {
		test('then the text content of the accessible legend should match that text', () => {});
	});

	describe('when the errorMessage prop is defined', () => {
		test('then that error message should be displayed', () => {});
	});

	describe('when the hint prop is defined', () => {
		test('then that hint text should be displayed', () => {});
	});

	describe('when the supportMessage prop is defined', () => {
		test('then that supportMessage text should be displayed', () => {});
	});

	describe('when the instanceId prop is defined', () => {
		test('then the id of the group should be suffixed with the value of the instanceId', () => {});
	});
});

// TextInputGroupField.test.tsx

describe('Given a TextInputGroupField is rendered', () => {
	describe.each([
		[undefined, 'text'],
		['text', 'text'],
		['number', 'number'],
		['password', 'password'],
		['search', 'search'],
		['email', 'email'],
		['date', 'date'],
		['time', 'time'],
		['file', 'file'],
		['url', 'url'],
	])('when the type prop is %s', (propValue: string | undefined, inputType: string) => {
		test(`then the input type should be ${inputType}`, () => {});
	});

	describe('when the type prop is textarea', () => {
		test('then the input element should be a textarea', () => {});
	});

	describe.each([undefined, false])(
		'when the invalid prop is %s',
		(propValue: undefined | boolean) => {
			test('then the text input should be valid', () => {});
		}
	);

	describe('when the invalid prop is true', () => {
		test('then the text input should be invalid', () => {});
	});

	describe.each([undefined, false])(
		'when the disabled prop is %s',
		(propValue: undefined | boolean) => {
			test('then the text input should be enabled', () => {});
		}
	);

	describe('when the disabled prop is true', () => {
		test('then the text input should be disabled', () => {});
	});

	describe.each([undefined, false])(
		'when the readonly prop is %s',
		(propValue: undefined | boolean) => {
			test('then the text input should not be readonly', () => {});
		}
	);

	describe('when the readonly prop is true', () => {
		test('then the text input should be readonly', () => {});
	});

	describe('when the textInputAssistiveText prop is defined', () => {
		test('then the accessible label of the input should match that text', () => {});
	});

	describe.each([2, 3, 4, 5, 10, 20, 30])(
		'when the textInputWidth prop is %s',
		(maxWidth: number) => {
			test('then the max-width of the text input should be a multiple of that value', () => {});
		}
	);

	describe('when the value prop is defined', () => {
		test('then the value of the text input should match that value', () => {});
	});

	describe('when the onChange prop is defined', () => {
		test('then the callback should be fired as a user types', () => {});
	});
});
```

## Integration tests

_Recommend not including these as everything can be covered by unit tests in a more robust way._

## Blender

_No blender recipe required for this package._

## Data-driven API

_No data-driven API required for this package._

---

## Docs ([Westpac GEL page](https://gel.westpacgroup.com.au/design-system?b=WBC))

1. Demos - in the `/demos` folder, this content will be a collaboration with the Westpac design team during implementation
2. Accessibility API (Note: these are two examples but the actual content will depend on the implementation - please expand on or change the below as required)
   1. `<fieldset>` with `<legend>` for the group of related inputs
   2. `<label>` with `<input>` or `<textarea>` for the text input
3. Design (to be added by Westpac design team)

## Definition of done

1. Fully TypeScript
2. No TypeScript errors for files in when `yarn typecheck` is run in the `input-group-field` directory
3. All tests pass
4. All examples work
5. Design QA pass
