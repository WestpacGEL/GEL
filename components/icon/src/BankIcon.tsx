import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const BankIcon = ({
	assistiveText = 'Bank',
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
				<path d="M2 6L12 0L22 6V8H2V6Z" fill="currentColor" />
				<path d="M4 10V20H8V10H4Z" fill="currentColor" />
				<path d="M2 22V24H22V22H2Z" fill="currentColor" />
				<path d="M16 20V10H20V20H16Z" fill="currentColor" />
				<path d="M10 10V20H14V10H10Z" fill="currentColor" />
			</Fragment>
		) : (
			<Fragment>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M2 6V8H22V6L12 0L2 6ZM12 2.33238L18.1127 6H5.8873L12 2.33238Z"
					fill="currentColor"
				/>
				<path d="M4 10V20H6V10H4Z" fill="currentColor" />
				<path d="M2 22V24H22V22H2Z" fill="currentColor" />
				<path d="M18 20V10H20V20H18Z" fill="currentColor" />
				<path d="M11 10V20H13V10H11Z" fill="currentColor" />
			</Fragment>
		)}
	</Icon>
);
