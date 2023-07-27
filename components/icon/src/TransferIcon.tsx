import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const TransferIcon = ({
	assistiveText = 'Transfer',
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
				d="M8 16L0 8L8 0V4H12V12H8V16ZM12 12V20H16V24L24 16L16 8V12H12Z"
				fill="currentColor"
			/>
		) : (
			<Fragment>
				<path d="M8 0L0 8L8 16V13.1719L2.82837 8L6 4.82812V6H11V10H13V4H8V0Z" fill="currentColor" />
				<path d="M16 20V24L24 16L16 8V12H10V20H16Z" fill="currentColor" />
			</Fragment>
		)}
	</Icon>
);
