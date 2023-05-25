import { GEL } from '@westpac/core';
import { render } from '@testing-library/react';
import wbc from '@westpac/wbc';
import { overridesTest } from '../../../../helpers/tests/overrides-test.js';
import { nestingTest } from '../../../../helpers/tests/nesting-test.js';
import * as icons from '@westpac/icon';
import { Icon } from '../../src/Icon'; // needs to be imported this way as it is not included in the Icon library
import { blenderIcon } from '../../src/overrides/icon.js';
import { IconProps } from '../../src/Icon';

overridesTest({
	name: 'icon',
	overrides: ['Icon'],
	Component: ({ icon, ...props }: IconProps) => <Icon icon="test-icon" {...props} />,
});

nestingTest({
	name: 'icon',
	Component: (props: IconProps) => <Icon {...props} />,
});

function SimpleIcon({ icon, ...props }: IconProps) {
	return (
		<GEL brand={wbc}>
			<Icon icon={icon} {...props} />
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
				styles: () => blenderIcon.styles(null, { color: 'primary', size: 'medium' }),
				attributes: () => blenderIcon.attributes,
			},
		};
		const { container } = render(
			<GEL brand={wbc}>
				<SimpleIcon icon="test-icon" overrides={overridesObj} color="primary" />
				<SimpleIcon icon="test-icon" overrides={overridesObj} size="small" />
				<SimpleIcon icon="test-icon" overrides={overridesObj} />
			</GEL>
		);
		expect(container).toBeInTheDocument();
	});
});
