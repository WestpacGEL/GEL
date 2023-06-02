import { Link } from '@westpac/link';
import { GEL } from '@westpac/core';
import { render } from '@testing-library/react';
import { overridesTest } from '../../../../helpers/tests/overrides-test.js';
import { nestingTest } from '../../../../helpers/tests/nesting-test.js';
import wbc from '@westpac/wbc';
import { ArrowLeftIcon } from '@westpac/icon';
import { LinkProps } from '../../src/Link';

overridesTest({
	name: 'link',
	overrides: ['Link', 'Icon'],
	Component: (props: any) => (
		<Link href="#" iconAfter={() => <ArrowLeftIcon copyrightYear="2020" />} {...props}>
			Test Link
		</Link>
	),
});

nestingTest({
	name: 'link',
	Component: (props: any) => (
		<Link href="#" iconAfter={() => <ArrowLeftIcon copyrightYear="2020" />} {...props}>
			Test Link
		</Link>
	),
});

const SimpleLink = (props: LinkProps) => (
	<GEL brand={wbc}>
		<Link {...props}>{props.children}</Link>
	</GEL>
);

// Component specific tests
describe('Link component', () => {
	it('should render Link with required prop', () => {
		const { container } = render(<SimpleLink href="#" />);
		expect(container).toBeInTheDocument();
	});

	it('should render with given props', () => {
		const linkProps: LinkProps = {
			href: '#',
			type: 'standalone',
			underline: true,
			iconSize: 'small',
			children: 'this is test link',
		};
		const { getByText } = render(<SimpleLink {...linkProps} />);
		expect(getByText(/this is test link/i)).toBeInTheDocument();
	});
});
