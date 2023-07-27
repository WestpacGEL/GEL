import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const FirstAidCaseIcon = ({
	assistiveText = 'FirstAidCase',
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
				d="M16 4H22C23.11 4 24 4.89 24 6V22C24 23.11 23.11 24 22 24H2C0.89 24 0 23.11 0 22L0.00999999 6C0.00999999 4.89 0.89 4 2 4H8V2C8 0.89 8.89 0 10 0H14C15.11 0 16 0.89 16 2V4ZM10 4H14V2H10V4ZM11 10H13V13H16V15H13V18H11V15H8V13H11V10Z"
				fill="currentColor"
			/>
		) : (
			<Fragment>
				<path d="M11 10H13V13H16V15H13V18H11V15H8V13H11V10Z" fill="currentColor" />
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M22 4H16V2C16 0.89 15.11 0 14 0H10C8.89 0 8 0.89 8 2V4H2C0.89 4 0.00999999 4.89 0.00999999 6L0 22C0 23.11 0.89 24 2 24H22C23.11 24 24 23.11 24 22V6C24 4.89 23.11 4 22 4ZM14 4H10V2H14V4ZM2 6H22V22H2V6Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);
