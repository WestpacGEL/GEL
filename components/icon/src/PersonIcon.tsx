import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const PersonIcon = ({
	assistiveText = 'Person',
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
				d="M12 12C15.315 12 18 9.315 18 6C18 2.685 15.315 0 12 0C8.685 0 6 2.685 6 6C6 9.315 8.685 12 12 12ZM12 15C7.995 15 0 17.01 0 21V24H24V21C24 17.01 16.005 15 12 15Z"
				fill="currentColor"
			/>
		) : (
			<Fragment>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M24 21C24 17.01 16.005 15 12 15C7.995 15 0 17.01 0 21V24H24V21ZM2.66825 19.8489C2.11583 20.3588 2 20.7371 2 21V22H22V21C22 20.7371 21.8842 20.3588 21.3317 19.8489C20.7657 19.3265 19.8858 18.812 18.7581 18.3603C16.4997 17.4556 13.7525 17 12 17C10.2475 17 7.50034 17.4556 5.24187 18.3603C4.11424 18.812 3.23426 19.3265 2.66825 19.8489Z"
					fill="currentColor"
				/>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M18 6C18 9.315 15.315 12 12 12C8.685 12 6 9.315 6 6C6 2.685 8.685 0 12 0C15.315 0 18 2.685 18 6ZM12 10C14.2104 10 16 8.21043 16 6C16 3.78957 14.2104 2 12 2C9.78957 2 8 3.78957 8 6C8 8.21043 9.78957 10 12 10Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);
