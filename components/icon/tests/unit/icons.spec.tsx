import { GEL } from '@westpac/core';
import { render } from '@testing-library/react';
import wbc from '@westpac/wbc';
import { overridesTest } from '../../../../helpers/tests/overrides-test.js';
import { nestingTest } from '../../../../helpers/tests/nesting-test.js';
import * as icons from '@westpac/icon';
import { Icon } from '../../src/Icon.js'; // needs to be imported this way as it is not included in the Icon library
import { blenderIcon } from '../../src/overrides/icon.js';

overridesTest({
	name: 'icon',
	overrides: ['Icon'],
	Component: (props: any) => <Icon copyrightYear="2020" size="medium" {...props} />,
});

nestingTest({
	name: 'icon',
	Component: (props: any) => <Icon {...props} />,
});

function SimpleIcon(props: any) {
	return (
		<GEL brand={wbc}>
			<Icon {...props} />
		</GEL>
	);
}

describe('Icon components', () => {
	// Tests every Icon in the library to see if it renders correctly
	for (let [key, val] of Object.entries(icons)) {
		// need to create new variable with expected typing and check if val is function for TS
		let typedVal: Function;
		if (typeof val === 'function') {
			typedVal = val;
		}
		test(`should render ${key} with default props`, () => {
			const TestIcon = (props: any) => {
				return typedVal({
					assistiveText: props.assistiveText,
					size: props.size,
					copyrightYear: props.copyrightYear,
				});
			};
			const { container } = render(
				<GEL brand={wbc}>
					<TestIcon />
				</GEL>
			);
			expect(container).toBeInTheDocument();
		});
	}

	test('should render base Icon with blender overrides', () => {
		const overridesObj = {
			Icon: {
				component: blenderIcon.component,
				styles: blenderIcon.styles,
				attributes: blenderIcon.attributes,
			},
		};
		const { container } = render(
			<GEL brand={wbc}>
				<SimpleIcon overrides={overridesObj} color="primary" />
				<SimpleIcon overrides={overridesObj} size="small" />
				<SimpleIcon overrides={overridesObj} />
			</GEL>
		);
		expect(container).toBeInTheDocument();
	});
});
