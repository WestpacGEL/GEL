import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const BarChartDownIcon = ({
	assistiveText = 'BarChartDown',
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
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M2 20H6V2H2V20ZM10 20H14V8H10V20ZM22 20H18V14H22V20ZM0 24H24V22H0V24Z"
				fill="currentColor"
			/>
		) : (
			<Fragment>
				<path d="M4 20H6V2H4V20Z" fill="currentColor" />
				<path d="M11 20H13V8H11V20Z" fill="currentColor" />
				<path d="M20 20H18V14H20V20Z" fill="currentColor" />
				<path d="M0 24H24V22H0V24Z" fill="currentColor" />
			</Fragment>
		)}
	</Icon>
);
