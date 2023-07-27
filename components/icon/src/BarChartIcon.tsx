import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const BarChartIcon = ({
	assistiveText = 'BarChart',
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
				d="M22 20H18V2H22V20ZM14 20H10V8H14V20ZM2 20H6V14H2V20ZM24 24H0V22H24V24Z"
				fill="currentColor"
			/>
		) : (
			<Fragment>
				<path d="M20 20H18V2H20V20Z" fill="currentColor" />
				<path d="M13 20H11V8H13V20Z" fill="currentColor" />
				<path d="M4 20H6V14H4V20Z" fill="currentColor" />
				<path d="M24 24H0V22H24V24Z" fill="currentColor" />
			</Fragment>
		)}
	</Icon>
);
