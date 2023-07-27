import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const OfficeIcon = ({
	assistiveText = 'Office',
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
				<path d="M20 10H16V12H20V10Z" fill="currentColor" />
				<path d="M16 14H20V16H16V14Z" fill="currentColor" />
				<path d="M20 18H16V20H20V18Z" fill="currentColor" />
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M14 6H24V24H0V0H14V6ZM14 8H22V22H14V8ZM2 4H6V8H2V4ZM12 4H8V8H12V4ZM2 10H6V14H2V10ZM12 10H8V14H12V10ZM2 16H6V20H2V16ZM12 16H8V20H12V16Z"
					fill="currentColor"
				/>
			</Fragment>
		) : (
			<Fragment>
				<path d="M20 10H16V12H20V10Z" fill="currentColor" />
				<path d="M16 14H20V16H16V14Z" fill="currentColor" />
				<path d="M20 18H16V20H20V18Z" fill="currentColor" />
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M14 6H24V24H0V0H14V6ZM14 8H22V22H14V8ZM2 4H6V8H2V4ZM12 4H8V8H12V4ZM2 10H6V14H2V10ZM12 10H8V14H12V10ZM2 16H6V20H2V16ZM12 16H8V20H12V16Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);
