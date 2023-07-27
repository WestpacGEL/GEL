import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const ArrowForkIcon = ({
	assistiveText = 'ArrowFork',
	copyrightYear = '2023',
	size = 'medium',
	look = 'filled',
	color,
	overrides,
	...props
}: Omit<IconProps, 'icon'>) => (
	<Icon
		icon="TestIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		look={look}
		color={color}
		overrides={overrides}
		{...props}
	>
		{look === 'filled' ? (
			<Fragment>
				<path
					d="M24.0003 2.00012L16 2L18.5859 4.58593L14.0859 9.08597L16.9143 11.9144L21.4143 7.41437L24.0002 10.0003L24.0003 2.00012Z"
					fill="currentColor"
				/>
				<path
					d="M0.000245841 2.00025L8.00016 2.00021L5.41423 4.58607L13.9999 13.1718V24.0002H9.99991V14.8286L2.58576 7.41446L0 10.0002L0.000245841 2.00025Z"
					fill="currentColor"
				/>
			</Fragment>
		) : (
			<Fragment>
				<path
					d="M24.0003 2.00012L16 2L18.5859 4.58593L14.0859 9.08597L16.9143 11.9144L21.4143 7.41437L24.0002 10.0003L24.0003 2.00012Z"
					fill="currentColor"
				/>
				<path
					d="M0.000245841 2.00025L8.00016 2.00021L5.41423 4.58607L13.9999 13.1718V24.0002H9.99991V14.8286L2.58576 7.41446L0 10.0002L0.000245841 2.00025Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);
