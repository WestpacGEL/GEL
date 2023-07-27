import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const WalletIcon = ({
	assistiveText = 'Wallet',
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
					d="M22 4C22 3.44772 21.7761 2.94772 21.4142 2.58579C21.0523 2.22386 20.5523 2 20 2H2C0.89543 2 0 2.89543 0 4V20C0 21.1046 0.89543 22 2 22H20C21.1046 22 22 21.1046 22 20V18H14C12.8954 18 12 17.1046 12 16V8C12 6.89543 12.8954 6 14 6H22V4Z"
					fill="currentColor"
				/>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M14 9C14 8.44772 14.4477 8 15 8H23C23.5523 8 24 8.44772 24 9V15C24 15.5523 23.5523 16 23 16H15C14.4477 16 14 15.5523 14 15V9ZM20 12C20 12.8284 19.3284 13.5 18.5 13.5C17.6716 13.5 17 12.8284 17 12C17 11.1716 17.6716 10.5 18.5 10.5C19.3284 10.5 20 11.1716 20 12Z"
					fill="currentColor"
				/>
			</Fragment>
		) : (
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M22 16V20C22 21.1046 21.1046 22 20 22H2C0.89543 22 0 21.1046 0 20V4C0 2.89543 0.895431 2 2 2H20C21.1046 2 22 2.89543 22 4V8H23C23.5523 8 24 8.44772 24 9V15C24 15.5523 23.5523 16 23 16H22ZM2 4H20V8H15C14.4477 8 14 8.44772 14 9V15C14 15.5523 14.4477 16 15 16H20V20H2L2 4ZM20 12C20 11.1716 19.3284 10.5 18.5 10.5C17.6716 10.5 17 11.1716 17 12C17 12.8284 17.6716 13.5 18.5 13.5C19.3284 13.5 20 12.8284 20 12Z"
				fill="currentColor"
			/>
		)}
	</Icon>
);
